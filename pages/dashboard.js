/* eslint-disable react-hooks/rules-of-hooks */
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import JourneyCard from "../components/ui/JourneyCard";

function dashboard() {
  const { data: session } = useSession();
  const journey = [
    {
      id: 1,
      title: "BASIC RELEASING",
      image: "/basic_releasing.jpg",
    },
    {
      id: 2,
      title: "RELEASE PROBLEMS",
      image: "/problem_releasing.jpg",
    },
    {
        id: 1,
        title: "BASIC RELEASING",
        image: "/basic_releasing.jpg",
      },
      {
        id: 2,
        title: "RELEASE PROBLEMS",
        image: "/problem_releasing.jpg",
      },
      {
        id: 1,
        title: "BASIC RELEASING",
        image: "/basic_releasing.jpg",
      },
      {
        id: 2,
        title: "RELEASE PROBLEMS",
        image: "/problem_releasing.jpg",
      },
  ];
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
    <div className="px-20 py-4">
      <h1 className="mx-4 text-2xl pb-2 text-blue-700">Your Journey</h1>
      <div className="flex flex-wrap">
        {journey.map((journey) => {
          return (
            <JourneyCard
              key={journey.id}
              title={journey.title}
              image={journey.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default dashboard;
