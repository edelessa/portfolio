import { Box, Container, Typography, Grid, Paper, Avatar, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

function About() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Freelance',
      period: '2022 - Present',
      description: 'Developing modern web applications using React, JavaScript, and CSS. Specializing in responsive design and user experience optimization.',
      skills: ['React', 'JavaScript', 'CSS3', 'Material-UI']
    },
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      period: '2021 - 2022',
      description: 'Built scalable web applications with focus on performance and accessibility. Collaborated with cross-functional teams to deliver high-quality products.',
      skills: ['JavaScript', 'Node.js', 'SQL', 'Git']
    }
  ];

  const achievements = [
    'MinnieBar Tech Conference Speaker',
    'Open Source Contributor',
    'Accessibility Advocate',
    'Performance Optimization Expert'
  ];

  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(135deg, #0a0f0a 0%, #1a2a1a 50%, #2a3a2a 100%)',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography 
            variant="h1" 
            gutterBottom
            sx={{
              mb: 4,
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            About Me
          </Typography>
          <Typography 
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
            Passionate about creating exceptional digital experiences through clean code, 
            innovative design, and cutting-edge web technologies.
          </Typography>
        </MotionBox>

        {/* Profile Section */}
        <Grid container spacing={8} sx={{ mb: 10 }}>
          <Grid item xs={12} md={4}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
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
              <Typography variant="body1" sx={{ color: '#b8c5a6', lineHeight: 1.6, fontSize: '1.1rem' }}>
                Based in Minneapolis, MN. Passionate about building scalable web applications 
                and contributing to the developer community.
              </Typography>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={8}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
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
                  My Story
                </Typography>
                <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
                  I'm a passionate Full Stack Software Engineer with a strong foundation in modern web technologies. 
                  My journey began with a curiosity for how things work, which led me to explore the world of programming 
                  and web development.
                </Typography>
                <Typography variant="body1" sx={{ color: '#e8f4f8', mb: 3, lineHeight: 1.7, fontSize: '1.1rem' }}>
                  I specialize in creating responsive, accessible, and user-centered web applications using JavaScript (ES6+), 
                  React, Node.js, Zustand, HTML5, CSS3, and SQL. My approach combines technical expertise with a deep 
                  understanding of user experience and modern design principles.
                </Typography>
                <Typography variant="body1" sx={{ color: '#e8f4f8', lineHeight: 1.7, fontSize: '1.1rem' }}>
                  When I'm not coding, you can find me speaking at tech conferences, contributing to open source projects, 
                  or exploring new technologies that push the boundaries of what's possible on the web.
                </Typography>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>

        {/* Experience Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
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
            Experience
          </Typography>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} md={6} key={exp.title}>
                <MotionPaper
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  elevation={0}
                  sx={{
                    p: 4,
                    background: 'rgba(26, 42, 26, 0.4)',
                    backdropFilter: 'blur(25px)',
                    border: '2px solid rgba(32, 178, 170, 0.2)',
                    borderRadius: 4,
                    height: '100%',
                    '&:hover': {
                      borderColor: 'rgba(32, 178, 170, 0.4)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ color: '#ffffff', mb: 1, fontWeight: 800, fontSize: '1.4rem' }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#20b2aa', mb: 1, fontWeight: 700, fontSize: '1.2rem' }}>
                    {exp.company}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#b8c5a6', mb: 3, fontSize: '1rem' }}>
                    {exp.period}
                  </Typography>
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

        {/* Achievements Section */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
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
            Achievements & Recognition
          </Typography>
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
            <Grid container spacing={3}>
              {achievements.map((achievement, index) => (
                <Grid item xs={12} sm={6} key={achievement}>
                  <MotionBox
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
                    <StarIcon sx={{ color: '#ffd23d', fontSize: 28 }} />
                    <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem' }}>
                      {achievement}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </MotionBox>
      </Container>
    </Box>
  );
}

export default About;
