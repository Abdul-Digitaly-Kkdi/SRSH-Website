import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Mission",
    text: "To provide state of the art affordable care for all the diseases and cancers of the gastro intestinal tract, liver and pancreas.",
  },
  {
    title: "Our Vision",
    text: "To evolve into a centre of excellence for cure and awareness about gastrointestinal diseases and cancers.",
  },
  {
    title: "Our Values",
    text: `Patient Centricity\nIntegrity\nInnovation\nAccountability\nCompassion`,
  },
];

const Cards = () => {
  return (
    <div className="w-full flex justify-center px-4 py-6">
      <div className="w-full max-w-6xl flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-1 min-w-[280px] sm:max-w-[300px] bg-cyan-100 rounded-2xl px-6 py-8 flex flex-col items-center gap-4 shadow-lg"
          >
            <h1 className="text-2xl font-semibold text-center text-cyan-700">
              {card.title}
            </h1>
            <p className="whitespace-pre-line text-center text-cyan-900">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
