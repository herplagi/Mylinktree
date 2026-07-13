import type { LinkItem } from "../../data/links";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

type Props = {
  item: LinkItem;
};

const ACCENT_STYLES = {
  pink: {
    bg: "bg-brand-pink-light",
    iconBg: "bg-brand-pink text-white",
  },
  cyan: {
    bg: "bg-brand-cyan-light",
    iconBg: "bg-brand-cyan text-white",
  },
  yellow: {
    bg: "bg-brand-yellow",
    iconBg: "bg-white text-ink",
  },
} as const;

export default function LinkCard({ item }: Props) {
  const Icon = item.icon;
  const styles = ACCENT_STYLES[item.accent];
  const ArrowIcon = item.external ? FaArrowUpRightFromSquare : FaArrowRight;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full items-center justify-between gap-4 border-2 border-ink p-4 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--color-ink)] sm:p-5 ${
        styles.bg
      } ${item.pill ? "rounded-full" : "rounded-2xl"}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink text-lg sm:h-12 sm:w-12 ${styles.iconBg}`}
        >
          <Icon />
        </div>

        <div className="text-left">
          <h3 className="font-display text-base font-bold text-ink sm:text-lg">
            {item.title}
          </h3>
          <p className="text-xs text-ink/70 sm:text-sm">{item.subtitle}</p>
        </div>
      </div>

      <ArrowIcon className="shrink-0 text-ink/70" />
    </a>
  );
}
