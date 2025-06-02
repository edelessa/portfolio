import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const MotionCard = motion(Card);

function Projects() {
  const projects = [
    {
      title: 'ArtVault Web App',
      description: 'Developed a portfolio management tool for artists using React and Zustand, with a strong focus on responsive design and accessibility best practices. Prioritized intuitive navigation and ease of use, drawing on experience supporting diverse learners.',
      image: '/project1.jpg',
      technologies: ['React', 'Zustand', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/yourusername/artvault',
      live: 'https://artvault.com',
    },
    {
      title: 'Wrinkles Card Game',
      description: 'Created and showcased animated UI transitions for a digital card game at the MinnieBar tech conference. Highlighted state management, user feedback loops, and smooth interactions for enhanced user engagement. Created front end and focused on UX.',
      image: '/project2.jpg',
      technologies: ['React', 'CSS3', 'JavaScript', 'Animation'],
      github: 'https://github.com/yourusername/wrinkles-game',
      live: 'https://wrinkles-game.com',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        My Projects
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
        Here are some of my recent projects that showcase my skills in full-stack development,
        user experience design, and accessibility implementation.
      </Typography>

      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={project.title}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </Button>
                <Button
                  size="small"
                  startIcon={<LaunchIcon />}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              </CardActions>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects; 