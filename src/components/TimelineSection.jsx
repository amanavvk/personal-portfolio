import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';

/* ===================== DATA ===================== */

const education = [
  {
    degree: 'Bachelor of Technology ',
    org: 'Sardar Vallabhbhai National Institute of Technology, Surat',
    date: 'Aug 2019 – May 2023',
    details: [
      'Key Coursework:',
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Design',
      'Database Management Systems',
      'Distributed Systems',
      'System Design',
      'Embedded Systems',
      'Microcontrollers & Microprocessors',
      'Robotics & Automation',
      'Digital Electronics',
    ],
  },
];

const experience = [
  {
    title: 'Senior Software Engineer',
    org: 'John Deere – Pune, India',
    date: 'May 2023 – Present',
    details: [
      'Led backend development for a cloud-native Progressive Web App using Spring Boot microservices, Kafka, and PostgreSQL, delivering $2.5M annual business impact.',
      'Designed and implemented high-performance C++ algorithms for autonomous field operations with real-time safety constraints.',
      'Built event-driven pipelines and optimized system latency by 20% through performance tuning and efficient API design.',
      'Developed an intelligent assistant using NLP models to guide users through complex simulations, reducing configuration errors.',
      'Applied SOLID principles and design patterns to improve system maintainability and scalability.',
    ],
  },
  {
    title: 'Software Development Engineer Intern',
    org: 'HireTale – Bangalore, India',
    date: 'Jan 2023 – Apr 2023',
    details: [
      'Built a semantic web platform using Quarkus, Hibernate, GraphQL, and JPAStreamer to automate hiring workflows.',
      'Designed MLOps pipelines with GitHub Actions, Docker, and Helm for reproducible model training and deployment.',
      'Engineered data mining modules including classification trees, clustering, and association rule mining.',
      'Automated ETL pipelines and reduced manual processing effort by over 70%.',
    ],
  },
];

/* ===================== TIMELINE ITEM ===================== */

const TimelineItem = ({ title, org, date, details, isLast }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative' }}>
    
    {/* DOT AND LINE CONTAINER */}
    <Box
      sx={{
        width: 36,
        minWidth: 36,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '4px',
      }}
    >
      {/* DOT */}
      <Box
        sx={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          border: '2px solid #1976d2',
          bgcolor: '#fff',
          zIndex: 2,
          flexShrink: 0,
        }}
      />
      {/* LINE coming out from dot */}
      {!isLast && (
        <Box
          sx={{
            width: 2,
            flexGrow: 1,
            bgcolor: '#1976d2',
            minHeight: 400,
          }}
        />
      )}
    </Box>

    {/* CONTENT */}
    <Box sx={{ pl: 2, flex: 1, pb: 4 }}>
      <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#156fd3', fontSize: 18 }}>
        {title}
      </Typography>

      {org && (
        <Typography variant="subtitle2" sx={{ fontStyle: 'italic', color: '#444', mb: 0.5 }}>
          {org}
        </Typography>
      )}

      <Box
        sx={{
          display: 'inline-block',
          bgcolor: '#f5f5f5',
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontWeight: 600,
          fontSize: 14,
          mb: 1,
        }}
      >
        {date}
      </Box>

      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {details.map((d, i) => (
          <li key={i} style={{ fontSize: 15, marginBottom: 6 }}>
            {d}
          </li>
        ))}
      </ul>
    </Box>
  </Box>
);


/* ===================== SECTION ===================== */

const TimelineSection = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
  <Box sx={{ bgcolor: isDark ? '#1a1a2e' : 'rgba(102,126,234,0.08)', py: 10 }} id="resume">
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          maxWidth: 1400,
          mx: 'auto',
          gap: 6,
        }}
      >
        {/* ================= EDUCATION ================= */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: isDark ? '#fff' : '#444' }}>
            Education
          </Typography>

          <Box
            sx={{
              position: 'relative',
              pl: 2,
            }}
          >
            {education.map((item, idx) => (
              <TimelineItem
                key={idx}
                title={item.org}
                org={item.degree}
                date={item.date}
                details={item.details}
                isLast={idx === education.length - 1}
              />
            ))}
          </Box>
        </Box>

        {/* ================= EXPERIENCE ================= */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: isDark ? '#fff' : '#444' }}>
            Professional Experience
          </Typography>

          <Box
            sx={{
              position: 'relative',
              pl: 2,
            }}
          >
            {experience.map((item, idx) => (
              <TimelineItem
                key={idx}
                title={item.title}
                org={item.org}
                date={item.date}
                details={item.details}
                isLast={idx === experience.length - 1}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
  );
};

export default TimelineSection;
