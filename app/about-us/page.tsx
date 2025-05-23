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
import FAQAccordion from "@/components/faq";
import SectionContainer from "@/components/section-container";
import { BiCheckCircle } from "react-icons/bi";

const services = [
  {
    title: "Accounting Services",
    icon: "📘",
    description: "Keep your finances accurate, compliant, and stress-free.",
    items: [
      "Bookkeeping",
      "Outsourced Accounting",
      "Cloud Accounting",
      "Payroll Processing",
      "Tax Services",
    ],
  },
  {
    title: "Financial Consulting",
    icon: "📊",
    description:
      "Make smarter decisions with data-backed financial strategies.",
    items: [
      "Financial modeling and analysis",
      "Budget planning",
      "Business valuation",
      "Business funding",
    ],
  },
  {
    title: "Business Consulting",
    icon: "🧭",
    description: "Optimize and grow with tailored business solutions.",
    items: [
      "Workflow automation",
      "Business process mapping and optimization",
      "Change management",
      "Business plan development",
    ],
  },
];

const benefits = [
  {
    title: "Expert-Led Services",
    description:
      "Our team is made up of seasoned professionals with real-world experience in finance, accounting, and business operations.",
    icon: "🎓",
  },
  {
    title: "Tailored Solutions",
    description:
      "We don’t believe in one-size-fits-all. Every client receives custom strategies built around their goals.",
    icon: "🧩",
  },
  {
    title: "Reliable & Transparent",
    description:
      "We value clear communication, on-time delivery, and honest advice. No surprises — just results.",
    icon: "🔍",
  },
  {
    title: "Tech-Enabled Efficiency",
    description:
      "We leverage modern tools like cloud accounting, automation, and financial modeling to boost your business’s performance.",
    icon: "⚙️",
  },
];

const testimonials = [
  {
    name: "Sarah A.",
    role: "Founder, StartUpHub",
    quote:
      "They streamlined our accounting and helped us raise funding faster with their financial models. A game-changer.",
  },
  {
    name: "David M.",
    role: "COO, GreenScale Inc.",
    quote:
      "Working with them was seamless, our business processes are now 30% more efficient. Highly recommend!",
  },
  {
    name: "Lisa T.",
    role: "CEO, BlueWave Analytics",
    quote:
      "Professional, responsive, and incredibly knowledgeable. We trust them with everything finance-related.",
  },
];

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
        <div className="bg-[#c0c0c03f] py-12 px-4 pt-30 text-center text-gray-600">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify mb-10 md:mb-20 max-w-5xl mx-auto">
            <div className="space-y-5 md:col-span-3">
              <h2 className="text-3xl font-extrabold text-[#008080]">
                About Us
              </h2>
              <p>
                At <span className="font-semibold">Finovate Consulting</span>,
                we exist to empower small and medium-sized enterprises (SMEs),
                startups, and solopreneurs with the clarity, control, and
                confidence they need to grow sustainably and profitably.
              </p>
            </div>
            <div className="hidden md:block md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg">
              <Image
                className="h-auto w-full rounded-lg -skew-4"
                src="/ai-generated.jpg"
                alt="Finovate logo"
                width={1000}
                height={0}
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify max-w-5xl mx-auto">
            <p className="order-2 md:col-span-3">
              We are rooted in the belief that every business deserves expert
              support, we offer a full suite of services including{" "}
              <strong>Bookkeeping</strong>, <strong>Accounting</strong>,{" "}
              <strong>Financial Advisory</strong>,{" "}
              <strong>Data & Business Analysis</strong>, and{" "}
              <strong>Tax Solutions</strong>, each tailored to meet the unique
              needs of every client.
            </p>

            <div className="order-1 md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg">
              <Image
                className="h-auto w-full rounded-lg skew-4"
                src="/ai-generated.jpg"
                alt="Finovate logo"
                width={1000}
                height={0}
                priority
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-12 pt-20 px-4 text-center text-gray-600">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-[#008080]">About Us</h2>
          </motion.div>

          <div className="space-y-5 mt-10 text-justify max-w-2xl mx-auto text-gray-700">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              At <span className="font-semibold">Finovate Consulting</span>, we
              exist to empower small and medium-sized enterprises (SMEs),
              startups, and solopreneurs with the clarity, control, and
              confidence they need to grow sustainably and profitably.
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Rooted in the belief that every business deserves expert support,
              we offer a full suite of services including{" "}
              <strong>Bookkeeping</strong>, <strong>Accounting</strong>,{" "}
              <strong>Financial Advisory</strong>,{" "}
              <strong>Data & Business Analysis</strong>, and{" "}
              <strong>Tax Solutions</strong>, each tailored to meet the unique
              needs of every client.
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="my-5 space-y-5 max-w-2xl mx-auto text-gray-700"
          >
            <p className="text-left">Our approach is simple</p>

            <ul className="space-y-2">
              {approach.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <BiCheckCircle className="h-6 w-6 text-[#008080] flex-shrink-0 mt-1" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="text-justify text-gray-700 max-w-2xl mx-auto space-y-5">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold text-center">
                🌍 Our Vision
              </h3>
              <p>
                To be the trusted global partner for small and medium scale
                businesses, empowering them with data-driven financial insights
                and strategic advisory services to drive sustainable growth,
                efficiency, and profitability.
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold text-center">
                🎯 Our Mission
              </h3>
              <p>
                Our mission is to provide tailored Bookkeeping, Accounting,
                Financial Advisory, Data Analysis, Business Analysis, and Tax
                solutions that help businesses streamline operations, make
                informed decisions, and achieve financial success. We leverage
                technology, deep industry expertise, and a client-first approach
                to deliver exceptional value and measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
