

import React, { useEffect, useMemo, useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TimelineSection from './components/TimelineSection';
import Contact from './components/Contact';
import ScrollTopFab from './components/ScrollTopFab';
import ThemeToggle from './components/ThemeToggle';
import CertificationsSection from './components/CertificationsSection';
import SideNav from './components/SideNav';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  // Correct return: render the themed app
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#90caf9' : '#667eea',
      },
      secondary: {
        main: mode === 'dark' ? '#f48fb1' : '#764ba2',
      },
      background: {
        default: mode === 'dark' ? '#181a20' : '#f5f6fa',
        paper: mode === 'dark' ? '#23263a' : '#fff',
      },
    },
    shape: { borderRadius: 16 },
    typography: { fontFamily: 'Poppins, sans-serif' },
  }), [mode]);

  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideNav />
      <ThemeToggle toggleTheme={toggleTheme} />
      <Hero />
      <Skills />
      <Projects />
      <CertificationsSection />
      <TimelineSection />
      <Contact />
      <ScrollTopFab />
      {/* ...other advanced sections will be added modularly here... */}
    </ThemeProvider>
  );
}

export default App;
