import React from "react";

const Hero = () => {
  const placeholderText = `src/
├─ components/
│  └─ Header.tsx
├─ utils/
│  └─ api.ts
package.json`;
  return (
    <div className="flex flex-row min-w-screen min-h-screen">
      {/* left input part */}
      <div className="min-w-[35%] bg-[#f6f6f8]">
        <div className="p-6 flex flex-col gap-8">
          <div className="">
            <div className="">Project Details</div>
            <p className="text-sm">
              Fill in the details below to generate your comprehensive
              documentation
            </p>
          </div>
          <div className="">
            <div className="">Github repo url</div>
            <div className="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4e6797] pointer-events-none text-xl"
              >
                <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                <line x1="8" x2="16" y1="12" y2="12" />
              </svg>
              <input
                type="text"
                placeholder="https://github.com/username/repo"
                className="w-full rounded-lg border border-[#e7ebf3] bg-[#ffffff] px-4 py-3 pl-10 text-sm text-[#0e121b] placeholder:text-[#4e6797] shadow-sm transition-all focus:border-[#195de6] focus:ring-1 focus:ring-[#195de6] focus:outline-none"
              />
            </div>
          </div>
          <div className="">
            <div className="">Project Name</div>
            <input
              type="text"
              className="bg-white w-full py-3 px-4 rounded-lg border-[#e7ebf3] text-sm transition-all shadow-sm"
              placeholder="Your project name"
            />
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex justify-between flex-row">
              <div className="">Project Structure</div>
              <div className="text-sm flex items-center bg-gray-200 text-[#4e6797] px-3 font- rounded-lg">
                Paste `tree` output
              </div>
            </div>

            <textarea
              className="form-textarea w-full px-4 py-3 rounded-lg text-sm font-mono h-40 resize-y bg-white border-[#e7ebf3]"
              placeholder={placeholderText}
            />
          </div>
          <div className="">
            <div className="">Gemini Api Key</div>
            <div className="w-full relative flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-key-round-icon lucide-key-round absolute left-3 top-1/2 -translate-y-1/2"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
              <input
                type="text"
                placeholder="sk-..."
                className="bg-white w-full py-3 pl-12 pr-4 rounded-lg"
              />
            </div>
            <div className="flex flex-row items-center gap-3 mt-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"
                >
                  <circle cx="12" cy="16" r="1" />
                  <rect x="3" y="10" width="18" height="12" rx="2" />
                  <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                </svg>
              </span>
              <div className="text-sm">
                Key is stored locally in your browser.
              </div>
            </div>
          </div>
          <div className="">
            <button className="w-full flex items-center justify-center gap-2 bg-[#195de6] hover:bg-[#195de6de] text-white font-bold py-3.5 px-6 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sparkles-icon lucide-sparkles"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </span>
              Generate README
            </button>
          </div>
        </div>
      </div>
      
      <div className="">output</div>
    </div>
  );
};

export default Hero;
