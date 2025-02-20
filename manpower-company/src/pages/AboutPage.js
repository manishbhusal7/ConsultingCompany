import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function AboutPage() {
  return (
    <Box sx={{ pt: 12, pb: 8 }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
              color: '#1a237e',
              fontWeight: 700,
              mb: 3
            }}
          >
            About Himal Recruitment
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Your Trusted Partner in Global Workforce Solutions
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, bgcolor: '#f5f5f5' }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Our Story
              </Typography>
              <Typography paragraph>
                Established in 2009, Himal Recruitment has been at the forefront of international 
                recruitment services. With over two decades of experience, we have successfully 
                connected thousands of skilled professionals with leading employers across the globe.
              </Typography>
              <Typography paragraph>
                Our commitment to excellence and ethical recruitment practices has made us one of 
                the most trusted names in the industry.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={{ p: 4, bgcolor: '#f5f5f5' }}>
              <Typography variant="h5" color="primary" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph>
                To provide world-class recruitment solutions that create value for both employers 
                and job seekers, while maintaining the highest standards of professional integrity 
                and ethical conduct.
              </Typography>
              <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
                Our Vision
              </Typography>
              <Typography paragraph>
                To be the global leader in international recruitment services, known for our 
                excellence, integrity, and commitment to transforming lives through meaningful 
                employment opportunities.
              </Typography>
            </Paper>
          </Grid>

          {/* Key Features */}
          <Grid item xs={12}>
            <Box sx={{ mt: 4 }}>
              <Typography variant="h4" color="primary" gutterBottom sx={{ mb: 4, textAlign: 'center' }}>
                Why Choose Us
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    title: "Global Network",
                    description: "Strong presence in multiple countries with extensive employer networks"
                  },
                  {
                    title: "Expert Team",
                    description: "Experienced professionals dedicated to matching the right talent with the right opportunity"
                  },
                  {
                    title: "Compliance",
                    description: "Full compliance with international labor laws and recruitment standards"
                  },
                  {
                    title: "Support Services",
                    description: "Complete assistance with documentation, travel, and settlement"
                  }
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        p: 3, 
                        height: '100%',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)'
                        }
                      }}
                    >
                      <Typography variant="h6" gutterBottom color="primary">
                        {feature.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {feature.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutPage; 