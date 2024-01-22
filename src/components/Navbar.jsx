import React from "react";

const Navbar = () => {
  return (
    <section className="flex h-20 justify-center sticky top-0 z-10 bg-gray-900 shadow-xl shadow-gray-900 border-b-2">
      <div className="flex justify-between w-4/6 mx-auto max-w-5xl">
        <div className="flex items-center " to="/">
          <a href="/">
            <span className="flex text-white cursor-pointer items-center font-bold text-xl">
              <span className="text-red-500 text-3xl mb-2">Thiru</span>Portfolio
            </span>
          </a>
        </div>
        <div className=" text-white flex items-center gap-8 px-2">
          <a href="/" className=" font-bold cursor-pointer text-red-500">
            About
          </a>
          <a href="/" className=" font-bold cursor-pointer hover:text-red-500">
            Skills
          </a>
          <a href="/" className=" font-bold cursor-pointer hover:text-red-500">
            Experience
          </a>
          <a href="/" className=" font-bold cursor-pointer hover:text-red-500">
            Projects
          </a>
          <a href="/" className=" font-bold cursor-pointer hover:text-red-500">
            Education
          </a>
          <a
            href="/"
            className=" border border-red-500 rounded-lg p-2 px-4 transform duration-500 ml-20 font-bold cursor-pointer hover:bg-red-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
