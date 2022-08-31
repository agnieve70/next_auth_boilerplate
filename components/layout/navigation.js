import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

function Navigation() {
  const { data: session } = useSession();

  return (
    <div className="h-20 bg-blue-700 px-20 flex justify-between">
      <div className="flex items-center w-1/4">
        <Link href="/">
          <Image className="cursor-pointer" src={"/logo-01.png"} alt="logo" width={50} height={50} />
        </Link>
      </div>
      <div className="flex justify-end w-1/3 items-center">
        {session ? (
          <>
            <Link href='/profile'>
            <h1 className="px-4 py-2 text-white hover:font-bold cursor-pointer">
              Profile
            </h1>
            </Link>
            <h1
              onClick={() => signOut()}
              className="px-4 py-2 text-white hover:font-bold cursor-pointer"
            >
              Logout
            </h1>{" "}
          </>
        ) : (
          <>
            <h1 className="px-4 py-2 text-white hover:font-bold cursor-pointer">
              Home
            </h1>
            <h1 className="px-4 py-2 text-white hover:font-bold cursor-pointer">
              About
            </h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation;
