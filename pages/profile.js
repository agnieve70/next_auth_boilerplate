import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
export default function Component() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex px-20 ">
        <div className="shadow-lg rounded-md w-1/4 flex flex-col py-2 px-4 mr-2 bg-white">
          <div className="mb-3 flex flex-col justify-center">
            <Image
              className="rounded-full"
              alt="profile picture"
              src={"/logo-01.svg"}
              width={100}
              height={100}
            />
            <div className="w-full flex justify-center">
            <button className="bg-blue-500 rounded-full text-white py-1 px-3 text-sm">Upload Picture</button>
            </div>
          </div>
          <div>
            <form action="" className="mb-5">
              <p className="text-center bg-blue-100 rounded-md p-2 text-blue-700 mb-3">Signed in as {session.user.email}</p>
              <div>
                <label className="block" htmlFor="first_name">
                  First name
                </label>
                <input
                  id="first_name"
                  className="border-2 border-blue-700 rounded-md px-2 py-1 w-full"
                  type="text"
                  name=""
                />
              </div>
              <div>
                <label className="block" htmlFor="last_name">
                  Last name
                </label>
                <input
                  id="last_name"
                  className="border-2 border-blue-700 rounded-md px-2 py-1 w-full"
                  type="text"
                  name=""
                />
              </div>
              <div>
                <label className="block" htmlFor="gender">
                  Gender
                </label>
                <select
                  name=""
                  id="gender"
                  className="border-2 border-blue-700 rounded-md px-2 py-1 w-full"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <button
                  className="bg-blue-700 py-1 px-3 rounded-lg text-white w-full mt-3"
                  onClick={() => alert("Save Profile Information")}
                >
                  Save Information
                </button>
              </div>
            </form>
          </div>
          <div className="">
          
          </div>
        </div>
        <div className="shadow-lg rounded-md w-3/4 flex flex-col py-2 px-4 bg-white">

        </div>
      </div>
    );
  }
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
