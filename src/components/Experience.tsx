'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';

const experiences = [
  {
    title: 'Research Consultant',
    company: 'WorldQuant BRAIN',
    date: 'Apr 2025 – Present',
    description: [
      'Selected through the WorldQuant Challenge (IQC 2025) to join the global BRAIN Research Consultant program.',
      'Developing predictive trading alphas using mathematical modeling and time series analysis.',
      'Leveraging Python to analyze financial datasets and build statistically sound investment signals.',
      'Collaborating with a global network of researchers to contribute real-world quant research.'
    ]
  },
  {
    title: 'Data Analyst Intern',
    company: 'Dcluttr',
    date: 'Dec 2024 – Mar 2025',
    description: [
      'Automated SQL-based reporting pipelines, reducing manual effort by 60%.',
      'Built Tableau dashboards for campaign attribution and real-time insights.',
      'Analyzed user behavior trends, resulting in a 20% increase in click-through rate (CTR).'
    ]
  },
  {
    title: 'Growth Associate Intern',
    company: 'SuperCrew, Yehlo Solutions Pvt Ltd',
    date: 'Dec 2023 – Aug 2024',
    description: [
      'Performed funnel and SEO audits, increasing user conversion by 18%.',
      'Conducted A/B testing for ads and landing pages, doubling ROAS (2×).',
      'Developed scalable reporting systems with the dev team for campaign tracking.'
    ]
  }
];

const tileVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: cubicBezier(0.25, 0.1, 0.25, 1)
    }
  })
};

const Experience = () => {
  return (
    <section className="relative z-10 py-20 px-6 md:px-24 bg-gradient-to-b from-[#100C2F] to-[#0A051E] text-white">
      <motion.h2 id="experience"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#9966FF]"
      >
        Experience
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tileVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl hover:scale-[1.02] hover:shadow-2xl transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-[#9966FF] mb-1">
              {exp.title}
            </h3>
            <p className="text-sm text-white/70 font-medium mb-2">
              {exp.company} &middot; <span className="italic">{exp.date}</span>
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-1 text-sm md:text-base">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
