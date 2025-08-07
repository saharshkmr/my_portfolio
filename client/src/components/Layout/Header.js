import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, Slide, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const navItems = [
  { name: 'About', to: 'about', section: true },
  { name: 'Experience', to: 'experience', section: true },
  { name: 'Projects', to: '/#projects', section: false },
  { name: 'Contact', to: 'contact', section: true },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(10, 25, 47, 0.85)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
  zIndex: 11,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 50px',
  maxWidth: '1600px',
  width: '100%',
  margin: '0 auto',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: '0 10px',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },
  '&.active': {
    color: theme.palette.primary.main,
  },
}));

const MobileNavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: '15px 20px',
  width: '100%',
  justifyContent: 'flex-start',
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderNavItem = (item) => {
    if (item.section && isHomePage) {
      return (
        <ScrollLink
          key={item.to}
          to={item.to}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          style={{ textDecoration: 'none' }}
        >
          <NavButton>
            <Typography variant="body2">{item.name}</Typography>
          </NavButton>
        </ScrollLink>
      );
    } else {
      return (
        <NavButton 
          key={item.to} 
          component={RouterLink} 
          to={item.to}
          className={location.pathname === item.to ? 'active' : ''}
        >
          <Typography variant="body2">{item.name}</Typography>
        </NavButton>
      );
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ 
        width: 250,
        backgroundColor: 'background.paper',
        height: '100%',
        padding: '20px',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.to} 
            style={{ padding: 0 }}
            component={item.section && isHomePage ? ScrollLink : RouterLink}
            to={item.to}
            {...(item.section && isHomePage ? {
              smooth: true,
              duration: 500,
              spy: true,
              exact: "true",
              offset: -80,
            } : {})}
          >
            <MobileNavButton>
              <Typography variant="body1">{item.name}</Typography>
            </MobileNavButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <StyledAppBar position="fixed">
          <StyledToolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              fontSize: '1.5rem',
              textDecoration: 'none',
              '&:hover': {
                color: 'primary.light',
              }
            }}
          >
            SK
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => renderNavItem(item))}
            <Button 
              variant="outlined" 
              color="primary" 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ ml: 2 }}
            >
              Resume
            </Button>
          </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
              width: 250,
              backgroundColor: 'background.paper',
              borderLeft: '1px solid rgba(100, 255, 218, 0.1)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
