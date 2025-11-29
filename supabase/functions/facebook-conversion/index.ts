import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const PIXEL_IDS = ['1034279045491529', '2025669271618388'];
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

    // Verificar se o token está configurado
    if (!API_TOKEN) {
      console.error('⚠️ FACEBOOK_CONVERSION_API_TOKEN não configurado!');
      throw new Error('Facebook Conversion API token not configured');
    }

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

    // Enviar para Conversion API para ambos os pixels
    const responses = await Promise.all(
      PIXEL_IDS.map(pixelId =>
        fetch(
          `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${API_TOKEN}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
          }
        )
      )
    );

    const results = await Promise.all(responses.map(r => r.json()));
    console.log('Facebook API Responses:', JSON.stringify(results, null, 2));

    // Verificar se alguma resposta falhou
    const hasError = responses.some(r => !r.ok);
    if (hasError) {
      console.error('Facebook API Errors:', results);
      throw new Error(`Facebook API error: ${JSON.stringify(results)}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        pixels: PIXEL_IDS,
        results: results.map((r, i) => ({
          pixel_id: PIXEL_IDS[i],
          events_received: r.events_received,
          messages: r.messages
        }))
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
