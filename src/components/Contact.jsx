import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, useTheme } from '@mui/material';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import { motion } from 'framer-motion';

const contactInfo = {
  name: 'Aman Vyas',
  location: 'Pune, India',
  email: 'amanvyas055@gmail.com',
  phone: '+91 7284935089',
};

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.body}`)}`;
    window.location.href = mailtoLink;
  };

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '4px',
      boxShadow: 'none',
      fontSize: '14px',
      bgcolor: isDark ? '#2a2a3e' : '#fff',
      '& fieldset': { borderColor: isDark ? '#444' : '#ced4da' },
      '&:hover fieldset': { borderColor: '#80bdff' },
      '&.Mui-focused fieldset': { borderColor: '#80bdff' },
    },
    '& .MuiOutlinedInput-input': {
      color: isDark ? '#e0e0e0' : 'inherit',
    },
  };

  return (
    <Box sx={{ py: 4, bgcolor: isDark ? '#16213e' : '#fff' }} id="contact">
      <Container maxWidth="lg">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
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
              CONTACT
            </Typography>
          </Box>

          {/* Two Column Layout */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}>
            {/* Left Column - Contact Info */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '0 0 35%' } }}>
              {/* Location */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 5 }}>
                <Box
                  sx={{
                    width: '44px',
                    height: '44px',
                    minWidth: '44px',
                    background: isDark ? '#2a2a3e' : '#eef7ff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    mr: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: '#0563bb',
                      '& svg': { color: '#fff !important' },
                    },
                  }}
                >
                  <LocationOn sx={{ color: '#0563bb', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '22px', fontWeight: 600, color: isDark ? '#e0e0e0' : '#45505b', fontFamily: '"Raleway", sans-serif', mb: 0.5 }}>
                    Location:
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: isDark ? '#a0a0a0' : '#728394' }}>
                    {contactInfo.location}
                  </Typography>
                </Box>
              </Box>

              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 5 }}>
                <Box
                  sx={{
                    width: '44px',
                    height: '44px',
                    minWidth: '44px',
                    background: isDark ? '#2a2a3e' : '#eef7ff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    mr: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: '#0563bb',
                      '& svg': { color: '#fff !important' },
                    },
                  }}
                >
                  <Email sx={{ color: '#0563bb', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '22px', fontWeight: 600, color: isDark ? '#e0e0e0' : '#45505b', fontFamily: '"Raleway", sans-serif', mb: 0.5 }}>
                    Email:
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: isDark ? '#a0a0a0' : '#728394' }}>
                    {contactInfo.email}
                  </Typography>
                </Box>
              </Box>

              {/* Phone */}
              {/* Phone */}            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    width: '44px',
                    height: '44px',
                    minWidth: '44px',
                    background: isDark ? '#2a2a3e' : '#eef7ff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    mr: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      background: '#0563bb',
                      '& svg': { color: '#fff !important' },
                    },
                  }}
                >
                  <Phone sx={{ color: '#0563bb', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '22px', fontWeight: 600, color: isDark ? '#e0e0e0' : '#45505b', fontFamily: '"Raleway", sans-serif', mb: 0.5 }}>
                    Phone No.:
                  </Typography>
                  <Typography sx={{ fontSize: '14px', color: isDark ? '#a0a0a0' : '#728394' }}>
                    {contactInfo.phone}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right Column - Contact Form */}
            <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 65%' } }}>
              <Box component="form" onSubmit={handleSubmit}>
                {/* Name and Email row */}
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    fullWidth
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    sx={{ ...inputStyles, '& .MuiOutlinedInput-root': { ...inputStyles['& .MuiOutlinedInput-root'], height: '44px' } }}
                  />
                  <TextField
                    fullWidth
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    sx={{ ...inputStyles, '& .MuiOutlinedInput-root': { ...inputStyles['& .MuiOutlinedInput-root'], height: '44px' } }}
                  />
                </Box>

                {/* Subject */}
                <TextField
                  fullWidth
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  sx={{ ...inputStyles, mb: 2, '& .MuiOutlinedInput-root': { ...inputStyles['& .MuiOutlinedInput-root'], height: '44px' } }}
                />

                {/* Body */}
                <TextField
                  fullWidth
                  name="body"
                  placeholder="Body"
                  value={formData.body}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={{ ...inputStyles, mb: 2 }}
                />

                {/* Submit Button */}
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{
                      borderColor: '#45505b',
                      color: '#45505b',
                      px: 2.5,
                      py: 1,
                      borderRadius: '4px',
                      textTransform: 'none',
                      fontSize: '14px',
                      fontWeight: 500,
                      transition: '0.4s',
                      '&:hover': {
                        borderColor: '#0563bb',
                        bgcolor: '#0563bb',
                        color: '#fff',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;