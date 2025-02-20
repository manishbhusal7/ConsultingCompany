import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function ProcessPage() {
  const processes = [
    {
      title: "Demand and Documentation",
      description: "The Employer provides a demand letter to Himal Recruitment Services Group along with all required documents according to host country's emigration rules.",
      steps: ["Demand letter submission", "Documentation review", "Compliance check"]
    },
    {
      title: "Company Registration",
      description: "Employer must register their company in the Indian embassy and provide all legal documents as per new regulations for manpower deployment from India.",
      steps: ["Embassy registration", "Document verification", "Regulatory compliance"]
    },
    {
      title: "Delegate Visa Support",
      description: "We provide complete support services and guidance for employer delegates' visas for overseas interviews. Visa costs are borne by the employer.",
      steps: ["Visa application support", "Documentation assistance", "Process guidance"]
    },
    {
      title: "Interview Arrangements",
      description: "We arrange overseas interviews with pre-screened candidates. For sessions with 25+ candidates, we conduct in-person interviews. For smaller groups, we handle the selection process according to UAE standards.",
      steps: ["Candidate screening", "Interview scheduling", "Venue arrangement"]
    },
    {
      title: "Selection & Documentation",
      description: "Post-selection, we verify medical reports and prepare visa documentation, submitting complete files within 7 days.",
      steps: ["Medical verification", "Document preparation", "Visa processing"]
    },
    {
      title: "Deployment Process",
      description: "We handle travel arrangements for selected candidates within 15-21 days of receiving visa copies. Employers must provide necessary embassy documentation for Indian workers.",
      steps: ["Travel coordination", "Visa processing", "Deployment planning"]
    },
    {
      title: "Final Steps & Guarantee",
      description: "We provide a 90-day guarantee for all recruited workers. This includes replacement and cost coverage for unfit workers.",
      steps: ["Airport reception", "90-day guarantee", "Replacement support"]
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
          Recruitment Process
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6
          }}
        >
          Our Comprehensive Recruitment and Deployment Process
        </Typography>

        <Grid container spacing={4}>
          {processes.map((process, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  position: 'relative',
                  borderLeft: '4px solid #1a237e'
                }}
              >
                <Typography variant="h5" color="primary" gutterBottom>
                  {`${index + 1}. ${process.title}`}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {process.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Grid container spacing={2}>
                    {process.steps.map((step, stepIndex) => (
                      <Grid item xs={12} md={4} key={stepIndex}>
                        <Typography
                          variant="body2"
                          sx={{
                            bgcolor: '#f5f5f5',
                            p: 1,
                            borderRadius: 1,
                            textAlign: 'center',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                          }}
                        >
                          {step}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Guarantee Section */}
        <Box sx={{ mt: 6 }}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              backgroundColor: '#f8f9fa',
              borderTop: '4px solid #1a237e'
            }}
          >
            <Typography variant="h4" color="primary" gutterBottom>
              Our Guarantee
            </Typography>
            <Typography paragraph color="text.secondary">
              Himal Recruitment Services Group provides a comprehensive 90-day guarantee for all recruited workers. If selected workers are found unfit for their applied position or medically unfit, we cover:
            </Typography>
            <Grid container spacing={2}>
              {[
                "Visa and work permit costs",
                "Return air ticket expenses",
                "Immediate replacement provision",
                "Employee resignation coverage during probation",
                "Compliance with UAE Labor Laws"
              ].map((item, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      '&::before': {
                        content: '"✓"',
                        color: '#1a237e',
                        marginRight: '8px',
                        fontWeight: 'bold'
                      }
                    }}
                  >
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default ProcessPage; 