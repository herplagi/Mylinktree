import { FaShareNodes } from "react-icons/fa6";

export default function Header() {
  const handleShare = async () => {
    const shareData = {
      title: "CreatorLink",
      text: "Check out my CreatorLink page!",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled share — do nothing
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url);
    }
  };

  return (
    <header className="mb-8 flex items-center justify-between sm:mb-10">
      <span className="font-display text-xl font-extrabold tracking-tight text-brand-pink sm:text-2xl">
        CreatorLink <span className="text-base sm:text-lg">✨</span>
      </span>

      <button
        type="button"
        onClick={handleShare}
        aria-label="Share this page"
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-white text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_var(--color-ink)] active:translate-y-0 active:shadow-none"
      >
        <FaShareNodes className="text-sm" />
      </button>
    </header>
  );
}
