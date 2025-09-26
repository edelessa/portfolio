import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionPaper = motion(Paper);
const MotionButton = motion(Button);

function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3002/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #0f1419 0%, #1a2332 100%)',
        minHeight: '100vh',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="md">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          sx={{ textAlign: 'center', mb: 6 }}
        >
          <MotionTypography
            variant="h2"
            gutterBottom
            sx={{
              background: 'linear-gradient(135deg, #ffd23d 30%, #ff6b35 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              mb: 2,
            }}
            variants={itemVariants}
          >
            Get In Touch
          </MotionTypography>
          <MotionTypography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              fontSize: '1.2rem',
              color: 'text.secondary',
              lineHeight: 1.7,
            }}
            variants={itemVariants}
          >
            Have a question or want to work together? Feel free to reach out!
          </MotionTypography>
        </MotionBox>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <MotionPaper
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              sx={{
                p: 4,
                backgroundColor: 'background.paper',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,107,53,0.2)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmailIcon sx={{ color: 'secondary.main', mr: 2 }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    edel.m.waters@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ color: 'secondary.main', mr: 2 }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    +1 612 800 3348
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ color: 'secondary.main', mr: 2 }} />
                  <Typography variant="body1" sx={{ color: 'text.primary' }}>
                    Minneapolis, MN, USA
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  I'm always open to new opportunities and collaborations. Let's connect!
                </Typography>
              </Box>
            </MotionPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionPaper
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              sx={{
                p: 4,
                backgroundColor: 'background.paper',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                border: '1px solid rgba(255,210,61,0.2)',
                height: '100%',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
                Send a Message
              </Typography>
              
              {/* Status Messages */}
              {submitStatus && (
                <Box
                  sx={{
                    p: 2,
                    mb: 3,
                    borderRadius: 2,
                    backgroundColor: submitStatus.type === 'success' ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
                    border: `1px solid ${submitStatus.type === 'success' ? '#4caf50' : '#f44336'}`,
                    color: submitStatus.type === 'success' ? '#4caf50' : '#f44336',
                  }}
                >
                  {submitStatus.message}
                </Box>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                  InputLabelProps={{ style: { color: 'text.secondary' } }}
                  InputProps={{ style: { color: 'text.primary' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(255,210,61,0.4)' },
                      '&:hover fieldset': { borderColor: 'warning.main' },
                      '&.Mui-focused fieldset': { borderColor: 'warning.main' },
                    },
                  }}
                />
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  variant="outlined"
                  InputLabelProps={{ style: { color: 'text.secondary' } }}
                  InputProps={{ style: { color: 'text.primary' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(255,210,61,0.4)' },
                      '&:hover fieldset': { borderColor: 'warning.main' },
                      '&.Mui-focused fieldset': { borderColor: 'warning.main' },
                    },
                  }}
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: 'text.secondary' } }}
                  InputProps={{ style: { color: 'text.primary' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(255,210,61,0.4)' },
                      '&:hover fieldset': { borderColor: 'warning.main' },
                      '&.Mui-focused fieldset': { borderColor: 'warning.main' },
                    },
                  }}
                />
                <TextField
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  fullWidth
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  InputLabelProps={{ style: { color: 'text.secondary' } }}
                  InputProps={{ style: { color: 'text.primary' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(255,210,61,0.4)' },
                      '&:hover fieldset': { borderColor: 'warning.main' },
                      '&.Mui-focused fieldset': { borderColor: 'warning.main' },
                    },
                  }}
                />
                <MotionButton
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    mt: 2,
                    background: 'linear-gradient(45deg, #ffd23d 30%, #ff6b35 90%)',
                    color: 'white',
                    fontWeight: 600,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #ff6b35 30%, #ffd23d 90%)',
                      boxShadow: '0 6px 12px rgba(255,210,61,0.4)',
                    },
                    '&:disabled': {
                      background: 'rgba(0,0,0,0.12)',
                      color: 'rgba(0,0,0,0.26)',
                    },
                  }}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </MotionButton>
              </Box>
            </MotionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
