import type { IconType } from "react-icons";
import {
  FaDonate,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa";

export interface LinkItem {
  title: string;
  subtitle: string;
  url: string;
  icon: IconType;
}

export const links: LinkItem[] = [
  {
    title: "Saweria",
    subtitle: "Bantu donate streamer kecil ini hehe ❤️",
    url: "https://saweria.co/pinokiowo",
    icon: FaDonate,
  },
  {
    title: "Discord",
    subtitle: "Join komunitas Discord",
    url: "https://discord.gg/4QX29qMhPP",
    icon: FaDiscord,
  },
  {
    title: "TikTok",
    subtitle: "Follow me on TikTok",
    url: "https://tiktok.com/@pinotfound",
    icon: FaTiktok,
  },
];