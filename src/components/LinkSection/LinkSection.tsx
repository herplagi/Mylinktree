import type { LinkGroup } from "../../data/links";
import LinkCard from "../LinkCard/LinkCard";

const LABEL_COLOR = {
  pink: "text-brand-pink",
  cyan: "text-brand-cyan",
  yellow: "text-brand-yellow",
} as const;

type Props = {
  group: LinkGroup;
};

export default function LinkSection({ group }: Props) {
  return (
    <section className="mb-6 last:mb-0">
      <p
        className={`mb-3 text-center font-display text-xs font-extrabold uppercase tracking-[0.15em] ${
          LABEL_COLOR[group.accent]
        }`}
      >
        {group.label} <span aria-hidden="true">{group.emoji}</span>
      </p>

      <div className="flex flex-col gap-4">
        {group.links.map((item) => (
          <LinkCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
