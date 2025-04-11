"use client"
import { useState } from "react";

export default function RequestReset() {
    const [email, setEmail] = useState("");

    const handleRequest = async () => {
        const res = await fetch("http://localhost:5000/api/request-password-reset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });
        //   const res = await fetch("https://resume-builder-website-server-side.vercel.app/api/request-password-reset", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email }),
        //   });
        const data = await res.json();
        alert(data.message);
    };
    console.log(email)
    return (
        //   <div>
        //     <input
        //       type="email"
        //       onChange={(e) => setEmail(e.target.value)}
        //       placeholder="Enter your email"
        //     />
        //     <button onClick={handleRequest}>Send Reset Link</button>
        //   </div>

        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Reset Your Password</h2>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 text-gray-800 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleRequest}
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Send Reset Link
                </button>
            </div>
        </div>

    );
}
