import Image from "next/image";
import * as motion from "motion/react-client";

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

export default function Home() {
  return (
    <>
      <main>
        <motion.div
          initial={{ x: -99, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
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
                Our Services
              </h2>

              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="mr-2">{services[0].icon}</span>
                  {services[0].title}
                </h3>
                <p className="text-gray-700 mb-4">{services[0].description}</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {services[0].items.map((item, i) => (
                    <li className="text-gray-700" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="hidden md:block md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg"
            >
              <Image
                className="h-auto w-full rounded-lg -skew-4"
                src="/man-working-financial-report.jpg"
                alt="Man working financial report"
                width={1000}
                height={300}
                priority
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify mb-10 md:mb-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 3 }}
              className="order-2 md:col-span-3"
            >
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="mr-2">{services[1].icon}</span>
                  {services[1].title}
                </h3>
                <p className="text-gray-700 mb-4">{services[1].description}</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {services[1].items.map((item, i) => (
                    <li className="text-gray-700" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center text-justify mb-10 md:mb-20 max-w-5xl mx-auto">
            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="space-y-5 md:col-span-3 order-2 md:order-1"
            >
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="mr-2">{services[2].icon}</span>
                  {services[2].title}
                </h3>
                <p className="text-gray-700 mb-4">{services[2].description}</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {services[2].items.map((item, i) => (
                    <li className="text-gray-700" key={i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -99, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="md:col-span-2 border-2 bg-[#008080] border-[#008080] rounded-lg order-1 md:order-2"
            >
              <Image
                className="h-auto w-full rounded-lg -skew-4"
                src="/african-american.jpg"
                alt="African American"
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
