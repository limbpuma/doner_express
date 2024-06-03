/* empty css                                  */
import { c as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_Chwdp2d0.mjs';
import 'kleur/colors';
import { $ as $$MarkdownLayout } from './abg-policy_PrKkm6Yu.mjs';

const html = "<h3 id=\"legal-notice\">Legal Notice</h3>\n<p>Mehmet Kocak M.<br>\r\nExpress Döner<br>\r\nGleiwitzstraße 269A<br>\r\n44328 Dortmund</p>\n<h3 id=\"contact\">Contact</h3>\n<p>Phone: +491738258352<br>\r\nEmail: <a href=\"mailto:kocakmehmetemin085@gmail.com\">kocakmehmetemin085@gmail.com</a></p>\n<h3 id=\"vat-id\">VAT ID</h3>\n<p>VAT Identification Number according to § 27 a of the German Value Added Tax Act:<br>\r\nDE999999999</p>\n<h3 id=\"consumer-dispute-resolutionuniversal-arbitration-board\">Consumer Dispute Resolution/Universal Arbitration Board</h3>\n<p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>\n<h3 id=\"image-credits\">Image Credits</h3>\n<p>The images used are either owned by Express Döner or sourced from a licensed provider for the project.</p>\n<p>Quelle: <a href=\"https://www.e-recht24.de\">e-recht24.de</a></p>\n<p><a href=\"../\">Back to Home</a></p>";

				const frontmatter = {"title":"Legal Notice","layout":"../layouts/MarkdownLayout.astro"};
				const file = "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/legal-advice.en.md";
				const url = "/legal-advice.en";
				function rawContent() {
					return "\r\n### Legal Notice\r\n\r\nMehmet Kocak M.<br />\r\nExpress Döner<br />\r\nGleiwitzstraße 269A<br />\r\n44328 Dortmund\r\n\r\n### Contact\r\n\r\nPhone: +491738258352<br />\r\nEmail: kocakmehmetemin085@gmail.com\r\n\r\n### VAT ID\r\n\r\nVAT Identification Number according to § 27 a of the German Value Added Tax Act:<br />\r\nDE999999999\r\n\r\n### Consumer Dispute Resolution/Universal Arbitration Board\r\n\r\nWe are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.\r\n\r\n### Image Credits\r\n\r\nThe images used are either owned by Express Döner or sourced from a licensed provider for the project.\r\n\r\nQuelle: [e-recht24.de](https://www.e-recht24.de)\r\n\r\n[Back to Home](../)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"legal-notice","text":"Legal Notice"},{"depth":3,"slug":"contact","text":"Contact"},{"depth":3,"slug":"vat-id","text":"VAT ID"},{"depth":3,"slug":"consumer-dispute-resolutionuniversal-arbitration-board","text":"Consumer Dispute Resolution/Universal Arbitration Board"},{"depth":3,"slug":"image-credits","text":"Image Credits"}];
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
