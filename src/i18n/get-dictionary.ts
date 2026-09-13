import { en, type Dictionary } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";
import { defaultLocale, type Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

/**
 * Dictionary accessor. Server components import this directly;
 * client components receive the dictionary they need as props.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
