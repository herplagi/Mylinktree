import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { profile } from "../../data/profile";

const SOCIAL_ITEMS = [
  { key: "instagram", label: "Instagram", icon: FaInstagram, href: profile.socials.instagram },
  { key: "tiktok", label: "TikTok", icon: FaTiktok, href: profile.socials.tiktok },
  { key: "youtube", label: "YouTube", icon: FaYoutube, href: profile.socials.youtube },
] as const;

export default function SocialLinks() {
  return (
    <div className="mt-10 flex justify-center gap-4">
      {SOCIAL_ITEMS.map(({ key, label, icon: Icon, href }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-white text-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-brand-pink-light active:translate-y-0"
        >
          <Icon className="text-lg" />
        </a>
      ))}
    </div>
  );
}
