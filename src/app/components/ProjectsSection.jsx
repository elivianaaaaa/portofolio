"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "Responsive Portofolio Website",
        description: "I created this portfolio using HTML, Vanilla CSS, and Javascript.",
        image: "/images/projects/portofolio1.png",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "Portofolio Website",
        description: "A simple website created using only HTML and Vanilla CSS",
        image: "/images/projects/portofolio2.png",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "Group Website Project",
        description: "Modified from website Cinema XXI and built using HTML, Vanilla CSS, and Javascript.",
        image: "/images/projects/project-athena.png",
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "Design Website E-Commerce",
        description: "Designing a cake shop website using Figma.",
        image: "/images/projects/design-figma.png",
        tag: ["All", "Web"],
    },
    {
        id: 5,
        title: "Belajar Bahasa Jepang",
        description: "Creating a simple Learn Japanese app using MIT App Inventor.",
        image: "/images/projects/project-mit-app.png",
        tag: ["All", "Mobile"],
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag),
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1},
    };
    
  return (
    <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-blue-600 mb-3 md:mb-8'>
            My Projects
        </h2>
        <div className='text-black flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === "Web"} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag === "Mobile"} 
            />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li 
                key={index}
                variants={cardVariants} 
                initial='initial' 
                animate={isInView ? 'animate' : 'initial'}
                transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                />
                </motion.li>
            ))}
        </ul>
    </section>
  );
};

export default ProjectsSection;