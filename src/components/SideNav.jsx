import React, { useEffect, useState } from 'react';
import { Box, IconButton, Tooltip, useTheme } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

/* ===================== NAV CONFIG ===================== */

const navItems = [
  { icon: <HomeIcon />, label: 'Home', id: 'hero' },
  { icon: <PersonIcon />, label: 'About', id: 'about' },
  { icon: <PsychologyIcon />, label: 'Skills', id: 'skills' },
  { icon: <CodeIcon />, label: 'Projects', id: 'projects' },
  { icon: <SchoolIcon />, label: 'Certifications', id: 'certifications-courses' },
  { icon: <WorkIcon />, label: 'Education & Experience', id: 'resume' },
  { icon: <MailOutlineIcon />, label: 'Contact', id: 'contact' },
];

/* ===================== HELPERS ===================== */

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/* ===================== COMPONENT ===================== */

function SideNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Get all sections and their positions
      const sectionPositions = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          if (el) {
            return {
              id: item.id,
              top: el.offsetTop,
              bottom: el.offsetTop + el.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find which section we're currently in
      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionPositions[i].top) {
          const index = navItems.findIndex((item) => item.id === sectionPositions[i].id);
          if (index !== -1 && index !== active) {
            setActive(index);
          }
          break;
        }
      }
      
      // If at the very top, select Home
      if (window.scrollY < 100) {
        setActive(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [active]);

  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: 24,
        transform: 'translateY(-50%)',
        zIndex: 1200,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      {navItems.map((item, idx) => (
        <Tooltip key={item.label} title={item.label} placement="right" arrow>
          <IconButton
            onClick={() => {
              setActive(idx);
              scrollToSection(item.id);
            }}
            sx={{
              width: 54,
              height: 54,
              backgroundColor: active === idx ? '#156fd3' : isDark ? '#2a2a3e' : '#f5f6fa',
              color: active === idx ? '#fff' : isDark ? '#e0e0e0' : '#444',
              boxShadow:
                active === idx
                  ? '0 6px 18px rgba(21,111,211,0.25)'
                  : 'none',
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#156fd3',
                color: '#fff',
                transform: 'scale(1.05)',
              },
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}

export default SideNav;
