import React from 'react';
import { Container, Typography, Box, Button, Stack, IconButton, Paper } from '@mui/material';
import { Email, LinkedIn, GitHub, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';

const contactInfo = {
  name: 'Aman Vyas',
  location: 'Los Angeles, California',
  email: 'amanvyas@email.com',
  linkedin: 'https://linkedin.com/in/amanvyas',
  github: 'https://github.com/amanvyas',
};

const Contact = () => (
  <Box sx={{ py: 10, bgcolor: 'rgba(118,75,162,0.07)' }} id="contact">
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 5, borderRadius: 6, textAlign: 'center', backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.18)' }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom data-aos="fade-up">
            Contact
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>{contactInfo.name}</Typography>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
            <LocationOn color="primary" />
            <Typography variant="body1">{contactInfo.location}</Typography>
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            <IconButton href={`mailto:${contactInfo.email}`} color="primary" size="large"><Email /></IconButton>
            <IconButton href={contactInfo.linkedin} color="primary" size="large" target="_blank"><LinkedIn /></IconButton>
            <IconButton href={contactInfo.github} color="primary" size="large" target="_blank"><GitHub /></IconButton>
          </Stack>
          <Button variant="contained" color="secondary" size="large" href={`mailto:${contactInfo.email}`}>Email Me</Button>
        </motion.div>
      </Paper>
    </Container>
  </Box>
);

export default Contact;
