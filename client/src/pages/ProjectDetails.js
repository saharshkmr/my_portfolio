import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Grid, 
  Chip, 
  Divider, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import PageTransition from '../components/Common/PageTransition';

// Sample projects data - in a real app, this would come from an API or context
const projectsData = {
  'project-one': {
    id: 'project-one',
    title: 'Project One',
    description: 'A comprehensive web application that solves real-world problems with modern technologies.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://via.placeholder.com/1200x600/0a192f/64ffda?text=Project+One',
    github: 'https://github.com',
    demo: 'https://example.com',
    details: {
      overview: 'A comprehensive overview of Project One, including its purpose, features, and technologies used. This project was built to demonstrate modern web development practices and solve a specific problem in an innovative way.',
      features: [
        'Feature 1: Description of feature one and its benefits',
        'Feature 2: Description of feature two and its benefits',
        'Feature 3: Description of feature three and its benefits',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Mongoose'],
      challenges: 'Challenges faced during development included implementing real-time updates, optimizing database queries, and ensuring cross-browser compatibility. These were overcome through careful planning, code reviews, and performance testing.',
      learnings: 'Key takeaways from this project include improved state management skills, better understanding of RESTful APIs, and experience with deployment pipelines.'
    }
  },
  'project-two': {
    id: 'project-two',
    title: 'Project Two',
    description: 'A mobile-responsive website with modern design and smooth animations.',
    tags: ['React', 'Express', 'PostgreSQL'],
    image: 'https://via.placeholder.com/1200x600/0a192f/64ffda?text=Project+Two',
    github: 'https://github.com',
    demo: 'https://example.com',
    details: {
      overview: 'A comprehensive overview of Project Two, including its purpose, features, and technologies used. This project focused on creating an exceptional user experience with smooth animations and responsive design.',
      features: [
        'Feature 1: Description of feature one and its benefits',
        'Feature 2: Description of feature two and its benefits',
        'Feature 3: Description of feature three and its benefits',
      ],
      technologies: ['React', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'],
      challenges: 'Challenges included implementing complex animations that perform well on mobile devices and ensuring the application was accessible to all users. These were addressed through performance optimization and accessibility testing.',
      learnings: 'Gained deeper knowledge of CSS animations, performance optimization techniques, and accessibility best practices.'
    }
  },
  'project-three': {
    id: 'project-three',
    title: 'Project Three',
    description: 'A modern web application built with Next.js and TypeScript.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/1200x600/0a192f/64ffda?text=Project+Three',
    github: 'https://github.com',
    demo: 'https://example.com',
    details: {
      overview: 'A comprehensive overview of Project Three, including its purpose, features, and technologies used. This project demonstrates the power of server-side rendering and static site generation with Next.js.',
      features: [
        'Feature 1: Description of feature one and its benefits',
        'Feature 2: Description of feature two and its benefits',
        'Feature 3: Description of feature three and its benefits',
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      challenges: 'The main challenges were implementing server-side rendering with TypeScript and optimizing the build process. These were overcome through careful configuration and code splitting.',
      learnings: 'Learned advanced TypeScript patterns, Next.js data fetching methods, and performance optimization techniques for server-rendered applications.'
    }
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [project, setProject] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch the project data here
    const selectedProject = projectsData[id] || null;
    setProject(selectedProject);
    
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <PageTransition>
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Project not found</Typography>
          <Button 
            component={Link} 
            to="/" 
            startIcon={<ArrowBackIcon />}
            sx={{ mt: 2 }}
          >
            Back to Home
          </Button>
        </Container>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate(-1)}
          sx={{ mb: 4, color: 'text.primary' }}
        >
          Back to Projects
        </Button>
        
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(90deg, #64FFDA 0%, #A8FFEB 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            {project.title}
          </Typography>
          
          <Typography variant="h6" component="h2" gutterBottom sx={{ color: 'primary.main', mb: 3 }}>
            {project.description}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {project.tags.map((tag, index) => (
              <Chip 
                key={index} 
                label={tag} 
                sx={{ 
                  backgroundColor: 'rgba(100, 255, 218, 0.1)',
                  color: 'primary.main',
                  fontWeight: 500,
                }} 
              />
            ))}
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
            {project.github && (
              <Button 
                variant="outlined" 
                color="primary" 
                href={project.github} 
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
              >
                View Code
              </Button>
            )}
            {project.demo && (
              <Button 
                variant="contained" 
                color="primary" 
                href={project.demo} 
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<OpenInNewIcon />}
              >
                Live Demo
              </Button>
            )}
          </Box>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Box 
              component="img"
              src={project.image} 
              alt={project.title} 
              sx={{ 
                width: '100%', 
                borderRadius: '8px', 
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                }
              }} 
            />
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>Project Details</Typography>
            
            <List>
              <ListItem alignItems="flex-start" sx={{ px: 0, py: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Technologies" 
                  secondary={project.details.technologies.join(', ')}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItem>
              
              <Divider component="li" />
              
              <ListItem alignItems="flex-start" sx={{ px: 0, py: 1.5 }}>
                <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                  <DesignServicesIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Features" 
                  secondary={
                    <List component="div" disablePadding>
                      {project.details.features.map((feature, index) => (
                        <ListItem key={index} disableGutters>
                          <Box component="span" sx={{ color: 'text.primary' }}>•</Box>
                          <Typography variant="body2" component="span" sx={{ ml: 1 }}>
                            {feature}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  }
                  primaryTypographyProps={{ fontWeight: 500, mb: 1 }}
                  secondaryTypographyProps={{ component: 'div' }}
                />
              </ListItem>
            </List>
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>Project Overview</Typography>
              <Typography variant="body1" paragraph>
                {project.details.overview}
              </Typography>
            </Box>
            
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                <BuildIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                Challenges & Solutions
              </Typography>
              <Typography variant="body1" paragraph>
                {project.details.challenges}
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                <SchoolIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'primary.main' }} />
                Key Learnings
              </Typography>
              <Typography variant="body1" paragraph>
                {project.details.learnings}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Button 
            variant="outlined" 
            color="primary" 
            onClick={() => navigate(-1)}
            startIcon={<ArrowBackIcon />}
            sx={{ mr: 2 }}
          >
            Back to Projects
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            href={project.github} 
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
          >
            View on GitHub
          </Button>
        </Box>
      </Container>
    </PageTransition>
  );
};

export default ProjectDetails;
