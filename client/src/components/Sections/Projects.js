import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Chip, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionHeading from '../Common/SectionHeading';
import PageTransition from '../Common/PageTransition';

const ProjectsSection = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const ProjectsGrid = styled(Grid)(({ theme }) => ({
  padding: '0 20px',
  [theme.breakpoints.up('md')]: {
    padding: 0,
  },
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '4px',
  height: '100%',
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 10px 30px -15px ${theme.palette.primary.main}80`,
    '& .project-image': {
      opacity: 1,
      transform: 'scale(1.05)',
    },
    '& .project-links': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

const ProjectImageWrapper = styled('div')({
  position: 'relative',
  paddingTop: '60%',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background: 'linear-gradient(180deg, rgba(10, 25, 47, 0.1) 0%, rgba(10, 25, 47, 0.8) 100%)',
    opacity: 0.5,
    transition: 'opacity 0.25s ease-in-out',
  },
});

const ProjectImage = styled(CardMedia)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'all 0.5s ease-in-out',
  opacity: 0.9,
});

const ProjectContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100% - 40px)',
  padding: '25px',
  '& > *:not(:last-child)': {
    marginBottom: '15px',
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '10px',
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1rem',
  lineHeight: 1.6,
  flexGrow: 1,
}));

const ProjectTech = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  margin: '15px 0',
});

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  color: theme.palette.primary.light,
  fontSize: '0.7rem',
  height: '24px',
  '& .MuiChip-label': {
    padding: '0 8px',
  },
}));

const ProjectLinks = styled('div')({
  display: 'flex',
  gap: '15px',
  marginTop: 'auto',
  opacity: 0,
  transform: 'translateY(10px)',
  transition: 'all 0.25s ease-in-out',
  '& a': {
    color: 'inherit',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: '#6C63FF',
    },
  },
});

const ProjectLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
});

const ProjectTags = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
});

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'project-one',
      title: 'Project One',
      description: 'A brief description of the project and what it does.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/600x400',
      github: 'https://github.com',
      demo: 'https://example.com',
      details: {
        overview: 'A comprehensive overview of Project One, including its purpose, features, and technologies used.',
        features: [
          'Feature 1: Description of feature one',
          'Feature 2: Description of feature two',
          'Feature 3: Description of feature three',
        ],
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Mongoose'],
        challenges: 'Challenges faced during development and how they were overcome.',
        learnings: 'Key takeaways and learnings from this project.'
      }
    },
    {
      id: 'project-two',
      title: 'Project Two',
      description: 'A brief description of the project and what it does.',
      tags: ['React', 'Express', 'PostgreSQL'],
      image: 'https://via.placeholder.com/600x400',
      github: 'https://github.com',
      demo: 'https://example.com',
      details: {
        overview: 'A comprehensive overview of Project Two, including its purpose, features, and technologies used.',
        features: [
          'Feature 1: Description of feature one',
          'Feature 2: Description of feature two',
          'Feature 3: Description of feature three',
        ],
        technologies: ['React', 'Express', 'PostgreSQL', 'Sequelize', 'JWT'],
        challenges: 'Challenges faced during development and how they were overcome.',
        learnings: 'Key takeaways and learnings from this project.'
      }
    },
    {
      id: 'project-three',
      title: 'Project Three',
      description: 'A brief description of the project and what it does.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400',
      github: 'https://github.com',
      demo: 'https://example.com',
      details: {
        overview: 'A comprehensive overview of Project Three, including its purpose, features, and technologies used.',
        features: [
          'Feature 1: Description of feature one',
          'Feature 2: Description of feature two',
          'Feature 3: Description of feature three',
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
        challenges: 'Challenges faced during development and how they were overcome.',
        learnings: 'Key takeaways and learnings from this project.'
      }
    },
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <PageTransition id="projects">
      <ProjectsSection>
        <SectionHeading number="02.">Some Things I've Built</SectionHeading>
        
        <ProjectsGrid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleProjectClick(project.id)}
                style={{ cursor: 'pointer' }}
              >
                <ProjectCard>
                  <CardActionArea>
                    <ProjectImageWrapper>
                      <ProjectImage 
                        className="project-image"
                        image={project.image}
                        title={project.title}
                      />
                      <ProjectLinks className="project-links">
                        <Box 
                          sx={{ 
                            display: 'flex',
                            gap: '15px',
                            '& > *': {
                              backgroundColor: 'rgba(0, 0, 0, 0.7)',
                              padding: '8px',
                              borderRadius: '4px',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(100, 255, 218, 0.7)',
                                color: '#0a192f',
                              },
                            },
                          }}
                        >
                          {project.github && (
                            <ProjectLink 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              aria-label="GitHub Repository"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <GitHubIcon />
                            </ProjectLink>
                          )}
                          {project.demo && (
                            <ProjectLink 
                              href={project.demo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              aria-label="Live Demo"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <OpenInNewIcon />
                            </ProjectLink>
                          )}
                        </Box>
                      </ProjectLinks>
                    </ProjectImageWrapper>
                    <CardContent>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <ProjectTags>
                        {project.tags.map((tag, i) => (
                          <Chip 
                            key={i} 
                            label={tag} 
                            size="small" 
                            sx={{ 
                              mr: 1, 
                              mb: 1, 
                              backgroundColor: 'rgba(100, 255, 218, 0.1)',
                              color: 'primary.main',
                              fontWeight: 500,
                            }} 
                          />
                        ))}
                      </ProjectTags>
                    </CardContent>
                  </CardActionArea>
                </ProjectCard>
              </motion.div>
            </Grid>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
    </PageTransition>
  );
};

export default Projects;
