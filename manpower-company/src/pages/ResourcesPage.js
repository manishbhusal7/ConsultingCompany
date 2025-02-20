import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function ResourcesPage() {
  const resources = [
    {
      title: "Skilled Workforce",
      description: "Access to a vast pool of skilled professionals across various industries and sectors.",
      details: [
        "Technical Experts",
        "Industry Specialists",
        "Certified Professionals",
        "Experienced Workers"
      ]
    },
    {
      title: "Global Network",
      description: "Extensive network of offices and partners across multiple countries.",
      details: [
        "UAE Operations",
        "South Asian Network",
        "International Partners",
        "Local Expertise"
      ]
    },
    {
      title: "Documentation Support",
      description: "Complete assistance with all necessary documentation and legal requirements.",
      details: [
        "Visa Processing",
        "Work Permits",
        "Legal Compliance",
        "Document Attestation"
      ]
    },
    {
      title: "Training Facilities",
      description: "State-of-the-art training facilities for skill development and orientation.",
      details: [
        "Technical Training",
        "Safety Orientation",
        "Language Programs",
        "Cultural Orientation"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control measures to ensure the best candidates.",
      details: [
        "Skill Assessment",
        "Background Verification",
        "Medical Screening",
        "Performance Tracking"
      ]
    },
    {
      title: "Support Services",
      description: "Comprehensive support services for both employers and candidates.",
      details: [
        "24/7 Support",
        "Travel Assistance",
        "Settlement Support",
        "Emergency Response"
      ]
    }
  ];

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
          Our Resources
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6
          }}
        >
          Comprehensive Solutions for Your Recruitment Needs
        </Typography>

        <Grid container spacing={4}>
          {resources.map((resource, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  color="primary" 
                  gutterBottom
                  sx={{ 
                    pb: 2,
                    borderBottom: '2px solid #1a237e'
                  }}
                >
                  {resource.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  paragraph
                  sx={{ mt: 2 }}
                >
                  {resource.description}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {resource.details.map((detail, detailIndex) => (
                    <Typography
                      key={detailIndex}
                      variant="body2"
                      sx={{
                        mb: 1,
                        color: 'text.secondary',
                        display: 'flex',
                        alignItems: 'center',
                        '&::before': {
                          content: '"•"',
                          color: '#1a237e',
                          fontWeight: 'bold',
                          marginRight: '8px'
                        }
                      }}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ResourcesPage; 