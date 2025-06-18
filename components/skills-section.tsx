"use client"

import { motion } from "framer-motion"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Advanced", progress: 80, icon: "⚛️" },
        { name: "Next.js", level: "Advanced", progress: 80, icon: "▲" },
        { name: "TypeScript", level: "Advanced", progress: 80, icon: "📘" },
        // { name: "Tailwind CSS", level: "Advanced", progress: 80, icon: "🎨" },
        { name: "JavaScript", level: "Advanced", progress: 85, icon: "🟨" },
        { name: "HTML/CSS", level: "Expert", progress: 95, icon: "🌐" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "NestJS", level: "Intermediate", progress: 75, icon: "🐯" },
        { name: "PostgreSQL", level: "Intermediate", progress: 70, icon: "🐘" },
        // { name: "MongoDB", level: "Intermediate", progress: 65, icon: "🍃" },
        { name: "REST APIs", level: "Advanced", progress: 80, icon: "🔗" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: "Advanced", progress: 85, icon: "📝" },
        { name: "Cursor", level: "Advanced", progress: 85, icon: "💻" },
        { name: "Figma", level: "Intermediate", progress: 75, icon: "🎨" },
        { name: "Docker", level: "Beginner", progress: 60, icon: "🐳" },
      ],
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl p-6 border border-purple-100 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          skill.level === "Expert"
                            ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                            : skill.level === "Advanced"
                              ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800"
                              : skill.level === "Intermediate"
                                ? "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800"
                                : "bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <div className="w-full bg-gradient-to-r from-gray-200 to-purple-100 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 h-3 rounded-full shadow-sm"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
