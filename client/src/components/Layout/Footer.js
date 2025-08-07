import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled('footer')(({ theme }) => ({
  padding: '20px 0',
  textAlign: 'center',
  backgroundColor: 'rgba(10, 25, 47, 0.85)',
  backdropFilter: 'blur(10px)',
  borderTop: `1px solid ${theme.palette.primary.dark}`,
  position: 'relative',
  zIndex: 10,
}));

const SocialLinks = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginBottom: '15px',
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-3px)',
  },
}));

const Copyright = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  fontFamily: 'monospace',
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <SocialLinks>
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <StyledIconButton 
              aria-label="GitHub" 
              href="https://github.com/saharshkmr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </StyledIconButton>
          </motion.div>
          
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <StyledIconButton 
              aria-label="LinkedIn" 
              href="https://linkedin.com/in/saharsh-kumar-a57059259" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </StyledIconButton>
          </motion.div>
          
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <StyledIconButton 
              aria-label="Email" 
              href="mailto:your.email@example.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </StyledIconButton>
          </motion.div>
          
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
            <StyledIconButton 
              aria-label="Twitter" 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </StyledIconButton>
          </motion.div>
        </SocialLinks>
        
        <Copyright variant="body2">
          © {currentYear} Built with ❤️ by Saharsh Kumar
        </Copyright>
        
        <Copyright variant="body2" sx={{ mt: 1, fontSize: '0.8rem' }}>
          Designed & Built with React, Material-UI, and Framer Motion
        </Copyright>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
