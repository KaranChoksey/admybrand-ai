// app/components/Features.tsx
"use client";
import { motion } from "framer-motion";
import { Zap, BarChart, Users, ShieldCheck, Clock, Globe } from "lucide-react";

const features = [
  { 
    icon: <Zap className="w-10 h-10" />, 
    title: "AI-Powered Campaigns", 
    desc: "Automate ad targeting and optimization for maximum ROI." 
  },
  { 
    icon: <BarChart className="w-10 h-10" />, 
    title: "Analytics Dashboard", 
    desc: "Get real-time insights and performance metrics in one place." 
  },
  { 
    icon: <Users className="w-10 h-10" />, 
    title: "Audience Segmentation", 
    desc: "Reach the right customers at the right time with precision targeting." 
  },
  { 
    icon: <ShieldCheck className="w-10 h-10" />, 
    title: "Secure Data Handling", 
    desc: "Enterprise-grade security ensures your data is always protected." 
  },
  { 
    icon: <Clock className="w-10 h-10" />, 
    title: "Real-Time Automation", 
    desc: "Instant campaign adjustments to respond to live market trends." 
  },
  { 
    icon: <Globe className="w-10 h-10" />, 
    title: "Global Reach", 
    desc: "Easily manage campaigns across multiple regions and languages." 
  }
];

export default function Features() {
  return (
    <section  id="features" className="py-20 px-6 lg:px-20 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05 }} 
            className="p-6 rounded-xl bg-white shadow-lg transition-transform duration-300"
          >
            <div className="text-blue-600 mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{f.title}</h3>
            <p className="text-gray-800">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
