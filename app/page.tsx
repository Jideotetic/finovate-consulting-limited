import Image from "next/image";

export default function Home() {
  return (
    // <div classNameName="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main classNameName="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       classNameName="dark:invert"
    //       src="/finovate-logo.png"
    //       alt="Finovate logo"
    //       width={60}
    //       height={40}
    //       priority
    //     />
    //     <ol classNameName="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li classNameName="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code classNameName="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li classNameName="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div classNameName="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         classNameName="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           classNameName="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         classNameName="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer classNameName="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       classNameName="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>

    <header className="pb-6 bg-[#008080] lg:pb-0 text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <!-- lg+ --> */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="/" title="" className="flex items-center">
              <Image
                className="dark:invert"
                src="/finovate-logo.png"
                alt="Finovate logo"
                width={50}
                height={32}
                priority
              />
              <div className="flex flex-col">
                <span className="font-semibold text-xl leading-4">
                  FINOVATE
                </span>
                <span className="text-xs italic">Consulting Limited</span>
              </div>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100 border-2 border-red-500"
          >
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>

            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            <svg
              className="hidden w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="#"
              title=""
              className="text-base font-medium transition-all duration-200 hover:text-[#C0C0C0] focus:text-[#C0C0C0]"
            >
              {" "}
              Features{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium transition-all duration-200 hover:text-[#C0C0C0] focus:text-[#C0C0C0]"
            >
              {" "}
              Services{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium transition-all duration-200 hover:text-[#C0C0C0] focus:text-[#C0C0C0]"
            >
              {" "}
              Resources{" "}
            </a>

            <a
              href="#"
              title=""
              className="text-base font-medium transition-all duration-200 hover:text-[#C0C0C0] focus:text-[#C0C0C0]"
            >
              {" "}
              Pricing{" "}
            </a>
          </div>

          <a
            href="#"
            title=""
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#C0C0C0] border border-transparent rounded-md lg:inline-flex hover:bg-[#4A4A4A] focus:bg-blue-700"
            role="button"
          >
            {" "}
            Get started now{" "}
          </a>
        </nav>

        {/* <!-- xs to lg --> */}
        <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>
          </div>

          <div className="px-6 mt-6">
            <a
              href="#"
              title=""
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Get started now{" "}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
