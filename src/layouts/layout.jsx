import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <Box flexGrow={1} width="100%" height="100%" overflow="auto">
          <ResponsiveAppBar />
          <Outlet/>
          <Footer />
        </Box>
    );
}

export default Layout;
