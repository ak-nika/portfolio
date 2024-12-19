import { useState } from "react";
import { profile } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-5 py-3 sticky top-0">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-center items-center gap-3">
          <img src={profile} alt="profile" className="w-10 h-10 rounded-full" />
          <a href="#">Akingbayi Ojo</a>
        </div>

        {/* Menu Button (Mobile) */}
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation as */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-5 md:space-y-0 md:space-x-5 absolute md:static bg-black md:bg-transparent top-14 left-0 w-full md:w-auto p-5 md:p-0`}
        >
          <a
            href=""
            className="block md:inline hover:text-grey transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#"
            className="block md:inline hover:text-grey transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="block md:inline hover:text-grey transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          {/* <a
            href="#"
            className="block md:inline hover:text-grey transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
