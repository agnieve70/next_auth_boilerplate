/* eslint-disable react/no-unescaped-entities */
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
export default function Component() {
  const { data: session } = useSession();

  // console.log("DATA ", session);
  // console.log("SESSION ",session);

  if (!session) {
    return (
      <div className="h-64 flex flex-col items-center justify-center">
        Not signed in <br />
        <button
          className="bg-blue-700 py-1 px-3 rounded-lg text-white"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="animate-slow-bounce"
        alt="meditate icon"
        src={"/man_meditate-01.svg"}
        width={400}
        height={300}
      />
      <h1 className="px-4 py-2 text-blue-700 text-3xl">Sedona Method</h1>
      <h4 className="text-blue-400 text-lg mb-5">
        "What you fight, you strengthen. What you resist, persist. What you
        release, finds peace."
      </h4>
      <Link href="/dashboard">
      <a className="bg-blue-700 py-2 px-5 rounded-lg text-white
      hover:border-2 hover:border-blue-800 transition
      delay-150 duration-700 ease-in">
        Get Started
      </a>
      </Link>
    </div>
  );
}
