import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const systemPrompt = `Eres el asistente virtual de Artesanía Madera, una tienda de muebles hechos a mano de alta calidad. Tu nombre es "Asistente de Artesanía Madera".

Información sobre la empresa:
- Somos artesanos desde 1985, con más de 40 años de experiencia
- Creamos muebles únicos hechos a mano con maderas nobles (roble, nogal, cerezo, fresno)
- Cada pieza es única y personalizable
- Ofrecemos envío a toda España
- Tiempo de fabricación: 4-8 semanas según complejidad
- Garantía de 10 años en todos nuestros muebles
- Ubicación: Calle del Artesano 42, 28012 Madrid
- Horario: Lunes a Viernes 10:00-19:00
- Teléfono: +34 912 345 678
- Email: info@artesaniamadera.es

Categorías de productos:
- Mesas de comedor (desde 1.500€)
- Sillas (desde 350€)
- Estanterías y librerías (desde 900€)
- Muebles de dormitorio (desde 600€)
- Escritorios (desde 800€)
- Muebles a medida (precio según proyecto)

Sé amable, profesional y entusiasta sobre la artesanía en madera. Responde en español de forma concisa pero informativa. Si te preguntan por algo que no sabes, sugiere contactar directamente con la tienda.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Demasiadas solicitudes. Por favor, espera un momento." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Servicio temporalmente no disponible." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const text = await response.text();
      console.error("AI gateway error:", response.status, text);
      return new Response(JSON.stringify({ error: "Error al procesar la solicitud" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
