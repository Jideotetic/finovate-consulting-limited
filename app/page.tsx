import * as motion from "motion/react-client";
import SectionContainer from "@/components/section-container";

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
      <main>
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="h-screen flex items-center text-center bg-[url('/ai-generated.jpg')] bg-cover bg-no-repeat bg-center"
        >
          <SectionContainer>
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="space-y-2 text-white"
            >
              <h1 className="text-4xl font-extrabold md:text-5xl">
                FINOVATE Consulting Limited
              </h1>
              <p className="italic">Empowering your financial strategies</p>
            </motion.div>
          </SectionContainer>
        </motion.div>

        <div className="bg-white py-12 text-center">
          <SectionContainer>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h2 className="text-3xl font-extrabold text-[#008080]">
                Why Choose Us
              </h2>

              <p className="text-gray-700 max-w-lg mx-auto mb-12 mt-8">
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
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        </div>

        {/* TESTIMONIAL */}

        <div className="bg-gray-50 py-16 text-center">
          <SectionContainer>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h2 className="text-3xl font-extrabold text-[#008080]">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 text-left mt-8">
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
          </SectionContainer>
        </div>
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
                    className="block w-full p-4  placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
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
                    className="block w-full p-4  placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
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
