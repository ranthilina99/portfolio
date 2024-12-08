"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { FaFolderOpen, FaGlobe, FaBook, FaPlay } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLink } from "react-icons/fa6";

import image1 from "../assets/pr1.png";
import image2 from "../assets/pr2.png";
import image3 from "../assets/petcare.png";
import image4 from "../assets/pr4.png";
import image5 from "../assets/pr5.png";
import image6 from "../assets/Gym Management.png";
import image7 from "../assets/new.png";
import image8 from "../assets/lakwimana.png";
import image9 from "../assets/research.png";
import { TfiWorld } from "react-icons/tfi";

const projects = [
  {
    title: "E-KETHA”: Enriching Rice Farmer's Quality of Life through a Mobile Application",
    description:
      "The mobile application detects problems of farmers such as rice,pets,disease,weed identification,amount of fertilizer and measurement of rice plants",
    technologies: ["Machine Learning", "Image Processing", "Python", "Android", "Firebase"],
    category: "Mobile",
    link: "https://github.com/ranthilina99/research",
    image: image9,
    others: [
      { link: "https://shehanblast.github.io/E-ketha-web/", name: "Visit Website", icon: "globe", status: "link", color: "bg-gray-900" },
      { link: "https://www.ijcaonline.org/archives/volume184/number33/jayasundara-2022-ijca-922364.pdf", name: "Research Paper", icon: "book", status: "link", color: "bg-gray-900" },
    ],
  },
  {
    title: "Lakwimana Mobile App",
    description:
      "An on-time activation e-commerce application for essential material requirements for ordering and delivering goods Android system.",
    technologies: ["Android(Java)", "Firebase(RealtimeDatabase)"],
    category: "Mobile",
    link: "https://github.com/ranthilina99/UEE-Project",
    image: image8,
    others: [
    ],
  },
  {
    title: "E-commerce Mobile Application",
    description:
      "The primary objective of this application is to enable site managers to control their procurement of goods directly and independently, without the industry common practice of being reliant upon office-based staff to make orders, manages the demand for the goods required on his site from suppliers by initiate the chain of events that result in the creation of a purchase order is a used Android system.",
    technologies: ["Android(Java)", "Firebase(Firestore)"],
    category: "Mobile",
    link: "https://github.com/Yasoja44/CSSEProject",
    image: image7,
    others: [

    ],
  },
  {
    title: "Gym Management System",
    description:
      "The gym management system developed the use of Rest API technologies with the help of React JS and ExpressJS for the front and back features to enhance the background services. The developed project provides users with features and activities that are primarily user, employee, and admin user roles. Includes client-side using JWT tokens and security considerations with client-side authentication and encrypted data.",
    technologies: ["React.js", "Express.js", "REST API", "Bootstrap", "Node JS", "MongoDB"],
    category: "Web",
    link: "https://github.com/ranthilina99/SPM_PROJECT",
    image: image6,
    others: [

    ],
  },
  {
    title: "Conference Management System",
    description:
      "Conference Management System developed making the using of REST API technologies with the help of ExpressJS to develop the backend services and ReactJS,or Parcel for the front-end components. The developed project provides the features and functionalities to the users which mainly consist of User, Reviewer, Editor,Guest, and Administrator user roles. Includes client-sideand server-side authentications utilizing JWT tokens and well thought about the security with encrypted data.",
    technologies: ["React.js", "Express.js", "REST API", "Bootstrap", "Node JS", "MongoDB"],
    category: "Web",
    link: "https://github.com/Salika952/AF-Project",
    image: image5,
    others: [

    ],
  },
  {
    title: "Hotel Management System",
    description:
      "A standalone system as well as an online Desktop application where managers can manage almost all the tasks regarding hotel management as Employee attendance, salary, bill calculation, room booking, etc.",
    technologies: ["C#", "SQL", "NET (framework Entities)"],
    category: "Web",
    link: "https://github.com/ranthilina99/Sarasi_HMS",
    image: image4,
    others: [

    ],
  },
  {
    title: "Online PetCare Application",
    description:
      "An Android system that can perform everyday tasks related to essential goods and pet health for pets.",
    technologies: ["Android(java)", "Firebase"],
    category: "Mobile",
    link: "https://github.com/ranthilina99/Pet-Care-App",
    image: image3,
    others: [
      { link: "https://www.linkedin.com/posts/umesh-ranthilina-209b071a1_mobile-application-development-2020-group-ugcPost-6718515233129926656-CEJm", name: "Watch Video", icon: "play", status: "link", color: "bg-gray-900" },
    ],
  },
  {
    title: "Employee Management System",
    description:
      "A standalone system as well as an online web application where managers can manage almost all the tasks regarding employee management asEmployee attendance, salary, etc.",
    technologies: ["JSP", "MySQL"],
    category: "Web",
    link: "https://github.com",
    image: image2,
    others: [

    ],
  },
  {
    title: "Online Beauty Salon Booking System",
    description:
      "This makes it quick and easy for customers to book an appointment with the hairdresser they want and get the goods they need..",
    technologies: ["HTML", "CSS3", "Javascript",],
    category: "Web",
    link: "https://github.com/ranthilina99/Stylish-Beauty-Salon",
    image: image1,
    others: [

    ],
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white border rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 flex justify-center items-center gap-2">
          <FaFolderOpen className="text-blue-500" size={32} />
          Projects
        </h2>
        <p className="text-gray-600 mt-2">
          Explore my creative work in web and mobile development.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-8">
        {["All", "Web", "Mobile"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Landscape Cards */}
      <div className="space-y-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="sm:w-1/3 w-full">
              <div className="relative h-48 sm:h-full overflow-hidden rounded-t-lg sm:rounded-l-lg sm:rounded-t-none">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-7 sm:w-2/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                {/* Links and Buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.others.map((link, idx) =>
                    link.status === "button" ? (
                      <button
                        key={idx}
                        onClick={() => window.open(link.link, "_blank")}
                        className={`flex items-center gap-2 px-3 py-1 text-white ${link.color} rounded-md hover:opacity-80 transition duration-300`}
                      >
                        {link.icon === "globe" && <FaGlobe />}
                        {link.icon === "book" && <FaBook />}
                        {link.icon === "play" && <FaPlay />}
                        {link.name}
                      </button>
                    ) : (
                      <a
                        key={idx}
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-gray-600 hover:underline"
                      >
                        {link.icon === "globe" && <FaGlobe />}
                        {link.icon === "book" && <FaBook />}
                        {link.icon === "play" && <FaPlay />}
                        <span className="ml-2">{link.name}</span>
                      </a>
                    )
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  View on GitHub
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
