import React from "react";
import { UserPlus, Users, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-[#F97316]" />,
    title: "Create Your Profile",
    desc: "Sign up and add your study preferences, subjects, and learning style.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#F97316]" />,
    title: "Find a Match",
    desc: "Our smart system suggests study partners based on your goals and interests.",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-[#F97316]" />,
    title: "Connect & Collaborate",
    desc: "Chat, schedule sessions, and share resources directly through StudyMate.",
  },
  {
    icon: <Trophy className="w-10 h-10 text-[#F97316]" />,
    title: "Achieve Together",
    desc: "Stay motivated, learn faster, and reach your goals with your study partner.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-base-100 text-base-content transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#F97316] ">
          How It Works
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Getting started with StudyMate is simple. Follow these steps to find your perfect study partner and grow together.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 ">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
