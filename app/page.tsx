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

export default function Home() {
  return (
    <>
      <header className="h-screen text-black bg-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md w-full fixed left-0 right-0 top-0 z-50"
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    className="h-auto w-17"
                    src="/finovate.svg"
                    alt="Finovate logo"
                    width={0}
                    height={0}
                    priority
                  />
                </Link>
              </div>

              <Popover className="group">
                <PopoverButton className="focus:outline-none inline-flex p-2 cursor-pointer text-black transition-all duration-200 rounded-md md:hidden focus:bg-gray-100 hover:bg-gray-100">
                  <AiOutlineClose className="text-[#008080] text-3xl hidden group-data-[open]:block" />
                  <AiOutlineMenu className="text-[#008080] text-3xl group-data-[open]:hidden" />
                </PopoverButton>
                <PopoverBackdrop
                  transition
                  className="fixed inset-0 bg-black/70 top-[64px] transition duration-300 ease-out data-[closed]:opacity-0"
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
                          href="#about-us"
                          className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                        >
                          About Us
                        </CloseButton>
                        <CloseButton
                          as={Link}
                          href="#services"
                          className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                        >
                          Our Services
                        </CloseButton>
                        <CloseButton
                          as={Link}
                          href="#contact"
                          className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                        >
                          Contact Us
                        </CloseButton>
                        <CloseButton
                          as={Link}
                          href="#faq"
                          className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                        >
                          FAQ
                        </CloseButton>
                      </div>
                    </div>
                  </nav>
                </PopoverPanel>
              </Popover>

              <nav className="hidden md:flex md:items-center md:ml-auto md:space-x-10">
                <Link
                  href="#about-us"
                  className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                >
                  About Us
                </Link>
                <Link
                  href="#services"
                  className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                >
                  Our Services
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                >
                  Contact Us
                </Link>
                <Link
                  href="#faq"
                  className="inline-flex py-2 text-base font-medium transition-all duration-200 text-black hover:text-[#008080] focus:text-[#008080]"
                >
                  FAQ
                </Link>
              </nav>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-full flex justify-center items-center py-20 md:pt-30 bg-[url('/ai-generated.jpg')] bg-no-repeat bg-cover bg-center"
        >
          <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
            <div className="grid items-center grid-cols-1 md:grid-cols-2">
              <div>
                <h1 className="mt-4 text-4xl font-medium md:text-5xl text-[#008080]">
                  FINOVATE Consulting Limited
                </h1>
                <p className="mt-2 text-base font-normal text-[#C0C0C0]">
                  Empowering your financial strategies
                </p>
                <p className="mt-4 text-base font-normal text-[#C0C0C0]">
                  We are a team of experienced consultants dedicated to
                  providing top-notch consulting services to help your business
                  thrive.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <main>
        <section className="bg-white py-12 sm:py-16 lg:py-20" id="about-us">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold leading-tight text-[#008080] sm:text-4xl xl:text-5xl font-pj">
                About Us
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 mt-10 text-center">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                At <span className="font-semibold">Finovate Consulting</span>,
                we exist to empower small and medium-sized enterprises (SMEs),
                startups, and solopreneurs with the clarity, control, and
                confidence they need to grow sustainably and profitably.
              </p>

              <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-8">
                Rooted in the belief that every business deserves expert
                support, we offer a full suite of services including{" "}
                <strong>Bookkeeping</strong>, <strong>Accounting</strong>,{" "}
                <strong>Financial Advisory</strong>,{" "}
                <strong>Data & Business Analysis</strong>, and{" "}
                <strong>Tax Solutions</strong>, each tailored to meet the unique
                needs of every client.
              </p>
            </div>

            {/* Approach Icons */}
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-16">
              <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">📊</div>
                <div className="font-semibold text-gray-800">
                  Data-driven Insights
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">💡</div>
                <div className="font-semibold text-gray-800">
                  Technology-enabled Operations
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">🤝</div>
                <div className="font-semibold text-gray-800">
                  Client-first Service
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-12 text-left text-gray-700">
              <div>
                <h3 className="text-2xl font-bold mb-4">🌍 Vision</h3>
                <p>
                  To be the trusted global partner for small and medium scale
                  businesses, empowering them with data-driven financial
                  insights and strategic advisory services to drive sustainable
                  growth, efficiency, and profitability.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">🎯 Mission</h3>
                <p>
                  Our mission is to provide tailored Bookkeeping, Accounting,
                  Financial Advisory, Data Analysis, Business Analysis, and Tax
                  solutions that help businesses streamline operations, make
                  informed decisions, and achieve financial success. We leverage
                  technology, deep industry expertise, and a client-first
                  approach to deliver exceptional value and measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-12 sm:py-16 lg:py-20" id="services">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold leading-tight text-[#008080] sm:text-4xl xl:text-5xl font-pj">
                Our Core Services
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 mt-10 text-center sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3">
              {services.map((service, idx) => (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  key={idx}
                  className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    <span className="mr-2 text-2xl">{service.icon}</span>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="list-disc list-inside text-gray-800 mb-4">
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold leading-tight text-[#008080] sm:text-4xl xl:text-5xl font-pj">
                Why Choose Us
              </h2>

              <p className="text-gray-600 max-w-lg mx-auto mb-12 mt-8">
                We&apos;re more than just consultants, we&apos;re long-term
                partners invested in your growth. Here&apos;s what sets us
                apart:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 text-left">
              {benefits.map((item, idx) => (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  key={idx}
                  className="flex items-start"
                >
                  <div className="text-3xl mr-4">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {testimonials.map((t, idx) => (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{t.name}</span> — {t.role}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FAQAccordion />
      </main>

      <footer className="py-10 bg-[#4A4A4A] text-white" id="contact">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-16 gap-x-12">
            <div className="sm:col-span-2">
              <form action="#" className="mt-6">
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
