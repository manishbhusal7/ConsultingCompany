import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceAnchorEl, setServiceAnchorEl] = useState(null);

  const serviceMenuItems = [
    { text: 'Our Recruitment Services', path: '/services/recruitment' },
    { text: 'Demand Attestation', path: '/services/attestation' },
    { text: 'Industry Process', path: '/services/process' },
    { text: 'Industry Specialization', path: '/services/specialization' }
  ];

  const handleServiceClick = (event) => {
    setServiceAnchorEl(event.currentTarget);
  };

  const handleServiceClose = () => {
    setServiceAnchorEl(null);
  };

  const menuItems = [
    { text: 'HOME', path: '/' },
    { text: 'ABOUT US', path: '/about' },
    { text: 'GROUP & ASSOCIATES', path: '/group' },
    { text: 'OUR RESOURCES', path: '/resources' },
    { text: 'EXISTING CLIENTS', path: '/clients' },
    // { text: 'ENQUIRY', path: '/enquiry' },
    { text: 'CONTACT', path: '/contact' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img 
              src="/himal-logo.png" 
              alt="Himal Recruitment Services" 
              style={{ height: '60px', marginRight: '20px' }} 
            />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: '#1a237e',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  padding: '6px 12px',
                  '&:hover': {
                    backgroundColor: 'rgba(26, 35, 126, 0.08)',
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
            {/* Service Dropdown */}
            <Button
              onClick={handleServiceClick}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                color: '#1a237e',
                fontWeight: 600,
                fontSize: '0.875rem',
                padding: '6px 12px',
                '&:hover': {
                  backgroundColor: 'rgba(26, 35, 126, 0.08)',
                },
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.3s',
                  transform: Boolean(serviceAnchorEl) ? 'rotate(180deg)' : 'rotate(0)',
                }
              }}
            >
              SERVICES
            </Button>
            <Menu
              anchorEl={serviceAnchorEl}
              open={Boolean(serviceAnchorEl)}
              onClose={handleServiceClose}
              MenuListProps={{
                'aria-labelledby': 'service-button',
              }}
              sx={{
                '& .MuiPaper-root': {
                  marginTop: '8px',
                  minWidth: '200px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
              }}
            >
              {serviceMenuItems.map((item) => (
                <MenuItem 
                  key={item.text}
                  component={Link}
                  to={item.path}
                  onClick={handleServiceClose}
                  sx={{
                    color: '#1a237e',
                    padding: '10px 20px',
                    '&:hover': {
                      backgroundColor: 'rgba(26, 35, 126, 0.08)',
                    }
                  }}
                >
                  {item.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ 
              display: { lg: 'none' },
              color: '#1a237e'
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            sx={{
              display: { xs: 'block', lg: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box', 
                width: 240,
                backgroundColor: '#fff'
              },
            }}
          >
            <List sx={{ pt: 8 }}>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <Button
                    component={Link}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      width: '100%',
                      color: '#1a237e',
                      justifyContent: 'flex-start',
                      padding: '12px 24px',
                      '&:hover': {
                        backgroundColor: 'rgba(26, 35, 126, 0.08)',
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                </ListItem>
              ))}
              {/* Service Menu Items in Mobile */}
              {serviceMenuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <Button
                    component={Link}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      width: '100%',
                      color: '#1a237e',
                      justifyContent: 'flex-start',
                      padding: '12px 24px',
                      paddingLeft: '32px', // Indent to show it's under Services
                      '&:hover': {
                        backgroundColor: 'rgba(26, 35, 126, 0.08)',
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 