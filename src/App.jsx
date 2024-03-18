import './App.css';
import * as React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './layouts/layout';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Blogs from './Blogs';
import ViewBlog from './ViewBlog';


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Inter, sans-serif',
    },
  });

  return(
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<ViewBlog />} />
          </Route>
        </Routes>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
