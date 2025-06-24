'use client';

import React from 'react';
import { motion, cubicBezier } from 'framer-motion';

const projects = [
  {
    title: "HerCare Buddy",
    content: `HerCare Buddy is a web application focused on women’s health, especially for users managing PCOD and menstrual wellness. Built using ReactJS, Tailwind CSS, React Router, Framer Motion, and React Calendar, it offers a modular and responsive design with smooth animations and intuitive navigation. The tech stack ensures scalability and clean UI/UX, with plans to integrate Firebase for backend functionality and LLM-based APIs for chatbot support.

The platform includes a period tracker with calendar-based flow logging, a symptom analyzer with severity input, a mood board for mental health journaling, and an informative article hub. Additional features include food and fitness recommendations, a doctor contact directory, and a tool to suggest medical consultation based on logged symptoms. HerCare Buddy combines practicality with empathy to offer a supportive digital space for menstrual and hormonal health management.`
  },
  {
    title: "Hand Gesture Recognition using TinyML",
    content: `Developed a lightweight gesture recognition system tailored for edge devices using TinyML, with a focus on speed and efficiency. Trained a deep learning model using TensorFlow, TensorFlow Lite, and Keras to classify hand gestures from real-time video. Implemented preprocessing pipelines using OpenCV and NumPy for frame extraction and noise reduction. Employed scikit-learn for model evaluation and optimization. Achieved real-time classification with high accuracy and low latency, enabling effective deployment on constrained hardware.`
  },
  {
    title: "JEE/NEET Solver Bot (AI Chatbot)",
    content: `Built an intelligent academic support chatbot hosted on Replit, leveraging OpenRouter API and large language models (LLMs) for natural language understanding. Integrated machine learning logic with NumPy and Pandas for efficient data handling and custom query routing. Enabled real-time responses for complex STEM queries, enhancing student engagement and support. Designed to simulate a personalized AI tutor experience for exam preparation, with seamless backend deployment.`
  },
  {
    title: "Sales Analytics on Delivery Apps",
    content: `Conducted a comprehensive data analysis project using R and the Tidyverse suite to uncover actionable insights from delivery app data. Visualized customer behavior trends and order patterns with ggplot2, and developed interactive dashboards using Plotly and Shiny for stakeholder reporting. Identified high-conversion product categories and temporal demand spikes, informing a data-driven repositioning strategy. Resulted in a 25% improvement in customer retention segmentation accuracy.`
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.1, 0.25, 1) // ✅ fixed easing
    }
  }
};

const Projects = () => {
  return (
    <section className="bg-[#0A051E] text-white py-20 px-6 md:px-24">
      <motion.h2 id="projects"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#9966FF]"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={tileVariants}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl hover:scale-[1.01] transition-all"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-[#9966FF] mb-4">{project.title}</h3>
            <p className="text-white/90 whitespace-pre-line leading-relaxed text-base md:text-lg">
              {project.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
