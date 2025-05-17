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
      <header>
        <div className="bg-white shadow-md w-full fixed left-0 right-0 top-0">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
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

                        <CloseButton
                          as={Link}
                          href="#"
                          className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-[#008080] focus:text-[#008080]"
                        >
                          Pricing
                        </CloseButton>
                      </div>
                    </div>

                    <div className="mt-6">
                      <CloseButton
                        as={Link}
                        href="#"
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
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        <div className="py-20 md:pt-30">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 md:px-8">
            <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <h1 className="mt-4 text-4xl font-medium md:text-5xl">
                  FINOVATE Consulting Limited
                </h1>
                <p className="mt-4 text-base font-normal text-gray-600">
                  We are a team of experienced consultants dedicated to
                  providing top-notch consulting services to help your business
                  thrive.
                </p>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#008080] border border-transparent rounded-md items-center hover:bg-[#4A4A4A] focus:bg-[#4A4A4A]"
                    role="button"
                  >
                    Book a Session
                  </Link>
                </div>
              </div>

              <div className="hidden  md:block">
                <Image
                  className="w-full"
                  width={300}
                  height={0}
                  priority
                  src="/finovate-logo.png"
                  alt=""
                />
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
    </>
  );
}
