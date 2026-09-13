import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import { Hero } from "@/features/home/Hero";
import { Marquee } from "@/features/home/Marquee";
import { ProductGrid } from "@/features/products/ProductGrid";
import { Spotlight } from "@/features/home/Spotlight";
import { WhyHandmade } from "@/features/home/WhyHandmade";
import { Gallery } from "@/features/home/Gallery";
import { Steps } from "@/features/home/Steps";
import { Testimonials } from "@/features/home/Testimonials";
import { Story } from "@/features/home/Story";
import { CustomCta } from "@/features/home/CustomCta";
import { Faq } from "@/features/home/Faq";
import { FinalCta } from "@/features/home/FinalCta";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Marquee dict={dict} />
      <ProductGrid locale={locale} dict={dict} />
      <Spotlight locale={locale} dict={dict} />
      <WhyHandmade dict={dict} />
      <Gallery dict={dict} />
      <Steps dict={dict} />
      <Testimonials dict={dict} />
      <Story locale={locale} dict={dict} />
      <CustomCta locale={locale} dict={dict} />
      <Faq dict={dict} />
      <FinalCta dict={dict} />
    </>
  );
}
