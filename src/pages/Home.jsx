import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
          color: 'white',
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" gutterBottom>
                  Hi, I'm Edel Mahamood
                </Typography>
                <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
                  Full Stack Software Engineer
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
                  Full Stack Software Engineer with hands-on experience in front-end and back-end development using JavaScript (ES6+),
                  React, Node.js, Zustand, HTML5, CSS3, and SQL. Skilled in building responsive, accessible, and user-centered web
                  applications with an emphasis on cross-functional collaboration, RESTful API integration, and modern UI/UX design
                  principles.
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    📞 +1 612 800 3348
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    📧 edel.m.waters@gmail.com
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    🌐 <a href="https://www.linkedin.com/in/edel-mahamood/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn Profile</a>
                  </Typography>
                </Box>
                <Button
                  component={RouterLink}
                  to="/projects"
                  variant="contained"
                  size="large"
                  sx={{
                    mr: 2,
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Contact Me
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Add your profile image or illustration here */}
                <Box
                  component="img"
                  src="/profile-placeholder.png"
                  alt="Edel Mahamood"
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: 'auto',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Skills Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Technical Skills
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[
            'Languages & Frameworks',
            'Tools & Technologies',
            'Core Competencies',
            'Soft Skills'
          ].map((skill) => (
            <Grid item xs={12} sm={6} md={3} key={skill}>
              <MotionBox
                whileHover={{ scale: 1.05 }}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                  backgroundColor: 'background.paper',
                  boxShadow: 1,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {skill}
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