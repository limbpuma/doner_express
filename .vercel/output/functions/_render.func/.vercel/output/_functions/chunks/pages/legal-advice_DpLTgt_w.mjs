/* empty css                                  */
import { c as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_Chwdp2d0.mjs';
import 'kleur/colors';
import { $ as $$MarkdownLayout } from './abg-policy_PrKkm6Yu.mjs';

const html = "<h3 id=\"impressum\">Impressum</h3>\n<p>Mehmet Kocak Kocak<br>\r\nExpress Döner<br>\r\nGleiwitzstraße 269A<br>\r\n44328 Dortmund</p>\n<h3 id=\"kontakt\">Kontakt</h3>\n<p>Telefon: +491738258352<br>\r\nE-Mail: <a href=\"mailto:kocakmehmetemin085@gmail.com\">kocakmehmetemin085@gmail.com</a></p>\n<h3 id=\"umsatzsteuer-id\">Umsatzsteuer-ID</h3>\n<p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>\r\nDE999999999</p>\n<h3 id=\"verbraucherstreitbeilegunguniversalschlichtungsstelle\">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>\n<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>\n<h3 id=\"bildnachweise\">Bildnachweise</h3>\n<p>Die verwendeten Bilder sind entweder Eigentum von Express Döner oder stammen von einem lizenzierten Anbieter für das Projekt.</p>\n<p>Quelle: <a href=\"https://www.e-recht24.de\">e-recht24.de</a></p>\n<p><a href=\"../\">Zurück zur Startseite</a></p>";

				const frontmatter = {"title":"Impressum","layout":"../layouts/MarkdownLayout.astro"};
				const file = "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/legal-advice.de.md";
				const url = "/legal-advice.de";
				function rawContent() {
					return "\r\n### Impressum\r\n\r\nMehmet Kocak Kocak<br />\r\nExpress Döner<br />\r\nGleiwitzstraße 269A<br />\r\n44328 Dortmund\r\n\r\n### Kontakt\r\n\r\nTelefon: +491738258352<br />\r\nE-Mail: kocakmehmetemin085@gmail.com\r\n\r\n### Umsatzsteuer-ID\r\n\r\nUmsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />\r\nDE999999999\r\n\r\n### Verbraucherstreitbeilegung/Universalschlichtungsstelle\r\n\r\nWir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.\r\n\r\n### Bildnachweise\r\n\r\nDie verwendeten Bilder sind entweder Eigentum von Express Döner oder stammen von einem lizenzierten Anbieter für das Projekt.\r\n\r\nQuelle: [e-recht24.de](https://www.e-recht24.de)\r\n\r\n[Zurück zur Startseite](../)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"impressum","text":"Impressum"},{"depth":3,"slug":"kontakt","text":"Kontakt"},{"depth":3,"slug":"umsatzsteuer-id","text":"Umsatzsteuer-ID"},{"depth":3,"slug":"verbraucherstreitbeilegunguniversalschlichtungsstelle","text":"Verbraucherstreitbeilegung/Universalschlichtungsstelle"},{"depth":3,"slug":"bildnachweise","text":"Bildnachweise"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
