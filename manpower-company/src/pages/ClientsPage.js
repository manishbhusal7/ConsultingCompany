import { Box, Container, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';

function ClientsPage() {
  const [selectedEmirate, setSelectedEmirate] = useState(0);

  const clientsByEmirate = {
    Dubai: [
      "AL ABBAS GROUP",
      "CATEPILLAR LOGISTICS SERVICES INTERNATIONAL",
      "BIN HUWAIDI VEHICLE BODY MANUFACTRING E.S.T",
      "AL KHALEEJ PLACE HOTEL",
      "AL FATTAN PROPERTIES L.L.C",
      "ADAMS STAR ELECTROMECHANICAL WORKS L.L.C",
      "CAPITAL ENVELOP L.L.C",
      "BURBUDA ELECTROMECHANICAL WORKS L.L.C",
      "AVARI DUBAI HOTEL",
      "XTERIOR EXPERIENCE LANDSCAPEING L.L.C",
      "ZTCO GROUP OF COMPANIES",
      "RMAL HOSPITALITY",
      "ROOFPROOF INSULATION CONTRACTING L.L.C",
      "ROYAL BOAT DECORATION L.L.C",
      "SISCO (SALEH IBRAHIM STEEL CONTRACTING L.L.C)",
      "TECHNICAL ARCHITECH CONTRACTING L.L.C",
      "VALTRANS HOSPITALITY SERVICES COMPANY",
      "VALTRANS TRANSPORTATION SYSTEMS & SERVICES L.L.C (AL HABTOOR GROUP)",
      "WOOD STYLE JOINERY AND FURNITURE FACTORY L.L.C",
      "INDEX GROUP OF COMPANIES",
      "INDEX SECURITY SERVICES",
      "INTL MAINT & SECURITY SERVICES L.L.C",
      "MARCOPOLO HOTEL",
      "MARRY BROWN RESTAURENTS",
      "MENASCO MECHANICAL CONTRACTING EST",
      "MONOLITH CONSTRUCTION L.L.C",
      "NATIONAL GROUP OF COMPANIES",
      "PRIME ELECTRICAL CONTRACTING CO. LLC",
      "RIGHT TRINGLE CONTRACTING L.L.C",
      "EXTERIOR EXPERIENCE LANSCSAPING L.L.C",
      "FORTUNE GROUP OF HOTELS",
      "FOUR LINES INDUSTRIES L.L.C",
      "GULF DUCT INDUSTRIES L.L.C",
      "GULF EXTRUSION CO.L.L.C",
      "HADAYA ENGG.& METAL SERVICES L.L.C",
      "EHK CLEANING SERVICES L.L.C (AL HABTOOR GROUP)",
      "CLASSIC EMPLOYEMENT DEMAND SERVICES",
      "CHIRAG GROUP OF COMPANIES",
      "CERTIS SECURITY SERVICES L.L.C"
    ],
    "Abu Dhabi": [
      "ABU DHABI CONSTRUCTION COMPANY L.L.C",
      "ABU ALI GENERAL TRANSPORT & CONT.EST",
      "AL ABBAS GROUP",
      "NOKHBA BUILDING CONTRACTING CO LLC"
    ],
    "Umm Al Quwain": [
      "AL RAWAA GLASS & ALUMINIUM IND L.L.C",
      "AL RAWAA GLASS AND MIRROR FACTORY LTD"
    ],
    "Ras Al Khaimah": [
      "AL HAMRA FORT HOTEL & BEACH RESORT",
      "HINDI DARBAAR RESTAURANT"
    ],
    "Sharjah": [],
    "Fujairah": [],
    "Ajman": []
  };

  const emirates = Object.keys(clientsByEmirate);

  const handleEmirateChange = (event, newValue) => {
    setSelectedEmirate(newValue);
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
          Our Existing Clients
        </Typography>

        {/* Introduction Section */}
        <Paper
          elevation={3}
          sx={{
            p: 4,
            mb: 6,
            backgroundColor: '#f8f9fa',
            borderLeft: '4px solid #1a237e'
          }}
        >
          <Typography paragraph sx={{ mb: 3 }}>
            In our recruiting service history since the establishment, we have successfully provided our recruitment services 
            to hire the best candidates to various companies and organizations in the UAE. With our clear vision of establishing 
            long term relationship with our clients, we have kept our level of service to meet and exceed the clients' expectation 
            and gained their trust as reliable recruiter.
          </Typography>
          <Typography>
            Our strong human resource database in different countries for various types of manpower and our honest commitment 
            in bringing the best for our clients' need, no matter what, has made us able to stand out in this large pool of 
            competitive industry. We have been loyal service provider not only to the company but also to our human resources.
          </Typography>
        </Paper>

        {/* Emirates Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs 
            value={selectedEmirate} 
            onChange={handleEmirateChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                color: '#1a237e',
                fontWeight: 600,
                '&.Mui-selected': {
                  color: '#1a237e',
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#1a237e',
              }
            }}
          >
            {emirates.map((emirate, index) => (
              <Tab key={emirate} label={emirate} />
            ))}
          </Tabs>
        </Box>

        {/* Clients Grid */}
        <Grid container spacing={3}>
          {clientsByEmirate[emirates[selectedEmirate]].map((client, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                  },
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
                  sx={{
                    pl: 2,
                    color: 'text.primary',
                    fontWeight: 500
                  }}
                >
                  {client}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ClientsPage; 