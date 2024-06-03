/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, e as renderComponent } from '../astro_Chwdp2d0.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Error404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error404;
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen flex flex-col items-center justify-center"> <img src="/images/error404.webp" alt="error404" class="w-48 h-auto" loading="lazy"> <h1 class="text-4xl font-bold mt-0">Oops! Lost in space?</h1> <p class="text-center mt-2 mb-2">We can't find the page you're looking for. But don't worry, you can always go back to the homepage or check out my LinkeIn.</p> <div class="flex gap-4"> <a href="/" class="btn btn-primary">Take me home</a> <a href="https://www.linkedin.com/in/limber-martinez-developer/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Visit LinkedIn</a> </div> </div>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/pages/Error404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Error404", $$Error404, {})}`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/404.astro", void 0);

const $$file = "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
