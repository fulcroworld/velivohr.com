const PRODUCTION_HOSTNAMES = ["velivohr.com", "www.velivohr.com"];

export function initAnalytics() {
  if (!PRODUCTION_HOSTNAMES.includes(window.location.hostname)) return;

  console.log(window.location.hostname);

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", measurementId);
}
