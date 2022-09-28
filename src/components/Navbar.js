import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between absolute w-full p-4 z-[100]">
      <h1 className="text-red-600 text-bold text-4xl cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-white rounded cursor-pointer mr-4">
          Sign In
        </button>
        <button className="text-white bg-red-600 rounded py-2 px-6 cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
