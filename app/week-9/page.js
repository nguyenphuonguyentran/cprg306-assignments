"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  return (
    <main>
      {user && (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <div>
            <ul>
              <li className="flex no-underline hover:underline">
                <Link href="/week-9/shopping-list">Go to Shopping List</Link>
              </li>
              <li className="flex no-underline hover:underline">
                <Link href="/week-9/profile-page">Go to Profile Page</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {user ? (
        <div className="flex no-underline hover:underline text-black">
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div className="flex no-underline hover:underline text-black">
          <button onClick={login}>Login with GitHub</button>
        </div>
      )}
    </main>
  );
}
