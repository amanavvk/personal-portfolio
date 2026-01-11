import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography, Grid, Box, Button, Card, CardContent, Fade, useTheme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Use import.meta.env.BASE_URL for proper path resolution on GitHub Pages
const getImagePath = (filename) => `${import.meta.env.BASE_URL}assets/img/${filename}`;

const certifications = [
  
 {
  title: 'Advanced Java, Spring Boot & Spring AI',
  skills: 'Java, Spring Boot, REST APIs, Microservices, Spring AI, LLM Integration',
  desc: 'Advanced backend engineering & AI-driven system design:',
  img: getImagePath('certificate2.jpg'),
  info: 'https://www.udemy.com/certificate/UC-6f1e98a2-8a99-4494-9f84-e6bfcd1615d6/',
  date: '2024',
  issuer: 'Udemy',
  details:
    'Built production-grade backend services using Java and Spring Boot, designed RESTful APIs, and explored Spring AI for integrating LLM-powered features. Focused on clean architecture, service layering, and scalable backend system design.'
},
{
    title: 'Advanced Database Engineering',
    skills: 'Database Internals, Indexing, Query Optimization, Transactions, ACID, Schema Design',
    desc: 'Skills gained:',
    img: getImagePath('certificate1.jpg'),
    info: 'https://www.udemy.com/certificate/UC-73815389-bc15-49bd-a09f-699c44ea7456/',
    date: '2025',
    issuer: 'Udemy',
    details:
      'Developed a deep understanding of database internals including indexing strategies, transaction management, isolation levels, and query optimization techniques. Focused on designing scalable, high-performance schemas and writing efficient SQL for real-world backend systems.'
  },

];


function CertificationsSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  const [active, setActive] = useState(0);
  const timer = useRef();

  useEffect(() => {
    timer.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % certifications.length);
    }, 6000);
    return () => clearTimeout(timer.current);
  }, [active]);

  const cert = certifications[active];

  return (
    <section id="certifications-courses" style={{ backgroundColor: isDark ? '#1a1a2e' : '#fff' }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 6, color: isDark ? '#fff' : '#2d3a4b', letterSpacing: 1 }}>
          CERTIFICATIONS
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={7}>
            <Fade in timeout={700} key={cert.title}>
              <Box sx={{ p: 4, borderLeft: '4px solid #156fd3', background: isDark ? '#16213e' : '#fff', borderRadius: 3, minHeight: 320 }}>
                <Typography variant="h5" fontWeight={700} sx={{ mb: 2, color: isDark ? '#fff' : '#222' }}>{cert.title}</Typography>
                <Typography variant="subtitle1" sx={{ color: '#64b5f6', fontSize: 28, fontWeight: 700, mb: 1 }}>
                  &ldquo;
                  <span style={{ fontSize: 18, color: isDark ? '#e0e0e0' : '#222', fontWeight: 400 }}>
                    {cert.desc}
                  </span>
                  &rdquo;
                </Typography>
                <Typography variant="body1" sx={{ color: isDark ? '#b0b0b0' : '#222', mb: 2 }}>
                  {cert.skills}
                </Typography>
                <Button href={cert.info} target="_blank" sx={{ color: '#156fd3', fontWeight: 600, mt: 2 }}>
                  More Info
                </Button>
              </Box>
            </Fade>
          </Grid>
          <Grid item xs={12} md={5}>
            <Fade in timeout={700} key={cert.img}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 320 }}>
                <img src={cert.img} alt={cert.title} style={{ maxWidth: '100%', maxHeight: 340, borderRadius: 12, boxShadow: '0 4px 32px rgba(21,111,211,0.10)' }} />
              </Box>
            </Fade>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => setActive((active + 1) % certifications.length)}
            sx={{ background: '#156fd3', fontWeight: 600 }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </section>
  );
}

export default CertificationsSection;
