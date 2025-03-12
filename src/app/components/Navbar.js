import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center my-5 justify-between w-full max-w-7xl mx-auto">
      <div>
        <h3 className="text-3xl font-bold">Resume Maker</h3>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-5">
          <li>Home</li>
          <li>My Resume</li>
          <li>Templates</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Contact </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="border-2 p-2 m-10 bg-amber-300">Sign In</button>
        <button className="border-2 p-2 m-10 bg-amber-300">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
