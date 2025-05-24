import Image from "next/image";
import * as motion from "motion/react-client";

const approach = [
  "Technology-enabled Operations",
  "Data-driven Insights",
  "Client-first Service",
];

export default function About() {
  return (
    <>
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
              <Image
                className="w-full"
                src="/curved-dotted-line.svg"
                alt="Curved dotted line"
                width={0}
                height={0}
                priority
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
