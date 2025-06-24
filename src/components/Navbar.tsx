'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const tabs = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-primary text-white sticky top-0 z-50">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        Shivangi Prasad
      </div>

      <div className="relative flex space-x-2 md:space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className="relative px-3 py-2 rounded-md text-sm md:text-base"
          >
            {active === tab.id && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute inset-0 bg-white/10 rounded-md z-[-1]"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className={active === tab.id ? "text-white" : "text-gray-300"}>
              {tab.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
