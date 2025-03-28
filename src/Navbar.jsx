import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

export default function Navbar() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if the device width is small
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'rgba(30, 30, 40, 0.8)',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        width: '100vw',
        padding: isMobile ? '0 10px' : '0 20px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo / Brand */}
        <Typography
          variant="h5"
          sx={{
            color: '#d6b64a',
            fontWeight: 'bold',
            letterSpacing: 2,
            fontSize: isMobile ? '1.2rem' : '1.5rem',
          }}
        >
          PGN
        </Typography>

        {/* Desktop Navigation Links */}
        {!isMobile ? (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  color: '#b2becd',
                  position: 'relative',
                  padding: '8px 16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  transition: 'transform 0.3s, color 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#b3b3e1',
                    transform: 'scale(1.05)',
                  },
                  ...(location.pathname === link.path && {
                    color: '#d6b64a',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '3px',
                      backgroundColor: '#d6b64a',
                    },
                  }),
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        ) : (
          // Mobile Hamburger Menu
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: '#d6b64a' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            bgcolor: 'rgba(30, 30, 40, 1)',
            height: '100%',
            color: '#d6b64a',
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.label} component={Link} to={link.path}>
                <ListItemText
                  primary={link.label}
                  sx={{
                    color: location.pathname === link.path ? '#d6b64a' : '#b2becd',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    '&:hover': {
                      color: '#b3b3e1',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
