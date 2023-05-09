import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/images/profile.jpeg";

export default function Hero() {
  return (
    <section className="text-center">
      <div className="relative w-[250px] h-[250px] mx-auto">
        <Image
          src={profileImage}
          alt="Pictures of the author"
          fill
          sizes="250"
          priority
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="mt-2 text-3xl font-bold">{"Hi, I'm Sangbin"}</h2>
      <h3 className="text-xl font-semibold">Full-stack Enginner</h3>
      <p>꿈을 코딩하는 사람, 드림코더 상빈</p>
      <Link href="/contact">
        <button className="px-4 py-1 mt-2 font-bold bg-yellow-500 rounded-xl">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
