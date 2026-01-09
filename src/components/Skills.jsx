import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 95 },
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Python', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'Data Science', level: 80 },
  { name: 'UI/UX', level: 87 },
  { name: 'Machine Learning', level: 75 },
];

const Skills = () => (
  <Container sx={{ py: 8 }} id="skills">
    <Typography variant="h3" align="center" gutterBottom data-aos="fade-up" fontWeight={700}>
      Skills
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {skills.map((skill, idx) => (
        <Grid item xs={12} sm={6} md={3} key={skill.name} data-aos="fade-up" data-aos-delay={idx * 100}>
          <Card sx={{ p: 2, textAlign: 'center', borderRadius: 4, boxShadow: 3, backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.15)' }}>
            <Typography variant="h6">{skill.name}</Typography>
            <Box sx={{ mt: 2, mb: 1, height: 10, bgcolor: '#e0e0e0', borderRadius: 5, overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2 }}
                style={{ height: '100%', background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
              />
            </Box>
            <Typography variant="body2">{skill.level}%</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Skills;
