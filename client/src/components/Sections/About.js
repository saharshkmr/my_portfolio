import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Avatar, 
  useTheme, 
  Container,
  Button,
  Divider,
  Paper,
  useMediaQuery 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../Common/SectionHeading';
import PageTransition from '../Common/PageTransition';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';

const AboutSection = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  padding: '100px 0',
  [theme.breakpoints.down('md')]: {
    padding: '60px 0',
  },
}));

const ContentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '60px',
  },
}));

const TextContent = styled('div')(({ theme }) => ({
  flex: 1,
  maxWidth: '800px',
  [theme.breakpoints.up('lg')]: {
    paddingRight: '40px',
  },
}));

const AboutText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1.1rem',
  lineHeight: 1.8,
  marginBottom: '24px',
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    position: 'relative',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    '&:hover': {
      color: theme.palette.primary.light,
      '&::after': {
        width: '100%',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '0',
      height: '1px',
      bottom: '-2px',
      left: 0,
      backgroundColor: theme.palette.primary.main,
      transition: 'width 0.3s ease',
    },
  },
}));

const SkillsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
  gap: '12px',
  margin: '24px 0 32px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const SkillItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '10px 15px',
  borderRadius: '6px',
  backgroundColor: 'rgba(100, 255, 218, 0.05)',
  border: '1px solid rgba(100, 255, 218, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
  },
  '&::before': {
    content: '"▹"',
    color: theme.palette.primary.main,
    marginRight: '12px',
    fontSize: '16px',
    lineHeight: '1',
  },
}));

const ImageWrapper = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  width: '280px',
  margin: '50px auto 0',
  [theme.breakpoints.up('lg')]: {
    margin: '0',
    width: '320px',
    flexShrink: 0,
  },
  '&:hover': {
    '&::after': {
      transform: 'translate(15px, 15px)',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '6px',
    top: '15px',
    left: '15px',
    zIndex: -1,
    transition: 'all 0.3s ease',
    [theme.breakpoints.down('lg')]: {
      top: '10px',
      left: '10px',
    },
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '6px',
  position: 'relative',
  transition: 'all 0.3s ease',
  filter: 'grayscale(100%) contrast(1)',
  '&:hover': {
    filter: 'none',
  },
}));

const SocialLink = styled(Button)(({ theme }) => ({
  minWidth: '40px',
  height: '40px',
  borderRadius: '50%',
  padding: 0,
  margin: '0 8px',
  color: theme.palette.text.primary,
  backgroundColor: 'rgba(100, 255, 218, 0.1)',
  border: `1px solid rgba(100, 255, 218, 0.2)`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#0a192f',
    transform: 'translateY(-3px)',
    boxShadow: `0 5px 15px -5px ${theme.palette.primary.main}80`,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '1.5rem',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginRight: '10px',
    color: theme.palette.primary.main,
  },
}));

const ExperienceItem = styled(Box)(({ theme }) => ({
  marginBottom: '2rem',
  '&:last-child': {
    marginBottom: 0,
  },
  '& h4': {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
    color: theme.palette.text.primary,
  },
  '& h5': {
    fontSize: '0.95rem',
    fontWeight: 500,
    color: theme.palette.primary.main,
    marginBottom: '0.5rem',
  },
  '& p': {
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
    marginBottom: '0.5rem',
  },
  '& .date': {
    fontSize: '0.85rem',
    color: theme.palette.text.secondary,
    fontStyle: 'italic',
  },
}));

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL'] },
    { category: 'Tools & Others', items: ['Git & GitHub', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Cypress'] },
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      company: 'Your Company',
      period: '2022 - Present',
      description: 'Working on building and maintaining web applications using modern technologies.',
    },
    {
      role: 'Frontend Developer',
      company: 'Previous Company',
      period: '2020 - 2022',
      description: 'Developed responsive user interfaces and collaborated with cross-functional teams.',
    },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Your University',
      period: '2016 - 2020',
      description: 'Specialized in Web Development and Data Structures.',
    },
  ];

  return (
    <PageTransition id="about">
      <AboutSection>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading>About Me</SectionHeading>
            
            <ContentWrapper>
              <TextContent>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <AboutText>
                    Hello! I'm <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>Saharsh Kumar</Box>, a passionate Full Stack Developer with a love for creating beautiful, functional, and user-friendly web applications. My journey in web development began when I was introduced to HTML & CSS, and I've been hooked ever since.
                  </AboutText>
                  
                  <AboutText>
                    I specialize in building exceptional digital experiences using modern web technologies. Currently, I'm focused on building accessible, responsive, and performant web applications at{' '}
                    <a href="#" target="_blank" rel="noreferrer">Your Company</a>, where I work with a talented team to deliver high-quality solutions for our clients.
                  </AboutText>
                  
                  <AboutText>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials. I'm always eager to learn and stay up-to-date with the latest industry trends and best practices.
                  </AboutText>
                  
                  <Box sx={{ mt: 4, mb: 4 }}>
                    <SectionTitle><CodeIcon />Technical Skills</SectionTitle>
                    <Grid container spacing={3}>
                      {skills.map((category, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Typography variant="h6" sx={{ 
                            color: theme.palette.primary.main, 
                            mb: 1.5,
                            fontSize: '1rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            '&::before': {
                              content: '"▹"',
                              color: theme.palette.primary.main,
                              marginRight: '10px',
                              fontSize: '16px',
                            },
                          }}>
                            {category.category}
                          </Typography>
                          <SkillsGrid>
                            {category.items.map((skill, skillIndex) => (
                              <SkillItem
                                key={skillIndex}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                              >
                                {skill}
                              </SkillItem>
                            ))}
                          </SkillsGrid>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <SocialLink 
                      href="https://github.com/saharshkmr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <GitHubIcon />
                    </SocialLink>
                    <SocialLink 
                      href="https://linkedin.com/in/saharsh-kumar-a57059259" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon />
                    </SocialLink>
                    <SocialLink 
                      href="mailto:your.email@example.com" 
                      aria-label="Email"
                    >
                      <EmailIcon />
                    </SocialLink>
                  </Box>
                </motion.div>
              </TextContent>
              
              <ImageWrapper
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StyledAvatar
                  alt="Saharsh Kumar"
                  src="https://avatars.githubusercontent.com/u/your-github-id"
                  variant="rounded"
                />
              </ImageWrapper>
            </ContentWrapper>
            
            <Box sx={{ mt: 8 }}>
              <SectionTitle><WorkIcon />Experience</SectionTitle>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {experience.map((exp, index) => (
                  <ExperienceItem key={index}>
                    <Typography variant="h4">{exp.role}</Typography>
                    <Typography variant="h5">{exp.company}</Typography>
                    <Typography className="date">{exp.period}</Typography>
                    <Typography>{exp.description}</Typography>
                  </ExperienceItem>
                ))}
              </motion.div>
            </Box>
            
            <Box sx={{ mt: 6 }}>
              <SectionTitle><SchoolIcon />Education</SectionTitle>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {education.map((edu, index) => (
                  <ExperienceItem key={index}>
                    <Typography variant="h4">{edu.degree}</Typography>
                    <Typography variant="h5">{edu.institution}</Typography>
                    <Typography className="date">{edu.period}</Typography>
                    <Typography>{edu.description}</Typography>
                  </ExperienceItem>
                ))}
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </AboutSection>
    </PageTransition>
  );
};

export default About;
