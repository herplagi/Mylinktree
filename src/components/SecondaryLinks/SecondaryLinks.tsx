import { secondaryLinks } from "../../data/links";

const ICON_COLOR = {
  pink: "text-brand-pink",
  cyan: "text-brand-cyan",
  yellow: "text-brand-yellow",
} as const;

export default function SecondaryLinks() {
  return (
    <section className="mt-6 grid grid-cols-2 gap-4">
      {secondaryLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.title}
            href={item.url}
            className="flex flex-col items-start gap-2 rounded-2xl border-2 border-ink bg-white p-4 shadow-[4px_4px_0_0_var(--color-ink)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-[2px_2px_0_0_var(--color-ink)]"
          >
            <Icon className={`text-xl ${ICON_COLOR[item.accent]}`} />
            <div className="text-left">
              <h3 className="font-display text-sm font-bold text-ink">
                {item.title}
              </h3>
              <p className="text-xs text-ink/60">{item.subtitle}</p>
            </div>
          </a>
        );
      })}
    </section>
  );
}
