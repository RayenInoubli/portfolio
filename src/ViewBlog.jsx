import React from 'react';
import { Typography } from '@mui/material';
import { blogs } from './assets/blogs';
import { useParams } from 'react-router-dom';

const ViewBlog = () => {
     const { id } = useParams();


    return (
        <main id='blogs'>
            <div id='blogs-container'>
                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem" 
                }}> { blogs[id].title } </Typography>
                <div id='home-p'>
                    <Typography variant='p' sx={{ fontSize: "20px" }}> 
                        { blogs[id].description }
                    </Typography>
                </div>
            </div>
        </main>
    );
}

export default ViewBlog;
