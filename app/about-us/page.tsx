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

const navigation = [
  { name: "About Us", href: "about-us" },
  { name: "Our Services", href: "#services" },
  { name: "Contact Us", href: "#contact" },
  { name: "FAQ", href: "#faq" },
];

const approach = [
  "Technology-enabled Operations",
  "Data-driven Insights",
  "Client-first Service",
];

export default function Home() {
  return (
    <>
      <header className="">
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

      <main>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#c0c0c03f] py-12 px-4 pt-30 text-center text-gray-600"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify mb-10 md:mb-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="space-y-5 md:col-span-3"
            >
              <h2 className="text-3xl font-extrabold text-[#008080]">
                About Us
              </h2>
              <p>
                At <span className="font-semibold">Finovate Consulting</span>,
                we exist to empower small and medium-sized enterprises (SMEs),
                startups, and solopreneurs with the clarity, control, and
                confidence they need to grow sustainably and profitably.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="hidden md:block md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg"
            >
              <Image
                className="h-auto w-full rounded-lg -skew-4"
                src="/business-colleagues.jpg"
                alt="COlleagues sitting in a round table"
                width={1000}
                height={300}
                priority
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify max-w-5xl mx-auto">
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="order-2 md:col-span-3"
            >
              We are rooted in the belief that every business deserves expert
              support, we offer a full suite of services including{" "}
              <strong>Bookkeeping</strong>, <strong>Accounting</strong>,{" "}
              <strong>Financial Advisory</strong>,{" "}
              <strong>Data & Business Analysis</strong>, and{" "}
              <strong>Tax Solutions</strong>, each tailored to meet the unique
              needs of every client.
            </motion.div>

            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="order-1 md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg"
            >
              <Image
                className="h-auto w-full rounded-lg skew-4"
                src="/ai-generated.jpg"
                alt="Finovate logo"
                width={1000}
                height={300}
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto py-20 px-4 text-center text-gray-600"
        >
          <motion.div
            initial={{ x: -99, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <h2 className="text-xl font-semibold text-gray-600 md:hidden mb-5">
              Our approach is simple
            </h2>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28"
            >
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </motion.div>

            <div className="relative grid grid-cols-1 text-center gap-y-6 md:grid-cols-3 gap-x-12">
              {approach.map((value, index) => {
                return (
                  <motion.div
                    initial={{ x: -99, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2 }}
                    key={index}
                  >
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        {++index}{" "}
                      </span>
                    </div>
                    <h3 className="mt-4 font-medium">{value}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#c0c0c03f] px-4 py-20 text-center text-gray-600"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify mb-10 md:mb-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="space-y-5 md:col-span-3 order-2 md:order-1"
            >
              <h3 className="text-xl font-semibold">🌍 Our Vision</h3>
              <p>
                To be the trusted global partner for small and medium scale
                businesses, empowering them with data-driven financial insights
                and strategic advisory services to drive sustainable growth,
                efficiency, and profitability.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg order-1 md:order-2"
            >
              <Image
                className="h-auto w-full rounded-lg -skew-4"
                src="/retinal.jpg"
                alt="A eye"
                width={1000}
                height={300}
                priority
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify max-w-5xl mx-auto">
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="space-y-5 md:col-span-3 order-2"
            >
              <h3 className="text-xl font-semibold">🎯 Our Mission</h3>
              <p>
                Our mission is to provide tailored Bookkeeping, Accounting,
                Financial Advisory, Data Analysis, Business Analysis, and Tax
                solutions that help businesses streamline operations, make
                informed decisions, and achieve financial success. We leverage
                technology, deep industry expertise, and a client-first approach
                to deliver exceptional value and measurable results.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="order-1 md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg"
            >
              <Image
                className="h-auto w-full rounded-lg skew-4"
                src="/hand-shake.jpg"
                alt="People placing hand on to each other"
                width={1000}
                height={300}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
