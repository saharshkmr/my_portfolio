import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PageTransition from '../components/Common/PageTransition';

const NotFoundContainer = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '20px',
});

const Title = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(40px, 10vw, 100px)',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  color: theme.palette.primary.main,
  lineHeight: 1,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(20px, 5vw, 30px)',
  marginBottom: theme.spacing(4),
  color: theme.palette.text.primary,
}));

const Description = styled(Typography)(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto 40px',
  color: theme.palette.text.secondary,
  fontSize: '1.1rem',
  lineHeight: 1.6,
}));

/**
 * NotFound component that displays a 404 error page when a user navigates to a non-existent route.
 */
const NotFound = () => {
  return (
    <PageTransition>
      <NotFoundContainer>
        <Container maxWidth="md">
          <Title>404</Title>
          <Subtitle>Page Not Found</Subtitle>
          <Description>
            The page you're looking for doesn't exist or has been moved. Please check the URL or return to the home page.
          </Description>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              size="large"
            >
              Return Home
            </Button>
          </motion.div>
        </Container>
      </NotFoundContainer>
    </PageTransition>
  );
};

export default NotFound;
