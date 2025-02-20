import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function SpecializationPage() {
  const industries = [
    {
      title: "Construction & Engineering",
      roles: [
        "Civil Engineers",
        "Architects",
        "Project Managers",
        "Skilled Workers"
      ]
    },
    {
      title: "Healthcare",
      roles: [
        "Doctors",
        "Nurses",
        "Medical Technicians",
        "Healthcare Administrators"
      ]
    },
    {
      title: "Hospitality",
      roles: [
        "Hotel Managers",
        "Chefs",
        "Service Staff",
        "Housekeeping"
      ]
    },
    {
      title: "Oil & Gas",
      roles: [
        "Petroleum Engineers",
        "Rig Workers",
        "Safety Officers",
        "Technical Specialists"
      ]
    },
    {
      title: "Information Technology",
      roles: [
        "Software Developers",
        "System Administrators",
        "Network Engineers",
        "IT Project Managers"
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
          Industry Specialization
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6
          }}
        >
          Expert Recruitment Across Key Industries
        </Typography>

        <Grid container spacing={4}>
          {industries.map((industry, index) => (
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
                  sx={{ borderBottom: '2px solid #1a237e', pb: 1, mb: 2 }}
                >
                  {industry.title}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {industry.roles.map((role, roleIndex) => (
                    <Typography 
                      key={roleIndex} 
                      variant="body1" 
                      sx={{ 
                        mb: 1,
                        color: 'text.secondary',
                        '&::before': {
                          content: '"•"',
                          marginRight: '8px',
                          color: '#1a237e'
                        }
                      }}
                    >
                      {role}
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

export default SpecializationPage; 