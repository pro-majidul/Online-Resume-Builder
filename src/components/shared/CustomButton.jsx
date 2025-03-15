"use client"
import { FaArrowRightLong } from "react-icons/fa6";

const CustomButton = ({title}) => {
  return (
    <button className="relative inline-flex items-center space-x-2 text-sm px-4 py-2 border border-gray-600 rounded-md text-gray-800 font-medium overflow-hidden group w-fit">
      <span className="relative z-10">{title}</span>
      <FaArrowRightLong className="relative z-10" />

      {/* Background Animation */}
      <span className="absolute inset-0 bg-[#F9F51A] transition-all duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

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
};

export default CustomButton;

