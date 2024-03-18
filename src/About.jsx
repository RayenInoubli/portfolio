import React from 'react';
import { Typography } from '@mui/material';
import { projects } from './assets/projects';
import ActionAreaCard from './components/Card';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    return (
        <main id='home'>
            <div id='home-container'>
                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem" 
                }}> About </Typography>

                <Typography variant='h1' sx={{ fontSize: "20px", 
                    width: "fit-content",
                    marginTop: "1rem",
                    paddingBottom: "1rem",
                    color: "#68728F"
                }}> Learn more about me </Typography>

                <div id='about-p'>
                    <Typography variant='p' sx={{ fontSize: "18px" }}> 
                        I'm Rayen, a software engineer from Tunisia with a passion for building SaaS products and solving complex problems. 
                        I have a strong foundation in object-oriented programming and always strive to code using best practices. 
                        As one of the top students, I've honed my skills in creating efficient and scalable solutions. 
                        Beyond coding, I also have a flair for design, using tools like Canva, Figma, and Adobe software to bring ideas to life. 
                        When I'm not immersed in code, you can find me enjoying a good movie or exploring the latest trends in technology. 
                        Let's connect and discuss how we can turn your ideas into reality.
                    </Typography>

                    <div id='social-media'>
                        <a href="https://www.linkedin.com/in/rayen-inoubli-a7842120b/">
                            <LinkedInIcon />
                        </a>
                        <a href="https://github.com/RayenInoubli">
                            <GitHubIcon />
                        </a>
                    </div>
                </div>

                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem",
                    marginTop: "4rem",
                }}> Studies </Typography>

                <div id='studies-p'>
                    <Typography variant='p' sx={{ fontSize: "18px" }}> 
                        I pursued my bachelor's degree at ISAMM (Higher Institute of Multimedia Arts), where I graduated with a good mention. 
                        Currently, I am continuing my academic journey in software engineering at ISAMM. 
                        My studies have not only equipped me with a strong foundation in technology 
                        but also instilled in me a passion for continuous learning and growth. 
                        I'm excited to apply my knowledge and skills to create innovative solutions that make a difference.
                    </Typography>
                </div>

                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem",
                    marginTop: "4rem",
                }}> Career </Typography>

                <div id='career-p'>
                    <Typography variant='p' sx={{ fontSize: "18px" }}> 
                        My journey in software engineering has been enriched by valuable experiences. 
                        During my internship at Tunisie Telecom (TT), I delved deeper into PHP, expanding my understanding 
                        of web development. For my end-of-studies internship at DEVNET, 
                        I had the opportunity to work with Laravel and Flutter, gaining hands-on experience that 
                        I applied to a real project. These experiences have been instrumental in shaping my skills 
                        and approach to software development. 
                        Today, I am channeling my passion into building my own SaaS, where 
                        I can innovate and create solutions that meet the needs of users.
                    </Typography>
                </div>
            </div>
        </main>
    );
}

export default About;
