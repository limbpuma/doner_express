import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_Chwdp2d0.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".markdown-content{word-wrap:break-word;white-space:pre-wrap}\n"}],"routeData":{"route":"/abg-policy.de","isIndex":false,"type":"page","pattern":"^\\/abg-policy\\.de\\/?$","segments":[[{"content":"abg-policy.de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/abg-policy.de.md","pathname":"/abg-policy.de","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".markdown-content{word-wrap:break-word;white-space:pre-wrap}\n"}],"routeData":{"route":"/abg-policy.en","isIndex":false,"type":"page","pattern":"^\\/abg-policy\\.en\\/?$","segments":[[{"content":"abg-policy.en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/abg-policy.en.md","pathname":"/abg-policy.en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".language-selector[data-astro-cid-ltpqzwiw]{display:inline-block;position:relative}.language-options[data-astro-cid-ltpqzwiw]{display:none;position:absolute;box-shadow:0 4px 6px #0000001a;text-decoration:none}.language-selector[data-astro-cid-ltpqzwiw]:hover .language-options[data-astro-cid-ltpqzwiw]{display:block}:root{--color-black: #000000;--color-orange: #FFA500;--color-yellow: #FFD700;--color-white: #FFFFFF;--color-grey: #A0A0A0;--color-dark-grey: #333333;--color-light-grey: #F2F2F2;--color-deep-orange: #FF8C00;--font-primary: \"Roboto\", sans-serif;--font-secondary: \"Montserrat\", sans-serif;--font-fancy: \"Dancing Script\", cursive;--font-size-base: 1rem;--font-size-large: 1.5rem;--font-size-small: .875rem;--font-size-xlarge: 2rem;--font-size-responsive: calc(1rem + .5vw) ;--space-1: .5rem;--border-radius: .5rem;--border-color: var(--color-light-grey);--box-shadow: 0 4px 6px rgba(0, 0, 0, .1);--box-shadow-hover: 0 8px 16px rgba(0, 0, 0, .2);--hover-brightness: brightness(.9)}body{background-color:var(--color-black);color:var(--color-white);font-family:var(--font-primary);font-size:var(--font-size-base);line-height:1.5}h1,h2,h3,h4,h5,h6{font-family:var(--font-secondary);color:var(--color-orange)}a{color:var(--color-orange);text-decoration:none;transition:color .3s ease-in-out,filter .3s ease-in-out}a:hover{color:var(--color-grey);filter:var(--hover-brightness)}li a{font-family:var(--font-secondary);font-size:var(--font-size-small);color:var(--color-white);padding:var(--space-1) var(--space-2);border-radius:var(--border-radius);transition:background-color .3s ease-in-out,color .3s ease-in-out}li a:hover{background-color:var(--color-dark-grey);color:var(--color-deep-orange)}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".markdown-content{word-wrap:break-word;white-space:pre-wrap}\n"}],"routeData":{"route":"/legal-advice.de","isIndex":false,"type":"page","pattern":"^\\/legal-advice\\.de\\/?$","segments":[[{"content":"legal-advice.de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/legal-advice.de.md","pathname":"/legal-advice.de","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".markdown-content{word-wrap:break-word;white-space:pre-wrap}\n"}],"routeData":{"route":"/legal-advice.en","isIndex":false,"type":"page","pattern":"^\\/legal-advice\\.en\\/?$","segments":[[{"content":"legal-advice.en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/legal-advice.en.md","pathname":"/legal-advice.en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".markdown-content{word-wrap:break-word;white-space:pre-wrap}\n"}],"routeData":{"route":"/privacy-policy.de","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\.de\\/?$","segments":[[{"content":"privacy-policy.de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.de.md","pathname":"/privacy-policy.de","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".markdown-content{word-wrap:break-word;white-space:pre-wrap}\n"}],"routeData":{"route":"/privacy-policy.en","isIndex":false,"type":"page","pattern":"^\\/privacy-policy\\.en\\/?$","segments":[[{"content":"privacy-policy.en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy-policy.en.md","pathname":"/privacy-policy.en","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/abg-policy_de.BY0_ThVY.css"},{"type":"inline","content":".language-selector[data-astro-cid-ltpqzwiw]{display:inline-block;position:relative}.language-options[data-astro-cid-ltpqzwiw]{display:none;position:absolute;box-shadow:0 4px 6px #0000001a;text-decoration:none}.language-selector[data-astro-cid-ltpqzwiw]:hover .language-options[data-astro-cid-ltpqzwiw]{display:block}:root{--color-black: #000000;--color-orange: #FFA500;--color-yellow: #FFD700;--color-white: #FFFFFF;--color-grey: #A0A0A0;--color-dark-grey: #333333;--color-light-grey: #F2F2F2;--color-deep-orange: #FF8C00;--font-primary: \"Roboto\", sans-serif;--font-secondary: \"Montserrat\", sans-serif;--font-fancy: \"Dancing Script\", cursive;--font-size-base: 1rem;--font-size-large: 1.5rem;--font-size-small: .875rem;--font-size-xlarge: 2rem;--font-size-responsive: calc(1rem + .5vw) ;--space-1: .5rem;--border-radius: .5rem;--border-color: var(--color-light-grey);--box-shadow: 0 4px 6px rgba(0, 0, 0, .1);--box-shadow-hover: 0 8px 16px rgba(0, 0, 0, .2);--hover-brightness: brightness(.9)}body{background-color:var(--color-black);color:var(--color-white);font-family:var(--font-primary);font-size:var(--font-size-base);line-height:1.5}h1,h2,h3,h4,h5,h6{font-family:var(--font-secondary);color:var(--color-orange)}a{color:var(--color-orange);text-decoration:none;transition:color .3s ease-in-out,filter .3s ease-in-out}a:hover{color:var(--color-grey);filter:var(--hover-brightness)}li a{font-family:var(--font-secondary);font-size:var(--font-size-small);color:var(--color-white);padding:var(--space-1) var(--space-2);border-radius:var(--border-radius);transition:background-color .3s ease-in-out,color .3s ease-in-out}li a:hover{background-color:var(--color-dark-grey);color:var(--color-deep-orange)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/abg-policy.de.md",{"propagation":"none","containsHead":true}],["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/abg-policy.en.md",{"propagation":"none","containsHead":true}],["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/legal-advice.de.md",{"propagation":"none","containsHead":true}],["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/legal-advice.en.md",{"propagation":"none","containsHead":true}],["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/privacy-policy.de.md",{"propagation":"none","containsHead":true}],["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/privacy-policy.en.md",{"propagation":"none","containsHead":true}],["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/404.astro":"chunks/pages/404_DIF62lZ-.mjs","/src/pages/abg-policy.en.md":"chunks/pages/abg-policy_D2AW-ZrA.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_BHWTMoEO.mjs","/src/pages/legal-advice.de.md":"chunks/pages/legal-advice_DpLTgt_w.mjs","/src/pages/legal-advice.en.md":"chunks/pages/legal-advice_CZY3Llzf.mjs","/src/pages/privacy-policy.de.md":"chunks/pages/privacy-policy_DHN2XmxX.mjs","/src/pages/privacy-policy.en.md":"chunks/pages/privacy-policy_ByE6NKs4.mjs","\u0000@astrojs-manifest":"manifest_AVa-A8rD.mjs","C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_hTmtKaTZ.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_xn5sD6Ly.mjs","\u0000@astro-page:src/pages/abg-policy.de@_@md":"chunks/abg-policy_2KD849xz.mjs","\u0000@astro-page:src/pages/abg-policy.en@_@md":"chunks/abg-policy_Dzkt1yZv.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"chunks/index_CmnG-RGY.mjs","\u0000@astro-page:src/pages/legal-advice.de@_@md":"chunks/legal-advice_CsZvclnJ.mjs","\u0000@astro-page:src/pages/legal-advice.en@_@md":"chunks/legal-advice_DQik7Dh1.mjs","\u0000@astro-page:src/pages/privacy-policy.de@_@md":"chunks/privacy-policy_BriwiHnQ.mjs","\u0000@astro-page:src/pages/privacy-policy.en@_@md":"chunks/privacy-policy_Qn3D8lwq.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DcyZdbOL.mjs","C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/CustomCookieConsent.jsx":"_astro/CustomCookieConsent.Dt38_zjb.js","C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/Tabs.jsx":"_astro/Tabs.B5oQbyU1.js","C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/WhatsAppButton.jsx":"_astro/WhatsAppButton.eL5uWhUg.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/abg-policy_de.BY0_ThVY.css","/about.txt","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/site.webmanifest","/menu/Menu_express.pdf","/video/doenerexpress.webm","/_astro/client.BIGLHmRd.js","/_astro/CustomCookieConsent.Dt38_zjb.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/Tabs.B5oQbyU1.js","/_astro/WhatsAppButton.eL5uWhUg.js","/img/about/express_whatsapp.webp","/img/about/signature.png","/img/bg/features-bg.webp","/img/bg/footer-bg.webp","/img/bg/header-bg.webp","/img/bg/header-img.webp","/img/bg/meal-bg.webp","/img/bg/offer.webp","/img/bg/team-bg.webp","/img/bg/test-bg.webp","/img/express/express_doener.webp","/img/flags/de.webp","/img/flags/en.webp","/img/team/team01.webp","/img/team/team02.webp","/img/showcase/showcase1.webp","/img/showcase/showcase2.webp","/img/showcase/showcase3.webp","/img/showcase/showcase4.webp","/img/showcase/showcase5.webp","/img/showcase/showcase6.webp","/img/showcase/showcase7.webp","/img/showcase/showcase8.webp","/img/testimonial/arrow-box.webp","/img/testimonial/avatar01.webp","/img/testimonial/avatar02.webp","/img/testimonial/avatar03.webp","/img/testimonial/star.webp"],"i18n":{"strategy":"pathname-prefix-other-locales","locales":["de","en"],"defaultLocale":"de","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
