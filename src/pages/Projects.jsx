import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button, 
  Chip, 
  Fade, 
  Zoom,
  Paper,
  IconButton,
  Tooltip,
  Badge,
  Avatar,
  Divider
} from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import PaletteIcon from '@mui/icons-material/Palette';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect, useRef } from 'react';

const MotionCard = motion(Card);
const MotionBox = motion(Box);

function Projects() {
  const [loaded, setLoaded] = useState(false);
  const [selectedTech, setSelectedTech] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'ArtVault Web App',
      description: 'A comprehensive portfolio management tool for artists built with React and Zustand for state management. Features responsive design with CSS Grid and Flexbox, Material-UI components, and accessibility best practices.',
      image: '/project1.svg',
      technologies: ['React', 'Zustand', 'CSS3', 'Material-UI', 'JavaScript'],
      github: 'https://github.com/yourusername/artvault',

      color: '#1a4d1a',
      features: [
        'Zustand state management',
        'Responsive CSS Grid layout',
        'Material-UI component library',
        'Accessibility compliance'
      ],
      skills: ['JavaScript', 'CSS', 'MUI', 'Zustand'],
      stars: 42,
      views: 1200,
      featured: true
    },
    {
      id: 2,
      title: 'Wrinkles Card Game',
      description: 'An interactive digital card game with smooth animations and state management. Built for the MinnieBar tech conference, showcasing advanced CSS animations, React hooks, and user experience design.',
      image: '/project2.svg',
      technologies: ['React', 'CSS3', 'JavaScript', 'Animation'],
      github: 'https://github.com/yourusername/wrinkles-game',

      color: '#ff6b35',
      features: [
        'CSS keyframe animations',
        'React hooks for state',
        'Responsive design',
        'User interaction feedback'
      ],
      skills: ['JavaScript', 'CSS', 'React'],
      stars: 28,
      views: 850,
      featured: true
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and inventory management. Built with modern web technologies and responsive design principles.',
      image: '/project3.svg',
      technologies: ['React', 'Node.js', 'SQL', 'Stripe', 'Material-UI'],
      github: 'https://github.com/yourusername/ecommerce',

      color: '#9caf88',
      features: [
        'Payment integration with Stripe',
        'User authentication system',
        'Product catalog management',
        'Order tracking system'
      ],
      skills: ['JavaScript', 'CSS', 'MUI', 'React', 'Node.js'],
      stars: 67,
      views: 2100,
      featured: false
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A productivity application for team collaboration with real-time updates, drag-and-drop functionality, and project tracking. Features intuitive UI and efficient state management.',
      image: '/project4.svg',
      technologies: ['React', 'Zustand', 'CSS3', 'API', 'Material-UI'],
      github: 'https://github.com/yourusername/task-manager',

      color: '#ffd23d',
      features: [
        'Drag-and-drop task organization',
        'Real-time collaboration',
        'Project progress tracking',
        'Team member assignments'
      ],
      skills: ['JavaScript', 'CSS', 'MUI', 'Zustand', 'React'],
      stars: 35,
      views: 1500,
      featured: false
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'An interactive weather application with data visualization, location-based forecasts, and historical weather data. Features responsive charts and real-time updates.',
      image: '/project5.svg',
      technologies: ['React', 'API', 'CSS3', 'Charts', 'Material-UI'],
      github: 'https://github.com/yourusername/weather-dashboard',

      color: '#20b2aa',
      features: [
        'Interactive weather charts',
        'Location-based forecasts',
        'Historical data analysis',
        'Responsive data visualization'
      ],
      skills: ['JavaScript', 'CSS', 'MUI', 'React'],
      stars: 23,
      views: 980,
      featured: false
    },
    {
      id: 6,
      title: 'Social Media App',
      description: 'A real-time social platform with instant messaging, user profiles, and content sharing. Built with modern web technologies for seamless user experience.',
      image: '/project6.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Material-UI'],
      github: 'https://github.com/yourusername/social-app',

      color: '#ff6b35',
      features: [
        'Real-time messaging',
        'User profile management',
        'Content sharing system',
        'Live notifications'
      ],
      skills: ['JavaScript', 'CSS', 'MUI', 'React', 'Node.js'],
      stars: 89,
      views: 3200,
      featured: false
    },
  ];

  const allTechnologies = ['all', 'JavaScript', 'CSS', 'MUI', 'Zustand', 'React', 'Node.js', 'API'];

  const filteredProjects = selectedTech === 'all' 
    ? projects 
    : projects.filter(project => project.skills.includes(selectedTech));

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <Box 
      ref={containerRef}
      sx={{ 
        py: 8, 
        background: 'linear-gradient(135deg, #0a0f0a 0%, #1a2a1a 50%, #2a3a2a 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(26, 77, 26, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(32, 178, 170, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 107, 53, 0.05) 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Fade in={loaded} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{
                  mb: 4,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                }}
              >
                My Projects
              </Typography>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 6, 
                  maxWidth: 900, 
                  mx: 'auto',
                  color: '#e8f4f8',
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                Showcasing full-stack development skills with JavaScript, CSS, Material-UI, and Zustand state management.
                Each project demonstrates clean code, responsive design, and modern web development practices.
              </Typography>
            </MotionBox>
            
            {/* Enhanced Technology Filter */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              sx={{ mb: 8 }}
            >
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                {allTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Chip
                      label={tech}
                      onClick={() => setSelectedTech(tech)}
                      variant={selectedTech === tech ? 'filled' : 'outlined'}
                      sx={{
                        background: selectedTech === tech 
                          ? 'linear-gradient(135deg, #1a4d1a 0%, #20b2aa 100%)'
                          : 'transparent',
                        color: selectedTech === tech ? 'white' : '#20b2aa',
                        borderColor: '#20b2aa',
                        fontWeight: 700,
                        fontSize: '1rem',
                        padding: '12px 24px',
                        height: '48px',
                        borderWidth: '2px',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #2d6b2d 0%, #40e0d0 100%)',
                          color: 'white',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 25px rgba(26, 77, 26, 0.4)',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </MotionBox>
          </Box>
        </Fade>

        {/* Enhanced Skills Showcase */}
        <Fade in={loaded} timeout={1000} style={{ transitionDelay: '600ms' }}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 8, 
              mb: 10, 
              background: 'rgba(26, 42, 26, 0.4)',
              backdropFilter: 'blur(25px)',
              border: '2px solid rgba(32, 178, 170, 0.2)',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ color: '#ffffff', mb: 6, textAlign: 'center', fontWeight: 700 }}>
              Technical Skills Demonstrated
            </Typography>
            <Grid container spacing={6}>
              {[
                { icon: CodeIcon, title: 'JavaScript', desc: 'ES6+, React hooks, async/await, DOM manipulation', color: '#20b2aa' },
                { icon: PaletteIcon, title: 'CSS3', desc: 'Grid, Flexbox, animations, responsive design', color: '#ff6b35' },
                { icon: StorageIcon, title: 'Zustand', desc: 'State management, actions, persistence', color: '#9caf88' },
                { icon: TrendingUpIcon, title: 'Material-UI', desc: 'Components, theming, responsive design', color: '#ffd23d' },
              ].map((skill, index) => (
                <Grid item xs={12} sm={6} md={3} key={skill.title}>
                  <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    sx={{ textAlign: 'center' }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 3,
                        background: `linear-gradient(135deg, ${skill.color} 0%, rgba(255, 255, 255, 0.1) 100%)`,
                        boxShadow: `0 8px 25px rgba(${skill.color === '#20b2aa' ? '32, 178, 170' : skill.color === '#ff6b35' ? '255, 107, 53' : skill.color === '#9caf88' ? '156, 175, 136' : '255, 210, 61'}, 0.3)`,
                      }}
                    >
                      <skill.icon sx={{ fontSize: 40, color: 'white' }} />
                    </Avatar>
                    <Typography variant="h4" sx={{ color: '#ffffff', mb: 2, fontWeight: 700 }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#b8c5a6', lineHeight: 1.6 }}>
                      {skill.desc}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>

        {/* Enhanced Projects Grid */}
        <Grid container spacing={6}>
          {filteredProjects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <Zoom in={loaded} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '6px',
                      background: `linear-gradient(90deg, ${project.color} 0%, #20b2aa 100%)`,
                      zIndex: 1,
                    },
                  }}
                >
                  {/* Project Image with Overlay */}
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="220"
                      image={project.image}
                      alt={project.title}
                      sx={{ 
                        objectFit: 'cover',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />
                    {/* Overlay with stats */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
                        opacity: hoveredProject === project.id ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 3,
                      }}
                    >
                      <Badge badgeContent={project.stars} color="primary">
                        <StarIcon sx={{ color: '#ffd23d' }} />
                      </Badge>
                      <Badge badgeContent={project.views} color="secondary">
                        <VisibilityIcon sx={{ color: '#20b2aa' }} />
                      </Badge>
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h2"
                      sx={{
                        fontWeight: 700,
                        color: '#ffffff',
                        mb: 2,
                        fontSize: { xs: '1.3rem', md: '1.5rem' },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="#e8f4f8" 
                      paragraph
                      sx={{
                        lineHeight: 1.6,
                        mb: 3,
                        fontSize: '1rem',
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    {/* Features List */}
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" sx={{ color: '#20b2aa', mb: 2, fontWeight: 700, fontSize: '1.1rem' }}>
                        Key Features:
                      </Typography>
                      {project.features.map((feature, idx) => (
                        <Typography 
                          key={idx}
                          variant="body2" 
                          sx={{ 
                            color: '#ffffff', 
                            fontSize: '0.9rem',
                            mb: 1,
                            fontWeight: 500,
                            '&::before': {
                              content: '"• "',
                              color: '#20b2aa',
                              fontWeight: 'bold',
                              fontSize: '1.2rem',
                            }
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>

                    {/* Technology Chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(26, 77, 26, 0.8)',
                            color: '#ffffff',
                            border: '2px solid rgba(32, 178, 170, 0.6)',
                            fontWeight: 600,
                            fontSize: '0.8rem',
                            height: '32px',
                            '&:hover': {
                              backgroundColor: 'rgba(32, 178, 170, 0.8)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 4px 12px rgba(32, 178, 170, 0.4)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Tooltip title="View Source Code" arrow>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#ffffff',
                          borderColor: 'rgba(32, 178, 170, 0.6)',
                          border: '2px solid',
                          mr: 1,
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          padding: '8px 16px',
                          backgroundColor: 'rgba(32, 178, 170, 0.1)',
                          '&:hover': {
                            borderColor: '#20b2aa',
                            backgroundColor: 'rgba(32, 178, 170, 0.2)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        Code
                      </Button>
                    </Tooltip>
                  </CardActions>
                </MotionCard>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Enhanced Call to Action */}
        <Fade in={loaded} timeout={1000} style={{ transitionDelay: '1200ms' }}>
          <Box sx={{ textAlign: 'center', mt: 12 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Typography variant="h3" gutterBottom sx={{ color: '#ffffff', mb: 4, fontWeight: 700 }}>
                Ready to Build Something Amazing?
              </Typography>
              <Typography variant="h5" sx={{ color: '#e8f4f8', mb: 8, maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
                I specialize in creating modern web applications with clean code, responsive design, 
                and excellent user experience using JavaScript, CSS, Material-UI, and Zustand.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(135deg, #1a4d1a 0%, #20b2aa 100%)',
                  px: 8,
                  py: 3,
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  height: '64px',
                  borderRadius: '20px',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #2d6b2d 0%, #40e0d0 100%)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 40px rgba(32, 178, 170, 0.4)',
                  },
                }}
              >
                Let's Work Together
              </Button>
            </MotionBox>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Projects;
