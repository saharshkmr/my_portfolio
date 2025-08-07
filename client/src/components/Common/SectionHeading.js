import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeadingWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '60px',
  width: '100%',
  whiteSpace: 'nowrap',
});

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: 'monospace',
  fontSize: '1.2rem',
  fontWeight: 500,
  marginRight: '15px',
  whiteSpace: 'nowrap',
}));

const Line = styled('div')(({ theme }) => ({
  height: '1px',
  width: '100%',
  maxWidth: '300px',
  backgroundColor: theme.palette.primary.dark,
  marginLeft: '20px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.background.default} 100%)`,
  },
}));

const SectionHeading = ({ children, number = '01.' }) => {
  return (
    <HeadingWrapper>
      <StyledHeading>
        {number} {children}
      </StyledHeading>
      <Line />
    </HeadingWrapper>
  );
};

export default SectionHeading;
