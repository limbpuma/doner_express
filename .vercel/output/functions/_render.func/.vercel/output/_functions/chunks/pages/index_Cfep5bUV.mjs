/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, d as createAstro, e as renderComponent, g as renderHead, h as renderSlot } from '../astro_Chwdp2d0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { g as getI18N, a as $$Footer } from './abg-policy_PrKkm6Yu.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const $$Astro$b = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const languages = {
    de: "/img/flags/de.webp",
    en: "/img/flags/en.webp"
  };
  const currentPath = Astro2.url.pathname;
  const currentLocale = Object.keys(languages).find((lang) => currentPath.startsWith(`/${lang}`)) || "de";
  const otherLanguages = Object.entries(languages).filter(([code]) => code !== currentLocale);
  return renderTemplate`${maybeRenderHead()}<div class="language-selector hover:bg-transparent focus:bg-transparent active:bg-transparent" data-astro-cid-ltpqzwiw> <button data-astro-cid-ltpqzwiw><a${addAttribute(`/${currentLocale === "de" ? "" : currentLocale}`, "href")} class="rounded-full active:bg-transparent" data-astro-cid-ltpqzwiw></a><img${addAttribute(languages[currentLocale], "src")}${addAttribute(currentLocale.toUpperCase(), "alt")} class="rounded-full w-6 h-6" loading="lazy" data-astro-cid-ltpqzwiw> </button> <div class="language-options " data-astro-cid-ltpqzwiw> ${otherLanguages.map(([code, image]) => renderTemplate`<a${addAttribute(`/${code === "de" ? "" : code}`, "href")} class="block mt-2" data-astro-cid-ltpqzwiw> <img${addAttribute(image, "src")}${addAttribute(code.toUpperCase(), "alt")} class="rounded-full w-6 h-6" loading="lazy" data-astro-cid-ltpqzwiw> </a>`)} </div> </div> `;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/LanguageSelector.astro", void 0);

const $$Astro$a = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="relative text-white"> <div class="container mx-auto px-4 pb-20 flex flex-wrap items-center justify-center lg:justify-start"> <!-- Text Content --> <div class="w-full lg:w-4/12 text-center lg:text-right px-4 lg:px-0 lg:pr-10 mb-8 lg:mb-0"> <h2 class="text-4xl font-bold mb-3 leading-tight tracking-tight"> <span class="block text-orange-500">${i18n.HERO.TITLE}</span> ${i18n.HERO.SUBTITLE} </h2> <p class="text-gray-400 mb-5"> ${i18n.HERO.DESCRIPTION} </p> <a href="#menu_section" class="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded shadow-lg transition duration-300"> ${i18n.HERO.BUTTON} </a> </div> <div class="w-full lg:w-8/12 pl-4 lg:pl-10 relative text-center"> <img src="/img/bg/header-img.webp" alt="header-img" class="max-w-full h-auto mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110" loading="lazy"> <div class="absolute bottom-10 right-0 w-1/4 lg:w-1/3"> <img src="/img/bg/offer.webp" alt="offer" class="w-full h-auto transition duration-500 ease-in-out hover:scale-110" loading="lazy"> </div> </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Hero.astro", void 0);

const $$Astro$9 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <div class="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black z-0" style="background-image: url('/img/bg/header-bg.webp')"></div> <div class="relative z-20"> <div class="navbar bg-gray-900 fixed top-0 left-0 right-0 container mx-auto px-4"> <div class="navbar-start"> <!-- Mobile Menu --> <div class="dropdown"> <label tabindex="0" class="btn btn-ghost lg:hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path> </svg> </label> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> <li><a href="/">${i18n.NAVBAR.ITEM1}</a></li> <li><a href="#about_section">${i18n.NAVBAR.ITEM2}</a></li> <li><a href="#menu_section">${i18n.NAVBAR.ITEM3}</a></li> <li><a href="#info_section">${i18n.NAVBAR.ITEM4}</a></li> <li> <details> <summary>Legal</summary> <ul class="p-2"> <li> <a${addAttribute(currentLocale === "en" ? "/legal-advice.en" : "/legal-advice.de", "href")} class="text-gray-400 hover:text-orange-500 mr-4">${i18n.FOOTER.ABOUT.IMPRINT.TEXT}</a> </li> <li> <a${addAttribute(currentLocale === "en" ? "/privacy-policy.en" : "/privacy-policy.de", "href")} class="text-gray-400 hover:text-orange-500 mr-4">${i18n.FOOTER.ABOUT.PRIVACY.TEXT}</a> </li> <li> <a${addAttribute(currentLocale === "en" ? "/abg-policy.en" : "/abg-policy.de", "href")} class="text-gray-400 hover:text-orange-500">${i18n.FOOTER.ABOUT.TERMS.TEXT}</a> </li> </ul> </details> </li> </ul> </div> <!-- End Mobile Menu --> <a class="flex items-center  space-x-2 font-bold uppercase text-xl animate-bounce-slow"> <i class="fas fa-utensils text-yellow-500 text-xl "></i> <span>Express Döner</span> </a> </div> <div class="navbar-center hidden lg:flex"> <ul class="menu menu-horizontal px-1"> <li><a href="/">${i18n.NAVBAR.ITEM1}</a></li> <li><a href="#about_section">${i18n.NAVBAR.ITEM2}</a></li> <li><a href="#menu_section">${i18n.NAVBAR.ITEM3}</a></li> <li><a href="#info_section">${i18n.NAVBAR.ITEM4}</a></li> <li> <details> <summary>Legal</summary> <ul class="p-2"> <li> <a${addAttribute(currentLocale === "en" ? "/legal-advice.en" : "/legal-advice.de", "href")} class="text-gray-400 hover:text-orange-500 mr-4">${i18n.FOOTER.ABOUT.IMPRINT.TEXT}</a> </li> <li> <a${addAttribute(currentLocale === "en" ? "/privacy-policy.en" : "/privacy-policy.de", "href")} class="text-gray-400 hover:text-orange-500 mr-4">${i18n.FOOTER.ABOUT.PRIVACY.TEXT}</a> </li> <li> <a${addAttribute(currentLocale === "en" ? "/abg-policy.en" : "/abg-policy.de", "href")} class="text-gray-400 hover:text-orange-500">${i18n.FOOTER.ABOUT.TERMS.TEXT}</a> </li> </ul> </details> </li> <li>${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})}</li> </ul> </div> <div class="navbar-end flex items-center"> <a href="tel:+49 023192881155" class="btn text-yellow-500 uppercase "><i class="fas fa-phone text-yellow-500 text-xl mb-2"></i></a> <div class="ml-2 lg:hidden"> ${renderComponent($$result, "LanguageSelector", $$LanguageSelector, {})} </div> </div> </div> </div> <!-- Hero Content --> <div class="container mx-auto px-4 pt-[120px] relative z-10"> ${renderComponent($$result, "Hero", $$Hero, {})} </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Navbar.astro", void 0);

function getLangFromUrl(url) {
  const pathSegments = url.pathname.split("/").filter(Boolean);
  const lang = pathSegments[0] || "de";
  return lang;
}

const $$Astro$8 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Layout;
  const { description, title } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`<html${addAttribute(lang, "lang")} data-theme="night"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/layouts/Layout.astro", void 0);

const $$Astro$7 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$About;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div id="about_section" class="container about-section pb-20 mx-auto px-4 text-white"> <div class="flex flex-wrap justify-center items-center"> <!-- Image Column --> <div class="w-full md:w-5/12 px-4 mb-6 md:mb-0"> <div class="relative overflow-hidden rounded-lg shadow-lg"> <img src="img/express/express_doener.webp" alt="About Us Image" class="max-w-full mx-auto hover:scale-105 transition-transform duration-300 " loading="lazy"> </div> </div> <!-- Content Column --> <div class="w-full md:w-7/12 px-4"> <div class="ml-0 md:ml-12"> <div class="mb-6"> <span class="text-sm font-semibold uppercase text-orange-500">${i18n.ABOUT.SECTION_TITLE}</span> <h2 class="text-3xl font-bold mt-1 leading-tight tracking-tight">${i18n.ABOUT.SUBTITLE}</h2> <p class="mt-2 text-gray-300">${i18n.ABOUT.DESCRIPTION}</p> </div> <div class="mb-6"> <div class="flex items-baseline"> <h2 class="text-5xl font-bold text-orange-500">${i18n.ABOUT.EXPERIENCE_TITLE}<sup class="text-2xl"></sup></h2> <p class="ml-4 text-lg text-gray-300">${i18n.ABOUT.EXPERIENCE_SUBTITLE}</p> </div> </div> <div class="mb-4"> <p>${i18n.ABOUT.ADDITIONAL_TEXT1}</p><br> <p>${i18n.ABOUT.ADDITIONAL_TEXT2}</p> </div> <div class="flex items-center space-x-4"> <div class="w-24 mr-4"> <img src="/img/about/express_whatsapp.webp" alt="Mehmet Emin Kocak" class="shadow-lg rounded-full" loading="lazy"> </div> <div> <h4 class="font-semibold uppercase">${i18n.ABOUT.FOUNDER.NAME}</h4> <span class="text-sm text-gray-500 uppercase">${i18n.ABOUT.FOUNDER.ROLE}</span> </div> <div class="ml-12"> <img src="img/about/signature.png" alt="signature" class="h-12" loading="lazy"> </div> <!--I have omitted the description but its is available in json --> </div> </div> </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/About.astro", void 0);

const Tabs = ({ tabs = {}, products = {} }) => {
  const [selectedTab, setSelectedTab] = useState(Object.keys(tabs)[0] || "");
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("div", { role: "tablist", className: "tabs tabs-bordered flex flex-wrap justify-center mb-8", children: Object.keys(tabs).map((tab) => /* @__PURE__ */ jsx(
      "a",
      {
        role: "tab",
        className: `tab ${selectedTab === tab ? "tab-active" : ""} flex-1 text-center md:flex-none`,
        onClick: () => setSelectedTab(tab),
        children: tabs[tab]
      },
      tab
    )) }),
    /* @__PURE__ */ jsx("div", { children: Object.keys(tabs).map((tab) => /* @__PURE__ */ jsx("div", { className: selectedTab === tab ? "block" : "hidden", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: (products[tab] || []).map((product, index) => /* @__PURE__ */ jsxs("div", { className: "meal-container bg-gray-800 rounded-lg p-4 shadow-lg flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "meal-content  mr-4", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-lg font-bold text-white", children: product.NAME }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: product.DESCRIPTION })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "meal-price text-right", children: /* @__PURE__ */ jsx("span", { className: "block text-lg font-bold text-orange-500", children: product.PRICE }) })
    ] }, index)) }) }, tab)) })
  ] });
};

const $$Astro$6 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Menu;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div id="menu_section" class="menu-section pb-10 bg-cover bg-center relative" style="background-image: url('img/bg/meal-bg.webp');"> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent z-0"></div> <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-0"></div> <div id="menu_section" class="relative z-10 container mx-auto px-4 py-20 text-white"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold mt-1 leading-tight tracking-tight uppercase">${i18n.MENU.TITLE}</h2> <p class="text-gray-500 mt-2">${i18n.MENU.DESCRIPTION}</p> </div> <div class="h-full md:h-[600px] overflow-auto"> ${renderComponent($$result, "Tabs", Tabs, { "tabs": i18n.MENU.TABS, "products": i18n.MENU.PRODUCTS, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/Tabs.jsx", "client:component-export": "default" })} </div> <!-- Button to download the menu PDF --> <div class="mt-6 md:mt-0 text-center"> <a href="/menu/Menu_express.pdf" download class="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"> ${i18n.MENU.DOWNLOAD_BUTTON_TEXT} </a> </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Menu.astro", void 0);

const $$Astro$5 = createAstro();
const $$Reviews = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Reviews;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div id="reviews_section" class="reviews-section pb-20 relative bg-cover bg-center" style="background-image: url('/img/bg/test-bg.webp');"> <!-- Gradient overlay --> <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100"></div> <!-- Content centered with a max width --> <div class="container mx-auto px-4 text-center relative"> <div class="w-full lg:w-2/3 mx-auto mb-12"> <span class="text-sm font-semibold uppercase text-orange-500">${i18n.REVIEWS.SECTION_TITLE}</span> <h2 class="text-3xl font-bold mt-1 leading-tight tracking-tight uppercase">${i18n.REVIEWS.DESCRIPTION}</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Dynamic Testimonial Cards --> ${i18n.REVIEWS.REVIEWS_LIST.map((review) => renderTemplate`<div class="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105"> <div class="flex flex-col items-center lg:flex-row lg:items-start"> <img${addAttribute(`/img/testimonial/${review.IMAGE}`, "src")}${addAttribute(review.NAME, "alt")} class="w-24 h-24 rounded-full mb-4 lg:mb-0 lg:mr-4 object-cover" loading="lazy"> <div class="text-center lg:text-left"> <h6 class="text-lg font-semibold text-white">${review.NAME}</h6> <span class="text-gray-400">${review.ROLE}</span> <div class="mt-4 flex justify-center lg:justify-start space-x-1 text-yellow-500"> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i> </div> <p class="text-gray-300 text-center lg:text-left mt-4">${review.COMMENT}</p> </div> </div> </div>`)} </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Reviews.astro", void 0);

const $$Astro$4 = createAstro();
const $$Showcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Showcase;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div id="showcase_section" class="showcase-section bg-cover bg-center relative" style="background-image: url('img/bg/meal-bg.webp');"> <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div> <div id="menu_section" class="relative container mx-auto px-4 pt-20 mb-20 text-white"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold mt-1 leading-tight tracking-tight uppercase">${i18n.SHOWCASE.SECTION_TITLE}</h2> <p class="text-gray-500 mt-2">${i18n.SHOWCASE.DESCRIPTION}</p> </div> <div class="overflow-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${i18n.SHOWCASE.PRODUCTS.map((product) => renderTemplate`<div class="group relative block overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-900"> <img${addAttribute(`img/showcase/${product.IMAGE}`, "src")}${addAttribute(product.NAME, "alt")} class="w-full h-full object-cover scale-100 transition-transform duration-300 ease-in-out group-hover:scale-110" loading="lazy"> <div class="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 group-hover:bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300"> <p class="text-white text-center px-4">${product.DESCRIPTION}</p> </div> </div>`)} </div> </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Showcase.astro", void 0);

const $$Astro$3 = createAstro();
const $$Video = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Video;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-accent h-screen w-full overflow-hidden flex items-center justify-center"> <!-- Background video --> <video class="absolute z-0 min-w-full min-h-full object-cover" autoplay loop muted playsinline> <source src="./video/doenerexpress.webm" type="video/mp4">
Your browser does not support the video element.
</video> <!-- Overlay to enhance text visibility --> <div class="absolute z-10 w-full h-full bg-black bg-opacity-60"></div> <!-- Centered content over the video and overlay --> <div class="z-20 flex flex-col items-center justify-center space-y-4 p-4 text-center"> <!-- Title with shadow effect for better readability --> <h2 class="text-3xl font-bold text-white shadow-lg">${i18n.VIDEO.TITLE}</h2> <!-- Subtitle for more context --> <h3 class="text-xl text-white shadow">${i18n.VIDEO.SUBTITLE}</h3> <!-- Description with higher contrast --> <p class="text-white max-w-md shadow">${i18n.VIDEO.DESCRIPTION}</p> <!-- CTA button for WhatsApp with an icon --> <a href="https://maps.app.goo.gl/o96ooB7G4vPyUXSF9" target="_blank" class="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"> <i class="fas fa-map-marker-alt mr-2"></i> ${i18n.VIDEO.BUTTON} </a> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Video.astro", void 0);

const $$Astro$2 = createAstro();
const $$Team = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Team;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div id="team_section" class="team-section pb-20 bg-cover bg-center relative" style="background-image: url('img/bg/team-bg.webp');"> <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-100"></div> <div class="container mx-auto px-4"> <div class="flex justify-center"> <div class="max-w-2xl text-center"> <div class="mb-16 z-10 relative"> <span class="text-sm font-semibold uppercase text-orange-500">${i18n.TEAM.SECTION_TITLE}</span> <h2 class="text-3xl font-bold mt-1 leading-tight tracking-tight uppercase">${i18n.TEAM.DESCRIPTION}</h2> <div class="mt-4 text-orange-500 text-2xl"> <i class="fas fa-ellipsis-h"></i> </div> </div> </div> </div> <div class="flex flex-wrap justify-center gap-4"> ${i18n.TEAM.MEMBERS.map((members) => renderTemplate`<div class="w-full md:w-1/3 px-4 mb-8"> <div class="relative overflow-hidden rounded-lg shadow-lg h-96"> <img${addAttribute(`img/team/${members.IMAGE}`, "src")}${addAttribute(members.NAME, "alt")} class="w-full h-full object-cover opacity-90 transition duration-300 ease-in-out hover:scale-105" loading="lazy"> <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black to-transparent opacity-100"> <div class="p-4 text-center transition-transform transform duration-300 ease-in-out hover:-translate-y-5"> <i class="fas fa-user-tie text-yellow-500 text-xl mb-2"></i> <h4 class="font-bold text-xl text-yellow-500">${members.NAME}</h4> <p class="text-gray-300">${members.DESCRIPTION}</p> </div> </div> </div> </div>`)} </div> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Team.astro", void 0);

const $$Astro$1 = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Features;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div id="features_section" class="features-section container mx-auto px-4 text-white"> <div class="text-center mb-12"> <span class="text-sm font-semibold uppercase text-orange-500">${i18n.FEATURES.SECTION_TITLE}</span> <h2 class="text-3xl font-bold mt-1 leading-tight tracking-tight uppercase">${i18n.FEATURES.DESCRIPTION}</h2> </div> <div class="flex flex-wrap justify-center"> ${i18n.FEATURES.CARDS.map((card) => renderTemplate`<div class="w-full md:w-1/2 lg:w-1/3 p-4"> <div class="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center hover:bg-gray-900 transition-colors duration-300" style="min-height: 250px; max-height: 250px;"> <div class="text-white mb-4"> <i${addAttribute(`fas ${card.ICON} fa-3x`, "class")}></i> </div> <h5 class="text-xl font-semibold mb-2"> <a href="services-detail.html" class="text-orange-400 hover:text-orange-600">${card.TITLE}</a> </h5> <i class="fas fa-minus text-yellow-500 mb-2"></i> <p class="text-gray-400 mb-4">${card.DESCRIPTION}</p> </div> </div>`)} </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Features.astro", void 0);

const WhatsAppButton = ({ chatMessage, statusMessage }) => {
  const mobileStyles = `
    @media (max-width: 768px) {
      .floating-whatsapp-chatbox {
        height: 350px;
      }
    }
  `;
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-4 bottom-4 z-50", children: [
    /* @__PURE__ */ jsx("style", { children: mobileStyles }),
    /* @__PURE__ */ jsx(
      FloatingWhatsApp,
      {
        phoneNumber: "+491738258352",
        accountName: "Express Döner",
        avatar: "../img/about/express_whatsapp.webp",
        statusMessage,
        chatMessage,
        placeholder: "Type a message...",
        notification: true,
        notificationDelay: 10,
        notificationSound: true,
        allowEsc: true,
        allowClickAway: true,
        darkMode: false,
        styles: {
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          borderRadius: "var(--border-radius)",
          boxShadow: "var(--box-shadow)"
        },
        className: "text-gray-500"
      }
    )
  ] });
};

const CustomCookieConsent = ({ translations }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };
  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 w-full bg-gray-900 text-white p-8 flex flex-col sm:flex-row justify-between items-center shadow-lg rounded-md z-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 mr-4", children: [
      translations.message,
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-sm", children: translations.moreInfo })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-orange text-white px-4 py-2 rounded-md mr-2 transition hover:bg-deep-orange btn btn-ghost",
          onClick: handleAccept,
          children: translations.accept
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-grey text-white px-4 py-2 rounded-md transition hover:bg-dark-grey btn btn-ghost",
          onClick: handleDecline,
          children: translations.decline
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro();
const $$App = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$App;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  const translations = {
    message: i18n.COOKIE_CONSENT.MESSAGE,
    moreInfo: i18n.COOKIE_CONSENT.MORE_INFO,
    accept: i18n.COOKIE_CONSENT.ACCEPT,
    decline: i18n.COOKIE_CONSENT.DECLINE
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": i18n.SEO_TITLE, "description": i18n.SEO_DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Menu", $$Menu, {})} ${renderComponent($$result2, "Reviews", $$Reviews, {})} ${renderComponent($$result2, "WhatsAppButton", WhatsAppButton, { "chatMessage": i18n.WHATSAPP_MESSAGE, "statusMessage": i18n.STATUS_MESSAGE, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/WhatsAppButton.jsx", "client:component-export": "default" })} ${renderComponent($$result2, "Showcase", $$Showcase, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Video", $$Video, {})} </main> ${renderComponent($$result2, "CustomCookieConsent", CustomCookieConsent, { "translations": translations, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/CustomCookieConsent.jsx", "client:component-export": "default" })} ` })} `;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/pages/App.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/en/index.astro", void 0);

const $$file$1 = "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/en/index.astro";
const $$url$1 = "/en";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/index.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
