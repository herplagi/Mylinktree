/**
 * Purely decorative background accents — hidden on small screens so they
 * never crowd the single-column layout, visible once there's spare space
 * around the content column on larger viewports.
 */
export default function Stickers() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      <div className="bg-checker absolute left-10 top-8 h-10 w-10 -rotate-6 rounded-md border-2 border-ink/70 opacity-70" />
      <div className="bg-checker absolute right-12 top-40 h-8 w-8 rotate-12 rounded-md border-2 border-ink/70 opacity-70" />
      <div className="bg-checker absolute left-16 bottom-24 h-9 w-9 rotate-3 rounded-md border-2 border-ink/70 opacity-70" />
      <div className="bg-checker absolute right-20 bottom-16 h-10 w-10 -rotate-12 rounded-md border-2 border-ink/70 opacity-70" />
    </div>
  );
}
