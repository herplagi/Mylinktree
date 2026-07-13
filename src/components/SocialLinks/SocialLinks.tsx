import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="mt-10 flex justify-center gap-6">

      <FaGithub
        className="cursor-pointer text-2xl transition hover:scale-125"
      />

      <FaInstagram
        className="cursor-pointer text-2xl transition hover:scale-125"
      />

      <FaLinkedin
        className="cursor-pointer text-2xl transition hover:scale-125"
      />

    </div>
  );
}