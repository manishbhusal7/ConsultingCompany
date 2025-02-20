import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const companies = [
    {
      name: "HIMAL RECRUITMENT CONSULTANCY LLC",
      location: "Al Wahda City (1) - Commercial Tower Office No-2051- Abu Dhabi-uae",
      logo: "/company-logos/uae.png",
      borderColor: '#1a237e'
    },
    {
      name: "Himal Recruitment Services FZ LLE",
      location: "Al Meena Road, Bur Dubai - U.A.E.",
      logo: "/company-logos/uae.png",
      borderColor: '#1a237e'
    },
    {
      name: "Himal Int'l Recruitment Services Pvt",
      location: "6 & OPP GURUDWARA,TAGOOR NAGAR NEW FRIENDS COLONY,NEW DELHI-110025",
      logo: "/company-logos/india.png",
      borderColor: '#1a237e'
    },
    {
      name: "Himal Int'l Recruitment Services Pvt. Ltd.",
      location: "Shamskhusi-26 Kathmandu Nepal",
      phone: "Tel:- 00977-1-4387976, Fax:- 00977-1-4387760",
      logo: "/company-logos/Nepal.png",
      borderColor: '#1a237e'
    },
    {
      name: "LIFE LINE INTERNATIONAL DHAKA BANGLADESH",
      location: "Suite No.8/1 (8th Floor) Gulistan Complex Bhaban 2, Bangabandhu Avenue, Dhaka-1000, Bangladesh",
      logo: "/company-logos/bangladesh.png",
      borderColor: '#1a237e'
    },
    {
      name: "SNOBAR ENTERPRISES",
      location: "Opposite Shah-e-Hamdan Filling Station Tehsil & Rawalpindi Road Dhudial",
      logo: "/company-logos/pakistan.png",
      borderColor: '#1a237e'
    },
    {
      name: "3A MANPOWER OVERSEAS EMPLOYMENTPROMOTERS",
      location: "Office # 22 Moosa Plaza Opp. Bilal Hospital Sadiqabad Road Satellite town Rawalpindi-Pakistan",
      logo: "/company-logos/pakistan.png",
      borderColor: '#1a237e'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Background Image with Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('dubai.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Content */}
        <Container
          maxWidth="xl"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            pt: { xs: 8, md: 0 }
          }}
        >
          <Box sx={{ maxWidth: 'lg', mx: 'auto', textAlign: 'center' }}>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                mb: 3,
                textTransform: 'uppercase',
                letterSpacing: 2,
                fontWeight: 500,
                opacity: 0.9
              }}
            >
              HIMAL INT'L RECRUITMENT SERVICE Pvt. Ltd.
            </Typography>
            
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: { 
                  xs: '2rem',
                  sm: '3rem', 
                  md: '4rem', 
                  lg: '5rem' 
                },
                lineHeight: 1.2,
                textTransform: 'uppercase',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              OFFERING A WIDE RANGE OF
              <br />
              OVERSEAS
              <br />
              MANPOWER RECRUITMENT
              <br />
              SERVICES
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Group and Associate Companies Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#1a237e',
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 600
            }}
          >
            Himal Recruitment Group and Associate Companies
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* First Row - Single Card */}
            <Box sx={{ width: '100%', maxWidth: 800, mb: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderTop: `4px solid ${companies[0].borderColor}`,
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <Box
                  component="img"
                  src={companies[0].logo}
                  alt={companies[0].name}
                  sx={{
                    width: '40px',
                    height: '25px',
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    objectFit: 'contain'
                  }}
                />
                <Typography variant="h6" color="primary" gutterBottom>
                  {companies[0].name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {companies[0].location}
                </Typography>
              </Paper>
            </Box>

            {/* Vertical Line */}
            <Box sx={{ width: 2, height: 40, bgcolor: '#1a237e', my: 2 }} />

            {/* Second Row - Single Card */}
            <Box sx={{ width: '100%', maxWidth: 800, mb: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderTop: `4px solid ${companies[1].borderColor}`,
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <Box
                  component="img"
                  src={companies[1].logo}
                  alt={companies[1].name}
                  sx={{
                    width: '40px',
                    height: '25px',
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    objectFit: 'contain'
                  }}
                />
                <Typography variant="h6" color="primary" gutterBottom>
                  {companies[1].name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {companies[1].location}
                </Typography>
              </Paper>
            </Box>

            {/* Vertical Line */}
            <Box sx={{ width: 2, height: 40, bgcolor: '#1a237e', my: 2 }} />

            {/* Third Row - Two Cards */}
            <Grid container spacing={4} sx={{ mb: 2 }}>
              {companies.slice(2, 4).map((company, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderTop: `4px solid ${company.borderColor}`,
                      textAlign: 'center',
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src={company.logo}
                      alt={company.name}
                      sx={{
                        width: '40px',
                        height: '25px',
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        objectFit: 'contain'
                      }}
                    />
                    <Typography variant="h6" color="primary" gutterBottom>
                      {company.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {company.location}
                    </Typography>
                    {company.phone && (
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {company.phone}
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Vertical Line */}
            <Box sx={{ width: 2, height: 40, bgcolor: '#1a237e', my: 2 }} />

            {/* Fourth Row - Three Cards */}
            <Grid container spacing={4}>
              {companies.slice(4).map((company, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      borderTop: `4px solid ${company.borderColor}`,
                      textAlign: 'center',
                      height: '100%',
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src={company.logo}
                      alt={company.name}
                      sx={{
                        width: '40px',
                        height: '25px',
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        objectFit: 'contain'
                      }}
                    />
                    <Typography variant="h6" color="primary" gutterBottom>
                      {company.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {company.location}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Our Existing Client Lists Section */}
      <Box sx={{ py: 8, backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Typography
            variant="subtitle1"
            sx={{
              textAlign: 'center',
              color: '#1a237e',
              textTransform: 'uppercase',
              mb: 2
            }}
          >
            OUR EXISTING CLIENT LISTS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 6,
              color: '#000',
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              fontWeight: 600
            }}
          >
            Top companies that we are currently working with
          </Typography>

          <Grid container spacing={4}>
            {/* Dubai Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" color="primary" gutterBottom sx={{ borderBottom: '2px solid #1a237e', pb: 1 }}>
                  DUBAI
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" gutterBottom>AL ABBAS GROUP</Typography>
                  <Typography variant="body1" gutterBottom>CATEPILLAR LOGISTICS SERVICES INTERNATIONAL</Typography>
                  <Typography variant="body1" gutterBottom>BIN HUWAIDI VEHICLE BODY MANUFACTRING E.S.T</Typography>
                  <Typography variant="body1" gutterBottom>AL KHALEEJ PLACE HOTEL</Typography>
                  <Typography variant="body1" gutterBottom>AL FATTAN PROPERTIES L.L.C</Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Abu Dhabi Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" color="primary" gutterBottom sx={{ borderBottom: '2px solid #1a237e', pb: 1 }}>
                  ABHU DHABI
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" gutterBottom>ABU DHABI CONSTRUCTION COMPANY L.L.C</Typography>
                  <Typography variant="body1" gutterBottom>AL BAIRAQ CONST.&BUILDG.EST</Typography>
                  <Typography variant="body1" gutterBottom>AIROLINK BUILDING CONTRACTING LLC</Typography>
                  <Typography variant="body1" gutterBottom>ABU DHABI CARNATION METAL INDUSTRIES EST</Typography>
                  <Typography variant="body1" gutterBottom>ABU ALI GENERAL TRANSPORT&CONT.EST</Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Umm Al Quwain Section */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h4" color="primary" gutterBottom sx={{ borderBottom: '2px solid #1a237e', pb: 1 }}>
                  UMM AL QUWAIN
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" gutterBottom>AL BHAKHIT PROPERTIES</Typography>
                  <Typography variant="body1" gutterBottom>ROADLINK TRANSPORT L.L.C</Typography>
                  <Typography variant="body1" gutterBottom>OLD TOWN DÉCOR CONTRACTING L.L.C</Typography>
                  <Typography variant="body1" gutterBottom>NOKHBA BUILDING CONTRACTING CO LLC</Typography>
                  <Typography variant="body1" gutterBottom>BADI DESIGN L.L.C</Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography 
              variant="h6" 
              onClick={() => navigate('/clients')}
              sx={{ 
                color: '#ff1744',
                cursor: 'pointer',
                '&:hover': {
                  textDecoration: 'underline',
                  opacity: 0.8
                },
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              SEE OUR ALL LIST OF CLIENTS →
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomePage; 