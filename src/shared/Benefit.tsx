import React from "react";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function Benefit({ icon, title, description }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="flex flex-col items-center rounded-md border-2 border-secondary-400 px-8 py-6 shadow-lg md:py-11 lg:w-1/3"
    >
      <div className="mb-3 rounded-full bg-secondary-500 p-2">{icon}</div>
      <h2 className="mb-3 font-bold">{title}</h2>
      <p className="mb-3 text-sm">{description}</p>
      <button className=" w-full rounded bg-orange-500 p-2 capitalize text-white shadow">
        learn more
      </button>
    </motion.div>
  );
}

export default Benefit;
