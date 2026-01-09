import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';

const timeline = [
  {
    title: 'Software Engineer Intern',
    org: 'Oracle America, Inc.',
    date: 'May 2025 - Aug 2025',
    details: [
      'Consolidated loggers to enhance system efficiency.',
      'Developed product metrics and dynamic dashboards for data-driven decision-making.',
    ],
  },
  {
    title: 'STEM Researcher',
    org: 'USC Viterbi School of Engineering',
    date: 'Apr 2024 - Aug 2024',
    details: [
      'Led NSF-funded project for assistive technologies.',
      'Launched accessible website for disabled individuals.',
    ],
  },
  {
    title: 'Data Science Intern',
    org: 'Applus IDIADA',
    date: 'Jan 2023 - Jun 2023',
    details: [
      'Preprocessed crash simulation data using ML algorithms.',
      'Improved material selection and vehicle safety.',
    ],
  },
  {
    title: 'Master of Science in Computer Science',
    org: 'University of Southern California',
    date: 'Jan 2024 - Dec 2025',
    details: [
      'Relevant Coursework: Machine Learning, Data Science, Algorithms, Distributed Systems',
    ],
  },
  {
    title: 'Bachelor of Technology in Computer Science and Engineering',
    org: 'National Institute of Technology',
    date: 'July 2019 - May 2023',
    details: [
      'Graduated with Honors',
      'President, Coding Club',
    ],
  },
];

const TimelineSection = () => (
  <Box sx={{ bgcolor: 'rgba(102,126,234,0.08)', py: 10 }} id="resume">
    <Container>
      <Typography variant="h3" align="center" gutterBottom data-aos="fade-up" fontWeight={700}>
        Resume
      </Typography>
      <Timeline position="right">
        {timeline.map((item, idx) => (
          <TimelineItem key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {idx < timeline.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <Typography variant="h6" fontWeight={600}>{item.title}</Typography>
                <Typography variant="subtitle2" color="text.secondary">{item.org}</Typography>
                <Typography variant="body2" color="text.secondary">{item.date}</Typography>
                {item.details && item.details.length > 0 && (
                  <ul style={{ marginTop: 8 }}>
                    {item.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                )}
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  </Box>
);

export default TimelineSection;
