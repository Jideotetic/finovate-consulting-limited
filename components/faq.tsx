"use client";

import React, { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with startups, small businesses, and growing enterprises across industries including tech, retail, services, and more.",
  },
  {
    question: "Do you offer one-time or ongoing services?",
    answer:
      "Both! We offer ongoing accounting and consulting plans, as well as one-time financial analysis, valuations, or business plan support.",
  },
  {
    question: "What tools or platforms do you support?",
    answer:
      "We support QuickBooks, Xero, Excel-based modeling, and cloud tools like Gusto, Stripe, HubSpot, and others.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simple! Just book a free consultation and we’ll assess your needs, then tailor a service package for your goals.",
  },
];

const FAQAccordion: React.FC = () => {
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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
