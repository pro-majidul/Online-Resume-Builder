"use client";  // 👈 Add this to make it a Client Component
import Image from "next/image";
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactPage = () => {
  const handleContactForm = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="container mx-auto px-10 py-8">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2">
        {/* Left - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-bold">Have Questions? We Have Answers!</h2>
          <p className="text-gray-600 mt-4">
            Need help crafting the perfect resume? Unsure about AI-generated suggestions? 
            Facing technical issues? You’ve come to the right place! We’re here to assist you.
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src="/contactus3.svg" height={300} width={400} alt="Contact Illustration" />
        </div>
      </div>

      {/* Contact Form & Info Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 bg-black/5 p-10 rounded-lg shadow-lg mt-10">
      
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-4" onSubmit={handleContactForm}>
            <label className="block">
              <span className="text-gray-700">Your Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gary-600 mt-1"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Your Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 mt-1"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Your Message</span>
              <textarea
                placeholder="Enter your message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 mt-1"
              ></textarea>
            </label>

            <button className="w-full bg-[#20252D] text-white py-3 rounded-md hover:bg-[#20252D]/90 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Icons */}
        <div className="w-full md:w-1/2 flex flex-col ">
        <div className=" flex justify-center">
          <Image src="/contactus2.svg" height={200} width={300} alt="Contact Illustration" />
        </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#20252D] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-gray-600">123 Resume Street, Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhone className="text-[#20252D] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#20252D] text-3xl" />
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-600">support@resumebuilder.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactPage;
