"use client";

import { useEffect, useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  open: boolean;
}

export default function FAQAccordion() {
  const [faq, setFaq] = useState<FAQItem[]>([
    {
      question: "What kind of businesses do you typically work with?",
      answer:
        "We specialize in working with small to medium-sized enterprises (SMEs), startups, and solopreneurs—especially those looking to scale, improve cash flow, or implement better financial and operational strategies.",
      open: false,
    },
    {
      question: "Can you help me develop a growth strategy for my business?",
      answer:
        "Yes, we help businesses create customized growth plans by aligning financial goals, operational capabilities, and market opportunities. This includes budgeting, resource planning, and milestone tracking.",
      open: false,
    },
    {
      question:
        " How do I know if I need a business consultant or just an accountant?",
      answer:
        "If you are only looking to manage your books or file taxes, an accountant may be enough. But if you are seeking to grow, solve cash flow issues, or improve operations, a business consultant provides a more broad strategic advantage.",
      open: false,
    },
    {
      question: "What financial reports should I be reviewing regularly?",
      answer:
        "At minimum, you should track your profit and loss statement, cash flow statement, and balance sheet. We implement real-time tracking and also offer custom dashboards to simplify your financial tracking.",
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaq((prevFaq) =>
      prevFaq.map((item, i) => ({
        ...item,
        open: i === index ? !item.open : false,
      }))
    );
  };

  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (faq[i].open) {
        ref.style.maxHeight = `${ref.scrollHeight}px`;
      } else {
        ref.style.maxHeight = "0px";
      }
    });
  }, [faq]);

  return (
    <div className="mt-8 space-y-4">
      {faq.map((item, index: number) => (
        <div
          key={index}
          className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
        >
          <button
            type="button"
            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            onClick={() => toggleFaq(index)}
          >
            <span className="flex text-lg font-semibold text-gray-600">
              {" "}
              {item.question}{" "}
            </span>

            <svg
              className={`w-6 h-6 text-gray-400 ${
                item.open ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className="px-4 overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: "0px" }}
          >
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
