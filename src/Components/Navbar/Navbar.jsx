import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';


const  Navbar = () => {

  return (
    <AppBar position="fixed"
    sx={{
        backgroundColor:"black",
        opacity:0.8
    }}
    >
      <Container maxWidth="xl"
      sx={{display:"flex", justifyContent:"space-between", height: "3.5rem", padding: "8px"}}
      >
        {/* <Toolbar disableGutters> */}
        <Box sx={{display:"flex", justifyContent:"space-between"}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
            //   mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontSize: '2rem',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}
          >
            ClimaX
          </Typography>
          </Box>
        <Box sx={{display:"flex", justifyContent:"space-between"}}>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
            //   mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: '2rem',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              color:"red"
            }}
          >
            ClimaX
          </Typography>
            </Box>
          <Box sx={{ flexGrow: 0,right:0 }}>
            <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
          </Box>
        {/* </Toolbar> */}
      </Container>
    </AppBar>
  );
}
export default Navbar;