import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession();

  console.log("DATA ", session);
  console.log("SESSION ",session);

  if(session) {
    return (
      <div className="h-64 flex flex-col items-center justify-center">
      <p className="text-center">Signed in as {session.user.email}</p>
      <button className="bg-blue-700 py-1 px-3 rounded-lg text-white" onClick={() => signOut()}>Sign out</button>
    </div>
    )
  }
  return <div className="h-64 flex flex-col items-center justify-center">
    Not signed in <br/>
    <button className="bg-blue-700 py-1 px-3 rounded-lg text-white" onClick={() => signIn()}>Sign in</button>
  </div>
}