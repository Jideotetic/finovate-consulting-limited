"use client";

import React, { useState, useRef, useEffect } from "react";
import * as motion from "motion/react-client";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of businesses do you typically work with?",
    answer:
      "We specialize in working with small to medium-sized enterprises (SMEs), startups, and solopreneurs—especially those looking to scale, improve cash flow, or implement better financial and operational strategies.",
  },
  {
    question: "Can you help me develop a growth strategy for my business?",
    answer:
      "Yes, we help businesses create customized growth plans by aligning financial goals, operational capabilities, and market opportunities. This includes budgeting, resource planning, and milestone tracking.",
  },
  {
    question:
      " How do I know if I need a business consultant or just an accountant?",
    answer:
      "If you are only looking to manage your books or file taxes, an accountant may be enough. But if you are seeking to grow, solve cash flow issues, or improve operations, a business consultant provides a more broad strategic advantage.",
  },
  {
    question: "What financial reports should I be reviewing regularly?",
    answer:
      "At minimum, you should track your profit and loss statement, cash flow statement, and balance sheet. We implement real-time tracking and also offer custom dashboards to simplify your financial tracking.",
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;
      if (index === activeIndex) {
        ref.style.maxHeight = `${ref.scrollHeight}px`;
      } else {
        ref.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4" id="faq">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              key={index}
              className="border rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="px-6 overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: "0px" }}
              >
                <div className="pb-4 text-gray-700">{faq.answer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
