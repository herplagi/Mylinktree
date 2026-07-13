import type { IconType } from "react-icons";
import {
  FaHandHoldingHeart,
  FaCoins,
  FaDiscord,
  FaWandMagicSparkles,
  FaEnvelope,
} from "react-icons/fa6";

export type Accent = "pink" | "cyan" | "yellow";

export interface LinkItem {
  title: string;
  subtitle: string;
  url: string;
  icon: IconType;
  accent: Accent;
  /** Fully rounded "pill" shape instead of the default rounded-card shape */
  pill?: boolean;
  external?: boolean;
}

export interface LinkGroup {
  label: string;
  emoji: string;
  accent: Accent;
  links: LinkItem[];
}

export const linkGroups: LinkGroup[] = [
  {
    label: "Support the Chaos",
    emoji: "🎉",
    accent: "pink",
    links: [
      {
        title: "Support me on Saweria",
        subtitle: "Bantu donate streamer kecil ini hehe ❤️",
        url: "https://saweria.co/pinokiowo",
        icon: FaHandHoldingHeart,
        accent: "pink",
      },
      {
        title: "Tip me on Socialbuzz",
        subtitle: "Tips & commissions",
        url: "https://sociabuzz.com/pinokiowo",
        icon: FaCoins,
        accent: "cyan",
      },
    ],
  },
  {
    label: "Join the Cult",
    emoji: "💖",
    accent: "cyan",
    links: [
      {
        title: "Join my Discord",
        subtitle: "Join the fun zone!",
        url: "https://discord.gg/utC3JRp4zW",
        icon: FaDiscord,
        accent: "yellow",
        pill: true,
        external: true,
      },
    ],
  },
];

export const secondaryLinks: LinkItem[] = [
  {
    title: "Cool Stuff",
    subtitle: "Project Aurora",
    url: "#",
    icon: FaWandMagicSparkles,
    accent: "pink",
  },
  {
    title: "Say Hi!",
    subtitle: "Get in touch",
    url: "mailto:hello@pinotfound.com",
    icon: FaEnvelope,
    accent: "yellow",
  },
];
