import { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Grid } from '@mui/material';
import Sidebar from './Sidebar';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send the email
    emailjs
      .send(
        'service_90s930d', // Replace with your EmailJS Service ID
        'template_uwqfwts', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'niicbzhA7ONEy3Odn' // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert('Email sent successfully!');
          console.log('SUCCESS!', response.status, response.text);
          setFormData({ name: '', email: '', message: '' }); // Clear form fields
        },
        (error) => {
          alert('Failed to send email. Please try again.');
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'rgba(30, 30, 40, 0.9)', padding: { xs: 2, md: 4 } }}>
      <Container>
        <Grid container spacing={4}>
          {/* Sidebar */}
          <Grid item xs={12} md={6}>
            <Sidebar />
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="#FFD700" align="center" gutterBottom>
              Contact Me
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                margin="normal"
                value={formData.name}
                onChange={handleChange}
                required
                InputLabelProps={{ style: { color: '#FFD700' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                margin="normal"
                value={formData.email}
                onChange={handleChange}
                required
                InputLabelProps={{ style: { color: '#FFD700' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                value={formData.message}
                onChange={handleChange}
                required
                InputLabelProps={{ style: { color: '#FFD700' } }}
                InputProps={{ style: { color: '#fff' } }}
              />
              <Box textAlign="center" mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: '#FF6F61',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#e85e52' },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
