import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const MotionPaper = motion(Paper);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just show a success message
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    { icon: <PhoneIcon />, text: '+1 612 800 3348', url: 'tel:+16128003348' },
    { icon: <EmailIcon />, text: 'edel.m.waters@gmail.com', url: 'mailto:edel.m.waters@gmail.com' },
    { icon: <LinkedInIcon />, text: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/edel-mahamood/' },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be
        part of your visions. Feel free to reach out through any of the following channels.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ p: 4 }}
          >
            <Typography variant="h4" gutterBottom>
              Contact Form
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
                fullWidth
              >
                Send Message
              </Button>
            </form>
          </MotionPaper>
        </Grid>

        <Grid item xs={12} md={6}>
          <MotionPaper
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ p: 4, height: '100%' }}
          >
            <Typography variant="h4" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" paragraph>
              Feel free to reach out to me through any of these platforms. I'm always
              excited to connect with fellow developers and potential collaborators.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
              {contactInfo.map((info) => (
                <Button
                  key={info.text}
                  href={info.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={info.icon}
                  sx={{
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                  }}
                >
                  {info.text}
                </Button>
              ))}
            </Box>
          </MotionPaper>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact; 