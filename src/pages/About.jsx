import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import PublicIcon from '@mui/icons-material/Public';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import GroupIcon from '@mui/icons-material/Group';
import BusinessIcon from '@mui/icons-material/Business';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionTypography = motion(Typography);

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'Zustand',
    'SQL',
    'HTML5',
    'CSS3',
    'REST APIs'
  ];

  const background = [
    'Classroom teaching experience',
    'Braille instruction',
    'Communication bridge building',
    'Cross-functional collaboration'
  ];

  const interests = [
    'Mentoring others',
    'Contributing to open source',
    'Exploring frontend frameworks',
    'Speaking at tech conferences'
  ];

  const experiences = [
    {
      title: 'Full Stack Engineering Resident',
      company: 'Prime Digital Academy',
      period: 'Mar 2023 - Jun 2025',
      description: 'Built full-stack web applications both individually and in agile teams using JavaScript, React, Node.js, Zustand, and SQL. Collaborated with real-world clients to deliver custom software solutions focused on performance, data optimization, and UX accessibility.',
      skills: ['JavaScript', 'React', 'Node.js', 'Zustand', 'SQL', 'Agile', 'REST APIs']
    },
    {
      title: 'Special Education Assistant',
      company: 'Washburn High School',
      period: 'Nov 2024 - Present',
      description: 'Supported a blind student 1:1, applying accessibility best practices to modify lessons and ensure inclusive participation. Translated materials into braille for accessibility and guided learning with empathy and adaptability.',
      skills: ['Accessibility', 'Braille Translation', 'Inclusive Design', 'Empathy-driven Development']
    },
    {
      title: 'Property Manager & Marketing Coordinator',
      company: 'Fia Properties',
      period: 'Jun 2016 - Jan 2022',
      description: 'Oversaw operations, contracts, and vendor management—building processes similar to managing software workflows. Introduced digital tools to improve client communication and streamline systems.',
      skills: ['Process Management', 'Digital Tools', 'Client Communication', 'Systems Thinking']
    }
  ];

  const transferableSkills = [
    'Accessibility & Inclusive Design',
    'User-Centered Development',
    'Cross-functional Collaboration',
    'Agile Methodologies',
    'Problem-Solving & Debugging',
    'Communication & Documentation',
    'Empathy-driven Development',
    'Systems-level Thinking'
  ];

  return (
    <Box 
      ref={ref}
      sx={{ 
        py: 8, 
        background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 100%)',
        minHeight: '100vh',
        color: 'text.primary'
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <MotionTypography 
            variant="h1" 
            gutterBottom
            sx={{
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #ffd23d 30%, #ff6b35 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </MotionTypography>
          <MotionTypography 
            variant="h5" 
            sx={{ 
              color: '#e8f4f8',
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
              fontSize: '1.3rem',
              fontWeight: 400,
            }}
          >
            Hi, I'm <strong>Edel Mahamood (Ru)</strong> — a Minneapolis-based Full Stack Software Engineer 
            who codes with purpose and empathy.
          </MotionTypography>
        </MotionBox>

        {/* Profile Section */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{ textAlign: 'center' }}
            >
              <Avatar
                src="/profile.jpg"
                alt="Edel Mahamood (Ru)"
                sx={{
                  width: 350,
                  height: 350,
                  mx: 'auto',
                  mb: 4,
                  border: '6px solid rgba(32, 178, 170, 0.4)',
                  boxShadow: '0 25px 80px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 35px 100px rgba(0, 0, 0, 0.5)',
                    borderColor: 'rgba(32, 178, 170, 0.7)',
                  },
                }}
              />
              <Typography variant="h3" sx={{ color: '#ffffff', mb: 2, fontWeight: 800, fontSize: '2rem' }}>
                Edel Mahamood
              </Typography>
              <Typography variant="h5" sx={{ color: '#20b2aa', mb: 2, fontWeight: 700, fontSize: '1.3rem' }}>
                (Ru)
              </Typography>
              <Typography variant="h6" sx={{ color: '#ff6b35', mb: 3, fontWeight: 600, fontSize: '1.1rem' }}>
                Full Stack Software Engineer
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
                <LocationOnIcon sx={{ color: '#b8c5a6' }} />
                <Typography variant="body1" sx={{ color: '#b8c5a6', lineHeight: 1.6, fontSize: '1.1rem' }}>
                  Minneapolis, MN
                </Typography>
              </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={8}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  background: 'rgba(26, 42, 26, 0.4)',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(32, 178, 170, 0.2)',
                  borderRadius: 4,
                }}
              >
                <Typography variant="h4" sx={{ color: '#ffffff', mb: 4, fontWeight: 800, fontSize: '2rem' }}>
                  My Journey
                </Typography>
                <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
                  I'm not your typical developer. Before diving into full-stack development, I spent years in classrooms, 
                  brailling lessons, guiding learners, and building communication bridges — all of which now power my 
                  approach to inclusive, user-centered digital design.
                </Typography>
                <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
                  Today, I build accessible, scalable web applications using <strong>JavaScript (ES6+), React, Node.js, Zustand, SQL</strong>, 
                  and more. I'm just as comfortable writing clean code as I am refactoring legacy logic or collaborating 
                  across cross-functional teams.
                </Typography>
                <Typography variant="body1" sx={{ color: '#e8f4f8', lineHeight: 1.7, fontSize: '1.1rem' }}>
                  My tech toolkit is modern, my design sense is sharp, and my drive to learn is relentless. Whether it's 
                  debugging complex APIs or presenting animated UI transitions at tech conferences (hi, MinnieBar!), 
                  I bring clarity, creativity, and intention to everything I build.
                </Typography>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>

        {/* Professional Experience Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          sx={{ mb: 10 }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#ffffff', 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Professional Experience
          </Typography>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} key={exp.title}>
                <MotionPaper
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  elevation={0}
                  sx={{
                    p: 4,
                    background: 'rgba(26, 42, 26, 0.4)',
                    backdropFilter: 'blur(25px)',
                    border: '2px solid rgba(32, 178, 170, 0.2)',
                    borderRadius: 4,
                    mb: 3,
                    '&:hover': {
                      borderColor: 'rgba(32, 178, 170, 0.4)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <BusinessIcon sx={{ color: '#20b2aa', fontSize: 32 }} />
                    <Box>
                      <Typography variant="h5" sx={{ color: '#ffffff', mb: 1, fontWeight: 800, fontSize: '1.4rem' }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#20b2aa', mb: 1, fontWeight: 700, fontSize: '1.2rem' }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#b8c5a6', fontSize: '1rem' }}>
                        {exp.period}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.6, fontSize: '1.1rem' }}>
                    {exp.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(32, 178, 170, 0.2)',
                          color: '#20b2aa',
                          border: '1px solid rgba(32, 178, 170, 0.3)',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                        }}
                      />
                    ))}
                  </Box>
                </MotionPaper>
              </Grid>
            ))}
          </Grid>
        </MotionBox>

        {/* Transferable Skills Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          sx={{ mb: 10 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: 'rgba(26, 42, 26, 0.4)',
              backdropFilter: 'blur(25px)',
              border: '2px solid rgba(255, 210, 61, 0.2)',
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <SchoolIcon sx={{ color: '#ffd23d', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                Transferable Skills from Career Change
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
              My diverse background in education, accessibility, and management has equipped me with unique skills 
              that directly translate to software development:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {transferableSkills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    backgroundColor: 'rgba(255, 210, 61, 0.2)',
                    color: '#ffd23d',
                    border: '1px solid rgba(255, 210, 61, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    padding: '8px 16px',
                    height: 'auto',
                  }}
                />
              ))}
            </Box>
          </Paper>
        </MotionBox>

        {/* Background Experience Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          sx={{ mb: 10 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: 'rgba(26, 42, 26, 0.4)',
              backdropFilter: 'blur(25px)',
              border: '2px solid rgba(255, 107, 53, 0.2)',
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <SchoolOutlinedIcon sx={{ color: '#ff6b35', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                My Unique Background
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
              My diverse experience in education and accessibility has shaped my approach to development:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {background.map((item, index) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <AccessibilityIcon sx={{ color: '#ff6b35', fontSize: 24 }} />
                  <Typography variant="body1" sx={{ color: '#e8f4f8', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    <strong>{item}</strong>
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </MotionBox>

        {/* Technical Skills Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          sx={{ mb: 10 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: 'rgba(26, 42, 26, 0.4)',
              backdropFilter: 'blur(25px)',
              border: '2px solid rgba(32, 178, 170, 0.2)',
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <BuildIcon sx={{ color: '#20b2aa', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                Technical Expertise
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
              I specialize in modern full-stack development with a focus on accessibility and user experience:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    backgroundColor: 'rgba(32, 178, 170, 0.2)',
                    color: '#20b2aa',
                    border: '1px solid rgba(32, 178, 170, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    padding: '8px 16px',
                    height: 'auto',
                  }}
                />
              ))}
            </Box>
          </Paper>
        </MotionBox>

        {/* Beyond the Code Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          sx={{ mb: 10 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: 'rgba(26, 42, 26, 0.4)',
              backdropFilter: 'blur(25px)',
              border: '2px solid rgba(255, 210, 61, 0.2)',
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <CoffeeIcon sx={{ color: '#ffd23d', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                Beyond the Code
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
              When I'm not coding, I'm probably:
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {interests.map((interest, index) => (
                <Box key={interest} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <StarIcon sx={{ color: '#ffd23d', fontSize: 24 }} />
                  <Typography variant="body1" sx={{ color: '#e8f4f8', lineHeight: 1.7, fontSize: '1.1rem' }}>
                    <strong>{interest}</strong>
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', mt: 3, lineHeight: 1.7, fontSize: '1.1rem', fontStyle: 'italic' }}>
              — all fueled by strong coffee and stronger curiosity.
            </Typography>
          </Paper>
        </MotionBox>

        {/* Call to Action Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              background: 'rgba(26, 42, 26, 0.4)',
              backdropFilter: 'blur(25px)',
              border: '2px solid rgba(32, 178, 170, 0.2)',
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
              <GroupIcon sx={{ color: '#20b2aa', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                Let's Build Something Brilliant
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ color: '#e8f4f8', lineHeight: 1.7, fontSize: '1.3rem', fontWeight: 600, mb: 2 }}>
              Let's build something brilliant, inclusive, and just a little bit unexpected.
            </Typography>
            <Typography variant="body1" sx={{ color: '#b8c5a6', lineHeight: 1.7, fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
              I'm always excited to collaborate on projects that make a difference — whether it's with a growing startup, 
              an established company, or an open-source community.
            </Typography>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default About;
