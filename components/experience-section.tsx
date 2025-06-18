"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "ITBee Solutions",
      position: "Fresher Frontend Developer",
      duration: "01/2025 - 05/2025",
      location: "Tan Binh, HCM",
      description: [
        "Built responsive web applications from design mockups",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Integrated RESTful APIs and managed application state",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      company: "FPT Software",
      position: "Intern Frontend Developer",
      duration: "06/2024 - 12/2024",
      location: "Thu Duc, HCM",
      description: [
        "Contributed to the development of a responsive E-learning platform, enhancing mobile compatibility and user experience.",
        "Implemented accessibility features in collaboration with UX designers, improving overall site usability and meeting customer needs effectively.",
        "Collaborated with cross-functional teams to integrate a new API and enhancing overall site performance.",
      ],
      technologies: ["React", "JavaScript", "SCSS", "Redux"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My journey building amazing web experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-24 bg-gradient-to-b from-purple-200 to-pink-200" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-white shadow-lg" />

              {/* Content */}
              <div className="ml-16 bg-white rounded-xl shadow-xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
