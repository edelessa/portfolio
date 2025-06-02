import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

function About() {
  const experiences = [
    {
      title: 'Full Stack Engineering Resident',
      company: 'Prime Digital Academy',
      period: 'Mar 2023 – Jun 2025',
      description: 'Built full-stack web applications both individually and in agile teams using JavaScript, React, Node.js, Zustand, and SQL. Collaborated with real-world clients to deliver custom software solutions focused on performance, data optimization, and UX accessibility.',
    },
    {
      title: 'Special Education Assistant',
      company: 'Washburn High School, Minneapolis, MN',
      period: 'Nov 2024 – Present',
      description: 'Supported a blind student 1:1, applying accessibility best practices to modify lessons and ensure inclusive participation. Translated Materials into braille for accessibility, implemented phonemic strategies, and guided learning with empathy and adaptability.',
    },
    {
      title: 'Property Manager & Marketing Coordinator',
      company: 'Fia Properties, Saint Paul, MN',
      period: 'Jun 2016 – Jan 2022',
      description: 'Oversaw operations, contracts, and vendor management—building processes similar to managing software workflows. Introduced digital tools to improve client communication and streamline rent and maintenance systems.',
    },
    {
      title: 'Member Advocate / Insurance Specialist',
      company: 'HealthPartners Insurance Inc., Bloomington, MN',
      period: 'Mar 2018 – Jun 2021',
      description: 'Navigated and documented complex systems using multiple internal tools—paralleling experience with APIs and databases. Communicated technical information to non-technical users, aligning with frontend-user empathy in software roles.',
    },
  ];

  const education = [
    {
      degree: 'Certificate in Full Stack Software Engineering',
      school: 'Prime Digital Academy',
      period: 'April 2025',
    },
    {
      degree: 'Grades 5–12 Communication Arts & Literature',
      school: 'Concordia University, St. Paul, MN',
      period: '2013–2015',
    },
    {
      degree: 'TESOL Certificate',
      school: 'St. Giles International, London, UK',
      period: '2010–2011',
    },
    {
      degree: 'Associate Degree',
      school: 'Brentford College, London, UK',
      period: '2008–2010',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8 }}>
        <Typography variant="h2" gutterBottom align="center">
          About Me
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
          Full Stack Software Engineer with hands-on experience in front-end and back-end development using JavaScript (ES6+),
          React, Node.js, Zustand, HTML5, CSS3, and SQL. Skilled in building responsive, accessible, and user-centered web
          applications with an emphasis on cross-functional collaboration, RESTful API integration, and modern UI/UX design
          principles. Brings a unique background in education, special needs accessibility, and communication, providing a strong
          foundation in empathy-driven development and inclusive design.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4, height: '100%' }}
          >
            <Typography variant="h4" gutterBottom>
              Education
            </Typography>
            {education.map((edu) => (
              <Box key={edu.degree} sx={{ mb: 3 }}>
                <Typography variant="h6">{edu.degree}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {edu.school}, {edu.period}
                </Typography>
              </Box>
            ))}
          </MotionPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ p: 4, height: '100%' }}
          >
            <Typography variant="h4" gutterBottom>
              Technical Skills
            </Typography>
            <Grid container spacing={2}>
              {[
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'React',
                'Node.js',
                'Zustand',
                'SQL',
                'REST APIs',
                'Git',
                'GitHub',
                'VS Code',
                'AWS',
                'Agile Methodologies',
                'UI/UX Design',
                'Accessibility',
                'Responsive Design'
              ].map((skill) => (
                <Grid item xs={6} key={skill}>
                  <Typography variant="body1">• {skill}</Typography>
                </Grid>
              ))}
            </Grid>
          </MotionPaper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h3" gutterBottom align="center">
          Professional Experience
        </Typography>
        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={exp.title}>
              <MotionPaper
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                sx={{ p: 4 }}
              >
                <Typography variant="h5" gutterBottom>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {exp.company} | {exp.period}
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  {exp.description}
                </Typography>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default About; 