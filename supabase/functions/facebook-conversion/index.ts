import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const { event_name, event_id, user_data, custom_data, event_source_url } = await req.json();

    if (!API_TOKEN) {
      return new Response(
        JSON.stringify({ error: 'Token not configured', success: false }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

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

    const responses = await Promise.all(
      PIXEL_IDS.map(pixelId =>
        fetch(
          `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${API_TOKEN}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData),
          }
        )
      )
    );

    const results = await Promise.all(responses.map(r => r.json()));
    const hasError = responses.some(r => !r.ok);

    if (hasError) {
      return new Response(
        JSON.stringify({ error: 'API error', success: false }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, events_received: results[0]?.events_received || 1 }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Server error', success: false }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
