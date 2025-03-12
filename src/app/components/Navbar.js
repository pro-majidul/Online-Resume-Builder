import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
      <div>
        <h3>Logo</h3>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-5">
          <li>Home</li>
          <li>My Resume</li>
          <li>Templates</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
