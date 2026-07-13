import Header from "../../components/Header/Header";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import LinkSection from "../../components/LinkSection/LinkSection";
import SecondaryLinks from "../../components/SecondaryLinks/SecondaryLinks";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Stickers from "../../components/Stickers/Stickers";
import Footer from "../../components/Footer/Footer";
import { linkGroups } from "../../data/links";

export default function Home() {
  return (
    <main className="bg-dot-grid relative min-h-screen w-full overflow-hidden bg-bg">
      <Stickers />

      <div className="relative mx-auto max-w-md px-5 py-8 sm:px-6 sm:py-10">
        <Header />
        <ProfileCard />

        {linkGroups.map((group) => (
          <LinkSection key={group.label} group={group} />
        ))}

        <SecondaryLinks />
        <SocialLinks />
        <Footer />
      </div>
    </main>
  );
}
