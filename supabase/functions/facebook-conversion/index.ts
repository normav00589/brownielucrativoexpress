import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PIXEL_ID = '2025669271618388';
const API_TOKEN = Deno.env.get('FACEBOOK_CONVERSION_API_TOKEN');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      event_name, 
      event_id, 
      user_data, 
      custom_data, 
      event_source_url 
    } = await req.json();

    console.log(`Processing ${event_name} event with ID: ${event_id}`);

    // Preparar dados do evento
    const eventData = {
      data: [{
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        event_source_url,
        action_source: 'website',
        user_data: {
          client_ip_address: req.headers.get('x-forwarded-for')?.split(',')[0] || '',
          client_user_agent: req.headers.get('user-agent') || '',
          ...user_data,
        },
        custom_data: custom_data || {},
      }],
    };

    console.log('Sending event to Facebook Conversion API:', JSON.stringify(eventData, null, 2));

    // Enviar para Conversion API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${API_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      }
    );

    const result = await response.json();
    console.log('Facebook API Response:', JSON.stringify(result, null, 2));

    if (!response.ok) {
      console.error('Facebook API Error:', result);
      throw new Error(`Facebook API error: ${JSON.stringify(result)}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        events_received: result.events_received,
        messages: result.messages 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in facebook-conversion function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        success: false 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
