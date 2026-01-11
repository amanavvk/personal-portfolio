
import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';

// Use import.meta.env.BASE_URL for proper path resolution on GitHub Pages
const getProjectLink = (filename) => `${import.meta.env.BASE_URL}projects/${filename}`;
const getImagePath = (filename) => `${import.meta.env.BASE_URL}assets/img/${filename}`;

const projects = [
    {
    title: 'Road Building Machines Simulation Software',
    link: getProjectLink('road_building_machines_simulation_software.html'),
    image: getImagePath('road building.png'),
  },
      {
    title: 'SyncForge – Reliable Event-Driven Microservices',
    link: getProjectLink('syncforge.html'),
    image: getImagePath('sync.png'),
  },
  {
    title: 'Semantyx – Ontology Driven Knowledge System',
    link: getProjectLink('semantyx.html'),
    image: getImagePath('sym.png'),
  },
  
  {
    title: 'Video Shots Time Detection',
    link: getProjectLink('video_shots_time_detection.html'),
    image: getImagePath('projects6.jpg'),
  },
  
 
  {
    title: 'Online Grocery Store',
    link: getProjectLink('online_grocery_store.html'),
    image: getImagePath('projects4.jpg'),
  },
 
  {
    title: 'Website Syncing Ebay Data',
    link: getProjectLink('website_syncing_ebay_data.html'),
    image: getImagePath('projects8.png'),
  },
];

function Projects() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
    <Box 
      component="section" 
      id="projects" 
      sx={{ 
        py: 4, 
        overflow: 'hidden',
        bgcolor: isDark ? '#1a1a2e' : '#f5f6f7',
      }}
    >
      <Container maxWidth="lg" data-aos="fade-up">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', pb: 4 }}>
          <Typography 
            variant="h5" 
            component="h2"
            sx={{ 
              fontSize: '32px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              pb: 2.5,
              position: 'relative',
              color: isDark ? '#fff' : '#45505b',
              fontFamily: '"Raleway", sans-serif',
              '&::before': {
                content: '""',
                position: 'absolute',
                display: 'block',
                width: '120px',
                height: '1px',
                background: isDark ? '#444' : '#ddd',
                bottom: '1px',
                left: 'calc(50% - 60px)',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                display: 'block',
                width: '40px',
                height: '3px',
                background: '#0563bb',
                bottom: 0,
                left: 'calc(50% - 20px)',
              },
            }}
          >
            PROJECTS
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box 
          className="projects-container"
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 3,
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={project.title}
              className="projects-item"
              sx={{ mb: 0 }}
            >
              <Box
                className="projects-wrap"
                sx={{
                  transition: '0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 1,
                  background: 'rgba(69, 80, 91, 0.8)',
                  '&::before': {
                    content: '""',
                    background: 'rgba(255, 255, 255, 0.7)',
                    position: 'absolute',
                    left: '30px',
                    right: '30px',
                    top: '30px',
                    bottom: '30px',
                    transition: 'all ease-in-out 0.3s',
                    zIndex: 2,
                    opacity: 0,
                  },
                  '&:hover::before': {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 1,
                  },
                  '&:hover .projects-info': {
                    opacity: 1,
                  },
                  '&:hover .projects-info::before': {
                    top: '15px',
                    left: '15px',
                  },
                  '&:hover .projects-info::after': {
                    bottom: '15px',
                    right: '15px',
                  },
                }}
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={`Project-${index + 1}`}
                  className="img-fluid"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <Box
                  className="projects-info"
                  sx={{
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    textAlign: 'center',
                    zIndex: 3,
                    transition: 'all ease-in-out 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&::before': {
                      display: 'block',
                      content: '""',
                      width: '48px',
                      height: '48px',
                      position: 'absolute',
                      top: '35px',
                      left: '35px',
                      borderTop: '3px solid #d7dce1',
                      borderLeft: '3px solid #d7dce1',
                      transition: 'all 0.5s ease 0s',
                      zIndex: 9994,
                    },
                    '&::after': {
                      display: 'block',
                      content: '""',
                      width: '48px',
                      height: '48px',
                      position: 'absolute',
                      bottom: '35px',
                      right: '35px',
                      borderBottom: '3px solid #d7dce1',
                      borderRight: '3px solid #d7dce1',
                      transition: 'all 0.5s ease 0s',
                      zIndex: 9994,
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h4"
                    sx={{
                      fontSize: '20px',
                      color: '#45505b',
                      fontWeight: 600,
                      fontFamily: '"Raleway", sans-serif',
                    }}
                  >
                    <Box
                      component="a"
                      href={project.link}
                      className="projects-details-lightbox"
                      data-glightbox="type: external"
                      title="projects Details"
                      sx={{
                        textDecoration: 'underline',
                        color: '#45505b',
                        '&:hover': {
                          color: '#0563bb',
                        },
                      }}
                    >
                      {project.title}
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
