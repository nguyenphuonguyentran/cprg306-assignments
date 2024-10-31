"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <main>
        <p>Please login to your GitHub account</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col h-screen w-screen bg-center bg-cover bg-gradient-to-r from-cyan-700 to-violet-200">
      <h1 className="p-5 text-7xl text-transparent font-bold font-sans bg-clip-text bg-gradient-to-r from-slate-200 to-white justify-center items-center flex">
        User Profile
      </h1>
      <div className="flex flex-col gap-4 justify-center items-center font-sans font-semibold text-white">
        <p>
          Name: {user.displayName} - Email: {user.email}
        </p>
        <img
          src={user.photoURL}
          alt="User Photo"
          className="rounded-full shadow-md shadow-cyan-900 w-60 h-60"
        />
      </div>
      <div className="flex flex-col justify-center items-center pt-8 pb-8 gap-3 font-semibold font-sans">
        <button>
          <Link
            href="/week-9/shopping-list"
            className="flex no-underline hover:underline text-slate-700 bg-white p-3 rounded-3xl hover:shadow-md hover:shadow-cyan-900"
          >
            Go back to Shopping List ⬅️
          </Link>
        </button>
        <button>
          <Link
            href="/week-9"
            className="flex no-underline hover:underline text-slate-700 bg-white p-3 rounded-3xl hover:shadow-md hover:shadow-cyan-900"
          >
            Go back to Main Page ⬅️
          </Link>
        </button>
      </div>
    </main>
  );
}
