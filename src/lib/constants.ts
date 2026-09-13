export const SITE = {
  /** Brand owner */
  founder: "HM Toys",
  brandEn: "HM Toys",
  brandAr: "HM Toys",
  taglineEn: "Handmade educational games",
  taglineAr: "ألعاب تعليمية مصنوعة يدويًا",
  city: "Cairo, Egypt",
  /** Replace with the real business number before going live. */
  whatsapp: "+201234567890",
  whatsappDisplay: "+20 123 456 7890",
  email: "hello@hmtoys.com",
  instagram: "https://instagram.com/hm.toys",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hmtoys.com",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;
}
