import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, useTheme, useMediaQuery, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionHeading from '../Common/SectionHeading';
import PageTransition from '../Common/PageTransition';

const ExperienceSection = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const ExperienceContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 20px',
});

const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderRight: 0,
  '& .MuiTabs-indicator': {
    left: 0,
    width: '2px',
    backgroundColor: theme.palette.primary.main,
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
}));

const StyledTab = styled(Tab)(({ theme, selected }) => ({
  padding: '10px 20px',
  textAlign: 'left',
  alignItems: 'flex-start',
  fontSize: '0.9rem',
  fontWeight: 400,
  color: theme.palette.text.secondary,
  borderLeft: `2px solid ${theme.palette.primary.dark}`,
  transition: 'all 0.25s ease-in-out',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    borderLeft: `2px solid ${theme.palette.primary.main}`,
  },
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.05)',
    color: theme.palette.primary.light,
  },
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: '8px 15px',
    fontSize: '0.85rem',
    borderLeft: 'none',
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
    '&.Mui-selected': {
      borderLeft: 'none',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

const TabContent = styled('div')(({ theme }) => ({
  padding: '10px 0 0 20px',
  [theme.breakpoints.down('md')]: {
    padding: '20px 0 0',
  },
}));

const JobTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.4rem',
  fontWeight: 600,
  marginBottom: '5px',
  '& span': {
    color: theme.palette.primary.main,
  },
}));

const Company = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: '1.1rem',
  fontWeight: 500,
  marginBottom: '15px',
}));

const Duration = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  fontFamily: 'monospace',
  marginBottom: '20px',
}));

const ResponsibilityList = styled('ul')({
  paddingLeft: '20px',
  margin: '0 0 20px',
});

const ResponsibilityItem = styled('li')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1rem',
  lineHeight: 1.6,
  marginBottom: '10px',
  '&::marker': {
    color: theme.palette.primary.main,
    fontSize: '1.2em',
  },
}));

// Sample experience data - replace with your actual experience
const experiences = [
  {
    id: 'company-1',
    company: 'Tech Solutions Inc.',
    title: 'Frontend Developer',
    duration: 'Jan 2022 - Present',
    responsibilities: [
      'Developed and maintained responsive web applications using React, Redux, and TypeScript.',
      'Collaborated with UX/UI designers to implement pixel-perfect designs with a focus on accessibility and cross-browser compatibility.',
      'Optimized application performance, resulting in a 40% improvement in page load times.',
      'Mentored junior developers and conducted code reviews to ensure code quality and best practices.',
      'Implemented CI/CD pipelines and automated testing to improve development workflow.',
    ],
  },
  {
    id: 'company-2',
    company: 'Digital Innovations Ltd.',
    title: 'Junior Web Developer',
    duration: 'Jun 2020 - Dec 2021',
    responsibilities: [
      'Built and maintained client websites using modern JavaScript frameworks and libraries.',
      'Worked closely with the design team to translate UI/UX designs into functional web applications.',
      'Integrated RESTful APIs and third-party services into web applications.',
      'Participated in agile development processes including daily stand-ups, sprint planning, and retrospectives.',
    ],
  },
  // Add more experiences as needed
];

const Experience = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageTransition id="experience">
      <ExperienceSection>
      <SectionHeading number="03.">Where I've Worked</SectionHeading>
      
      <ExperienceContainer>
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%' }}>
          <Box sx={{ width: isMobile ? '100%' : '200px', mb: isMobile ? 3 : 0 }}>
            <StyledTabs
              orientation={isMobile ? 'horizontal' : 'vertical'}
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Experience tabs"
              scrollButtons={false}
              sx={{
                borderRight: isMobile ? 0 : `1px solid ${theme.palette.primary.dark}`,
                borderBottom: isMobile ? `1px solid ${theme.palette.primary.dark}` : 0,
                mb: isMobile ? 3 : 0,
              }}
            >
              {experiences.map((exp, index) => (
                <StyledTab 
                  key={exp.id} 
                  label={exp.company.split(' ')[0]} 
                  id={`vertical-tab-${index}`}
                  aria-controls={`vertical-tabpanel-${index}`}
                />
              ))}
            </StyledTabs>
          </Box>
          
          <TabContent>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
              >
                {value === index && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <JobTitle>
                      {exp.title} <span>@ {exp.company}</span>
                    </JobTitle>
                    <Duration>{exp.duration}</Duration>
                    <ResponsibilityList>
                      {exp.responsibilities.map((item, i) => (
                        <ResponsibilityItem key={i}>
                          {item}
                        </ResponsibilityItem>
                      ))}
                    </ResponsibilityList>
                  </motion.div>
                )}
              </div>
            ))}
          </TabContent>
        </Box>
        </ExperienceContainer>
      </ExperienceSection>
    </PageTransition>
  );
};

export default Experience;
