import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const certifications = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    date: '2025',
    desc: 'Comprehensive program covering data cleaning, analysis, and visualization using real-world datasets.'
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2024',
    desc: 'Validated expertise in designing and deploying scalable systems on AWS.'
  },
  {
    title: 'Machine Learning',
    issuer: 'Stanford University (Coursera)',
    date: '2023',
    desc: 'Andrew Ng’s foundational course on machine learning algorithms and applications.'
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2022',
    desc: 'Built and deployed responsive websites using HTML, CSS, and JavaScript.'
  },
];

const courses = [
  {
    title: 'Deep Learning Specialization',
    platform: 'Coursera',
    date: '2025',
    desc: 'Advanced neural networks, CNNs, RNNs, and practical deep learning.'
  },
  {
    title: 'Full-Stack Web Development',
    platform: 'Udemy',
    date: '2024',
    desc: 'React, Node.js, Express, MongoDB, and deployment best practices.'
  },
  {
    title: 'Data Structures and Algorithms',
    platform: 'edX',
    date: '2023',
    desc: 'Algorithmic thinking, problem solving, and coding interview preparation.'
  },
];

function CertificationsAndCourses() {
  return (
    <section id="certifications-courses">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" align="center" fontWeight={700} sx={{ mb: 6, color: '#764ba2', letterSpacing: 1 }}>
          Certifications & Courses
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#222' }}>
              Certifications
            </Typography>
            {certifications.map((cert) => (
              <Card key={cert.title} sx={{ mb: 2, borderRadius: 3, boxShadow: '0 2px 12px rgba(102,126,234,0.08)' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#764ba2' }}>{cert.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>{cert.issuer} &bull; {cert.date}</Typography>
                  <Typography variant="body2" sx={{ color: '#444', mt: 1 }}>{cert.desc}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#222' }}>
              Courses
            </Typography>
            {courses.map((course) => (
              <Card key={course.title} sx={{ mb: 2, borderRadius: 3, boxShadow: '0 2px 12px rgba(102,126,234,0.08)' }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#764ba2' }}>{course.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#555' }}>{course.platform} &bull; {course.date}</Typography>
                  <Typography variant="body2" sx={{ color: '#444', mt: 1 }}>{course.desc}</Typography>
                </CardContent>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default CertificationsAndCourses;
