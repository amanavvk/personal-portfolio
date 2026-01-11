

import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <>
      {/* HERO SECTION */}
      <Box
        id="hero"
        sx={{
          position: 'relative',
          minHeight: '80vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          px: { xs: 2, md: 10 },
          pt: { xs: 8, md: 10 },
          pb: { xs: 6, md: 6 },
          bgcolor: 'background.default',
          background: isDark 
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #f5f6fa 0%, #e3e9f7 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Faded background image silhouette */}
        <Box
          component="img"
          src="src/assets/hero-bg.jpg"
          alt="hero silhouette"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: { xs: 400, md: 1000 },
            objectFit: 'cover',
            opacity: 0.18,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, color: isDark ? '#fff' : '#444', mb: 2, zIndex: 2, textAlign: 'left' }}
        >
          Aman Vyas
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: isDark ? '#e0e0e0' : '#444', fontWeight: 400, mb: 2, zIndex: 2, textAlign: 'left' }}
        >
          I'm {' '}
          <Box component="span" sx={{ color: '#1976d2', fontWeight: 700, display: 'inline', fontSize: { xs: '2rem', md: '2.5rem' } }}>
            <Typewriter
              words={['Data Scientist', 'Full Stack Developer', 'Software Engineer', 'Innovator', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </Box>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkedInIcon />}
          href="https://www.linkedin.com/in/aman-vyas-10b1871b4/"
          target="_blank"
          sx={{
            borderRadius: 2,
            fontWeight: 700,
            fontSize: 18,
            px: 3,
            py: 1.2,
            boxShadow: 'none',
            background: '#1976d2',
            textTransform: 'none',
            zIndex: 2,
            mt: 2,
            mb: 2,
            '&:hover': { background: '#125ea2' },
          }}
        >
          LinkedIn
        </Button>
      </Box>

      {/* ABOUT SECTION */}
      <Box id="about" sx={{ px: { xs: 2, md: 10 }, py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', maxWidth: 1400, mx: 'auto', gap: { xs: 4, md: 8 } }}>
          {/* Left: Image */}
          <Box sx={{ flex: 1, minWidth: 280, maxWidth: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              component="img"
              src="src\assets\Profile.png"
              alt="USC University of Southern California"
              sx={{
                width: '100%',
                maxWidth: 420,
                borderRadius: 2,
                boxShadow: '0 4px 24px #2222',
                objectFit: 'cover',
              }}
            />
          </Box>
          {/* Right: Heading and Description */}
          <Box sx={{ flex: 2, minWidth: 320, maxWidth: 700, textAlign: 'center', px: { xs: 0, md: 2 } }}>
            <Typography variant="h3" fontWeight={700} sx={{ color: isDark ? '#fff' : '#222', mb: 1, textTransform: 'uppercase', letterSpacing: 1 }}>
              ABOUT
            </Typography>
            <Box sx={{ width: 80, height: 4, bgcolor: '#1976d2', mx: 'auto', mb: 4, borderRadius: 2 }} />
            <Typography variant="h4" fontWeight={700} sx={{ color: isDark ? '#b0b0b0' : '#5a6473', mb: 3, textAlign: 'center' }}>
              Software Development Engineer
            </Typography>
           <Typography
  variant="h6"
  sx={{
    color: isDark ? '#b0b0b0' : '#5a6473',
    fontWeight: 400,
    lineHeight: 1.8,
    textAlign: 'left',
  }}
>
  I'm a <strong>passionate Software Engineer</strong> with <strong>3+ years of experience</strong> building
  <strong> scalable backend systems</strong>, <strong>cloud-native microservices</strong>, and
  <strong> data-driven platforms</strong>. My core strength lies in
  <strong> backend development and database engineering</strong>, where I design systems that are
  reliable, high-performance, and production-ready.
</Typography>

<Box sx={{ my: 3 }} />

<Typography
  variant="h6"
  sx={{
    color: isDark ? '#b0b0b0' : '#5a6473',
    fontWeight: 400,
    lineHeight: 1.8,
    textAlign: 'left',
  }}
>
  At <strong>John Deere</strong>, I've worked on <strong>mission-critical systems</strong>
  <strong> C++ algorithms for autonomous field operations</strong> to leading the backend of a
  <strong> microservices-based Progressive Web App</strong> that delivers
  <strong> $2.5M in annual business impact</strong>.
</Typography>

<Box sx={{ my: 3 }} />

<Typography
  variant="h6"
  sx={{
    color: isDark ? '#b0b0b0' : '#5a6473',
    fontWeight: 400,
    lineHeight: 1.8,
    textAlign: 'left',
  }}
>
  My hands-on experience includes:
</Typography>

<Box component="ul" sx={{ textAlign: 'left', color: isDark ? '#b0b0b0' : '#5a6473', pl: 3, mt: 1, mb: 3 }}>
  <li>Java (Spring Boot, Quarkus) & distributed microservices</li>
  <li>Event-driven systems with Kafka & Debezium (CDC)</li>
  <li>PostgreSQL, MongoDB & Graph databases</li>
  <li>Cloud infrastructure, APIs & performance optimization</li>
</Box>

<Typography
  variant="h6"
  sx={{
    color: isDark ? '#b0b0b0' : '#5a6473',
    fontWeight: 400,
    lineHeight: 1.8,
    textAlign: 'left',
  }}
>
  Projects like <strong>SyncForge</strong>, where I solved the
  <strong> Dual Write Problem</strong> using the
  <strong> Outbox Pattern and Debezium</strong>, reflect my focus on building
  <strong> fault-tolerant, scalable backend foundations</strong>.
</Typography>

<Box sx={{ my: 3 }} />

<Typography
  variant="h6"
  sx={{
    color: isDark ? '#b0b0b0' : '#5a6473',
    fontWeight: 500,
    lineHeight: 1.8,
    textAlign: 'left',
  }}
>
  I believe in <strong>clean architecture</strong>, <strong>ownership</strong>, and
  <strong> measurable impact</strong>. My goal is simple:
  <strong> build backend systems that just work — fast, correct, and at scale</strong>.
</Typography>

          </Box>
        </Box>
      </Box>
    </>
  );
}
