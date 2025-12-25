import React from "react";

const Header = () => {
  return (
    <div>
      <div className="min-w-screen bg-white border-b-2 border-[#e7ebf3] flex justify-between px-7 py-4">
        <div className="flex gap-3">
          <div className="">Logo</div>
          <div className="">Readme.ify</div>
        </div>
        <div className="flex gap-6 text-[#4e6797] items-center">
          <button className="cursor-pointer">How it works</button>
          <button className="cursor-pointer">Github Repo</button>
          <button className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-moon-icon lucide-moon"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
