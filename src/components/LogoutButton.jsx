"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Prevents immediate redirection
    router.push("/"); // Redirects user to home page after logout
  };

  return (
    <button onClick={handleLogout} className="hover:bg-gray-300 px-6 py-2 border-2 rounded-3xl cursor-pointer">
      Logout
    </button>
  );
}
