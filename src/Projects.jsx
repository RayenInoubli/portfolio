import React from 'react';
import { Typography } from '@mui/material';
import { projects } from './assets/projects';
import ActionAreaCard from './components/Card';

const Projects = () => {

    const images = [
        "../src/assets/images/dentixio.jpg",
        "../src/assets/images/magano.jpg",
        "../src/assets/images/creadevity.jpg"
    ]
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
                                    image={images[index]}
                                    url={url}
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
