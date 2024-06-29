
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main>
      <div className="w-screen h-screen absolute top-0 overflow-hidden grid place-items-center">
        <Image width={1920} height={1080} src="/naruto-bg.jpg" alt="bg-image" className="absolute min-h-full min-w-full aspect-video opacity-10 max-w-none -z-10"/>
        <div>
          <h1 className="font-[impact] text-center text-6xl leading-tight ">Dive into the Ultimate<br/>Anime Experience!</h1>
          <h4 className="text-3xl text-center">Explore, Discover, and Stay Updated with<br/>the Latest in Anime at AniPortal.</h4>
          <div className="p-4 w-fit mt-8 bg-blue-700 text-white text-center mx-auto rounded-full cursor-pointer"><Link href="/all">Discover →</Link></div>
        </div>
        {session && <div className="absolute bottom-4 right-4 text-xl grid place-items-center bg-lime-500 text-black rounded-lg w-10 h-10">
          <Link href="/anime/add">＋</Link>
        </div>}
      </div>
    </main>
  );
}
