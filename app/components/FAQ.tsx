"use client";
import { useState } from "react";

const faqs = [
  { q: "What is ADmyBRAND AI Suite?", a: "It's an AI-powered platform for marketing automation and analytics." },
  { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial with full features." },
  { q: "Can I cancel anytime?", a: "Absolutely, there are no long-term contracts." },
  { q: "Do you offer enterprise solutions?", a: "Yes, we provide custom pricing and integrations for enterprises." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => toggleFAQ(i)}
          >
            <h4 className="font-semibold text-lg flex justify-between items-center text-blue-600">
              {faq.q}
              <span className="text-gray-500 text-2xl leading-none">
                {openIndex === i ? "−" : "+"}
              </span>
            </h4>
            {openIndex === i && (
              <p className="text-gray-800 mt-2">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
