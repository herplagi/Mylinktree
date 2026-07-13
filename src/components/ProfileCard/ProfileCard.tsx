import avatar from "../../assets/avatar.png";
import { profile } from "../../data/profile";

export default function ProfileCard() {
  return (
    <section className="mb-10 flex flex-col items-center text-center">
      <div className="relative">
        <img
          src={avatar}
          alt={profile.name}
          className="h-28 w-28 rounded-full border-4 border-brand-yellow object-cover shadow-[5px_5px_0_0_var(--color-ink)] sm:h-32 sm:w-32"
        />

        <span className="absolute -bottom-1 -right-4 rotate-6 rounded-full border-2 border-ink bg-brand-pink px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wide text-white shadow-[2px_2px_0_0_var(--color-ink)] sm:text-xs">
          {profile.status}
        </span>
      </div>

      <h1 className="mt-5 font-display text-3xl font-extrabold text-ink sm:text-4xl">
        {profile.name}
      </h1>

      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-semibold text-ink">
        {profile.tag}
        <span aria-hidden="true">{profile.tagEmoji}</span>
      </span>

      <p className="mt-3 max-w-xs text-sm text-ink/60">{profile.bio}</p>
    </section>
  );
}
