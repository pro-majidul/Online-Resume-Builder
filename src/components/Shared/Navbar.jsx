import React from "react";

const Navbar = () => {

  const user = 1;

  const navBar = <>

  <a href="" className="hover:text-white"><li>Home</li></a>
  <a href="" className="hover:text-white"><li>My Resume</li></a>
  <a href="" className="hover:text-white"><li>Templates</li></a>
  <a href="" className="hover:text-white"><li>About Us</li></a>
  <a href="" className="hover:text-white"><li>Contact Us</li></a>
  
  </>


  return (
    <div className="w-11/12 mx-auto py-5  flex justify-between items-center ">
      {/* logo */}
      <div>
        <a href="/">
        <h1 className="font-black text-2xl  ">
          Resume<span className="font-extrabold text-gray-300">Builder</span>
        </h1>
        </a>
      </div>

      {/* Page route */}
      <div className="hidden md:block">
        <ul className="flex gap-3 text-gray-300 ">
          {navBar}
        </ul>
      </div>

      {/* user log in/out */}
      <div>
        {
          !user 
          ? <button className="border-2 border-rose-600 px-3 py-1 rounded-3xl">Sign Out</button>
          : <button className="border-2 border-rose-600 px-3 py-1 rounded-3xl">Sign Up</button>
        }
      </div>
    </div>
  );
};

export default Navbar;
