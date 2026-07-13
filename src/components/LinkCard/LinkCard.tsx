import type { LinkItem } from "../../data/links";
import { FaChevronRight } from "react-icons/fa";

type Props = {
  item: LinkItem;
};

export default function LinkCard({ item }: Props) {
  const Icon = item.icon;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-xl text-zinc-700">
          <Icon />
        </div>

        <div>
          <h3 className="text-base font-semibold text-zinc-900">
            {item.title}
          </h3>

          <p className="text-sm text-zinc-500">
            {item.subtitle}
          </p>
        </div>
      </div>

      <FaChevronRight className="text-zinc-400" />
    </a>
  );
}