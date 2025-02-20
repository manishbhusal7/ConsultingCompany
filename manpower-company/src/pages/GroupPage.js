import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

function GroupPage() {
  const associates = [
    {
      country: "NEPAL",
      companies: [
        {
          name: "Himal Recruitment Service Pvt.Ltd",
          location: "Samakhusi-26, Kathmandu, Nepal",
          type: "Head Office",
          contact: {
            phone: ["+977-1-4-387976"],
            fax: "+977-1-4387760",
            mobile: ["+977-9851092791"],
            email: ["himalinternational5@gmail.com", "himalrecruitment@gmail.com"],
            website: "www.himalrecruitment.com"
          }
        }
      ]
    },
    {
      country: "Pakistan",
      companies: [
        {
          name: "SNOBAR ENTERPRISES",
          location: "Rawalpindi Road Dhudial Opposite Shah-e-Hamdan Filling Station Tehsil & Distt Chakwal, Pakistan",
          type: "Associate Office",
          license: "OEP Lic No. HRD/3502/RWP",
          subtitle: "Overseas Employment Promoters"
        }
      ]
    },
    {
      country: "Nepal",
      companies: [
      
        {
          name: "RICHHOOD OVERSEAS INC(P)LTD",
          location: "P.O.Box:11716, Basundhara-3, Kathmandu Nepal",
          type: "Associate Office",
          license: "License No. 539/061/062"
        }
      ]
    },
    {
      country: "India",
      companies: [
        {
          name: "P.S CONSULTANTS",
          location: "104,1st floor, Shahapuri, Tirtha Singh Tower, D-58 Community center, Janak Puri New Delhi India",
          type: "Associate Office",
          license: "License No.:B-0436/DEL/PER 1000/5/8451/2009",
          subtitle: "Registered: Ministry of Overseas Indian Affairs Govt.of India"
        }
      ]
    },
    {
      country: "Bangladesh",
      companies: [
        {
          name: "LIFE LINE INTERNATIONAL-DHAKA BANGLADESH",
          location: "Suite No.8/1 (8th Floor) Gulistan Complex Bhaban, 2, Bangabandhu Avenue, Dhaka-1000- Bangladesh",
          type: "Associate Office",
          license: "Govt. Approved Recruiting License No .RL NO –1011"
        }
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
          Our Group & Associates
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6
          }}
        >
          Global Network of Recruitment Excellence
        </Typography>

        {associates.map((group, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 4,
                backgroundColor: '#f8f9fa',
                p: 2,
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <Box
                sx={{
                  width: '6px',
                  height: '40px',
                  backgroundColor: '#1a237e',
                  mr: 2,
                  borderRadius: '3px'
                }}
              />
              <Typography
                variant="h4"
                sx={{
                  color: '#1a237e',
                  fontWeight: 600,
                }}
              >
                {group.country}
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              {group.companies.map((company, companyIndex) => (
                <Grid item xs={12} md={6} key={companyIndex}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    {/* Office Type Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        backgroundColor: '#1a237e',
                        color: 'white',
                        py: 0.75,
                        px: 3,
                        borderBottomLeftRadius: '12px',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        zIndex: 1
                      }}
                    >
                      {company.type}
                    </Box>

                    {/* Company Content */}
                    <Box sx={{ pt: 3 }}>
                      <Typography 
                        variant="h5" 
                        color="primary" 
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {company.name}
                      </Typography>

                      {company.subtitle && (
                        <Typography 
                          variant="subtitle1"
                          color="text.secondary"
                          sx={{ mb: 2, fontStyle: 'italic' }}
                        >
                          {company.subtitle}
                        </Typography>
                      )}

                      {company.license && (
                        <Typography 
                          variant="subtitle2"
                          sx={{ 
                            color: '#1a237e',
                            mb: 2,
                            backgroundColor: 'rgba(26, 35, 126, 0.1)',
                            p: 1,
                            borderRadius: 1,
                            display: 'inline-block'
                          }}
                        >
                          {company.license}
                        </Typography>
                      )}

                      <Typography 
                        variant="body1"
                        color="text.secondary"
                        paragraph
                        sx={{
                          lineHeight: 1.6,
                          mt: 2
                        }}
                      >
                        {company.location}
                      </Typography>

                      {company.contact && (
                        <Box sx={{ mt: 3 }}>
                          {company.contact.phone && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <LocalPhoneIcon sx={{ mr: 1, color: '#1a237e' }} />
                              <Typography>
                                {company.contact.phone.join(' / ')}
                              </Typography>
                            </Box>
                          )}
                          
                          {company.contact.mobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <LocalPhoneIcon sx={{ mr: 1, color: '#1a237e' }} />
                              <Typography>
                                Mobile: {company.contact.mobile.join(' / ')}
                              </Typography>
                            </Box>
                          )}

                          {company.contact.email && (
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <EmailIcon sx={{ mr: 1, color: '#1a237e' }} />
                              <Typography>
                                {company.contact.email.join(' / ')}
                              </Typography>
                            </Box>
                          )}

                          {company.contact.website && (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LanguageIcon sx={{ mr: 1, color: '#1a237e' }} />
                              <Typography>
                                {company.contact.website}
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      )}
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default GroupPage; 