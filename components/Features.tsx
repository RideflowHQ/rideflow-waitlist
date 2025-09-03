"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "For Renters",
    description: "Discover and inspect properties with confidence",
    icon: "🔍",
    items: [
      "Browse verified property listings",
      "Book affordable inspections",
      "Avoid fake agents and scams",
      "Get detailed property reports",
    ],
  },
  {
    title: "For Agents",
    description: "Grow your business with trusted inspections",
    icon: "👨‍💼",
    items: [
      "Accept inspection jobs",
      "Build your reputation",
      "Earn from verified listings",
      "Manage your schedule",
    ],
  },
  {
    title: "For Admins",
    description: "Manage and monitor platform activity",
    icon: "⚙️",
    items: [
      "Approve property listings",
      "Monitor agent performance",
      "Manage user accounts",
      "Track platform metrics",
    ],
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ENIQO connects renters, agents, and admins in a trusted ecosystem
            for property discovery and inspection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#e5ff00] rounded-xl flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#e5ff00] rounded-full"></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
