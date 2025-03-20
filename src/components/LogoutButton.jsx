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
    <button onClick={handleLogout} className="group inline-flex relative items-center space-x-2 bg-[#FEDBFF] px-4 py-2 rounded-full w-fit overflow-hidden font-medium text-gray-800 text-sm">
      <span className="z-10 relative">Log Out</span>

      {/* Background Animation */}
      <span className="absolute inset-0 bg-[#F9F51A] transition-all -translate-x-full group-hover:translate-x-0 duration-500 ease-in-out transform"></span>

      {/* Zoom-out effect on hover */}
      <style jsx>{`
        button {
          transform: scale(1);
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }

        button:hover {
          transform: scale(1.05); /* Slight zoom-in effect */
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1); /* Added shadow for interactivity */
        }
      `}</style>
    </button>
  );
}
