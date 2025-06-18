"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Code, Zap } from "lucide-react"
import Image from "next/image"
import about_image from "@/app/image/about_image.jpg"

export default function AboutSection() {
  const values = [
    {
      icon: BrainCircuit,
      title: "AI-Coding",
      description: "Leverage AI tools to accelerate and enhance the software development process.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Building fast, optimized applications that deliver results quickly.",
    },
  ]

  const techStack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Git", "Figma"]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate frontend developer with a love for creating beautiful, functional web experiences that make a
            difference with AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src={about_image}
              alt="About Bean"
              width={400}
              height={500}
              className="rounded-2xl shadow-xl mx-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Story</h3>
              <p className="text-gray-600 mb-4">
                I'm a frontend developer with 1+ years of experience building modern web applications. I specialize in
                React, Next.js, and creating seamless user experiences that drive business results.
              </p>
              <p className="text-gray-600">
                Utilizing AI to enhance my workflow and create more efficient and innovative solutions.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <value.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{value.title}</h5>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
