import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Chip,
  useMediaQuery,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GitHub, Launch } from '@mui/icons-material';
import Todo from './assets/Todo.jpg';
import Employeeportal from './assets/Employeeportal.jpg';
import library from './assets/library.png';
import Internshipportal from './assets/Internship.jpg';
import MovieMate from './assets/MovieMate.png';
import Lifescape from './assets/Lifescape.png';
const theme = createTheme({
  palette: {
    background: {
      default: '#1E1E28',
    },
    text: {
      primary: '#b3b3e1',
      secondary: '#d1d3e7',
    },
  },
});

const Projects = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check for small screens
  const projects = [
    {
    title: 'MovieMate',
    description: 'A Movie Ticket booking online App.',
    image: MovieMate,
    link: 'https://moviemate-clientside.vercel.app/',
    github: 'https://github.com/Preethuakhilraj/MovieMate-Week2',
    tags: ['React.js', 'MongoDB', 'Material UI', 'Node'],
  },
  {
    title: 'LifeScape',
    description: 'LifeScape BlogApp is a dynamic platform for creating, sharing, and discovering engaging blogs, fostering a connected and interactive community.',
    image: Lifescape,
    link: 'https://lifescape-blogapp-client.vercel.app',
    github: 'https://github.com/Preethuakhilraj/Lifescape_Blogapp.git',
    tags: ['React.js', 'MongoDB', 'Material UI', 'Node'],
  },
    {
      title: 'Todo Management APP',
      description:
        'A comprehensive task management app to keep track of todos efficiently. username: admin & password:12345, goal: we could able to select and deselect list , if it is more than 5 should give an alert',
      image: Todo,
      link: 'https://preethuakhilraj.github.io/Todo-App/',
      github: 'https://github.com/Preethuakhilraj/Todo-App.git',
      tags: ['React.js', 'Material-UI', 'REST API'],
    },
    {
      title: 'Internship Portal for ICTAK',
      description:
        'A solution to help mentors and admin manage the internship program efficiently.',
      image: Internshipportal,
      link: 'https://ictak-internship-portal-client.vercel.app/',
      github: 'https://github.com/your-repo/wegoo',
      tags: ['React.js', 'CSS', 'API'],
    },
    {
      title: 'Employee Management Portal for ICTAK',
      description: 'A solution for admins to manage employees and their data.',
      image: Employeeportal,
      link: 'https://employeemanagement-client.vercel.app',
      github: 'https://github.com/Preethuakhilraj/employeemanagement.git',
      tags: ['React.js', 'Material UI', 'CSS', 'Node'],
    },
    {
      title: 'Literary Cafe',
      description: 'Online Library App to read & get the books online.',
      image: library,
      link: 'https://preethuakhilraj.github.io/ICT-Assignment-bootstrap/',
      github: 'https://github.com/Preethuakhilraj/ICT-Assignment-bootstrap.git',
      tags: ['JavaScript', 'CSS', 'MongoDB', 'Bootstrap'],
    },
    
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'rgba(30, 30, 40, 0.8)',
          minHeight: '100vh',
          minWidth: '100vw',
          color: '#b3b3e1',
          padding: { xs: 2, sm: 3 },
        }}
      >
        <Container sx={{ marginTop: { xs: 2, md: 4 } }}>
          <Typography
            variant={isSmallScreen ? 'h5' : 'h4'}
            gutterBottom
            sx={{ color: '#b3b3e1', textAlign: 'center' }}
          >
            Projects
          </Typography>
          <Grid container spacing={2}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    backgroundColor: '#2E2E2E',
                    color: '#d1d3e7',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ color: '#b3b3e1' }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#d1d3e7', fontSize: { xs: '0.8rem', md: '1rem' } }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {project.tags.map((tag, idx) => (
                        <Chip
                          key={idx}
                          label={tag}
                          sx={{
                            backgroundColor: '#d6b64a',
                            color: 'white',
                            marginRight: 0.5,
                            marginBottom: 0.5,
                            fontSize: { xs: '0.7rem', sm: '0.8rem' },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 1,
                    }}
                  >
                    <IconButton
                      color="inherit"
                      component="a"
                      href={project.github}
                      target="_blank"
                    >
                      <GitHub sx={{ color: '#b3b3e1' }} />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      component="a"
                      href={project.link}
                      target="_blank"
                    >
                      <Launch sx={{ color: '#d6b64a' }} />
                    </IconButton>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: '#d6b64a',
                      color: '#2E2E2E',
                      marginTop: 'auto',
                    }}
                    component="a"
                    href={project.link}
                    target="_blank"
                  >
                    View More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Projects;
