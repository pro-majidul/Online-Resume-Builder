"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Resume Builder</h1>

      <button
        onClick={() => router.push("/CreateMyResume/resume-builder")}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Go to Resume Builder
      </button>
    </div>
  );
};

export default Page;
