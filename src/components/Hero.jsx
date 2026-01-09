import React from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { Parallax } from 'react-parallax';
import { Typewriter } from 'react-simple-typewriter';
import Particles from '@tsparticles/react';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        bgcolor: 'transparent',
      }}
    >
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              onHover: { enable: true, mode: 'repulse' },
              resize: true,
            },
            modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: '#667eea' },
            links: { color: '#764ba2', distance: 150, enable: true, opacity: 0.5, width: 1 },
            collisions: { enable: true },
            move: { direction: 'none', enable: true, outModes: { default: 'bounce' }, random: false, speed: 2, straight: false },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
      />


      {/* Parallax Glassmorphism Card */}
      <Parallax strength={200} bgImageStyle={{ opacity: 0.2 }}>
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            p: 6,
            borderRadius: 6,
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(10px)',
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.18)',
            textAlign: 'center',
            maxWidth: 520,
            mx: 'auto',
            width: { xs: '90vw', md: '520px' },
          }}
        >
          <Avatar src="/assets/profile-img.png" sx={{ width: 120, height: 120, mx: 'auto', mb: 2, border: '3px solid #fff' }} />
          <Typography variant="h2" fontWeight={700} color="#222">
            Aman Vyas
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, mb: 3 }}>
            <span style={{ color: '#764ba2', fontWeight: 600 }}>
              <Typewriter
                words={['Software Engineer', 'Data Science Enthusiast', 'Innovator', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </span>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#projects"
            sx={{ mt: 2, px: 4, borderRadius: 3, fontWeight: 600 }}
          >
            View Projects
          </Button>
        </Box>
      </Parallax>
    </Box>
  );
}
