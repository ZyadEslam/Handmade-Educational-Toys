import { cx } from "@/lib/cx";

/**
 * Hand-drawn brand icons (inline SVG, stroke = ink). Zero font/emoji
 * dependencies, crisp at any size, matches the doodle aesthetic.
 */
type IconProps = { className?: string; strokeWidth?: number };

function Base({ className, children, viewBox = "0 0 48 48" }: IconProps & { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className={cx("h-full w-full", className)} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M38 10C22 10 12 18 10 30c-1 6 3 8 7 6 9-5 17-14 21-26Z" />
      <path d="M12 40C17 30 24 22 34 16" />
    </Base>
  );
}

export function WoodIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="10" y="14" width="28" height="20" rx="4" />
      <path d="M14 18h20M14 24h20M14 30h20" />
      <path d="M38 40c3 3 8 3 8-2" />
    </Base>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 10c-3-4-10-3-11 2-4 1-5 6-2 8-2 4 0 8 4 8 0 5 6 7 9 4Z" />
      <path d="M24 10c3-4 10-3 11 2 4 1 5 6 2 8 2 4 0 8-4 8 0 5-6 7-9 4Z" />
      <path d="M24 10v22" />
    </Base>
  );
}

export function GiftIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="10" y="20" width="28" height="18" rx="3" />
      <path d="M10 26h28M24 20v18" />
      <path d="M24 20c-6-1-10-4-9-7 1-2 4-2 6 0 2 2 3 4 3 7Zm0 0c6-1 10-4 9-7-1-2-4-2-6 0-2 2-3 4-3 7Z" />
    </Base>
  );
}

export function PaletteIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 8a16 16 0 1 0 0 32c3 0 4-2 3-4s0-5 4-5h4c4 0 6-3 5-7-2-9-8-16-16-16Z" />
      <circle cx="17" cy="19" r="2" fill="currentColor" stroke="none" />
      <circle cx="27" cy="15" r="2" fill="currentColor" stroke="none" />
      <circle cx="35" cy="22" r="2" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function PencilIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M10 38l3-9 20-20a3.5 3.5 0 0 1 5 5L18 34l-8 4Z" />
      <path d="M28 14l6 6" />
    </Base>
  );
}

export function ThreadIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M14 20a10 10 0 0 1 20 0v6a10 10 0 0 1-20 0v-3" />
      <path d="M34 20c4 0 4 8 0 8h-2" />
      <circle cx="14" cy="30" r="4" />
    </Base>
  );
}

export function RibbonIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 16c-2-4-8-6-12-3-4 3-3 9 1 11l-2 3 5-1 8 10 8-10 5 1-2-3c4-2 5-8 1-11-4-3-10-1-12 3Z" />
    </Base>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 14h24v16H4zM28 20h8l6 6v4H28" />
      <circle cx="12" cy="32" r="3.5" />
      <circle cx="34" cy="32" r="3.5" />
    </Base>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 40C10 30 6 22 8 15c2-6 10-8 16-2 6-6 14-4 16 2 2 7-2 15-16 25Z" />
    </Base>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 6l16 6v12c0 10-6 16-16 20C14 40 8 34 8 24V12l16-6Z" />
      <path d="M16 24l6 6 10-12" />
    </Base>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M24 6c1.7 9.4 4.5 13.2 18 18-13.5 4.8-16.3 8.6-18 18-1.7-9.4-4.5-13.2-18-18 13.5-4.8 16.3-8.6 18-18Z" />
    </Base>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M8 10h32v22H22l-8 7v-7H8V10Z" />
      <path d="M15 20h18M15 26h12" />
    </Base>
  );
}
