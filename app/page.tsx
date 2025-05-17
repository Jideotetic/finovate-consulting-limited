import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <header>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 fixed left-0 right-0 top-0 bg-white shadow-md">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  className="dark:invert"
                  src="/finovate-logo.png"
                  alt="Finovate logo"
                  width={50}
                  height={32}
                  priority
                />
                <div className="flex flex-col text-[#008080]">
                  <span className="font-semibold text-xl leading-4">
                    FINOVATE
                  </span>
                  <span className="text-xs italic">Consulting Limited</span>
                </div>
              </Link>
            </div>

            <Popover className="group">
              <PopoverButton className="focus:outline-none inline-flex p-2 cursor-pointer text-black transition-all duration-200 rounded-md md:hidden focus:bg-gray-100 hover:bg-gray-100">
                <AiOutlineClose className="text-[#008080] text-3xl hidden group-data-[open]:block" />
                <AiOutlineMenu className="text-[#008080] text-3xl group-data-[open]:hidden" />
              </PopoverButton>
              <PopoverBackdrop
                transition
                className="fixed inset-0 bg-black/15 top-[64px] transition duration-300 ease-out data-[closed]:opacity-0"
              />
              <PopoverPanel
                transition
                className="absolute transition duration-300 ease-in-out left-0 data-[closed]:-translate-x-[100%] h-[calc(100vh-64px)] top-[64px] bg-white w-4/5 min-[425px]:w-1/2 p-4 pl-8 pb-10"
              >
                <nav>
                  <div className="flow-root">
                    <div className="flex flex-col -my-2 space-y-1">
                      <Link
                        href="#"
                        className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
                      >
                        Services
                      </Link>

                      <Link
                        href="#"
                        className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
                      >
                        Consultants
                      </Link>

                      <Link
                        href="#"
                        className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
                      >
                        Pricing
                      </Link>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#008080] border border-transparent rounded-md items-center hover:bg-[#4A4A4A] focus:bg-[#4A4A4A]"
                      role="button"
                    >
                      Get started now
                    </Link>
                  </div>
                </nav>
              </PopoverPanel>
            </Popover>

            <nav className="hidden md:flex md:items-center md:ml-auto md:space-x-10">
              <Link
                href="#"
                className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
              >
                Services
              </Link>

              <Link
                href="#"
                className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
              >
                Consultants
              </Link>

              <Link
                href="#"
                className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
              >
                Pricing
              </Link>
            </nav>

            <Link
              href="#"
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#008080] border border-transparent rounded-md md:inline-flex hover:bg-[#4A4A4A] focus:bg-[#4A4A4A]"
              role="button"
            >
              Get started now
            </Link>
          </div>
        </div>

        <div className="py-30">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold tracking-wider uppercase">
                  Lorem ipsum dolor sit amet.
                </p>
                <h1 className="mt-4 text-4xl font-bold lg:mt-8 sm:text-6xl">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className="mt-4 text-base lg:mt-8 sm:text-xl">
                  Lorem ipsum dolor sit amet.
                </p>

                {/* <a
                  href="#"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-[#008080] rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  Join for free
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a> */}

                {/* <p className="mt-5 text-gray-600">
                  Already joined us?{" "}
                  <a
                    href="#"
                    title=""
                    className="text-black transition-all duration-200 hover:underline"
                  >
                    Log in
                  </a>
                </p> */}
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
