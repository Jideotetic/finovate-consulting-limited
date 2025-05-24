import * as motion from "motion/react-client";

import FAQ from "@/components/faq";

const Faq = () => {
  return (
    <>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-4 pt-30 pb-10 bg-[#c0c0c03f] min-h-screen"
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
