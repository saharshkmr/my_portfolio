import React from 'react';
import { Box, Typography, Button, TextField, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionHeading from '../Common/SectionHeading';
import PageTransition from '../Common/PageTransition';

const ContactSection = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  padding: '100px 0 150px',
});

const ContactContainer = styled('div')({
  maxWidth: '600px',
  width: '100%',
  padding: '0 20px',
});

const Subtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'monospace',
  fontSize: '1.1rem',
  marginBottom: '20px',
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 'clamp(30px, 5vw, 50px)', // Responsive font size
  fontWeight: 600,
  marginBottom: '20px',
  lineHeight: 1.1,
}));

const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '1.1rem',
  lineHeight: 1.6,
  marginBottom: '50px',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const ContactForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  maxWidth: '600px',
  width: '100%',
  margin: '0 auto',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.primary,
    '& fieldset': {
      borderColor: theme.palette.primary.dark,
      transition: 'border-color 0.3s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-input': {
    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.paper} inset`,
      WebkitTextFillColor: theme.palette.text.primary,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '12px 28px',
  borderRadius: '4px',
  fontSize: '1rem',
  textTransform: 'none',
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  marginTop: '10px',
  alignSelf: 'flex-start',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: `0 5px 15px -5px ${theme.palette.primary.main}80`,
  },
  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
    borderColor: theme.palette.text.disabled,
  },
}));

const SocialLinks = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '50px',
  '& a': {
    color: 'inherit',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      color: '#6C63FF',
      transform: 'translateY(-3px)',
    },
  },
});

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = React.useState('idle');
  const [formErrors, setFormErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormStatus('submitting');
    
    try {
      // Replace with your form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
    }
  };

  return (
    <PageTransition id="contact">
      <ContactSection>
        <SectionHeading number="04.">What's Next?</SectionHeading>
        
        <ContactContainer>
          <Subtitle>Get In Touch</Subtitle>
          <Title>Contact Me</Title>
          <Description>
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </Description>
          
          <ContactForm onSubmit={handleSubmit} noValidate>
            <StyledTextField
              required
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              error={!!formErrors.name}
              helperText={formErrors.name}
            />
            
            <StyledTextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />
            
            <StyledTextField
              required
              fullWidth
              id="message"
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              value={formData.message}
              onChange={handleChange}
              error={!!formErrors.message}
              helperText={formErrors.message}
            />
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <StyledButton
                type="submit"
                variant="outlined"
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </StyledButton>
            </motion.div>
          </ContactForm>
          
          <SocialLinks>
            <a href="https://github.com/saharshkmr" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/saharsh-kumar-a57059259" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </SocialLinks>
        </ContactContainer>
        
        {/* Decorative elements */}
        <Box 
          sx={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${theme.palette.primary.main}10 0%, transparent 70%)`,
            left: '-200px',
            bottom: '100px',
            zIndex: 0,
            filter: 'blur(40px)',
            opacity: 0.5,
          }}
        />
      </ContactSection>
    </PageTransition>
  );
};

export default Contact;
