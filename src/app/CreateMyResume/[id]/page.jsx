"use client";

import { useState } from "react";
import ResumeForm from "../components/ResumeBuilder";

const ResumeBuilder = () => {
  const [userId] = useState("user123"); // Example static user ID

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resume Builder</h1>

      <ResumeForm userId={userId} />
    </div>
  );
};

export default ResumeBuilder;
