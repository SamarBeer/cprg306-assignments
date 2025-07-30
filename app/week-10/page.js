"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function LandingPage() {
    if (typeof window !== 'undefined') {
  console.log('Running on client');
}

  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {!user ? (
        <>
          <h1>Welcome to the Shopping List App</h1>
          <button onClick={gitHubSignIn} style={buttonStyle}>
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <Link href="/week-10/shopping-list">
            <button style={buttonStyle}>Go to Shopping List</button>
          </Link>
          <button onClick={firebaseSignOut} style={{ ...buttonStyle, marginTop: 12 }}>
            Sign Out
          </button>
        </>
      )}
    </main>
  );
}

const buttonStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  cursor: "pointer",
};
