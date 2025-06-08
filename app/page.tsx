import * as motion from "motion/react-client";
import SectionContainer from "@/components/section-container";

const testimonials = [
  {
    name: "Ozemoya O",
    role: "Director, Ozykay Investments",
    quote:
      "Partnering with Finovate Consulting has been one of the most important decisions we made at Ozykay Investment Ltd and a game-changing factor in our evolution as an SME. They helped us improve our financial tracking and reporting efficiency by 60%, grew our cash flow and enabled us gain invaluable insights on performance. Their professionalism, attention to detail, and strategic advisory have been invaluable. Finovate Consulting is a beneficial partner in our growth journey!",
  },
  {
    name: "Osahon E",
    role: "Founder, Michènos luxury",
    quote:
      "Working with Finovate Consulting has been a game changer for our business. As a brand focused on luxury and detail, we needed a financial partner who could match that level of precision, and they delivered. Streamlining our inventory and timely financial reports, allowing us focus on growth and creativity, knowing our numbers are in trusted hands.",
  },
];

const consultants = [
  {
    name: "Jerome Bell",
    role: "Co-founder, Chairman, Executive Director",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png",
  },
  {
    name: "Jane Doe",
    role: "Senior Consultant",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png",
  },
  {
    name: "John Smith",
    role: "Financial Analyst",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png",
  },
  {
    name: "Emily Johnson",
    role: "Operations Manager",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <motion.div
          initial={{ x: -99, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-screen flex items-center text-center bg-[url('/ai-generated.jpg')] bg-cover bg-no-repeat bg-center"
        >
          <SectionContainer>
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="space-y-2 text-white"
            >
              <h1 className="text-4xl font-extrabold md:text-5xl">
                FINOVATE Consulting Limited
              </h1>
              <p className="italic">Empowering your financial strategies</p>
            </motion.div>
          </SectionContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#c0c0c03f] py-12 text-center"
        >
          <SectionContainer>
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <h2 className="text-3xl font-extrabold text-[#008080]">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  initial={{ x: -99, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 3 }}
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
                >
                  <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{t.name}</span> — {t.role}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="mt-12"
            >
              <h2 className="text-3xl font-extrabold text-[#008080]">
                Our Consultants
              </h2>
            </motion.div>

            <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
              {consultants.map((c, idx) => (
                <motion.div
                  initial={{ x: -99, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 3 }}
                  key={idx}
                  // className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                    src={c.image}
                    alt={c.name}
                  />
                  <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                    {c.name}
                  </p>
                  <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                    {c.role}
                  </p>
                </motion.div>
              ))}
            </div> */}
          </SectionContainer>
        </motion.div>
      </main>

      {/* <footer className="py-10 bg-[#4A4A4A] text-white" id="contact">
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
      </footer> */}
    </>
  );
}
