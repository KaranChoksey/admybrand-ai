"use client";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between 
      py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 
      shadow-2xl overflow-hidden"> 
      {/* Removed rounded-xl */}
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Supercharge Your Marketing with <span className="text-blue-600">AI</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          ADmyBRAND AI Suite automates and optimizes your ad campaigns with AI-driven insights, saving time and boosting ROI.
        </p>

        <div className="mt-6 flex gap-4">
          <Button>Get Started</Button>
          <Button variant="secondary" onClick={() => setShowVideo(true)}>Watch Demo</Button>
        </div>

        {/* Trust Badge */}
        <p className="mt-6 text-gray-500 text-sm">
          Trusted by <span className="font-semibold text-gray-800">500+ businesses</span> worldwide
        </p>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Image
          src="/images/hero.png"
          alt="Hero"
          width={350}
          height={250}
          className="mt-10 lg:mt-0"
        />
      </motion.div>

      {/* Animated Background Shape */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-blue-100 mix-blend-multiply filter blur-3xl opacity-50"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />

      {/* Demo Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white overflow-hidden shadow-xl max-w-3xl w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setShowVideo(false)}
            >
              <X size={28} />
            </button>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="Demo Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
