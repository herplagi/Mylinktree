export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 pb-8 text-center">
      <p className="font-display text-sm font-extrabold text-brand-pink">
        CreatorLink <span>✨</span>
      </p>

      <nav className="mt-2 flex justify-center gap-4 text-xs font-medium text-ink/60">
        <a href="#" className="underline decoration-ink/30 underline-offset-2 hover:text-ink">
          Privacy
        </a>
        <a href="#" className="underline decoration-ink/30 underline-offset-2 hover:text-ink">
          Terms
        </a>
      </nav>

      <p className="mt-2 text-[11px] text-ink/40">
        © {year} Pinotfound💗
      </p>
    </footer>
  );
}
