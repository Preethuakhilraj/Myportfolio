import { useState } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import Sidebar from './Sidebar'; // Your Sidebar component
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const About = () => {
  const [showSkills, setShowSkills] = useState(false); // State to show/hide skills

  const handleSkillsClick = () => {
    setShowSkills(!showSkills); // Toggle skills visibility
  };

  const iconStyles = {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'rgba(30, 30, 40, 0.9)', // Dark background for the main area
        padding: { xs: 2, md: 4 },
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Sidebar: Place in the left column */}
          <Grid item xs={12} md={6} lg={6}>
            <Sidebar />
          </Grid>

          {/* Main Content: Place in the right column */}
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h4" color="#FFD700" gutterBottom align="center">
              Get to know me
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Hey there, I am Preethu G Nair, and I am really into all things IT. Currently, I am diving deep into the
              world of web development, learning about cool stuff like React.js, TailwindCSS, Node.js, MongoDB,
              Git/GitHub, and REST API. My ultimate goal? To create awesome, powerful websites that make a difference. I
              am always eager to learn new things and collaborate with others. So, let us team up and create something
              amazing together!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 4 }}>
              <Button
                variant="contained"
                href="/contact"
                sx={{ backgroundColor: '#FF6F61', color: '#fff', '&:hover': { backgroundColor: '#e85e52' } }}
              >
                Hire Me
              </Button>
              <Button
                variant="contained"
                onClick={handleSkillsClick}
                sx={{ backgroundColor: '#FFD700', color: '#121212', '&:hover': { backgroundColor: '#e6c200' } }}
              >
                Skills
              </Button>
            </Box>            

            {/* Conditional rendering for skills icons */}
            {showSkills && (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 4,
                  marginTop: 4,
                  animation: 'fadeIn 1s ease-in-out',
                }}
              >
                {[
                  { Component: FaReact, name: 'React.js', color: '#61DAFB' },
                  { Component: FaNodeJs, name: 'Node.js', color: '#3C873A' },
                  { Component: FaDatabase, name: 'MongoDB', color: '#4DB33D' },
                  { Component: FaJsSquare, name: 'JavaScript', color: '#F0DB4F' },
                  { Component: SiExpress, name: 'Express.js', color: '#fff' },
                  { Component: FaGithub, name: 'GitHub', color: '#fff' },
                  { Component: FaHtml5, name: 'HTML', color: '#E34F26' },
                  { Component: FaCss3Alt, name: 'CSS', color: '#1572B6' },
                  { Component: FaBootstrap, name: 'Bootstrap', color: '#563d7c' },
                ].map(({ Component, name, color }) => (
                  <Box key={name} sx={{ textAlign: 'center', ...iconStyles }}>
                    <Component size={40} color={color} />
                    <Typography variant="body2" color="#fff" sx={{ marginTop: 1 }}>
                      {name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
