import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Product } from "@/data/products";
import { images } from "@/lib/images.generated";
import { AddToBagButton } from "./AddToBagButton";
import { cx } from "@/lib/cx";

const accentBgs: Record<Product["accent"], string> = {
  coral: "bg-[#FFF0ED]",
  sun: "bg-[#FFF6DE]",
  sky: "bg-[#EAF6FE]",
  teal: "bg-[#E7F9F6]",
  grape: "bg-[#F1EEFF]",
  pink: "bg-[#FFEFF5]",
};

const accentChips: Record<Product["accent"], string> = {
  coral: "bg-coral text-white",
  sun: "bg-sun text-ink",
  sky: "bg-sky text-ink",
  teal: "bg-teal text-white",
  grape: "bg-grape text-white",
  pink: "bg-pink text-ink",
};

export function ProductCard({ product, locale, dict }: { product: Product; locale: Locale; dict: Dictionary }) {
  const img = images[product.image];
  const price = product.price.toLocaleString(locale === "ar" ? "ar-EG" : "en-US");
  const badge =
    product.badge === "bestseller"
      ? { label: dict.products.badgeBestseller, cls: "bg-coral text-white" }
      : product.badge === "new"
        ? { label: dict.products.badgeNew, cls: "bg-teal text-white" }
        : null;

  return (
    <article
      data-reveal
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border-2 border-ink bg-white shadow-pop transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop-lg"
    >
      {/* image */}
      <div
        className={cx(
          "relative aspect-square overflow-hidden border-b-2 border-ink bg-dots",
          accentBgs[product.accent]
        )}
      >
        <Image
          src={img.src}
          alt={`${product.name[locale]} — ${product.tagline[locale]}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06] group-hover:rotate-1"
          placeholder="blur"
          blurDataURL={img.blur}
        />
        {badge && (
          <span
            className={cx(
              "absolute start-3 top-3 rounded-full border-2 border-ink px-3 py-1 font-display text-[0.7rem] font-extrabold uppercase tracking-wide shadow-pop-sm",
              badge.cls
            )}
          >
            {badge.label}
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-extrabold leading-tight text-ink">{product.name[locale]}</h3>
        </div>
        <p className="text-sm font-semibold leading-snug text-ink-soft">{product.tagline[locale]}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <div className="flex flex-col gap-1">
            <span className={cx("w-fit rounded-full px-2.5 py-0.5 text-[0.65rem] font-extrabold", accentChips[product.accent])}>
              {dict.products.age}: {product.age[locale]}
            </span>
            <span className="font-display text-lg font-extrabold text-ink" dir="ltr">
              <span className="text-coral">{price}</span>{" "}
              <span className="text-sm text-ink-soft">{dict.products.egp}</span>
            </span>
          </div>
          <AddToBagButton productId={product.id} dict={dict} />
        </div>
      </div>
    </article>
  );
}
