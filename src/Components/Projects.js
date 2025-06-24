

import React from 'react';
import ProjectBox from './ProjectBox';
import EcommerceWebsite from '../images/E-commerce.png.jpg';
import todolist from '../images/todolist.jpg';
import resume from '../images/ResumeBuilder.jpg';
import NewsletterImage from '../images/NewsletterImage.png';

const projectData = [
  {
    projectPhoto: EcommerceWebsite,
    projectName: "E-Commerce Website",
    projectDesc: "A fully functional e-commerce site built with React and integrated with product pages, cart, and payment structure.",
    githubLink: "https://github.com/ThallaGaneshGoud/E-Commerce-Website-React-",
    demoLink: "", // Add demo link if available
  },
  {
    projectPhoto: NewsletterImage,
    projectName: "Student-DashBoard",
    projectDesc: "A student dashboard project for managing academic data, tasks, and performance analytics.",
    githubLink: "https://github.com/ThallaGaneshGoud/Resume-Bolder-Using-React",
    demoLink: "https://newsletter-signup-teal.vercel.app/",
  },
  {
    projectPhoto: todolist,
    projectName: "To-Do-List WebApp",
    projectDesc: "A simple yet effective to-do list web application to manage daily tasks. Built using HTML, CSS, JS and deployed on GitHub Pages.",
    githubLink: "https://github.com/ThallaGaneshGoud/To-Do-List-Web-App",
    demoLink: "", // Add demo link if needed
  },
  {
    projectPhoto: resume,
    projectName: "Digital Resume Builder",
    projectDesc: "A React-based app that allows users to create and customize resumes with a clean and professional template.",
    githubLink: "https://github.com/ThallaGaneshGoud/Resume-Bolder-Using-React",
    demoLink: "", // Add demo link if needed
  }
];

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {projectData.map((proj, index) => (
          <ProjectBox
            key={index}
            projectPhoto={proj.projectPhoto}
            projectName={proj.projectName}
            projectDesc={proj.projectDesc}
            githubLink={proj.githubLink}
            demoLink={proj.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
