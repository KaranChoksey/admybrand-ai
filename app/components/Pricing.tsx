"use client";
import { motion } from "framer-motion";
import Card from "./Card";
import Button from "./Button";

const plans = [
  {
    title: "Starter",
    price: "$19/month",
    features: ["Basic analytics", "Email support", "5 campaigns per month"],
    buttonText: "Choose Starter",
  },
  {
    title: "Pro",
    price: "$49/month",
    features: ["Advanced analytics", "Priority support", "Unlimited campaigns"],
    buttonText: "Choose Pro",
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "SLA support",
    ],
    buttonText: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl"
          >
            <Card
              footer={<Button>{plan.buttonText}</Button>}
              className="p-6 rounded-xl shadow-lg border border-transparent hover:border-blue-500 transition-all duration-300"
            >
              {/* Plan Title */}
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {plan.title}
              </h3>

              {/* Plan Price (Black) */}
              <p className="text-2xl font-semibold text-gray-900 mb-4">
                {plan.price}
              </p>

              {/* Features List */}
              <ul className="text-gray-800 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
