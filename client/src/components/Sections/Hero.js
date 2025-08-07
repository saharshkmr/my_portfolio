import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import PageTransition from '../Common/PageTransition';

const HeroSection = styled('section')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  position: 'relative',
  overflow: 'hidden',
});

const Greeting = styled(motion.div)({
  marginBottom: '20px',
  color: '#6C63FF',
  fontFamily: 'monospace',
  fontSize: '1.2rem',
});

const Name = styled(motion.h1)(({ theme }) => ({
  fontSize: 'clamp(40px, 8vw, 80px)',
  fontWeight: 600,
  margin: '0 0 20px 0',
  color: theme.palette.text.primary,
  lineHeight: 1.1,
}));

const Subtitle = styled(motion.h2)(({ theme }) => ({
  fontSize: 'clamp(20px, 4vw, 40px)',
  fontWeight: 600,
  margin: '0 0 30px 0',
  color: theme.palette.text.secondary,
  lineHeight: 1.1,
}));

const Description = styled(motion.div)(({ theme }) => ({
  maxWidth: '540px',
  marginBottom: '50px',
  '& p': {
    color: theme.palette.text.secondary,
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
}));

const ButtonGroup = styled(motion.div)({
  display: 'flex',
  gap: '20px',
  marginTop: '30px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 28px',
  borderRadius: '4px',
  fontSize: '1rem',
  textTransform: 'none',
  '&.primary': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: 'rgba(108, 99, 255, 0.8)',
    },
  },
  '&.outline': {
    border: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(108, 99, 255, 0.1)',
    },
  },
}));

const EmailLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  display: 'inline-block',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '1px',
    bottom: '-4px',
    left: '0',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover:after': {
    width: '100%',
  },
}));

const Hero = () => {
  const theme = useTheme();

  return (
    <PageTransition id="home">
      <Container maxWidth="lg" sx={{ 
        position: 'relative', 
        zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Greeting
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hi, my name is
        </Greeting>
        
        <Name
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Saharsh Kumar.
        </Name>
        
        <Subtitle
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build things for the web.
        </Subtitle>
        
        <Description
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products at{' '}
            <a href="#" style={{ color: theme.palette.primary.main, textDecoration: 'none' }}>
              Your Company
            </a>.
          </p>
        </Description>
        
        <ButtonGroup
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link to="work" smooth={true} duration={500} offset={-70} style={{ textDecoration: 'none' }}>
            <StyledButton 
              variant="contained" 
              className="primary"
              disableElevation
            >
              Check out my work!
            </StyledButton>
          </Link>
          
          <a 
            href="mailto:your.email@example.com" 
            style={{ textDecoration: 'none' }}
          >
            <StyledButton 
              variant="outlined" 
              className="outline"
            >
              Get In Touch
            </StyledButton>
          </a>
        </ButtonGroup>
      </Container>
      
      {/* Decorative elements */}
      <Box 
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}20 0%, transparent 70%)`,
          right: '-300px',
          top: '20%',
          zIndex: 0,
          filter: 'blur(60px)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />
    </PageTransition>
  );
};

export default Hero;
