import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { Alert, Box, Button, Container, Grid, Paper, Snackbar, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function ContactPage() {
  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init("vb2cTQjMELAVZp0hb");
      console.log('EmailJS Initialized Successfully');
    } catch (error) {
      console.error('EmailJS Initialization Error:', error);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: "Himal Recruitment",
        reply_to: formData.email
      };

      console.log('Attempting to send email with params:', templateParams);

      // First verify EmailJS is initialized
      if (!emailjs) {
        throw new Error('EmailJS not initialized');
      }

      const result = await emailjs.send(
        "service_vmzyn0b",
        "template_spdfjbn",
        templateParams,
        "vb2cTQjMELAVZp0hb"
      ).catch(err => {
        console.error('EmailJS send error:', err);
        throw err;
      });

      console.log("Success response:", result);
      
      if (result && result.status === 200) {
        setSnackbar({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('Detailed error:', {
        error,
        message: error?.message || 'Unknown error occurred',
        text: error?.text,
        name: error?.name,
        status: error?.status,
        stack: error?.stack
      });
      
      setSnackbar({
        open: true,
        message: error?.text || error?.message || 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = {
    headOffice: {
      title: "HEAD OFFICE",
      name: "HIMAL INTERNATIONAL RECRUITMENT SERVICES GROUP",
      address: [
        "Kathmandu",
        "Nepal"
      ],
      phone: "+977-9851092791",
      mobile: ["+971-1-4387976", "4387760"],
      email: {
        primary: "info@himalrecruitment.com",
        secondary: "himalrecruitment@gmail.com"
      },
      website: "www.himalrecruitment.com"
    },
    nepalBranch: {
      title: "Another Nepal Branch",
      name: "ACCESS EDUCATION CONSULTANCY",
      address: ["Pokhara, Kathmandu Nepal"],
    }
  };

  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            color: '#1a237e',
            mb: 3,
            fontWeight: 700
          }}
        >
          Contact Us
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6
          }}
        >
          Get in Touch with Our Team
        </Typography>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={6}>
            {Object.values(contactInfo).map((office, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: 4,
                  mb: 3,
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    backgroundColor: '#1a237e'
                  }
                }}
              >
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  {office.title}
                </Typography>

                <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
                  {office.name}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <LocationOnIcon sx={{ mr: 1, color: '#1a237e' }} />
                    <Box>
                      {office.address.map((line, i) => (
                        <Typography key={i} color="text.secondary">
                          {line}
                        </Typography>
                      ))}
                    </Box>
                  </Box>

                  {office.phone && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PhoneIcon sx={{ mr: 1, color: '#1a237e' }} />
                      <Typography color="text.secondary">
                        Phone: {office.phone}
                      </Typography>
                    </Box>
                  )}

                  {office.mobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <PhoneIcon sx={{ mr: 1, color: '#1a237e' }} />
                      <Typography color="text.secondary">
                        Mobile: {office.mobile.join(', ')}
                      </Typography>
                    </Box>
                  )}

                  {office.email && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <EmailIcon sx={{ mr: 1, color: '#1a237e' }} />
                      <Box>
                        <Typography color="text.secondary">
                          {office.email.primary}
                        </Typography>
                        {office.email.secondary && (
                          <Typography color="text.secondary">
                            {office.email.secondary}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  )}
                </Box>

                {office.license && (
                  <Typography
                    variant="subtitle2"
                    sx={{
                      mt: 2,
                      p: 1,
                      backgroundColor: 'rgba(26, 35, 126, 0.1)',
                      borderRadius: 1,
                      display: 'inline-block'
                    }}
                  >
                    {office.license}
                  </Typography>
                )}
              </Paper>
            ))}
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%'
              }}
            >
              <Typography variant="h5" color="primary" sx={{ mb: 4 }}>
                Send us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={loading}
                      sx={{
                        bgcolor: '#1a237e',
                        '&:hover': {
                          bgcolor: '#000051'
                        }
                      }}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>

        {/* Google Map */}
        <Box sx={{ mt: 6, height: '400px' }}>
          <iframe
            title="Himal Recruitment Services Group Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.4862860374887!2d54.37645081544383!3d24.477973484235537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e665aa8a7a70d%3A0x3c3a0347a4aa9e23!2sAl%20Wahda%20City%20Commercial%20Tower!5e0!3m2!1sen!2sae!4v1647887774745!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default ContactPage; 