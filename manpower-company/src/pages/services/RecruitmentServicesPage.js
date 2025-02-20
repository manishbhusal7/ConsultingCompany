import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function RecruitmentServicesPage() {
  const services = [
    {
      title: "Executive Search",
      description: "Specialized recruitment for senior management and executive positions."
    },
    {
      title: "Skilled Workers",
      description: "Placement of qualified technical and skilled professionals."
    },
    {
      title: "Contract Staffing",
      description: "Flexible workforce solutions for project-based requirements."
    },
    {
      title: "Mass Recruitment",
      description: "Large-scale recruitment for major projects and operations."
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
            mb: 6,
            fontWeight: 700
          }}
        >
          Our Recruitment Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                <Typography variant="h5" color="primary" gutterBottom>
                  {service.title}
                </Typography>
                <Typography color="text.secondary">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default RecruitmentServicesPage; 