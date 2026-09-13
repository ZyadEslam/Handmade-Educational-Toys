import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { images } from "@/lib/images.generated";
import { SectionHeading, SectionShell } from "./SectionHeading";
import { Sparkle } from "@/components/ui/doodles";

const frames: Array<{ img: keyof typeof images; captionIdx: number; tilt: string; speed: string; size: string }> = [
  { img: "gallery-alphabet", captionIdx: 0, tilt: "-rotate-2", speed: "0.22", size: "aspect-[10/9]" },
  { img: "gallery-felt", captionIdx: 1, tilt: "rotate-2", speed: "0.34", size: "aspect-[10/8]" },
  { img: "gallery-flatlay", captionIdx: 2, tilt: "rotate-1", speed: "0.28", size: "aspect-[10/10]" },
  { img: "gallery-busyboard", captionIdx: 3, tilt: "-rotate-1", speed: "0.4", size: "aspect-[10/8]" },
];

/** Mom-approved wall of real moments — simple, warm, image-first. */
export function Gallery({ dict }: { dict: Dictionary }) {
  const t = dict.gallery;
  return (
    <SectionShell id="gallery" className="overflow-hidden bg-white">
      <SectionHeading title={t.heading} highlight={t.headingHighlight} sub={t.sub} />
      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {frames.map((f, i) => {
          const img = images[f.img];
          return (
            <figure key={f.img} data-reveal data-reveal-delay={String(i * 0.07)}>
              <div
                data-speed={f.speed}
                className={`relative ${f.size} ${f.tilt} overflow-hidden rounded-[1.6rem] border-2 border-ink bg-cream shadow-pop transition-transform duration-300 hover:rotate-0 hover:shadow-pop-lg`}
              >
                <Image
                  src={img.src}
                  alt={t.captions[f.captionIdx]}
                  fill
                  sizes="(min-width: 1024px) 24vw, 45vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={img.blur}
                />
              </div>
              <figcaption className="mt-3 flex items-center gap-2 ps-1 text-sm font-extrabold text-ink-soft">
                <Sparkle className="h-4 w-4" /> {t.captions[f.captionIdx]}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </SectionShell>
  );
}
