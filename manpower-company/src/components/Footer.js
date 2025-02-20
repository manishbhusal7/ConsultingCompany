import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#1a237e', color: 'white', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Himal Int'l Recruitment Service Pvt.Ltd
              <br />
              GOVT.Regd.No. 1272/074/075
              <br />
              Govt.License No. 80290/067/068
              <br />
              Phone: +977-1-4387976
              <br />
              Mobile: +977-9851092791
              <br />
              Email: himalinternational5@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Get Connected
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                href="https://www.facebook.com/profile.php?id=100075844062209" 
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    color: '#4267B2',
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                href="https://www.linkedin.com/in/hari-bhusal-58361778/" 
                target="_blank"
                sx={{ 
                  color: 'white',
                  '&:hover': {
                    color: '#0077b5',
                    bgcolor: 'rgba(255, 255, 255, 0.9)'
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              www.himalrecruitment.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Working Hours
            </Typography>
            <Typography variant="body2">
              Sunday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: Closed
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 4, textAlign: 'center' }}>
          © 2025 Himal Int'l Recruitment Service Pvt.Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer; 