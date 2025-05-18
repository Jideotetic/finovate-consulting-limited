import {
  CloseButton,
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
      <header className="h-screen">
        <div className="bg-white shadow-md w-full fixed left-0 right-0 top-0">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/finovate-logo.png"
                    alt="Finovate logo"
                    width={40}
                    height={0}
                    style={{ width: "auto", height: "auto" }}
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
                  className="absolute transition duration-300 ease-in-out left-0 data-[closed]:-translate-x-[100%] h-[calc(100vh-64px)] top-[64px] bg-white w-4/5 min-[425px]:w-1/2 p-4 pl-6 pb-10"
                >
                  <nav>
                    <div className="flow-root">
                      <div className="flex flex-col -my-2 space-y-1">
                        <CloseButton
                          as={Link}
                          href="#"
                          className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
                        >
                          Services
                        </CloseButton>

                        <CloseButton
                          as={Link}
                          href="#"
                          className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
                        >
                          Consultants
                        </CloseButton>
                      </div>
                    </div>

                    <div className="mt-6">
                      <CloseButton
                        as={Link}
                        href="#book-a-session"
                        className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#008080] border border-transparent rounded-md items-center hover:bg-[#4A4A4A] focus:bg-[#4A4A4A]"
                        role="button"
                      >
                        Book a Session
                      </CloseButton>
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
              </nav>

              <Link
                href="#book-a-session"
                className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#008080] border border-transparent rounded-md md:inline-flex hover:bg-[#4A4A4A] focus:bg-[#4A4A4A]"
                role="button"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full flex justify-center items-center py-20 md:pt-30 bg-[url('/ai-generated.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h1 className="mt-4 text-4xl font-medium md:text-5xl text-[#008080]">
                  FINOVATE Consulting Limited
                </h1>
                <p className="mt-4 text-base font-normal text-[#C0C0C0]">
                  We are a team of experienced consultants dedicated to
                  providing top-notch consulting services to help your business
                  thrive.
                </p>
                <div className="mt-6">
                  <Link
                    href="#book-a-session"
                    className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#008080] border border-transparent rounded-md items-center hover:bg-[#4A4A4A] focus:bg-[#4A4A4A]"
                    role="button"
                  >
                    Book a Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-[#C0C0C0] border-2 border-red-500">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 border-2 border-green-500">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto, consequatur corrupti? Mollitia non, corrupti in,
            molestias expedita natus doloremque est dicta nostrum dignissimos
            omnis perferendis molestiae dolores sapiente minus dolorum.
          </p>
        </div>
      </main>

      <footer className="py-10 bg-[#4A4A4A] text-white" id="book-a-session">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-16 gap-x-12">
            <div className="sm:col-span-2">
              <form action="#" className="mt-6">
                <p>Send a message to book a session</p>
                <div className="mt-3">
                  <label htmlFor="email" className="">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="message" className="">
                    Enter your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder=" Enter your message"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-3 mt-3 text-base font-semibold text-white transition-all duration-200 bg-[#008080] border border-transparent rounded-md items-center hover:bg-[#C0C0C0] focus:bg-[#C0C0C0] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <p className="text-sm text-center text-gray-600">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
