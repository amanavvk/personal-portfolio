import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';


// Each row: [leftSkill, leftPercent, rightSkill, rightPercent]
const skillRows = [
  ['JAVA, HTML, CSS, SQL, GIT', 100, 'PYTHON, BOOTSTRAP, MONGODB, AGILE', 95],
  ['JAVASCRIPT, REST', 98, 'TYPESCRIPT, NEXT.JS', 93],
  ['C#, C++, EXPRESS.JS, AMAZON WEB SERVICES', 92, 'C, REACT NATIVE, OPENSEARCH', 91],
  ['PHP, D3.JS', 80, 'KOTLIN, KIBANA', 90],
  ['OBJECTIVE-C, RUBY ON RAILS', 89, 'SCALA, SPSS MODELER', 85],
  ['GRAPHQL', 87, 'NODE.JS, REACT, GOOGLE CLOUD PLATFORM', 97],
  ['ANGULAR', 96, 'JQUERY', 94],
  ['SPRING BOOT, POSTGRESQL, MYSQL, ORACLE', 92, 'DATABASE ENGINES (MSSQL, SQLITE, REDIS)', 90],
];



const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  return (
  <Box sx={{ bgcolor: 'background.default', py: 8 }} id="skills">
    <Container>
      <Typography variant="h3" align="center" gutterBottom data-aos="fade-up" fontWeight={700} sx={{ color: isDark ? '#fff' : '#222' }}>
        Skills
      </Typography>
      <Box sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
        {skillRows.map(([leftSkill, leftPercent, rightSkill, rightPercent], idx) => (
          <Box key={leftSkill + rightSkill} sx={{ display: 'flex', width: '100%', mb: 2 }}>
            {/* Left column */}
            <Box sx={{ flex: 1, pr: 4 }}>
              <Typography variant="subtitle1" fontWeight={700} sx={{ color: isDark ? '#e0e0e0' : '#222', mb: 0.5, fontSize: 18 }}>
                {leftSkill}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Box sx={{ flex: 1, mr: 2 }}>
                  <Box sx={{ height: 10, bgcolor: isDark ? '#333' : '#e0e0e0', borderRadius: 5, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${leftPercent}%` }}
                      transition={{ duration: 1.2 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, #156fd3, #764ba2)' }}
                    />
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ color: '#156fd3', fontWeight: 700, fontSize: 18, minWidth: 48, textAlign: 'right' }}>{leftPercent}%</Typography>
              </Box>
            </Box>
            {/* Right column */}
            <Box sx={{ flex: 1, pl: 4 }}>
              <Typography variant="subtitle1" fontWeight={700} sx={{ color: isDark ? '#e0e0e0' : '#222', mb: 0.5, fontSize: 18 }}>
                {rightSkill}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Box sx={{ flex: 1, mr: 2 }}>
                  <Box sx={{ height: 10, bgcolor: isDark ? '#333' : '#e0e0e0', borderRadius: 5, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${rightPercent}%` }}
                      transition={{ duration: 1.2 }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, #156fd3, #764ba2)' }}
                    />
                  </Box>
                </Box>
                <Typography variant="h6" sx={{ color: '#156fd3', fontWeight: 700, fontSize: 18, minWidth: 48, textAlign: 'right' }}>{rightPercent}%</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
  );
};

export default Skills;
