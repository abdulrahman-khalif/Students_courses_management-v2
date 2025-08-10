import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between p-5 backdrop-filter backdrop-blur-md bg-opacity-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg text-gray-800">WEEKEND-DX</span>
      </div>

      {/* Hamburger Menu Icon for small screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none cursor-pointer"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Main Navigation (hidden on small screens, shown on medium and up) */}
      <nav
        className={`fixed inset-0 z-50 flex-col items-center justify-center transition-transform duration-300 ease-in-out md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-center md:gap-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <div className="md:hidden w-full flex justify-end p-7">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none cursor-pointer hover:text-red-500"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center gap-6 mt-10 md:flex-row md:mt-0">
          <li>
            <a
              href="#"
              className="text-2xl font-medium text-gray-700 md:text-base hover:text-emerald-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-medium text-gray-700 md:text-base hover:text-emerald-500"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-medium text-gray-700 md:text-base hover:text-emerald-500"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-medium text-gray-700 md:text-base hover:text-emerald-500"
            >
              Contact us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-2xl font-medium text-gray-700 md:text-base hover:text-emerald-500"
            >
              FAQ's
            </a>
          </li>
        </ul>

        {/* Auth Buttons for Mobile */}
        <div className="flex flex-col items-center justify-end mt-10 md:hidden">
          <button className="px-4 py-2 font-medium text-white border-2 border-transparent hover:bg-gray-600 w-full bg-gray-400">
            Sign in
          </button>
          <button className="px-5 py-2 font-semibold text-white bg-emerald-500 border border-transparent  hover:bg-emerald-600 w-full">
            Create free account
          </button>
        </div>
      </nav>

      {/* Auth Buttons for Desktop */}
      <div className="items-center hidden gap-2 md:flex">
        <button className="px-4 py-2 font-medium text-gray-700 border-2 border-transparent hover:text-emerald-500">
          Sign in
        </button>
        <button className="px-5 py-2 font-semibold text-white transition duration-300 ease-in-out bg-emerald-500 border border-transparent rounded-full hover:bg-emerald-600">
          Create free account
        </button>
      </div>
    </header>
  );
};

export default Navbar;
