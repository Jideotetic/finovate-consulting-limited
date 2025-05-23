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
import * as motion from "motion/react-client";
import SectionContainer from "@/components/section-container";
import FAQ from "@/components/faq";

const navigation = [
  { name: "About Us", href: "about-us" },
  { name: "Our Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
  { name: "FAQ", href: "faq" },
];

const Faq = () => {
  return (
    <>
      <header>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md w-full fixed left-0 right-0 top-0 z-50"
        >
          <SectionContainer>
            <div className="flex items-center justify-between h-20">
              <Link href="/" className="shrink-0">
                <Image
                  className="h-auto w-17"
                  src="/finovate.svg"
                  alt="Finovate logo"
                  width={0}
                  height={0}
                  priority
                />
              </Link>

              {/* Mobile Navigation */}
              <Popover className="group">
                <PopoverButton className="focus:outline-none inline-flex p-2 text-3xl cursor-pointer transition-all duration-200 rounded-md md:hidden focus:bg-gray-300 hover:bg-gray-300">
                  <AiOutlineClose className="text-[#008080] hidden group-data-[open]:block" />
                  <AiOutlineMenu className="text-[#008080] group-data-[open]:hidden" />
                </PopoverButton>
                <PopoverBackdrop
                  transition
                  className="fixed inset-0 bg-black/70 top-20 transition duration-300 ease-out data-[closed]:opacity-0"
                />
                <PopoverPanel
                  transition
                  className="absolute transition duration-300 ease-in-out left-0 data-[closed]:-translate-x-[100%] h-[calc(100vh-80px)] top-20 bg-white w-4/5 min-[425px]:w-1/2 p-4 pl-6 pb-10"
                >
                  <nav className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <CloseButton
                        as={Link}
                        key={item.name}
                        href={item.href}
                        className="font-medium transition-all duration-200 hover:text-[#C0C0C0] focus:text-[#C0C0C0] text-[#008080]"
                      >
                        {item.name}
                      </CloseButton>
                    ))}
                  </nav>
                </PopoverPanel>
              </Popover>

              {/* Desktop Navigation */}
              <nav className="hidden md:block md:space-x-10">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium transition-all duration-200 hover:text-[#C0C0C0] focus:text-[#C0C0C0] text-[#008080]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </SectionContainer>
        </motion.div>
      </header>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-4 py-30 bg-[#c0c0c03f] min-h-screen"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#008080]">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQ />

          <p className="text-center text-gray-600 textbase mt-9">
            Didn’t find the answer you are looking for?{" "}
            <a
              href="#"
              title=""
              className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Contact our support
            </a>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Faq;
