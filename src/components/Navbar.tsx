'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState<string>("Home");
  const tabs = ["Home", "About", "Projects", "Contact"];

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-primary text-white sticky top-0 z-50">
      <div className="text-2xl font-bold">Shivangi Prasad</div>

      <div className="relative flex space-x-2 md:space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="relative px-3 py-2 rounded-md text-sm md:text-base"
          >
            {active === tab && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 bg-white/10 rounded-md z-[-1]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className={active === tab ? "text-white" : "text-gray-300"}>
              {tab}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
