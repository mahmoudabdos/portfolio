/* eslint-disable react/prop-types */
import FreshCart from '../../../public/homepage.png';
import bookStore from '../../../public/BookStore.jpg';
import UMS from '/public/UMS.jpg';
import Cars from '/public/Cars.jpg';
import games from '/public/GamesApp.jpg';
import Weather from '/public/Weather.jpg';
import Danlels from '/public/Danlels.jpg';
import DevFolio from '/public/DevFolio.jpg';
import { motion } from 'framer-motion';

const projectData = [
  {
    image: FreshCart,
    title: "Fresh Cart",
    description: `A fully responsive, dynamic e-commerce platform built using React, designed to provide a seamless shopping experience for users. This application features:
      - Modern UI/UX: Intuitive and sleek design optimized for both desktop and mobile users.
      - Product Management: Dynamic catalog with product listings, filtering, and sorting functionality for enhanced user navigation.
      - Shopping Cart & Checkout: Users can add products to the cart, review orders, and proceed through a secure checkout process.
      - User Authentication: Integrated with user registration, login, and profile management for personalized experiences.
      - API Integration: Integrated with a back-end REST API for product management and order processing.
      - Payment Gateway: Secure payment processing using third-party services like Stripe.`,
    technologies: ["React", "Tailwind CSS", "Axios", "React-router-dom", "React-Query", "Context API"],
    navigateTo: "https://fresh-cart-beta-fawn.vercel.app/",
  },
  {
    image: bookStore,
    title: "Book Store",
    description: `An Online Book Store built using React and TypeScript, featuring a robust Admin Dashboard and a user-friendly interface for customers. This project offers role-based access, where admins can manage the store's inventory and users can browse, purchase, and review books.`,
    technologies: ["React", "Type Script",  "Tailwind CSS", "Axios", "React-router-dom", "React-Query", "Redux",  "Context API"],
    navigateTo: "https://online-book-store-sandy.vercel.app/",
  },
  {
    image: UMS,
    title: "User Management System",
    description: `A comprehensive User Management System designed to streamline user authentication and administration. Built with React, this application serves as a robust foundation for managing user data and roles. Key features include:
      - User Authentication: Secure login processes.
      - Role-Based Access Control: Admins can assign different roles and permissions to users.
      - User Profiles: Users can manage their profiles, update personal information, and change passwords.
      - Data Management: Admin dashboard for viewing, editing, and deleting user accounts.
      - Audit Trail: Comprehensive logging of user activities for enhanced security.
      - Responsive Design: Optimized for both desktop and mobile devices.
      - API Integration: Built with a RESTful API for efficient communication between the front end and back end.`,
    technologies: ["React", "Tailwind CSS", "Axios", "React-router-dom", "Context API"],
    navigateTo: "https://user-management-system-one-kappa.vercel.app/",
  },
  {
    image: Cars,
    title: "Motors",
    description: `E-commerce Rent Cars is a dynamic web-based platform designed to simplify car rentals. Users can effortlessly search, book, and manage car rentals from various providers.`,
    technologies: ["React", "Tailwind CSS", "Axios"],
    navigateTo: "https://rent-cars-psi.vercel.app/",
  },
  {
    image: games,
    title: "Game Over",
    description: `Game Over is a dynamic web platform featuring a diverse selection of games across multiple genres, offering users comprehensive reviews and engaging visual content.`,
    technologies: ["JavaScript", "Bootstrap", "REST API"],
    navigateTo: "https://game-over-xi.vercel.app/",
  },
  {
    image: Weather,
    title: "Weather App",
    description: `Weather App is a responsive web application providing accurate, up-to-date weather forecasts using WeatherAPI, allowing users to search by city name or get real-time data.`,
    technologies: ["JavaScript", "Bootstrap", "REST API"],
    navigateTo: "https://weather-app-navy-rho-49.vercel.app/",
  },
  {
    image: Danlels,
    title: "Daniels Portfolio",
    description: `Daniels Portfolio showcases a range of web development projects, including a responsive Weather App that provides accurate weather forecasts.`,
    technologies: ["HTML", "CSS", "Bootstrap"],
    navigateTo: "https://daniels-nine.vercel.app/",
  },
  {
    image: DevFolio,
    title: "DevFolio Portfolio",
    description: `DevFolio Portfolio showcases various web development projects, including a responsive Weather App that delivers detailed weather information.`,
    technologies: ["HTML", "CSS", "Bootstrap"],
    navigateTo: "https://devfolio-alpha-sable.vercel.app/",
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCart = ({ project }) => {
  const handleImageClick = () => {
    window.open(project.navigateTo, '_blank'); // Open the URL in a new tab
  };

  return (
    <>
      <ScrollReveal />
      <div className='flex flex-col items-center gap-10 md:flex-row md:gap-24'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
          onClick={handleImageClick} // Open link in a new tab on click
        />
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-xl font-semibold'>{project.title}</div>
            <p className='text-gray-400'>{project.description}</p>
          </div>
          <div className='flex flex-wrap gap-5'>
            {project.technologies.map((tech, index) => (
              <span key={index} className='rounded-lg bg-black p-3'>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <ScrollReveal />
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'
    >
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>
      </ScrollReveal>

      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {projectData.map((project, index) => (
          <ProjectCart key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
