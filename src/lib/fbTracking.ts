declare global {
  interface Window {
    fbq: any;
  }
}

interface UserData {
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
  ct?: string;
  st?: string;
  zp?: string;
  country?: string;
}

interface CustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  contents?: Array<{ id: string; quantity: number }>;
  num_items?: number;
}

const hashData = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

const generateEventId = (): string => {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
};

const getFacebookCookies = () => {
  const cookies = document.cookie.split(';');
  const fbp = cookies.find(c => c.trim().startsWith('_fbp='))?.split('=')[1];
  const fbc = cookies.find(c => c.trim().startsWith('_fbc='))?.split('=')[1];
  return { fbp, fbc };
};

export const trackEvent = async (
  eventName: string,
  userData: UserData = {},
  customData: CustomData = {}
) => {
  const eventId = generateEventId();
  const eventSourceUrl = window.location.href;

  // Track com Pixel (client-side) - silencioso
  if (window.fbq) {
    try {
      window.fbq('track', eventName, customData, { eventID: eventId });
    } catch (_) {}
  }

  // Hash dados sensíveis
  const hashedUserData: any = {};
  if (userData.em) hashedUserData.em = await hashData(userData.em);
  if (userData.ph) hashedUserData.ph = await hashData(userData.ph);
  if (userData.fn) hashedUserData.fn = await hashData(userData.fn);
  if (userData.ln) hashedUserData.ln = await hashData(userData.ln);
  if (userData.ct) hashedUserData.ct = await hashData(userData.ct);
  if (userData.st) hashedUserData.st = await hashData(userData.st);
  if (userData.zp) hashedUserData.zp = await hashData(userData.zp);
  if (userData.country) hashedUserData.country = await hashData(userData.country);

  // Cookies do Facebook
  const { fbp, fbc } = getFacebookCookies();
  if (fbp) hashedUserData.fbp = fbp;
  if (fbc) hashedUserData.fbc = fbc;

  const payload = JSON.stringify({
    event_name: eventName,
    event_id: eventId,
    user_data: hashedUserData,
    custom_data: customData,
    event_source_url: eventSourceUrl,
  });

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) return;

  const url = `${supabaseUrl}/functions/v1/facebook-conversion`;

  // Usar sendBeacon para não bloquear navegação
  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: 'application/json' });
    const sent = navigator.sendBeacon(url, blob);
    if (sent) return;
  }

  // Fallback para fetch não-bloqueante
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
    body: payload,
    keepalive: true,
  }).catch(() => {});
};

// Eventos específicos
export const trackPageView = () => {
  trackEvent('PageView');
};

export const trackViewContent = (contentName: string, value?: number) => {
  trackEvent('ViewContent', {}, {
    content_name: contentName,
    value: value,
    currency: 'BRL',
  });
};

export const trackInitiateCheckout = (value: number, contentName: string) => {
  trackEvent('InitiateCheckout', {}, {
    value: value,
    currency: 'BRL',
    content_name: contentName,
    num_items: 1,
  });
};

export const trackAddToCart = (value: number, contentName: string) => {
  trackEvent('AddToCart', {}, {
    value: value,
    currency: 'BRL',
    content_name: contentName,
  });
};

export const trackPurchase = (value: number, contentName: string) => {
  trackEvent('Purchase', {}, {
    value: value,
    currency: 'BRL',
    content_name: contentName,
  });
};

export const trackLead = (contentName?: string) => {
  trackEvent('Lead', {}, {
    content_name: contentName || 'Brownies Lucrativos',
  });
};
