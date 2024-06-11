import React from 'react';
import { Typography } from '@mui/material';
import ActionAreaCard from './components/Card';

const Projects = () => {

    const projects = [
        {
          id: 1,
          title: "Dentixio",
          description: "dental firm management system",
          image: "../src/assets/images/dentixio.jpg",
          url: "https://dentixio.netlify.app/"
        },
        {
          id: 3,
          title: "Magano CRM",
          description: "Call center management system",
          image: "../src/assets/images/magano.jpg",
          url: "#"
        },
        {
          id: 4,
          title: "Creadevity website",
          description: "A website for Creadevity, a rising startup",
          image: "../src/assets/images/creadevity.jpg",
          url: "https://creadevity.tn/"
        },
        {
          id: 5,
          title: "A simple contacts list app",
          description: "I made this sipmle app for a university project",
          image: "../src/assets/images/contact-list.jpg",
          url: "https://rayen-contact-list.netlify.app/"
        },
    ];
    return (
        <main id='home'>
            <div id='home-container'>
                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem" 
                }}> My work </Typography>

                <div id='projects-p'>
                    <Typography variant='p' sx={{ fontSize: "18px" }}> 
                        Welcome to my projects section! Here, you can explore some of the projects I've worked on. 
                        Feel free to browse through them to get a sense of my skills, expertise, and the types of solutions I've created. 
                        If you have any questions or would like to discuss any of these projects further, don't hesitate to reach out. 
                        I'm always excited to share my work and collaborate on new ideas.
                    </Typography>

                </div>

                <div id='projects-list'>
                    {
                        projects.map((project, index) => {
                            return (
                                <ActionAreaCard 
                                    key={project.id} 
                                    title={project.title} 
                                    description={project.description}
                                    image={project.image}
                                    url={project.url}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default Projects;
