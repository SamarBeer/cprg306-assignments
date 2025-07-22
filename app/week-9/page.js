'use client';

import React from 'react';
import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome to the Week 9 App</h1>

      {!user ? (
        <button onClick={handleLogin}>Login with GitHub</button>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
          <br />
          <br />
          <Link href="/week-8/">
            Go to Shopping List
          </Link> 
        </div>
      )}
    </div>
  );
}
