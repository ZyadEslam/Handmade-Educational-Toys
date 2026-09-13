import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Baloo_2, Cairo, Caveat, Nunito } from "next/font/google";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/config";
import { SITE } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/features/cart/cart-context";
import { CartDrawer } from "@/features/cart/CartDrawer";
import { MotionProvider } from "@/features/motion/MotionProvider";
import { JsonLd } from "@/features/seo/JsonLd";
import { WhatsAppFab } from "@/features/seo/WhatsAppFab";
import "../globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

/** Prerender both language versions. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const url = `${SITE.baseUrl}/${locale}`;

  return {
    metadataBase: new URL(SITE.baseUrl),
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    alternates: {
      canonical: url,
      languages: { en: `${SITE.baseUrl}/en`, ar: `${SITE.baseUrl}/ar`, "x-default": `${SITE.baseUrl}/en` },
    },
    openGraph: {
      type: "website",
      siteName: locale === "ar" ? SITE.brandAr : SITE.brandEn,
      title: dict.meta.title,
      description: dict.meta.description,
      url,
      locale: locale === "ar" ? "ar_EG" : "en_US",
      images: [{ url: `${SITE.baseUrl}/og.png`, width: 1200, height: 630, alt: SITE.brandEn }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`${SITE.baseUrl}/og.png`],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${baloo.variable} ${nunito.variable} ${cairo.variable} ${caveat.variable}`}
    >
      <body className="min-h-dvh bg-white text-ink">
        <CartProvider>
          <MotionProvider>
            <Header locale={locale} dict={dict} />
            <main>{children}</main>
            <Footer locale={locale} dict={dict} />
            <CartDrawer locale={locale} dict={dict} />
            <WhatsAppFab locale={locale} />
          </MotionProvider>
        </CartProvider>
        <JsonLd locale={locale} />
      </body>
    </html>
  );
}
