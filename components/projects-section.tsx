"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import agencylandingpage from "@/app/image/agencylandingpage.webp";
import conferenceTicketGenerator from "@/app/image/conferenceticketgenerator.webp";
import blogPreviewCard from "@/app/image/blogpreviewcard.webp";
import resultsummarycomponent from "@/app/image/resultsummarycomponent.webp";
import weatherforecast from "@/app/image/weatherforecast.png";
import financialmanagement from "@/app/image/financialmanagement.png";
import realestatelandingpage from "@/app/image/realestatelandingpage.png";
import lanternStoreEcommerce from "@/app/image/lantern-store-ecommerce.png";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Weather Forecast",
      description:
        "Check the current weather and forecast for any city using real-time data from OpenWeatherMap. Just enter your city to see temperature, conditions, and more.",
      image: weatherforecast,
      technologies: [
        "React",
        "Tailwind CSS",
        "TypeScript",
        "API Integration",
        "OpenWeatherMap API",
      ],
      category: "Web App",
      liveUrl: "https://bin-weather-app-zeta.vercel.app",
      githubUrl: "https://github.com/Bean281/BinWeatherApp",
    },
    {
      title: "Financial Management",
      description:
        "Full-stack financial management system that help users keep track of their income and expenses following edited plan.",
      image: financialmanagement,
      technologies: [
        "Full-stack",
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "TypeScript",
        "API Integration",
      ],
      category: "Web App",
      liveUrl: "https://budget-buddy-bean.vercel.app/login",
      githubUrl: "https://github.com/Bean281/budget_buddy-frontend",
    },
    {
      title: "Lantern Store Ecommerce",
      description:
        "A real-life eCommerce website for selling lanterns, featuring admin tools for managing products and orders. Users can place and track orders using their phone numbers without needing to log in.",
      image: lanternStoreEcommerce,
      technologies: [
        "Full-stack",
        "Next.js",
        "NestJS",
        "Prisma",
        "API Integration",
        "MongoDB Atlass",
        "AWS S3",
        "Tailwind CSS",
        "TypeScript",
      ],
      category: "Web App",
      liveUrl: "https://longdentruyenthong.vercel.app",
      githubUrl: "https://github.com/Bean281/lantern-store-frontend",
    },
    {
      title: "Agency Landing Page",
      description:
        "This is a responsive agency landing page challenge. It includes a small JavaScript feature for the mobile menu and helps practice layout, responsiveness.",
      image: agencylandingpage,
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      category: "UI/UX",
      liveUrl: "https://sunshine-agency-landing-page.vercel.app/",
      githubUrl:
        "https://github.com/Bean281/frontend_mentor-sunnyside-agency-landing-page",
    },
    {
      title: "Conference Ticket Generator",
      description:
        "This project is a responsive conference ticket generator that allows users to fill out a form and instantly see their personalized ticket. It includes form validation, accessibility features, and custom styling options for a polished user experience.",
      image: conferenceTicketGenerator,
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      category: "UI/UX",
      liveUrl:
        "https://frontend-mentor-conference-ticket-generator.vercel.app/design-form",
      githubUrl:
        "https://github.com/Bean281/frontend_mentor-conference-ticket-generator",
    },
    {
      title: "Dream Home Landing Page",
      description:
        "This is a real estate landing page showcasing properties for rent and sale, with a search form, featured listings, and agent contact. It includes responsive sections like testimonials, blog posts, and a call-to-action for sellers.",
      image: realestatelandingpage,
      technologies: ["React", "SCSS"],
      category: "UI/UX",
      liveUrl: "https://dream-home-intern-nguyen-duy-tan-hung.vercel.app",
      githubUrl: "https://github.com/Bean281/DreamHome_intern",
    },
    {
      title: "Result Summary Component",
      description:
      "This challenge involves building a results summary component using only HTML and CSS, with the option to enhance it using JavaScript and a provided JSON file. ",
      image: resultsummarycomponent,
      technologies: ["React", "SCSS"],
      category: "UI/UX",
      liveUrl: "https://dream-home-intern-nguyen-duy-tan-hung.vercel.app",
      githubUrl: "https://github.com/Bean281/DreamHome_intern",
    },
    {
      title: "Blog Preview Card",
      description:
        "This beginner-friendly challenge focuses on building a responsive blog preview card using only HTML and CSS, ideal for practicing layout, structure, and the box model. ",
      image: blogPreviewCard,
      technologies: ["HTML", "CSS"],
      category: "UI/UX",
      liveUrl: "https://blog-preview-card-main-frontend-mentor-xi.vercel.app/",
      githubUrl: "https://github.com/Bean281/Blog-preview-card-main",
    },
    
  ];

  const categories = ["All", "UI/UX", "Web App"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                  : "border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-purple-100"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white border-white text-gray-900 hover:bg-gray-100"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded text-xs font-medium border border-purple-200"
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
  );
}
