import avatar from "../../assets/avatar.png";
import { profile } from "../../data/profile";
import { FaShareAlt } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <section className="mb-10 flex flex-col items-center">

      <div className="relative">

        <img
          src={avatar}
          alt="Avatar"
          className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl"
        />

        <button
          className="absolute -right-2 -top-2 rounded-full bg-white p-3 shadow-lg"
        >
          <FaShareAlt />
        </button>

      </div>

      <h1 className="mt-5 text-3xl font-bold">
        {profile.name}
      </h1>

      <span className="text-zinc-500">
        {profile.username}
      </span>

      <p className="mt-3 max-w-xs text-center text-zinc-500">
        {profile.bio}
      </p>

    </section>
  );
}