import React from 'react';
import { Typography } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const stack = ["ReactJS","NodeJS","MUI","Express","MongoDB","Laravel","SQL","Flutter","Java"]
const tools = ["VS Code","Android Studio","Eclipse","Ubuntu","Git / Github","Figma"]

const Home = () => {
    return (
        <main id='home'>
            <div id='home-container'>
                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem" 
                }}> Hey fellas. 👋 </Typography>
                <div id='home-p'>
                    <Typography variant='p' sx={{ fontSize: "24px" }}> 
                        Hello, I'm Rayen, a software engineer with a passion for crafting innovative solutions,
                        originally from Tunisia. My work is driven by a deep interest in collaboration
                        and visual design, which I believe are key to creating meaningful user experiences. 
                        Explore my portfolio to see some of my projects and how I can help bring your ideas to life.
                    </Typography>
                </div>

                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem",
                    marginTop: "4rem",
                }}> Stack </Typography>

                <div id='latest-posts'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {stack.map((item, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Item 
                                        elevation={0}
                                        sx= {{
                                            border: '1px solid #ddd',
                                            transition: 'box-shadow 0.3s ease-in-out',
                                            '&:hover': {
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                            },
                                        }}
                                    > 
                                        { item } 
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>

                <Typography variant='h1' sx={{ fontSize: "36px", 
                    fontWeight: "bold", 
                    borderBottom: "2px solid #ddd", 
                    width: "fit-content", 
                    paddingBottom: "1rem",
                    marginTop: "4rem",
                }}> Tools </Typography>

                <div id='latest-posts'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {tools.map((item, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Item 
                                        elevation={0}
                                        sx= {{
                                            border: '1px solid #ddd',
                                            transition: 'box-shadow 0.3s ease-in-out',
                                            '&:hover': {
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                                            },
                                        }}
                                    > 
                                        { item } 
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </div>
        </main>
    );
}

export default Home;