import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { blogs } from './assets/blogs';

const Blogs = () => {
    return (
        <main id='blogs'>
            <div id='blogs-container'>
                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem" 
                }}> Blogs. </Typography>
                <div id='home-p'>
                    <Typography variant='p' sx={{ fontSize: "24px" }}> 
                        Here, I write about topics that I find very intersting.

                    </Typography>
                </div>

                <div id='latest-posts'>
                    {
                        blogs.map((blog) => {
                            return (
                                <Card sx={{ 
                                        minWidth: 275, 
                                        marginBottom: '1rem',
                                        border: '1px solid #ddd',
                                        transition: 'box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        },
                                    }} 
                                    key={blog.id}
                                    elevation={0}
                                >
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            { blog.title }
                                        </Typography>
                                        <Typography color="text.secondary">
                                            { blog.description }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            );
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default Blogs;
