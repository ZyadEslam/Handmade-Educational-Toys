import type { Locale } from "@/i18n/config";
import { images } from "@/lib/images.generated";

export type Accent = "coral" | "sun" | "sky" | "teal" | "grape" | "pink";

export type Product = {
  id: string;
  image: keyof typeof images;
  accent: Accent;
  price: number;
  badge?: "bestseller" | "new";
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  age: Record<Locale, string>;
};

export const products: Product[] = [
  {
    id: "happy-farm-busy-board",
    image: "prod-busyboard",
    accent: "coral",
    price: 990,
    badge: "bestseller",
    name: { en: "Happy Farm Busy Board", ar: "اللوحة التفاعلية «المزرعة السعيدة»" },
    tagline: {
      en: "Lights, switches & a whole farm of curiosity.",
      ar: "أضواء ومفاتيح ومزرعة كاملة من الفضول.",
    },
    age: { en: "2–5 years", ar: "2–5 سنوات" },
  },
  {
    id: "wooden-rainbow",
    image: "prod-rainbow",
    accent: "grape",
    price: 520,
    name: { en: "Rainbow Stacker", ar: "قوس قزح الخشبي" },
    tagline: {
      en: "Twelve arches. A new game every day.",
      ar: "اثنا عشر قوسًا… ولعبة جديدة كل يوم.",
    },
    age: { en: "1–4 years", ar: "1–4 سنوات" },
  },
  {
    id: "abc-letter-puzzle",
    image: "prod-abc",
    accent: "sky",
    price: 640,
    name: { en: "ABC Letter Puzzle", ar: "لوحة الحروف الأبجدية" },
    tagline: {
      en: "Letters small hands can hold — and smile at.",
      ar: "حروف تمسكها الأيدي الصغيرة… وتبتسم لها.",
    },
    age: { en: "2–5 years", ar: "2–5 سنوات" },
  },
  {
    id: "counting-abacus",
    image: "prod-abacus",
    accent: "teal",
    price: 460,
    name: { en: "Counting Abacus", ar: "المعداد الخشبي" },
    tagline: {
      en: "One, two, three — the natural way.",
      ar: "واحد، اثنان، ثلاثة… بالطريقة الطبيعية.",
    },
    age: { en: "2–6 years", ar: "2–6 سنوات" },
  },
  {
    id: "felt-quiet-book",
    image: "prod-quietbook",
    accent: "pink",
    price: 590,
    badge: "new",
    name: { en: "Felt Quiet Book", ar: "الكتاب القماشي الهادئ" },
    tagline: {
      en: "Soft pages, quiet hours, happy trips.",
      ar: "صفحات ناعمة، ساعات هادئة، ورحلات سعيدة.",
    },
    age: { en: "1–4 years", ar: "1–4 سنوات" },
  },
  {
    id: "lacing-sorting-set",
    image: "prod-lacing",
    accent: "sun",
    price: 560,
    name: { en: "Lacing & Sorting Set", ar: "لعبة التشكيل والخيوط" },
    tagline: {
      en: "Thread it, sort it, giggle at it.",
      ar: "خيطها، رتّبها، واضحك عليها.",
    },
    age: { en: "2–5 years", ar: "2–5 سنوات" },
  },
];

export function productById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
