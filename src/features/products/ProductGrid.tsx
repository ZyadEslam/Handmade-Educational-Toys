import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { SectionHeading, SectionShell } from "@/features/home/SectionHeading";

export function ProductGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.products;
  return (
    <SectionShell id="toys" className="bg-white">
      <SectionHeading
        eyebrow="✦"
        title={t.heading}
        highlight={t.headingHighlight}
        sub={t.sub}
      />
      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: "1200px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} dict={dict} />
        ))}
      </div>
    </SectionShell>
  );
}
