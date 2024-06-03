/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, d as createAstro, g as renderHead, h as renderSlot, e as renderComponent, u as unescapeHTML } from '../astro_Chwdp2d0.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                  */

const SEO_TITLE$1 = "Express Döner - Authentic Döner Experience in Dortmund Scharnhorst";
const SEO_DESCRIPTION$1 = "Enjoy fresh and traditional Döner dishes at Express Döner in Dortmund Scharnhorst. Perfect for a family meal or a quick and delicious bite on the go.";
const WHATSAPP_MESSAGE$1 = "Hi, need to reserve a table or order food? Message me...";
const STATUS_MESSAGE$1 = "Typically replies within a few minutes, Mo-Su 10am-10pm";
const COOKIE_CONSENT$1 = {
	MESSAGE: "This website uses cookies to improve user experience.",
	MORE_INFO: "For more information, please read our cookie policy.",
	ACCEPT: "Accept",
	DECLINE: "Decline"
};
const NAVBAR$1 = {
	ITEM1: "Home",
	ITEM2: "About Us",
	ITEM3: "Menu",
	ITEM4: "Info",
	CONTACT: "Contact"
};
const HERO$1 = {
	TITLE: "Express Döner",
	SUBTITLE: "The Taste of Tradition in Scharnhorst Dortmund",
	DESCRIPTION: "Visit us and experience the authentic flavors of our Döner specialties.",
	BUTTON: "View Our Menu"
};
const ABOUT$1 = {
	SECTION_TITLE: "About Us",
	INTRO: "With over 5 years of experience, Express Döner offers the finest döner specialties in Dortmund, Scharnhorst.",
	SUBTITLE: "Located in a Small Town",
	DESCRIPTION: "Made from fresh and high-quality ingredients.",
	EXPERIENCE_TITLE: "5+",
	EXPERIENCE_SUBTITLE: "Years of Experience",
	ADDITIONAL_TEXT1: "At Express Döner, we pride ourselves on providing our customers with only the freshest and finest ingredients. Our goal is to offer you an unforgettable culinary experience.",
	ADDITIONAL_TEXT2: "Our team consists of experienced chefs who are passionate about preparing authentic döner dishes. Visit us and experience the difference.",
	FOUNDER: {
		NAME: "Mehmet Emin Kocak",
		ROLE: "Founder",
		DESCRIPTION: "Mehmet founded Express Döner with a vision to offer high-quality, fresh ingredients directly from Dortmund. His passion for good food and excellent service has made Express Döner what it is today."
	},
	FOUNDER_IMAGE: {
		SRC: "img/about/avatar.webp",
		ALT: "Mehmet Emin Kocak"
	},
	SIGNATURE_IMAGE: {
		SRC: "img/about/signature.png",
		ALT: "Signature"
	}
};
const FEATURES$1 = {
	SECTION_TITLE: "Our Specialties",
	DESCRIPTION: "Discover what makes Express Döner unique.",
	CARDS: [
		{
			TITLE: "Best Quality",
			DESCRIPTION: "We only use the freshest ingredients for our dishes.",
			ICON: "fa-utensils"
		},
		{
			TITLE: "Fast Service",
			DESCRIPTION: "Enjoy fast and friendly service with every visit.",
			ICON: "fa-shipping-fast"
		},
		{
			TITLE: "Comfortable Ambience",
			DESCRIPTION: "Our restaurant offers a cozy and inviting atmosphere for all our guests.",
			ICON: "fa-seedling"
		}
	]
};
const BOOKING$1 = {
	SECTION_TITLE: "Booking",
	DESCRIPTION: "Reserve your table easily and conveniently online.",
	CHECK_IN_LABEL: "Check-In",
	CHECK_IN_PLACEHOLDER: "DD.MM.YYYY",
	GUESTS_LABEL: "Guests",
	FRESH_INGREDIENTS: "Enjoy meals made from fresh and premium ingredients.",
	BUTTON: "Reserve Now"
};
const REVIEWS$1 = {
	SECTION_TITLE: "Customer Reviews",
	DESCRIPTION: "Hear what our customers have to say about us.",
	REVIEWS_LIST: [
		{
			NAME: "Anna Schmidt",
			ROLE: "Regular Customer",
			COMMENT: "I love the fresh ingredients and the attentive service at Express Döner. A must-visit for anyone in Dortmund!",
			IMAGE: "avatar01.webp"
		},
		{
			NAME: "Tomasz Kowalski",
			ROLE: "Polish Guest",
			COMMENT: "The best Döner I've found outside of Poland. Great for a quick and tasty snack.",
			IMAGE: "avatar02.webp"
		},
		{
			NAME: "Emel Aktas",
			ROLE: "Student",
			COMMENT: "We feel at home here. The Döner are perfectly seasoned and remind us of Turkey.",
			IMAGE: "avatar03.webp"
		}
	]
};
const SHOWCASE$1 = {
	SECTION_TITLE: "Our Menu",
	DESCRIPTION: "Explore our diverse and delicious offerings.",
	PRODUCTS: [
		{
			NAME: "Döner Kebab",
			IMAGE: "showcase1.webp",
			DESCRIPTION: "Ingredients: Flatbread, döner meat, salad, tomatoes, onions, sauce"
		},
		{
			NAME: "Döner Rotisserie",
			IMAGE: "showcase2.webp",
			DESCRIPTION: "Perfectly cooked meat from the rotisserie"
		},
		{
			NAME: "Vegetable Wrap",
			IMAGE: "showcase3.webp",
			DESCRIPTION: "Ingredients: Tortilla, fresh vegetables, salad, sauce"
		},
		{
			NAME: "Döner and Fries",
			IMAGE: "showcase4.webp",
			DESCRIPTION: "Ingredients: Döner, fries, tomatoes, salad, sauce"
		},
		{
			NAME: "Wrap with Fries",
			IMAGE: "showcase5.webp",
			DESCRIPTION: "Ingredients: Wrap, fries, sauce"
		},
		{
			NAME: "Salami Pizza",
			IMAGE: "showcase6.webp",
			DESCRIPTION: "Ingredients: Tomato sauce, cheese, salami"
		},
		{
			NAME: "Fresh Salad",
			IMAGE: "showcase7.webp",
			DESCRIPTION: "Ingredients: Salad, tomatoes, cucumbers, onions, feta"
		},
		{
			NAME: "Chicken with Fries",
			IMAGE: "showcase8.webp",
			DESCRIPTION: "Ingredients: Grilled chicken, fries, lemon, parsley"
		}
	]
};
const TEAM$1 = {
	SECTION_TITLE: "Our Team",
	DESCRIPTION: "Meet our talented chefs.",
	MEMBERS: [
		{
			NAME: "Mehmet Emin",
			ROLE: "Chef & Founder",
			IMAGE: "team01.webp",
			DESCRIPTION: "Mehmet is known for her innovative recipes and passion for local ingredients."
		},
		{
			NAME: "Akin",
			ROLE: "Sous Chef",
			IMAGE: "team02.webp",
			DESCRIPTION: "Akin specializes in Mediterranean cuisine and brings dynamic energy to the team."
		}
	]
};
const VIDEO$1 = {
	TITLE: "Discover Express Döner",
	DESCRIPTION: "Experience the authentic taste of Express Döner.",
	BUTTON: "Find Us Here!",
	SUBTITLE: "Quality and Authenticity",
	INTRO: "Watch our chefs create the best Döner in Dortmund."
};
const FOOTER$1 = {
	ABOUT: {
		DESCRIPTION: "Express Döner stands for quality and excellent service in Dortmund. Visit us at Gleiwitzstraße 269A, 44328 Dortmund.",
		IMPRINT: {
			TEXT: "Legal Notice",
			URL: "https://www.expressdoener.de/impressum"
		},
		PRIVACY: {
			TEXT: "Privacy Policy",
			URL: "https://www.expressdoener.de/datenschutz"
		},
		TERMS: {
			TEXT: "Terms & Conditions",
			URL: "https://www.expressdoener.de/agb"
		}
	},
	OPENING_HOURS: {
		LABEL: "Opening Hours",
		TIMES: {
			MONDAY: "10:00 - 22:00",
			TUESDAY: "10:00 - 22:00",
			WEDNESDAY: "10:00 - 22:00",
			THURSDAY: "10:00 - 22:00",
			FRIDAY: "10:00 - 22:00",
			SATURDAY: "10:00 - 22:00",
			SUNDAY: "10:00 - 22:00"
		}
	},
	CONTACT: {
		LABEL: "Kontakt",
		GET_IN_TOUCH: "Kontaktieren Sie uns",
		ADDRESS: "Gleiwitzstraße 269A, 44328 Dortmund",
		ADDRESS_LABEL: "Adresse",
		PHONE: "0231 92 88 11 55",
		EMAIL: "kocakmehmetemin085@gmail.com"
	},
	SOCIAL_MEDIA: {
		FACEBOOK: "https://facebook.com/expressdoener",
		TWITTER: "https://twitter.com/expressdoener",
		INSTAGRAM: "https://instagram.com/expressdoener"
	},
	COPYRIGHT: "© 2024 All rights reserved.",
	DEVELOPER: {
		TEXT: "Developed by Limber Martinez",
		LINK: "https://www.limbermartinez.com/"
	},
	GET_DIRECTIONS: "Get Directions"
};
const MENU$1 = {
	TITLE: "Our Menu",
	DESCRIPTION: "Explore our delicious menu options.",
	TABS: {
		MENU_OFFERS: "Offers",
		TURKISH_SPECIALTIES: "Turkish",
		CHICKEN: "Chicken",
		BAGUETTES: "Baguettes",
		FRIES: "Fries",
		PIZZA: "Pizza",
		SALADS: "Salads",
		EXTRAS_DRINKS: "Extras"
	},
	PRODUCTS: {
		MENU_OFFERS: [
			{
				NAME: "Menü 1",
				PRICE: "8.90 €",
				DESCRIPTION: "Dönertasche + Fries + Drink 0,33l"
			},
			{
				NAME: "Menü 2",
				PRICE: "9.50 €",
				DESCRIPTION: "1/2 Chicken + Fries or Rice + Salad + Drink 0,33l"
			},
			{
				NAME: "Menü 3",
				PRICE: "8.50 €",
				DESCRIPTION: "1x Hamburger + Fries + Drink 0,33l"
			},
			{
				NAME: "Menü 4",
				PRICE: "10.50 €",
				DESCRIPTION: "2x Chickenburger + Fries + Drink 0,33l"
			},
			{
				NAME: "Montag",
				PRICE: "7.00 €",
				DESCRIPTION: "1/2 Chicken with Fries or Rice"
			},
			{
				NAME: "Dienstag",
				PRICE: "7.00 €",
				DESCRIPTION: "Any large Pizza"
			},
			{
				NAME: "Mittwoch",
				PRICE: "8.00 €",
				DESCRIPTION: "Schnitzel with Fries or Rice, Salad and Sauce"
			},
			{
				NAME: "Donnerstag",
				PRICE: "7.00 €",
				DESCRIPTION: "Lahmacun with Döner meat, Salad and Sauce"
			},
			{
				NAME: "Freitag",
				PRICE: "11.00 €",
				DESCRIPTION: "Döner Plate with Fries or Rice, Salad and Sauce + Drink 0,33l"
			}
		],
		TURKISH_SPECIALTIES: [
			{
				NAME: "Dürüm Döner",
				PRICE: "7.00 €",
				DESCRIPTION: "Döner meat with Salad and Sauce in Wrap"
			},
			{
				NAME: "Döner Tasche",
				PRICE: "6.00 €",
				DESCRIPTION: "Döner meat with Salad and Sauce in Bread"
			},
			{
				NAME: "Kinder Döner Tasche",
				PRICE: "4.00 €",
				DESCRIPTION: "Döner meat with Salad and Sauce in Bread"
			},
			{
				NAME: "Turbo Döner Tasche",
				PRICE: "7.00 €",
				DESCRIPTION: "Döner meat, Garlic sausage with Salad and Sauce in Bread"
			},
			{
				NAME: "Jumbo Döner Tasche",
				PRICE: "8.00 €",
				DESCRIPTION: "Döner meat with Salad and Sauce in Bread"
			},
			{
				NAME: "Pomm Döner",
				PRICE: "6.00 €",
				DESCRIPTION: "Döner meat, Fries and Sauce in the Box"
			},
			{
				NAME: "Pomm Döner klein",
				PRICE: "4.50 €",
				DESCRIPTION: "Döner meat, Fries and Sauce in the Box"
			},
			{
				NAME: "Salat Tasche",
				PRICE: "4.50 €",
				DESCRIPTION: "Salad and Sauce in Bread"
			},
			{
				NAME: "Pommes Tasche",
				PRICE: "4.50 €",
				DESCRIPTION: "Fries, Salad and Sauce in Bread"
			},
			{
				NAME: "Sucuk Tasche",
				PRICE: "6.00 €",
				DESCRIPTION: "Garlic sausage, Salad and Sauce in Bread"
			}
		],
		CHICKEN: [
			{
				NAME: "1/2 Hähnchen",
				PRICE: "5.50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Hähnchen",
				PRICE: "11.00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Schnitzel Wiener Art",
				PRICE: "8.00 €",
				DESCRIPTION: "with Fries and Salad"
			},
			{
				NAME: "Jägerschnitzel",
				PRICE: "9.00 €",
				DESCRIPTION: "with Fries and Salad"
			},
			{
				NAME: "Paprikaschnitzel",
				PRICE: "9.00 €",
				DESCRIPTION: "with Fries and Salad"
			},
			{
				NAME: "Hawaii-Schnitzel",
				PRICE: "9.50 €",
				DESCRIPTION: "with Fries and Salad"
			},
			{
				NAME: "7 Chicken Nuggets",
				PRICE: "6.00 €",
				DESCRIPTION: "with Fries"
			},
			{
				NAME: "11 Chicken Nuggets",
				PRICE: "8.00 €",
				DESCRIPTION: "with Fries"
			}
		],
		BAGUETTES: [
			{
				NAME: "Salami",
				PRICE: "6.00 €",
				DESCRIPTION: "All Baguettes topped with Cucumbers, Tomatoes & Lettuce optionally Remoulade"
			},
			{
				NAME: "Schinken",
				PRICE: "6.00 €",
				DESCRIPTION: "All Baguettes topped with Cucumbers, Tomatoes & Lettuce optionally Remoulade"
			},
			{
				NAME: "Tonno",
				PRICE: "6.00 €",
				DESCRIPTION: "All Baguettes topped with Cucumbers, Tomatoes & Lettuce optionally Remoulade"
			},
			{
				NAME: "Sucuk",
				PRICE: "6.00 €",
				DESCRIPTION: "All Baguettes topped with Cucumbers, Tomatoes & Lettuce optionally Remoulade"
			},
			{
				NAME: "Döner",
				PRICE: "6.00 €",
				DESCRIPTION: "All Baguettes topped with Cucumbers, Tomatoes & Lettuce optionally Remoulade"
			},
			{
				NAME: "Hawaii",
				PRICE: "6.00 €",
				DESCRIPTION: "All Baguettes topped with Cucumbers, Tomatoes & Lettuce optionally Remoulade"
			}
		],
		FRIES: [
			{
				NAME: "Pommes klein",
				PRICE: "2.50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Pommes groß",
				PRICE: "3.50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Pommes Spezial",
				PRICE: "6.00 €",
				DESCRIPTION: "with Curry sauce and Onions"
			},
			{
				NAME: "Bratwurst",
				PRICE: "3.00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Currywurst",
				PRICE: "3.50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Currywurst mit Pommes",
				PRICE: "6.00 €",
				DESCRIPTION: "with Salad Mayonnaise"
			}
		],
		PIZZA: [
			{
				NAME: "Margherita",
				PRICE: "Sm.: 5.00 € / Lg.: 6.50 €",
				DESCRIPTION: "All pizzas with cheese and tomato sauce"
			},
			{
				NAME: "Spinat",
				PRICE: "Sm.: 5.50 € / Lg.: 8.00 €",
				DESCRIPTION: "All pizzas with cheese and tomato sauce"
			},
			{
				NAME: "Prosciutto",
				PRICE: "Sm.: 5.50 € / Lg.: 8.00 €",
				DESCRIPTION: "With turkey ham"
			},
			{
				NAME: "Salami",
				PRICE: "Sm.: 5.50 € / Lg.: 8.00 €",
				DESCRIPTION: "With beef salami"
			},
			{
				NAME: "Funghi",
				PRICE: "Sm.: 5.50 € / Lg.: 8.00 €",
				DESCRIPTION: "With mushrooms"
			},
			{
				NAME: "Tonno",
				PRICE: "Sm.: 5.50 € / Lg.: 8.00 €",
				DESCRIPTION: "With tuna"
			},
			{
				NAME: "Hawaii",
				PRICE: "Sm.: 6.00 € / Lg.: 8.00 €",
				DESCRIPTION: "With pineapple and ham"
			},
			{
				NAME: "Sucuk",
				PRICE: "Sm.: 5.50 € / Lg.: 8.00 €",
				DESCRIPTION: "With garlic sausage"
			},
			{
				NAME: "Döner",
				PRICE: "Sm.: 6.00 € / Lg.: 8.00 €",
				DESCRIPTION: "With rotisserie"
			},
			{
				NAME: "Vegetarisch",
				PRICE: "Sm.: 7.50 € / Lg.: 9.50 €",
				DESCRIPTION: ""
			}
		],
		SALADS: [
			{
				NAME: "Hirten Salat",
				PRICE: "Sm.: 5.00 € / Lg.: 7.00 €",
				DESCRIPTION: "With iceberg lettuce, tomatoes, cucumbers, cheese & onions"
			},
			{
				NAME: "Insalata San Antonio",
				PRICE: "Sm.: 6.00 € / Lg.: 8.00 €",
				DESCRIPTION: "With iceberg lettuce, tuna, tomatoes, cucumbers & onions"
			},
			{
				NAME: "Bauernsalat",
				PRICE: "Sm.: 5.50 € / Lg.: 8.00 €",
				DESCRIPTION: "With iceberg lettuce, tomatoes, cucumbers & egg"
			},
			{
				NAME: "Döner Salat",
				PRICE: "Sm.: 6.50 € / Lg.: 9.00 €",
				DESCRIPTION: "With iceberg lettuce, cucumbers, tomatoes, onions, corn and rotisserie"
			},
			{
				NAME: "Express Salat",
				PRICE: "Sm.: 6.50 € / Lg.: 9.00 €",
				DESCRIPTION: "With iceberg lettuce, cucumbers, tomatoes, tuna, ham rolls, corn & egg"
			}
		],
		EXTRAS_DRINKS: [
			{
				NAME: "Hollandaise",
				PRICE: "1.00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Paprikasauce",
				PRICE: "1.00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Jägersauce",
				PRICE: "1.00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Currysauce",
				PRICE: "0.50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Mayonnaise / Ketchup",
				PRICE: "0.50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Cola / Fanta / Sprite / Mezzo Mix",
				PRICE: "2.00 €",
				DESCRIPTION: "0.33l plus deposit"
			},
			{
				NAME: "Mineralwasser",
				PRICE: "1.50 €",
				DESCRIPTION: "0.25l plus deposit"
			},
			{
				NAME: "Ayran",
				PRICE: "1.00 €",
				DESCRIPTION: "0.50l plus deposit"
			}
		]
	},
	DOWNLOAD_BUTTON_TEXT: "Download Menu as PDF"
};
const english = {
	SEO_TITLE: SEO_TITLE$1,
	SEO_DESCRIPTION: SEO_DESCRIPTION$1,
	WHATSAPP_MESSAGE: WHATSAPP_MESSAGE$1,
	STATUS_MESSAGE: STATUS_MESSAGE$1,
	COOKIE_CONSENT: COOKIE_CONSENT$1,
	NAVBAR: NAVBAR$1,
	HERO: HERO$1,
	ABOUT: ABOUT$1,
	FEATURES: FEATURES$1,
	BOOKING: BOOKING$1,
	REVIEWS: REVIEWS$1,
	SHOWCASE: SHOWCASE$1,
	TEAM: TEAM$1,
	VIDEO: VIDEO$1,
	FOOTER: FOOTER$1,
	MENU: MENU$1
};

const SEO_TITLE = "Express Döner - Authentisches Döner-Erlebnis in Dortmund Scharnhorst";
const SEO_DESCRIPTION = "Genießen Sie bei Express Döner in Dortmund Scharnhorst frische und traditionelle Dönergerichte. Perfekt für eine Mahlzeit mit der Familie oder eine schnelle und köstliche Speise unterwegs.";
const WHATSAPP_MESSAGE = "Hallo, Tisch reservieren oder Essen bestellen? Nachricht senden...";
const STATUS_MESSAGE = "Antwortet in wenigen Minuten, Mo-So 10-22 Uhr";
const COOKIE_CONSENT = {
	MESSAGE: "Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.",
	MORE_INFO: "Für weitere Informationen lesen Sie unsere Cookie-Richtlinie.",
	ACCEPT: "Akzeptieren",
	DECLINE: "Ablehnen"
};
const NAVBAR = {
	ITEM1: "Startseite",
	ITEM2: "Über uns",
	ITEM3: "Speisekarte",
	ITEM4: "Info",
	CONTACT: "Kontakt"
};
const HERO = {
	TITLE: "Express Döner",
	SUBTITLE: "Der Geschmack der Tradition in Scharnhorst Dortmund",
	DESCRIPTION: "Besuchen Sie uns und erleben Sie die authentischen Aromen unserer Döner-Spezialitäten.",
	BUTTON: "Unser Menü ansehen"
};
const ABOUT = {
	SECTION_TITLE: "Über uns",
	INTRO: "Mit mehr als 5 Jahren Erfahrung bietet Express Döner die feinsten Dönerspezialitäten in Dortmund, Scharnhorst.",
	SUBTITLE: "IN EINER KLEINEN STADT GELEGEN",
	DESCRIPTION: "Hergestellt aus frischen und hochwertigen Zutaten.",
	EXPERIENCE_TITLE: "5+",
	EXPERIENCE_SUBTITLE: "JAHRE ERFAHRUNG",
	ADDITIONAL_TEXT1: "Wir bei Express Döner sind stolz darauf, unseren Kunden nur die frischesten und besten Zutaten anzubieten. Unser Ziel ist es, Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten.",
	ADDITIONAL_TEXT2: "Unser Team besteht aus erfahrenen Köchen, die sich leidenschaftlich für die Zubereitung von authentischen Dönergerichten einsetzen. Besuchen Sie uns und erleben Sie den Unterschied.",
	FOUNDER: {
		NAME: "Mehmet Emin Kocak",
		ROLE: "GRÜNDER",
		DESCRIPTION: "Mehmet hat Express Döner mit der Vision gegründet, qualitativ hochwertige und frische Zutaten direkt aus Dortmund anzubieten. Seine Leidenschaft für gutes Essen und exzellenten Service hat Express Döner zu dem gemacht, was es heute ist."
	},
	FOUNDER_IMAGE: {
		SRC: "img/about/avatar.webp",
		ALT: "Mehmet Emin Kocak"
	},
	SIGNATURE_IMAGE: {
		SRC: "img/about/signature.png",
		ALT: "Signatur"
	}
};
const FEATURES = {
	SECTION_TITLE: "Unsere Besonderheiten",
	DESCRIPTION: "Entdecken Sie, was Express Döner einzigartig macht.",
	CARDS: [
		{
			TITLE: "Beste Qualität",
			DESCRIPTION: "Wir verwenden nur die frischesten Zutaten für unsere Gerichte.",
			ICON: "fa-utensils"
		},
		{
			TITLE: "Schneller Service",
			DESCRIPTION: "Genießen Sie schnellen und freundlichen Service bei jedem Besuch.",
			ICON: "fa-shipping-fast"
		},
		{
			TITLE: "Angenehmes Ambiente",
			DESCRIPTION: "Unser Restaurant bietet ein gemütliches und einladendes Ambiente für alle unsere Gäste.",
			ICON: "fa-seedling"
		}
	]
};
const BOOKING = {
	SECTION_TITLE: "Terminvereinbarung",
	DESCRIPTION: "Reservieren Sie Ihren Tisch einfach und bequem online.",
	CHECK_IN_LABEL: "Anreise",
	CHECK_IN_PLACEHOLDER: "TT.MM.JJJJ",
	GUESTS_LABEL: "Gäste",
	FRESH_INGREDIENTS: "Genießen Sie Mahlzeiten aus frischen und erstklassigen Zutaten.",
	BUTTON: "Jetzt reservieren"
};
const REVIEWS = {
	SECTION_TITLE: "Kundenmeinungen",
	DESCRIPTION: "Hören Sie, was unsere Kunden über uns sagen.",
	REVIEWS_LIST: [
		{
			NAME: "ANNA SCHMIDT",
			ROLE: "Stammkundin",
			COMMENT: "Ich liebe die frischen Zutaten und die aufmerksame Bedienung bei Express Döner. Ein Muss für jeden in Dortmund!",
			IMAGE: "avatar01.webp"
		},
		{
			NAME: "TOMASZ KOWALSKI",
			ROLE: "Polnischer Gast",
			COMMENT: "Das beste Döner, das ich außerhalb Polens gefunden habe. Großartig für einen schnellen und leckeren Snack.",
			IMAGE: "avatar02.webp"
		},
		{
			NAME: "EMEL AKTAS",
			ROLE: "Student",
			COMMENT: "Wir fühlen uns hier wie zu Hause. Die Döner sind genau richtig gewürzt und erinnern uns an die Türkei.",
			IMAGE: "avatar03.webp"
		}
	]
};
const SHOWCASE = {
	SECTION_TITLE: "Unser Menü",
	DESCRIPTION: "Erkunden Sie unser vielfältiges und köstliches Angebot.",
	PRODUCTS: [
		{
			NAME: "Döner Kebab",
			IMAGE: "showcase1.webp",
			DESCRIPTION: "Zutaten: Fladenbrot, Dönerfleisch, Salat, Tomaten, Zwiebeln, Soße"
		},
		{
			NAME: "Döner Drehspieß",
			IMAGE: "showcase2.webp",
			DESCRIPTION: "Perfekt gegartes Fleisch vom Drehspieß"
		},
		{
			NAME: "Gemüse-Wrap",
			IMAGE: "showcase3.webp",
			DESCRIPTION: "Zutaten: Tortilla, frisches Gemüse, Salat, Soße"
		},
		{
			NAME: "Döner und Pommes",
			IMAGE: "showcase4.webp",
			DESCRIPTION: "Zutaten: Döner, Pommes, Tomaten, Salat, Soße"
		},
		{
			NAME: "Wrap mit Pommes",
			IMAGE: "showcase5.webp",
			DESCRIPTION: "Zutaten: Wrap, Pommes, Soße"
		},
		{
			NAME: "Pizza Salami",
			IMAGE: "showcase6.webp",
			DESCRIPTION: "Zutaten: Tomatensauce, Käse, Salami"
		},
		{
			NAME: "Frischer Salat",
			IMAGE: "showcase7.webp",
			DESCRIPTION: "Zutaten: Salat, Tomaten, Gurken, Zwiebeln, Feta"
		},
		{
			NAME: "Hähnchen mit Pommes",
			IMAGE: "showcase8.webp",
			DESCRIPTION: "Zutaten: Gegrilltes Hähnchen, Pommes, Zitrone, Petersilie"
		}
	]
};
const TEAM = {
	SECTION_TITLE: "Unser Team",
	DESCRIPTION: "Lernen Sie unsere talentierten Köche kennen.",
	MEMBERS: [
		{
			NAME: "Mehmet Emin",
			ROLE: "Chef",
			IMAGE: "team01.webp",
			DESCRIPTION: "Mehmet ist bekannt für ihre innovativen Rezepte und ihre Leidenschaft für regionale Zutaten."
		},
		{
			NAME: "Akin",
			ROLE: "Sous Chef",
			IMAGE: "team02.webp",
			DESCRIPTION: "Akin spezialisiert sich auf mediterrane Küche und bringt eine dynamische Energie ins Team."
		}
	]
};
const VIDEO = {
	TITLE: "Entdecken Sie Express Döner",
	DESCRIPTION: "Erleben Sie den authentischen Geschmack von Express Döner.",
	BUTTON: "Hier findest du uns!",
	SUBTITLE: "Qualität und Authentizität",
	INTRO: "Sehen Sie, wie unsere Köche den besten Döner in Dortmund zubereiten."
};
const FOOTER = {
	ABOUT: {
		DESCRIPTION: "Express Döner steht für Qualität und hervorragenden Service in Dortmund. Besuchen Sie uns auf der Gleiwitzstraße 269A, 44328 Dortmund.",
		IMPRINT: {
			TEXT: "Impressum",
			URL: "https://www.expressdoener.de/impressum"
		},
		PRIVACY: {
			TEXT: "Datenschutz",
			URL: "https://www.expressdoener.de/datenschutz"
		},
		TERMS: {
			TEXT: "AGBs",
			URL: "https://www.expressdoener.de/agb"
		}
	},
	OPENING_HOURS: {
		LABEL: "Öffnungszeiten",
		TIMES: {
			MONTAG: "10:00 - 22:00",
			DIENSTAG: "10:00 - 22:00",
			MITTWOCH: "10:00 - 22:00",
			DONNERSTAG: "10:00 - 22:00",
			FREITAG: "10:00 - 22:00",
			SAMSTAG: "10:00 - 22:00",
			SONNTAG: "10:00 - 22:00"
		}
	},
	CONTACT: {
		LABEL: "Kontakt",
		GET_IN_TOUCH: "Kontaktieren Sie uns",
		ADDRESS: "Gleiwitzstraße 269A, 44328 Dortmund",
		ADDRESS_LABEL: "Adresse",
		PHONE: "0231 92 88 11 55",
		EMAIL: "kocakmehmetemin085@gmail.com"
	},
	SOCIAL_MEDIA: {
		FACEBOOK: "https://facebook.com/expressdoener",
		TWITTER: "https://twitter.com/expressdoener",
		INSTAGRAM: "https://instagram.com/expressdoener"
	},
	COPYRIGHT: "© 2024 Alle Rechte vorbehalten.",
	DEVELOPER: {
		TEXT: "Entwickelt von Limber Martinez",
		LINK: "https://www.limbermartinez.com/"
	},
	GET_DIRECTIONS: "Wegbeschreibung"
};
const MENU = {
	TITLE: "Unser Menü",
	DESCRIPTION: "Entdecken Sie unsere köstlichen Menüoptionen.",
	TABS: {
		MENU_OFFERS: "Angebote",
		TURKISH_SPECIALTIES: "Türkische",
		CHICKEN: "Hähnchen",
		BAGUETTES: "Baguettes",
		FRIES: "Pommes",
		PIZZA: "Pizza",
		SALADS: "Salate",
		EXTRAS_DRINKS: "Extras"
	},
	PRODUCTS: {
		MENU_OFFERS: [
			{
				NAME: "Menü 1",
				PRICE: "8,90 €",
				DESCRIPTION: "Dönertasche + Pommes + Getränk 0,33l"
			},
			{
				NAME: "Menü 2",
				PRICE: "9,50 €",
				DESCRIPTION: "1/2 Hähnchen + Pommes oder Reis + Salat + Getränk 0,33l"
			},
			{
				NAME: "Menü 3",
				PRICE: "8,50 €",
				DESCRIPTION: "1x Hamburger + Pommes + Getränk 0,33l"
			},
			{
				NAME: "Menü 4",
				PRICE: "10,50 €",
				DESCRIPTION: "2x Chickenburger + Pommes + Getränk 0,33l"
			},
			{
				NAME: "Montag",
				PRICE: "7,00 €",
				DESCRIPTION: "1/2 Hähnchen mit Pommes oder Reis"
			},
			{
				NAME: "Dienstag",
				PRICE: "7,00 €",
				DESCRIPTION: "Jede große Pizza"
			},
			{
				NAME: "Mittwoch",
				PRICE: "8,00 €",
				DESCRIPTION: "Schnitzel mit Pommes oder Reis, Salat und Sauce"
			},
			{
				NAME: "Donnerstag",
				PRICE: "7,00 €",
				DESCRIPTION: "Lahmacun mit Dönerfleisch, Salat und Sauce"
			},
			{
				NAME: "Freitag",
				PRICE: "11,00 €",
				DESCRIPTION: "Döner Teller mit Pommes oder Reis, Salat und Sauce + Getränk 0,33l"
			}
		],
		TURKISH_SPECIALTIES: [
			{
				NAME: "Dürüm Döner",
				PRICE: "7,00 €",
				DESCRIPTION: "Dönerfleisch mit Salat und Sauce im Wrap"
			},
			{
				NAME: "Döner Tasche",
				PRICE: "6,00 €",
				DESCRIPTION: "Dönerfleisch mit Salat und Sauce im Brot"
			},
			{
				NAME: "Kinder Döner Tasche",
				PRICE: "4,00 €",
				DESCRIPTION: "Dönerfleisch mit Salat und Sauce im Brot"
			},
			{
				NAME: "Turbo Döner Tasche",
				PRICE: "7,00 €",
				DESCRIPTION: "Dönerfleisch, Knoblauchwurst mit Salat und Sauce im Brot"
			},
			{
				NAME: "Jumbo Döner Tasche",
				PRICE: "8,00 €",
				DESCRIPTION: "Dönerfleisch mit Salat und Sauce im Brot"
			},
			{
				NAME: "Pomm Döner",
				PRICE: "6,00 €",
				DESCRIPTION: "Dönerfleisch, Pommes und Sauce in der Box"
			},
			{
				NAME: "Pomm Döner klein",
				PRICE: "4,50 €",
				DESCRIPTION: "Dönerfleisch, Pommes und Sauce in der Box"
			},
			{
				NAME: "Salat Tasche",
				PRICE: "4,50 €",
				DESCRIPTION: "Salat und Sauce im Brot"
			},
			{
				NAME: "Pommes Tasche",
				PRICE: "4,50 €",
				DESCRIPTION: "Pommes, Salat und Sauce im Brot"
			},
			{
				NAME: "Sucuk Tasche",
				PRICE: "6,00 €",
				DESCRIPTION: "Knoblauchwurst, Salat und Sauce im Brot"
			}
		],
		CHICKEN: [
			{
				NAME: "1/2 Hähnchen",
				PRICE: "5,50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Hähnchen",
				PRICE: "11,00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Schnitzel Wiener Art",
				PRICE: "8,00 €",
				DESCRIPTION: "mit Pommes und Salat"
			},
			{
				NAME: "Jägerschnitzel",
				PRICE: "9,00 €",
				DESCRIPTION: "mit Pommes und Salat"
			},
			{
				NAME: "Paprikaschnitzel",
				PRICE: "9,00 €",
				DESCRIPTION: "mit Pommes und Salat"
			},
			{
				NAME: "Hawaii-Schnitzel",
				PRICE: "9,50 €",
				DESCRIPTION: "mit Pommes und Salat"
			},
			{
				NAME: "7 Chicken Nuggets",
				PRICE: "6,00 €",
				DESCRIPTION: "mit Pommes"
			},
			{
				NAME: "11 Chicken Nuggets",
				PRICE: "8,00 €",
				DESCRIPTION: "mit Pommes"
			}
		],
		BAGUETTES: [
			{
				NAME: "Salami",
				PRICE: "6,00 €",
				DESCRIPTION: "Alle Baguettes belegt mit Gurken, Tomaten & Blattsalat wahlweise Remoulade"
			},
			{
				NAME: "Schinken",
				PRICE: "6,00 €",
				DESCRIPTION: "Alle Baguettes belegt mit Gurken, Tomaten & Blattsalat wahlweise Remoulade"
			},
			{
				NAME: "Tonno",
				PRICE: "6,00 €",
				DESCRIPTION: "Alle Baguettes belegt mit Gurken, Tomaten & Blattsalat wahlweise Remoulade"
			},
			{
				NAME: "Sucuk",
				PRICE: "6,00 €",
				DESCRIPTION: "Alle Baguettes belegt mit Gurken, Tomaten & Blattsalat wahlweise Remoulade"
			},
			{
				NAME: "Döner",
				PRICE: "6,00 €",
				DESCRIPTION: "Alle Baguettes belegt mit Gurken, Tomaten & Blattsalat wahlweise Remoulade"
			},
			{
				NAME: "Hawaii",
				PRICE: "6,00 €",
				DESCRIPTION: "Alle Baguettes belegt mit Gurken, Tomaten & Blattsalat wahlweise Remoulade"
			}
		],
		FRIES: [
			{
				NAME: "Pommes klein",
				PRICE: "2,50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Pommes groß",
				PRICE: "3,50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Pommes Spezial",
				PRICE: "6,00 €",
				DESCRIPTION: "mit Currysauce und Zwiebeln"
			},
			{
				NAME: "Bratwurst",
				PRICE: "3,00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Currywurst",
				PRICE: "3,50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Currywurst mit Pommes",
				PRICE: "6,00 €",
				DESCRIPTION: "mit Salatmayonnaise"
			}
		],
		PIZZA: [
			{
				NAME: "Margherita",
				PRICE: "Kl.: 5.00 € / Gr.: 6.50 €",
				DESCRIPTION: "Alle Pizzas mit Käse und Tomatensoße"
			},
			{
				NAME: "Spinat",
				PRICE: "Kl.: 5.50 € / Gr.: 8.00 €",
				DESCRIPTION: "Alle Pizzas mit Käse und Tomatensoße"
			},
			{
				NAME: "Prosciutto",
				PRICE: "Kl.: 5.50 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Puten-Schinken"
			},
			{
				NAME: "Salami",
				PRICE: "Kl.: 5.50 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Rindersalami"
			},
			{
				NAME: "Funghi",
				PRICE: "Kl.: 5.50 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Champignons"
			},
			{
				NAME: "Tonno",
				PRICE: "Kl.: 5.50 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Thunfisch"
			},
			{
				NAME: "Hawaii",
				PRICE: "Kl.: 6.00 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Ananas und Schinken"
			},
			{
				NAME: "Sucuk",
				PRICE: "Kl.: 5.50 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Knoblauchwurst"
			},
			{
				NAME: "Döner",
				PRICE: "Kl.: 6.00 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Dönerfleisch"
			},
			{
				NAME: "Vegetarisch",
				PRICE: "Kl.: 7.50 € / Gr.: 9.50 €",
				DESCRIPTION: ""
			}
		],
		SALADS: [
			{
				NAME: "Hirten Salat",
				PRICE: "Kl.: 5.00 € / Gr.: 7.00 €",
				DESCRIPTION: "Mit Eisbergsalat, Tomaten, Gurken, Käse & Zwiebeln"
			},
			{
				NAME: "Insalata San Antonio",
				PRICE: "Kl.: 6.00 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Eisbergsalat, Thunfisch, Tomaten, Gurken & Zwiebeln"
			},
			{
				NAME: "Bauernsalat",
				PRICE: "Kl.: 5.50 € / Gr.: 8.00 €",
				DESCRIPTION: "Mit Eisbergsalat, Tomaten, Gurken & Ei"
			},
			{
				NAME: "Döner Salat",
				PRICE: "Kl.: 6.50 € / Gr.: 9.00 €",
				DESCRIPTION: "Mit Eisbergsalat, Gurken, Tomaten, Zwiebeln, Mais und Dönerfleisch"
			},
			{
				NAME: "Express Salat",
				PRICE: "Kl.: 6.50 € / Gr.: 9.00 €",
				DESCRIPTION: "Mit Eisbergsalat, Gurken, Tomaten, Thunfisch, Schinkenröllchen, Mais & Ei"
			}
		],
		EXTRAS_DRINKS: [
			{
				NAME: "Hollandaise",
				PRICE: "1,00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Paprikasauce",
				PRICE: "1,00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Jägersauce",
				PRICE: "1,00 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Currysauce",
				PRICE: "0,50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Mayonnaise / Ketchup",
				PRICE: "0,50 €",
				DESCRIPTION: ""
			},
			{
				NAME: "Cola / Fanta / Sprite / Mezzo Mix",
				PRICE: "2,00 €",
				DESCRIPTION: "0,33l zzgl. Pfand"
			},
			{
				NAME: "Mineralwasser",
				PRICE: "1,50 €",
				DESCRIPTION: "0,25l zzgl. Pfand"
			},
			{
				NAME: "Ayran",
				PRICE: "1,00 €",
				DESCRIPTION: "0,50l zzgl. Pfand"
			}
		]
	},
	DOWNLOAD_BUTTON_TEXT: "Menü als PDF herunterladen"
};
const german = {
	SEO_TITLE: SEO_TITLE,
	SEO_DESCRIPTION: SEO_DESCRIPTION,
	WHATSAPP_MESSAGE: WHATSAPP_MESSAGE,
	STATUS_MESSAGE: STATUS_MESSAGE,
	COOKIE_CONSENT: COOKIE_CONSENT,
	NAVBAR: NAVBAR,
	HERO: HERO,
	ABOUT: ABOUT,
	FEATURES: FEATURES,
	BOOKING: BOOKING,
	REVIEWS: REVIEWS,
	SHOWCASE: SHOWCASE,
	TEAM: TEAM,
	VIDEO: VIDEO,
	FOOTER: FOOTER,
	MENU: MENU
};

const LANG = {
  GERMAN: "de",
  ENGLISH: "en"
};
const getI18N = ({
  currentLocale = "de"
}) => {
  if (currentLocale === LANG.GERMAN)
    return { ...english, ...german };
  return english;
};

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { currentLocale } = Astro2;
  const i18n = getI18N({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<footer id="info_section" class="pt-20 pb-20 text-white"> <div class="container mx-auto px-4"> <div class="flex flex-wrap justify-center text-center"> <!-- Logo and About Section --> <div class="w-full md:w-1/3 px-4 mb-10"> <div class="mb-6"> <i class="fas fa-utensils text-yellow-500 text-3xl mb-2"></i> <div class="mt-6"> <h5 class="text-xl font-bold uppercase">Express Döner</h5> </div> <p class="mt-4 text-gray-400">${i18n.FOOTER.ABOUT.DESCRIPTION}</p> </div> <div class="flex justify-center space-x-4 text-2xl"> ${Object.keys(i18n.FOOTER.SOCIAL_MEDIA).map((key) => renderTemplate`<a${addAttribute(i18n.FOOTER.SOCIAL_MEDIA[key], "href")} class="text-gray-400 hover:text-orange-500"> <i${addAttribute(`fab fa-${key.toLowerCase()}`, "class")}></i> </a>`)} </div> <div class="mt-6 text-sm"> <a${addAttribute(currentLocale === "en" ? "/legal-advice.en" : "/legal-advice.de", "href")} class="text-gray-400 hover:text-orange-500 mr-4">${i18n.FOOTER.ABOUT.IMPRINT.TEXT}</a> <a${addAttribute(currentLocale === "en" ? "/privacy-policy.en" : "/privacy-policy.de", "href")} class="text-gray-400 hover:text-orange-500 mr-4">${i18n.FOOTER.ABOUT.PRIVACY.TEXT}</a> <a${addAttribute(currentLocale === "en" ? "/abg-policy.en" : "/abg-policy.de", "href")} class="text-gray-400 hover:text-orange-500">${i18n.FOOTER.ABOUT.TERMS.TEXT}</a> </div> </div> <!-- Opening Hours --> <div class="w-full md:w-1/3 px-4 mb-10"> <div class="mb-6"> <i class="fas fa-clock text-yellow-500 text-3xl mb-2"></i> <div class="mt-6"> <h5 class="text-xl font-bold uppercase">${i18n.FOOTER.OPENING_HOURS.LABEL}</h5> </div> <ul class="mt-4 space-y-2"> ${Object.keys(i18n.FOOTER.OPENING_HOURS.TIMES).map((day) => renderTemplate`<li><span class="font-semibold">${day}:</span> ${i18n.FOOTER.OPENING_HOURS.TIMES[day]}</li>`)} </ul> </div> </div> <!-- Contact Information --> <div class="w-full md:w-1/3 px-4 mb-10"> <div class="mb-6"> <i class="fas fa-map-marker-alt text-yellow-500 text-3xl mb-2"></i> <div class="mt-6"> <h5 class="text-xl font-bold uppercase text-yellow-500">${i18n.FOOTER.CONTACT.LABEL}</h5> <a href="tel:+49 023192881155" class="text-xl text-white font-bold">${i18n.FOOTER.CONTACT.PHONE}</a> </div> <p class="text-gray-400">${i18n.FOOTER.CONTACT.ADDRESS_LABEL}</p> <p class="mt-2">${i18n.FOOTER.CONTACT.ADDRESS}</p> <a href="https://maps.app.goo.gl/o96ooB7G4vPyUXSF9" target="_blank" class="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"> ${i18n.FOOTER.GET_DIRECTIONS} </a> </div> </div> <!-- Copyright and Developer Credit --> <div class="flex flex-col sm:flex-row justify-center items-center border-t border-gray-700 pt-4 mt-4 text-center sm:text-left"> <p class="text-gray-400 text-sm"> ${i18n.FOOTER.COPYRIGHT} </p> <a${addAttribute(i18n.FOOTER.DEVELOPER.LINK, "href")} target="_blank" class="text-gray-400 hover:text-orange-500 text-sm mt-2 sm:mt-0 sm:ml-4"> ${i18n.FOOTER.DEVELOPER.TEXT} </a> </div> </div> </div></footer>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/components/sections/Footer.astro", void 0);

const $$Astro = createAstro();
const $$MarkdownLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html> <head><title>${title}</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"><!-- For icons if needed -->${renderHead()}</head> <body class="bg-black text-white font-sans leading-normal tracking-normal"> <header class="bg-gray-900"> <div class="container mx-auto px-4 py-4 flex justify-between items-center"> <a class="flex items-center  space-x-2 font-bold uppercase text-xl animate-bounce-slow"> <i class="fas fa-utensils text-yellow-500 text-xl "></i> <span>Express Döner</span> </a> <nav class="space-x-4"> <a href="../" class="font-bold text-orange-400 hover:text-orange-600">Home</a> </nav> </div> </header> <main class="container mx-auto px-4 py-8 lg:py-16"> <article class="prose prose-lg prose-invert max-w-none mx-auto"> <h1 class="text-center text-3xl font-bold mb-8">${title}</h1> <div class="markdown-content"> ${renderSlot($$result, $$slots["default"])} </div> </article> <div class="mt-8 text-center"> <a href="/" class="inline-block bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
Back to Home
</a> </div> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/layouts/MarkdownLayout.astro", void 0);

const html = "<h1 id=\"allgemeine-geschäftsbedingungen-agb\">Allgemeine Geschäftsbedingungen (AGB)</h1>\n<h2 id=\"1-geltungsbereich\">1. Geltungsbereich</h2>\n<p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen von Express Döner, Gleiwitzstraße 269A, 44328 Dortmund. Durch die Nutzung unserer Website oder die Kontaktaufnahme per Telefon oder WhatsApp stimmen Sie diesen Bedingungen zu.</p>\n<h2 id=\"2-angebotene-dienstleistungen\">2. Angebotene Dienstleistungen</h2>\n<p>Express Döner bietet Informationen zu unserem Menü, Standort und Kontaktmöglichkeiten per Telefon und WhatsApp. Kunden können Tische reservieren oder Bestellungen zur Abholung über diese Kommunikationskanäle aufgeben. Die Bezahlung erfolgt direkt vor Ort.</p>\n<h2 id=\"3-reservierung-und-bestellung\">3. Reservierung und Bestellung</h2>\n<h3 id=\"reservierungen\">Reservierungen</h3>\n<ul>\n<li>Kunden können Tische per Telefon oder WhatsApp reservieren.</li>\n<li>Reservierungen werden erst nach einer Bestätigung durch unser Team wirksam.</li>\n<li>Bei Änderungen oder Stornierungen informieren Sie uns bitte so schnell wie möglich über die gleichen Kommunikationskanäle.</li>\n</ul>\n<h3 id=\"bestellungen\">Bestellungen</h3>\n<ul>\n<li>Kunden können Bestellungen zur Abholung per Telefon oder WhatsApp aufgeben.</li>\n<li>Bestellungen werden erst nach einer Bestätigung durch unser Team wirksam.</li>\n<li>Bitte geben Sie besondere Anforderungen oder Allergien bei der Bestellung an.</li>\n</ul>\n<h2 id=\"4-preise-und-zahlung\">4. Preise und Zahlung</h2>\n<ul>\n<li>Alle auf unserer Website und per Telefon oder WhatsApp mitgeteilten Preise sind in Euro (€) angegeben.</li>\n<li>Die Bezahlung für Bestellungen und Reservierungen erfolgt direkt vor Ort.</li>\n<li>Wir akzeptieren Barzahlung sowie gängige Kredit- und Debitkarten als Zahlungsmethoden.</li>\n</ul>\n<h2 id=\"5-datenschutzerklärung\">5. Datenschutzerklärung</h2>\n<p>Unsere Datenschutzerklärung, die den Anforderungen der Datenschutz-Grundverordnung (DSGVO) entspricht, finden Sie auf unserer Website. Sie beschreibt, wie wir Ihre persönlichen Daten sammeln, verwenden und schützen.</p>\n<h2 id=\"6-datenerfassung-und-nutzung\">6. Datenerfassung und Nutzung</h2>\n<h3 id=\"kontakt-und-reservierungen\">Kontakt und Reservierungen</h3>\n<ul>\n<li>Wenn Sie uns per Telefon oder WhatsApp kontaktieren, erfassen und verarbeiten wir Ihre persönlichen Daten (wie Name, Kontaktdaten und Reservierungsdetails), um Ihre Reservierungen und Bestellungen zu verwalten.</li>\n<li>Wir geben Ihre persönlichen Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben.</li>\n</ul>\n<h3 id=\"cookies-und-website-analyse\">Cookies und Website-Analyse</h3>\n<ul>\n<li>Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern und anonyme Analysedaten zu sammeln.</li>\n<li>Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzerklärung zu.</li>\n</ul>\n<h2 id=\"7-haftung\">7. Haftung</h2>\n<ul>\n<li>Express Döner haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung unserer Website oder Dienstleistungen entstehen.</li>\n<li>Wir bemühen uns, die Informationen auf unserer Website genau und aktuell zu halten, übernehmen jedoch keine Garantie für deren Vollständigkeit oder Richtigkeit.</li>\n</ul>\n<h2 id=\"8-änderungen\">8. Änderungen</h2>\n<ul>\n<li>Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern.</li>\n<li>Änderungen werden auf unserer Website veröffentlicht, und es liegt in der Verantwortung des Kunden, diese regelmäßig zu überprüfen.</li>\n</ul>\n<h2 id=\"9-anwendbares-recht\">9. Anwendbares Recht</h2>\n<ul>\n<li>Diese Allgemeinen Geschäftsbedingungen unterliegen dem Recht der Bundesrepublik Deutschland.</li>\n<li>Alle Streitigkeiten, die sich aus diesen Bedingungen ergeben, unterliegen der Gerichtsbarkeit der Gerichte in Dortmund, Deutschland.</li>\n</ul>\n<h2 id=\"10-kontaktinformationen\">10. Kontaktinformationen</h2>\n<p>Bei Fragen oder Anliegen zu diesen Allgemeinen Geschäftsbedingungen kontaktieren Sie uns bitte:</p>\n<p><strong>Express Döner</strong><br>\nGleiwitzstraße 269A<br>\n44328 Dortmund<br>\n<strong>Telefon:</strong> +49 173 8258352<br>\n<strong>E-Mail:</strong> <a href=\"mailto:info@expressdoener.de\">info@expressdoener.de</a></p>\n<h2 id=\"11-salvatorische-klausel\">11. Salvatorische Klausel</h2>\n<p>Sollte eine Bestimmung dieser Allgemeinen Geschäftsbedingungen ungültig oder nicht durchsetzbar sein, bleiben die übrigen Bestimmungen weiterhin gültig und durchsetzbar.</p>\n<hr>\n<h3 id=\"quelle\">Quelle:</h3>\n<p>Diese AGB wurde gemäß den Richtlinien von <a href=\"https://www.e-recht24.de\">e-recht24.de</a> erstellt und auf die spezifischen Bedürfnisse von Express Döner zugeschnitten.</p>";

				const frontmatter = {"title":"Terms and Conditions","layout":"../layouts/MarkdownLayout.astro"};
				const file = "C:/Users/limbp/Documents/Developer/ExpressDoner_Astro/donerexpress/src/pages/abg-policy.de.md";
				const url = "/abg-policy.de";
				function rawContent() {
					return "\r\n\r\n# Allgemeine Geschäftsbedingungen (AGB)\r\n\r\n## 1. Geltungsbereich\r\n\r\nDiese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen von Express Döner, Gleiwitzstraße 269A, 44328 Dortmund. Durch die Nutzung unserer Website oder die Kontaktaufnahme per Telefon oder WhatsApp stimmen Sie diesen Bedingungen zu.\r\n\r\n## 2. Angebotene Dienstleistungen\r\n\r\nExpress Döner bietet Informationen zu unserem Menü, Standort und Kontaktmöglichkeiten per Telefon und WhatsApp. Kunden können Tische reservieren oder Bestellungen zur Abholung über diese Kommunikationskanäle aufgeben. Die Bezahlung erfolgt direkt vor Ort.\r\n\r\n## 3. Reservierung und Bestellung\r\n\r\n### Reservierungen\r\n\r\n- Kunden können Tische per Telefon oder WhatsApp reservieren.\r\n- Reservierungen werden erst nach einer Bestätigung durch unser Team wirksam.\r\n- Bei Änderungen oder Stornierungen informieren Sie uns bitte so schnell wie möglich über die gleichen Kommunikationskanäle.\r\n\r\n### Bestellungen\r\n\r\n- Kunden können Bestellungen zur Abholung per Telefon oder WhatsApp aufgeben.\r\n- Bestellungen werden erst nach einer Bestätigung durch unser Team wirksam.\r\n- Bitte geben Sie besondere Anforderungen oder Allergien bei der Bestellung an.\r\n\r\n## 4. Preise und Zahlung\r\n\r\n- Alle auf unserer Website und per Telefon oder WhatsApp mitgeteilten Preise sind in Euro (€) angegeben.\r\n- Die Bezahlung für Bestellungen und Reservierungen erfolgt direkt vor Ort.\r\n- Wir akzeptieren Barzahlung sowie gängige Kredit- und Debitkarten als Zahlungsmethoden.\r\n\r\n## 5. Datenschutzerklärung\r\n\r\nUnsere Datenschutzerklärung, die den Anforderungen der Datenschutz-Grundverordnung (DSGVO) entspricht, finden Sie auf unserer Website. Sie beschreibt, wie wir Ihre persönlichen Daten sammeln, verwenden und schützen.\r\n\r\n## 6. Datenerfassung und Nutzung\r\n\r\n### Kontakt und Reservierungen\r\n\r\n- Wenn Sie uns per Telefon oder WhatsApp kontaktieren, erfassen und verarbeiten wir Ihre persönlichen Daten (wie Name, Kontaktdaten und Reservierungsdetails), um Ihre Reservierungen und Bestellungen zu verwalten.\r\n- Wir geben Ihre persönlichen Daten nicht an Dritte weiter, es sei denn, dies ist gesetzlich vorgeschrieben.\r\n\r\n### Cookies und Website-Analyse\r\n\r\n- Unsere Website verwendet Cookies, um die Benutzererfahrung zu verbessern und anonyme Analysedaten zu sammeln.\r\n- Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäß unserer Datenschutzerklärung zu.\r\n\r\n## 7. Haftung\r\n\r\n- Express Döner haftet nicht für direkte oder indirekte Schäden, die aus der Nutzung unserer Website oder Dienstleistungen entstehen.\r\n- Wir bemühen uns, die Informationen auf unserer Website genau und aktuell zu halten, übernehmen jedoch keine Garantie für deren Vollständigkeit oder Richtigkeit.\r\n\r\n## 8. Änderungen\r\n\r\n- Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit zu ändern.\r\n- Änderungen werden auf unserer Website veröffentlicht, und es liegt in der Verantwortung des Kunden, diese regelmäßig zu überprüfen.\r\n\r\n## 9. Anwendbares Recht\r\n\r\n- Diese Allgemeinen Geschäftsbedingungen unterliegen dem Recht der Bundesrepublik Deutschland.\r\n- Alle Streitigkeiten, die sich aus diesen Bedingungen ergeben, unterliegen der Gerichtsbarkeit der Gerichte in Dortmund, Deutschland.\r\n\r\n## 10. Kontaktinformationen\r\n\r\nBei Fragen oder Anliegen zu diesen Allgemeinen Geschäftsbedingungen kontaktieren Sie uns bitte:\r\n\r\n**Express Döner**  \r\nGleiwitzstraße 269A  \r\n44328 Dortmund  \r\n**Telefon:** +49 173 8258352  \r\n**E-Mail:** info@expressdoener.de\r\n\r\n## 11. Salvatorische Klausel\r\n\r\nSollte eine Bestimmung dieser Allgemeinen Geschäftsbedingungen ungültig oder nicht durchsetzbar sein, bleiben die übrigen Bestimmungen weiterhin gültig und durchsetzbar.\r\n\r\n---\r\n\r\n### Quelle:\r\nDiese AGB wurde gemäß den Richtlinien von [e-recht24.de](https://www.e-recht24.de) erstellt und auf die spezifischen Bedürfnisse von Express Döner zugeschnitten.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"allgemeine-geschäftsbedingungen-agb","text":"Allgemeine Geschäftsbedingungen (AGB)"},{"depth":2,"slug":"1-geltungsbereich","text":"1. Geltungsbereich"},{"depth":2,"slug":"2-angebotene-dienstleistungen","text":"2. Angebotene Dienstleistungen"},{"depth":2,"slug":"3-reservierung-und-bestellung","text":"3. Reservierung und Bestellung"},{"depth":3,"slug":"reservierungen","text":"Reservierungen"},{"depth":3,"slug":"bestellungen","text":"Bestellungen"},{"depth":2,"slug":"4-preise-und-zahlung","text":"4. Preise und Zahlung"},{"depth":2,"slug":"5-datenschutzerklärung","text":"5. Datenschutzerklärung"},{"depth":2,"slug":"6-datenerfassung-und-nutzung","text":"6. Datenerfassung und Nutzung"},{"depth":3,"slug":"kontakt-und-reservierungen","text":"Kontakt und Reservierungen"},{"depth":3,"slug":"cookies-und-website-analyse","text":"Cookies und Website-Analyse"},{"depth":2,"slug":"7-haftung","text":"7. Haftung"},{"depth":2,"slug":"8-änderungen","text":"8. Änderungen"},{"depth":2,"slug":"9-anwendbares-recht","text":"9. Anwendbares Recht"},{"depth":2,"slug":"10-kontaktinformationen","text":"10. Kontaktinformationen"},{"depth":2,"slug":"11-salvatorische-klausel","text":"11. Salvatorische Klausel"},{"depth":3,"slug":"quelle","text":"Quelle:"}];
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

const abgPolicy_de = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownLayout as $, $$Footer as a, abgPolicy_de as b, getI18N as g };
