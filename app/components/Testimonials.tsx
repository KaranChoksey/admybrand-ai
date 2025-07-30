"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import Card from "./Card";

const testimonials = [
  {
    name: "John Doe",
    role: "Marketing Manager, XYZ Co.",
    text: "ADmyBRAND AI Suite boosted our ad performance by 35% in just 2 weeks!",
    image: "/images/John.jpg",
  },
  {
    name: "Sarah Lee",
    role: "Founder, Startup Hub",
    text: "The analytics dashboard is intuitive and saves hours of reporting work.",
    image: "/images/Sarah.jpg",
  },
  {
    name: "Michael Smith",
    role: "CMO, GrowthMax",
    text: "Highly recommend! Their AI-powered campaigns are next-level.",
    image: "/images/Michael.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-slide every 5 seconds (fixed dependencies)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        What Our Customers Say
      </h2>

      <div className="flex justify-center relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-xl text-center p-8 bg-white shadow-lg rounded-xl relative">
              {/* Quote icon */}
              <Quote className="absolute top-6 left-6 text-blue-200 w-10 h-10 opacity-40" />
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-900 italic mb-4">
                “{testimonials[index].text}”
              </p>
              <h4 className="font-semibold text-blue-600">
                {testimonials[index].name}
              </h4>
              <p className="text-gray-600 text-sm">{testimonials[index].role}</p>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            className={`w-3 h-3 rounded-full transition transform ${
              index === dotIndex
                ? "bg-blue-500 scale-110"
                : "bg-gray-300 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={prevTestimonial}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
        >
          Prev
        </button>
        <button
          onClick={nextTestimonial}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition"
        >
          Next
        </button>
      </div>
    </section>
  );
}
