import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center justify-between absolute w-full p-4 z-[100]">
      <Link to="/">
        <h1 className="text-red-600 text-bold text-4xl cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white rounded cursor-pointer mr-4">
              Account
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 rounded py-2 px-6 cursor-pointer"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white rounded cursor-pointer mr-4">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-white bg-red-600 rounded py-2 px-6 cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
