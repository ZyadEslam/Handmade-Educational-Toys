/**
 * Input sanitization helpers — defense in depth for anything a visitor
 * types before it is reflected anywhere (form data, order summaries, …).
 */

const TAG_PATTERN = /<[^>]*>/g;
const CONTROL_PATTERN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

/** Strip markup/control characters and collapse whitespace. */
export function sanitize(input: string): string {
  return input
    .replace(TAG_PATTERN, "")
    .replace(CONTROL_PATTERN, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Sanitize + enforce a maximum length (surrogate-pair safe). */
export function sanitizeWithLimit(input: string, maxLength: number): string {
  return [...sanitize(input)].slice(0, maxLength).join("");
}

/** Redact anything resembling a URL or path traversal before it hits a link. */
export function stripUrls(input: string): string {
  return input
    .replace(/(https?:\/\/|www\.)\S+/gi, "")
    .replace(/(\.\.\/+|\.\.\\+)/g, "");
}

/** Validate that untrusted text contains no HTML/JS vectors. */
export function isCleanText(input: string): boolean {
  return !/<[^>]*>|javascript:|on\w+\s*=|vbscript:/i.test(input);
}
