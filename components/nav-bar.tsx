"use client";

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
import SectionContainer from "@/components/section-container";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "About Us", href: "about-us" },
  { name: "Our Services", href: "our-services" },
  { name: "FAQ", href: "faq" },
];

export default function NavBar() {
  const pathname = usePathname();
  return (
    <SectionContainer>
      <div className="flex items-center justify-between h-20">
        <Link href="/" className="shrink-0">
          <Image
            className="h-auto w-15"
            src="/finovate.jpeg"
            alt="Company logo"
            width={68}
            height={49}
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
              {NAV_LINKS.map((link) => (
                <CloseButton
                  as={Link}
                  key={link.name}
                  href={link.href}
                  className={`${
                    pathname.includes(link.href) && "font-extrabold"
                  } transition-all duration-200 hover:text-[#C0C0C0] text-[#008080]`}
                >
                  {link.name}
                </CloseButton>
              ))}
            </nav>
          </PopoverPanel>
        </Popover>

        {/* Desktop Navigation */}
        <nav className="hidden md:block md:space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${
                pathname.includes(link.href) && "font-extrabold"
              } transition-all duration-200 hover:text-[#C0C0C0] text-[#008080]`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </SectionContainer>
  );
}
