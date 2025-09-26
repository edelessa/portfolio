import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import PublicIcon from '@mui/icons-material/Public';

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
    'Zustand',
    'Node.js',
    'Express',
    'SQL',
    'HTML5',
    'CSS3',
    'REST APIs'
  ];

  const interests = [
    'Speaking at tech conferences',
    'Contributing to open source projects',
    'Exploring emerging technologies'
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
            Hi, I'm <strong>Edel Mahamood (Ru)</strong> — a Full Stack Software Engineer based in <strong>Minneapolis, MN</strong>, 
            passionate about crafting exceptional digital experiences through clean code, thoughtful design, and modern web technologies.
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
                  Who I Am
                </Typography>
                <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
                  I'm a curious, problem-solving developer with a love for building scalable and user-centered web applications. 
                  My journey started with a fascination for how things work, evolving into a career focused on developing 
                  intuitive, accessible, and responsive digital products.
                </Typography>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>

        {/* What I Do Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
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
              <BuildIcon sx={{ color: '#ff6b35', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                What I Do
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
              I specialize in full stack development using tools like:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    backgroundColor: 'rgba(255, 107, 53, 0.2)',
                    color: '#ff6b35',
                    border: '1px solid rgba(255, 107, 53, 0.3)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    padding: '8px 16px',
                    height: 'auto',
                  }}
                />
              ))}
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', lineHeight: 1.7, fontSize: '1.1rem' }}>
              Whether it's creating smooth front-end interfaces or building efficient back-end systems, 
              I care deeply about writing clean, maintainable code that powers real-world solutions.
            </Typography>
          </Paper>
        </MotionBox>

        {/* Beyond the Code Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
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
              <PublicIcon sx={{ color: '#ffd23d', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                Beyond the Code
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
              Outside of building software, I enjoy:
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
          </Paper>
        </MotionBox>

        {/* Let's Build Something Great Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
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
              <PsychologyIcon sx={{ color: '#20b2aa', fontSize: 32 }} />
              <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800, fontSize: '2rem' }}>
                Let's Build Something Great
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ color: '#e8f4f8', lineHeight: 1.7, fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}>
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
