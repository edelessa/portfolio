import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import JavaScriptIcon from '@mui/icons-material/Code';
import ReactIcon from '@mui/icons-material/Extension';
import CssIcon from '@mui/icons-material/Palette';
import DatabaseIcon from '@mui/icons-material/Storage';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

function Home() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 100%)',
      color: 'white'
    }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{
                  color: '#ffffff',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 900,
                  mb: 2,
                }}
              >
                Hi, I'm Edel Mahamood
              </Typography>
              
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  mb: 2,
                  color: '#b8c5a6',
                  fontSize: { xs: '1.2rem', md: '1.8rem' },
                }}
              >
                But you can call me{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #ffd23d 30%, #ff6b35 60%, #40e0d0 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                    fontSize: { xs: '1.5rem', md: '2.5rem' },
                  }}
                >
                  Ru
                </Box>
              </Typography>
              
              <Typography 
                variant="h5" 
                gutterBottom 
                sx={{ 
                  mb: 4,
                  color: '#40e0d0',
                  fontSize: { xs: '1.1rem', md: '1.5rem' },
                }}
              >
                Full Stack Software Engineer
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4, 
                  fontSize: '1.2rem',
                  color: '#e0e0e0',
                  lineHeight: 1.7,
                }}
              >
                Full Stack Software Engineer with hands-on experience in front-end and back-end development using JavaScript (ES6+),
                React, Node.js, Zustand, HTML5, CSS3, and SQL. Skilled in building responsive, accessible, and user-centered web
                applications with an emphasis on cross-functional collaboration, RESTful API integration, and modern UI/UX design
                principles.
              </Typography>

              {/* Contact Info with Icons */}
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <PhoneIcon sx={{ color: '#40e0d0', fontSize: 24 }} />
                  <Typography variant="body1" sx={{ color: '#b8c5a6', fontSize: '1.1rem' }}>
                    +1 612 800 3348
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <EmailIcon sx={{ color: '#ff6b35', fontSize: 24 }} />
                  <Typography variant="body1" sx={{ color: '#b8c5a6', fontSize: '1.1rem' }}>
                    edel.m.waters@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LinkedInIcon sx={{ color: '#ffd23d', fontSize: 24 }} />
                  <Typography 
                    variant="body1" 
                    component="a"
                    href="https://www.linkedin.com/in/edel-mahamood/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      color: '#40e0d0', 
                      textDecoration: 'none', 
                      fontSize: '1.1rem',
                      '&:hover': { 
                        color: '#ffd23d',
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    LinkedIn Profile
                  </Typography>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <MotionButton
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  startIcon={<LaunchIcon />}
                  sx={{
                    background: 'linear-gradient(45deg, #2d5016 30%, #4a7c59 90%)',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #4a7c59 30%, #2d5016 90%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(45, 80, 22, 0.4)',
                    },
                  }}
                >
                  View My Work
                </MotionButton>
                
                <MotionButton
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  sx={{
                    borderColor: '#40e0d0',
                    color: '#40e0d0',
                    borderWidth: '2px',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: '#40e0d0',
                      backgroundColor: 'rgba(64, 224, 208, 0.1)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(64, 224, 208, 0.2)',
                    },
                  }}
                >
                  Contact Me
                </MotionButton>
              </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                maxWidth: { xs: 300, sm: 350, md: 400 },
                height: { xs: 400, sm: 450, md: 500 },
                mx: 'auto',
                mt: { xs: 6, md: 0 },
              }}
            >
              {/* Portrait Rectangle with Border Icons */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '4px solid #40e0d0',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                {/* Full Image - Portrait Orientation */}
                <Box
                  component="img"
                  src="/profile.jpg"
                  alt="Edel Mahamood (Ru) - Full Stack Software Engineer"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
                
                {/* Floating Icons ON the Image Border - Portrait Layout */}
                {[
                  { 
                    icon: <JavaScriptIcon sx={{ color: '#ffd23d', fontSize: 24 }} />, 
                    position: { top: '15px', right: '15px' },
                    label: 'JavaScript',
                    delay: 0.5
                  },
                  { 
                    icon: <ReactIcon sx={{ color: '#40e0d0', fontSize: 24 }} />, 
                    position: { top: '15px', left: '15px' },
                    label: 'React',
                    delay: 0.7
                  },
                  { 
                    icon: <CssIcon sx={{ color: '#ff6b35', fontSize: 24 }} />, 
                    position: { bottom: '15px', right: '15px' },
                    label: 'CSS3',
                    delay: 0.9
                  },
                  { 
                    icon: <DatabaseIcon sx={{ color: '#9caf88', fontSize: 24 }} />, 
                    position: { bottom: '15px', left: '15px' },
                    label: 'SQL',
                    delay: 1.1
                  },
                ].map((item, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -8, 0],
                      rotate: [0, 3, 0]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: item.delay,
                      y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" },
                      rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
                    }}
                    sx={{
                      position: 'absolute',
                      ...item.position,
                      background: `rgba(${item.label === 'JavaScript' ? '255, 210, 61' : item.label === 'React' ? '64, 224, 208' : item.label === 'CSS3' ? '255, 107, 53' : '156, 175, 136'}, 0.9)`,
                      borderRadius: '50%',
                      width: 50,
                      height: 50,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)',
                      border: `2px solid ${item.label === 'JavaScript' ? '#ffd23d' : item.label === 'React' ? '#40e0d0' : item.label === 'CSS3' ? '#ff6b35' : '#9caf88'}`,
                      zIndex: 3,
                      boxShadow: `0 4px 15px rgba(${item.label === 'JavaScript' ? '255, 210, 61' : item.label === 'React' ? '64, 224, 208' : item.label === 'CSS3' ? '255, 107, 53' : '156, 175, 136'}, 0.4)`,
                      '&:hover': {
                        transform: 'scale(1.15)',
                        boxShadow: `0 6px 20px rgba(${item.label === 'JavaScript' ? '255, 210, 61' : item.label === 'React' ? '64, 224, 208' : item.label === 'CSS3' ? '255, 107, 53' : '156, 175, 136'}, 0.6)`,
                      },
                    }}
                  >
                    {item.icon}
                  </MotionBox>
                ))}
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Skills Section */}
      <Container sx={{ py: 8 }}>
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom
          sx={{
            color: '#ffffff',
            mb: 6,
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 700,
          }}
        >
          Technical Skills
        </Typography>
        <Grid container spacing={4}>
          {[
            { name: 'JavaScript', description: 'ES6+, Modern JS features', icon: <JavaScriptIcon />, color: '#ffd23d' },
            { name: 'React', description: 'Hooks, State Management', icon: <ReactIcon />, color: '#40e0d0' },
            { name: 'CSS3', description: 'Responsive Design, Animations', icon: <CssIcon />, color: '#ff6b35' },
            { name: 'Zustand', description: 'State Management', icon: <DatabaseIcon />, color: '#9caf88' },
          ].map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={skill.name}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid rgba(64, 224, 208, 0.2)',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {React.cloneElement(skill.icon, { sx: { fontSize: 40, color: skill.color } })}
                </Box>
                <Typography variant="h6" sx={{ color: '#ffffff', mb: 1, fontWeight: 600 }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#b8c5a6' }}>
                  {skill.description}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
