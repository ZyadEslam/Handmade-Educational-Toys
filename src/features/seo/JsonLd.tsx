import type { Locale } from "@/i18n/config";
import { SITE } from "@/lib/constants";
import { products } from "@/data/products";
import { images } from "@/lib/images.generated";

/**
 * Structured data for rich results: a Store with its maker,
 * the WebSite, and the full product list with prices in EGP.
 * Built from our own typed constants — nothing user-supplied.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Store",
        "@id": `${SITE.baseUrl}/#store`,
        name: locale === "ar" ? SITE.brandAr : SITE.brandEn,
        alternateName: locale === "ar" ? SITE.brandEn : SITE.brandAr,
        description: locale === "ar" ? SITE.taglineAr : SITE.taglineEn,
        url: `${SITE.baseUrl}/${locale}`,
        telephone: SITE.whatsapp,
        email: SITE.email,
        founder: { "@type": "Person", name: SITE.founder },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cairo",
          addressCountry: "EG",
        },
        sameAs: [SITE.instagram],
        priceRange: "EGP 460–990",
        image: `${SITE.baseUrl}/og.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.baseUrl}/#website`,
        url: `${SITE.baseUrl}/${locale}`,
        name: locale === "ar" ? SITE.brandAr : SITE.brandEn,
        inLanguage: locale,
        publisher: { "@id": `${SITE.baseUrl}/#store` },
      },
      {
        "@type": "ItemList",
        name: locale === "ar" ? "المنتجات" : "Products",
        itemListElement: products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: p.name[locale],
            description: p.tagline[locale],
            image: `${SITE.baseUrl}${images[p.image].src}`,
            brand: { "@type": "Brand", name: SITE.founder },
            offers: {
              "@type": "Offer",
              price: p.price,
              priceCurrency: "EGP",
              availability: "https://schema.org/InStock",
              url: `${SITE.baseUrl}/${locale}#toys`,
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
