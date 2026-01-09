
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const projects = [
  {
    title: 'Plastic Object Detection',
    link: '/projects/plastic_detection.html',
    image: '/assets/projects/plastic_detection.jpg',
    desc: 'Developed a machine learning model to detect plastic objects in images, improving environmental monitoring.'
  },
  {
    title: 'Video Shots Time Detection',
    link: '/projects/video_shots_time_detection.html',
    image: '/assets/projects/video_shots_time_detection.jpg',
    desc: 'Created a tool to detect and analyze video shot boundaries and timings for media analytics.'
  },
  {
    title: 'Stock Prediction',
    link: '/projects/stock_prediction.html',
    image: '/assets/projects/stock_prediction.jpg',
    desc: 'Implemented time series analysis and prediction models for stock market trends using Python and ML algorithms.'
  },
  {
    title: 'E-commerce Trends Analysis',
    link: '/projects/ecommerce_trends.html',
    image: '/assets/projects/ecommerce_trends.jpg',
    desc: 'Analyzed e-commerce data to identify trends and provide actionable business insights.'
  },
  {
    title: 'Product Search Android App',
    link: '/projects/product_search_android_app.html',
    image: '/assets/projects/product_search_android_app.jpg',
    desc: 'Built an Android app for searching and comparing products across multiple e-commerce platforms.'
  },
  {
    title: 'Online Grocery Store',
    link: '/projects/online_grocery_store.html',
    image: '/assets/projects/online_grocery_store.jpg',
    desc: 'Developed a full-stack online grocery store with real-time inventory and order management.'
  },
  {
    title: 'Covid Patient Monitoring',
    link: '/projects/covid_patient_monitoring.html',
    image: '/assets/projects/covid_patient_monitoring.jpg',
    desc: 'Created a dashboard for monitoring and analyzing Covid patient data for hospitals.'
  },
  {
    title: 'Website Syncing Ebay Data',
    link: '/projects/website_syncing_ebay_data.html',
    image: '/assets/projects/website_syncing_ebay_data.jpg',
    desc: 'Engineered a solution to sync and visualize eBay data for business intelligence.'
  },
];

function Projects() {
  return (
    <section id="projects">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 6, color: '#764ba2', letterSpacing: 1 }}>
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title} style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <Card
                  sx={{
                    borderRadius: 4,
                    boxShadow: '0 4px 24px rgba(102,126,234,0.10)',
                    border: '1.5px solid #e0e0e0',
                    transition: 'transform 0.25s cubic-bezier(.4,2,.6,1), box-shadow 0.25s cubic-bezier(.4,2,.6,1)',
                    '&:hover': {
                      transform: 'translateY(-12px) scale(1.03)',
                      boxShadow: '0 12px 32px rgba(102,126,234,0.18)',
                      borderColor: '#764ba2',
                    },
                    width: '100%',
                    maxWidth: 350,
                    minHeight: 360,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: '#fff',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <div style={{ position: 'relative', width: '100%' }}>
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: '14px 14px 0 0', filter: 'brightness(0.97)' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg,rgba(102,126,234,0.08) 0%,rgba(118,75,162,0.10) 100%)',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                  <CardContent sx={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography
                      variant="h6"
                      align="center"
                      fontWeight={700}
                      sx={{
                        color: '#222',
                        width: '100%',
                        letterSpacing: 0.5,
                        textTransform: 'capitalize',
                        fontSize: '1.18rem',
                        transition: 'color 0.2s',
                        mb: 1,
                        '&:hover': { color: '#764ba2' },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{ color: '#555', fontSize: '0.98rem' }}>
                      {project.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Projects;
