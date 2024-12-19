const Button = ({ children, className, to }) => {
  return (
    <button
      className={`py-3 px-4 pr-10 rounded-full border border-white hover:text-black hover:bg-white transition-colors flex justify-center items-center gap-3 relative group overflow-hidden ${
        className || ""
      }`}
    >
      {children}

      <div className="rotate-45 flex flex-col items-baseline gap-5 absolute right-7 top-[10px] group-hover:-translate-y-7 group-hover:translate-x-7 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#ffffff"
        >
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#000000"
        >
          <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
        </svg>
      </div>
    </button>
  );
};

export default Button;
