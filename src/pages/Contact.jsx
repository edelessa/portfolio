import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionPaper = motion(Paper);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'edel.m.waters@gmail.com',
      color: '#20b2aa',
      href: 'mailto:edel.m.waters@gmail.com'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+1 612 800 3348',
      color: '#ff6b35',
      href: 'tel:+16128003348'
    },
    {
      icon: LocationOnIcon,
      label: 'Location',
      value: 'Minneapolis, MN',
      color: '#ffd23d'
    },
    {
      icon: LinkedInIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/edel-mahamood',
      color: '#9caf88',
      href: 'https://www.linkedin.com/in/edel-mahamood/'
    }
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
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
            }}
          >
            Get In Touch
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#e8f4f8',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </Typography>
        </MotionBox>

        <Grid container spacing={8}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 6,
                  background: 'rgba(26, 42, 26, 0.4)',
                  backdropFilter: 'blur(25px)',
                  border: '2px solid rgba(32, 178, 170, 0.2)',
                  borderRadius: 4,
                  height: 'fit-content',
                }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#ffffff', 
                    mb: 4, 
                    fontWeight: 700 
                  }}
                >
                  Let's Connect
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#b8c5a6', 
                    mb: 6, 
                    lineHeight: 1.6 
                  }}
                >
                  I'm always interested in new opportunities and exciting projects. 
                  Feel free to reach out through any of the channels below.
                </Typography>

                {contactInfo.map((info, index) => (
                  <MotionBox
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    sx={{ mb: 4 }}
                  >
                    <Box 
                      component={info.href ? 'a' : 'div'}
                      href={info.href}
                      target={info.href ? '_blank' : undefined}
                      rel={info.href ? 'noopener noreferrer' : undefined}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        p: 2,
                        borderRadius: 2,
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        '&:hover': info.href ? {
                          background: 'rgba(32, 178, 170, 0.1)',
                          transform: 'translateX(5px)',
                        } : {},
                        cursor: info.href ? 'pointer' : 'default',
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 50,
                          height: 50,
                          background: `linear-gradient(135deg, ${info.color} 0%, rgba(255, 255, 255, 0.1) 100%)`,
                        }}
                      >
                        <info.icon sx={{ color: 'white', fontSize: 24 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 600 }}>
                          {info.label}
                        </Typography>
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: info.href ? '#20b2aa' : '#b8c5a6',
                            '&:hover': info.href ? { color: '#40e0d0' } : {},
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </MotionBox>
                ))}

                <Divider sx={{ my: 4, borderColor: 'rgba(32, 178, 170, 0.2)' }} />

                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ffffff', 
                    mb: 3, 
                    fontWeight: 600 
                  }}
                >
                  Quick Response
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#b8c5a6', 
                    lineHeight: 1.6 
                  }}
                >
                  I typically respond to messages within 24 hours. For urgent matters, 
                  feel free to call or text directly.
                </Typography>
              </Paper>
            </MotionBox>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
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
                <Typography 
                  variant="h4" 
                  sx={{ 
                    color: '#ffffff', 
                    mb: 4, 
                    fontWeight: 700 
                  }}
                >
                  Send a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#20b2aa',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#b8c5a6',
                            '&.Mui-focused': {
                              color: '#20b2aa',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#20b2aa',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#b8c5a6',
                            '&.Mui-focused': {
                              color: '#20b2aa',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#20b2aa',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#b8c5a6',
                            '&.Mui-focused': {
                              color: '#20b2aa',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            '& fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(32, 178, 170, 0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#20b2aa',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#b8c5a6',
                            '&.Mui-focused': {
                              color: '#20b2aa',
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MotionButton
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<SendIcon />}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        sx={{
                          px: 6,
                          py: 2,
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          borderRadius: 3,
                          background: 'linear-gradient(135deg, #1a4d1a 0%, #20b2aa 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #2d6b2d 0%, #40e0d0 100%)',
                            boxShadow: '0 12px 35px rgba(32, 178, 170, 0.4)',
                          },
                        }}
                      >
                        Send Message
                      </MotionButton>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
