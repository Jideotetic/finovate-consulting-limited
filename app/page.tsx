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
          </SectionContainer>
        </motion.div>
      </main>
    </>
  );
}
