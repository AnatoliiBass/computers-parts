import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import NavMenu from '../NavMenu/NavMenu';
import style from './AppBar.module.css'

const ResponsiveAppBar = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };


   return (
      <AppBar position="static" className={style.appbar}>
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
               >
                  <NavLink to="/"><Logo /></NavLink>
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        flexDirection: 'column',
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     <NavMenu />
                  </Menu>
               </Box>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, flexDirection: 'column', display: { xs: 'flex', md: 'none' } }}
               >
                  <NavLink to="/"><Logo /></NavLink>
               </Typography>
               <Box sx={{ flexGrow: 1, flexDirection: 'column', display: { xs: 'none', md: 'flex' } }} >
                  <NavMenu />
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};
export default ResponsiveAppBar;
