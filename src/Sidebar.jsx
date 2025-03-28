import { Avatar, Box, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, Divider } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 280 }, // Full width on extra small screens, 280px on small and above
        backgroundColor: 'rgba(30, 30, 40, 0.8)', // Consistent theme
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        p: { xs: 2, sm: 3 }, // Padding adjusts for smaller screens
        paddingTop: { xs: 6, sm: 8 },
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: { xs: '0px', sm: '15px' }, // Remove border radius on small screens
        border: '1px solid #d6b64a',
      }}
    >
      <Avatar
        alt="Preethu G Nair"
        src="/" // Add avatar image path
        sx={{
          width: { xs: 100, sm: 130 }, // Smaller Avatar for extra small screens
          height: { xs: 100, sm: 130 },
          mb: 2,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.3)',
          },
        }}
      />
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: '#d6b64a',
          fontWeight: 'bold',
          fontSize: { xs: '1.2rem', sm: '1.5rem' },
        }}
      >
        Preethu G Nair
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{
          color: '#b2becd',
          fontStyle: 'italic',
          marginBottom: '1rem',
          fontSize: { xs: '0.9rem', sm: '1rem' },
        }}
      >
        Full Stack Developer (MERN)
      </Typography>

      <Divider sx={{ width: '100%', my: 2, borderColor: '#444' }} />

      <List sx={{ width: '100%', textAlign: { xs: 'center', sm: 'start' } }}>
        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
          <ListItemIcon sx={{ minWidth: '35px', color: '#F97316' }}>
            <Email />
          </ListItemIcon>
          <ListItemText
            primary="preethuakhilraj@gmail.com"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '0.8rem', sm: '1rem' },
            }}
          />
        </ListItem>
        <ListItem sx={{ display: 'flex', justifyContent: 'center' }}>
          <ListItemIcon sx={{ minWidth: '35px', color: '#10B981' }}>
            <Phone />
          </ListItemIcon>
          <ListItemText
            primary="+917025738698"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '0.8rem', sm: '1rem' },
            }}
          />
        </ListItem>
      </List>

      <Divider sx={{ width: '100%', my: 2, borderColor: '#444' }} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        <IconButton href="https://www.linkedin.com/in/preethu-gopalakrishnan-a15293266/" target="_blank">
          <LinkedIn sx={{ color: '#0A66C2', '&:hover': { color: '#004182' } }} />
        </IconButton>
        <IconButton href="https://github.com/preethuakhilraj" target="_blank">
          <GitHub sx={{ color: '#FFFFFF', '&:hover': { color: '#CCCCCC' } }} />
        </IconButton>
        <IconButton href="https://wa.me/7025738698" target="_blank">
          <WhatsApp sx={{ color: '#25D366', '&:hover': { color: '#128C7E' } }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
