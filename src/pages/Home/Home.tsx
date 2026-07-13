import LinkCard from "../../components/LinkCard/LinkCard";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import { links } from "../../data/links";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <div className="mx-auto max-w-md px-6 py-10">
        <ProfileCard />

        {links.map((item) => (
          <LinkCard key={item.title} item={item} />
        ))}

        <SocialLinks />
        <Footer />
      </div>
    </main>
  );
}
