import { Box, Button, Typography } from '@mui/material';
import Resume from './assets/Resume.pdf';

const HomePage = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        padding: 0,
        margin: 0,
      }}
    >
      {/* Full-Screen Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1',
        }}
      >
        <source src="https://cdn.pixabay.com/video/2024/06/06/215500_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          color: '#ffffff',
          textAlign: 'center',
          p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          bgcolor: 'rgba(30, 30, 40, 0.4)', // Dark overlay
        }}
      >
        {/* Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: '#b3b3e1',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
          }}
        >
          Welcome to My Portfolio
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 4,
            color: '#d1d3e7',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.8)',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Responsive font size
          }}
        >
          I am Preethu G Nair, a Full Stack Developer
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' }, // Stacked on small screens, inline on larger
            gap: { xs: 2, sm: 3 }, // Responsive gap
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            href={Resume}
            target="_blank"
            sx={{
              backgroundColor: '#d6b64a',
              color: '#ffffff',
              padding: { xs: '8px 16px', sm: '10px 20px' }, // Responsive padding
              fontSize: { xs: '0.9rem', sm: '1rem' }, // Responsive font size
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#b89b39',
              },
            }}
          >
            Resume
          </Button>

          <Button
            variant="outlined"
            href="/contact"
            sx={{
              borderColor: '#b89b39',
              color: '#b2becd',
              padding: { xs: '8px 16px', sm: '10px 20px' },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 'bold',
              '&:hover': {
                borderColor: '#8a97a7',
                color: '#8a97a7',
              },
            }}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
