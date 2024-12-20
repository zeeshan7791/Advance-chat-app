import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import {Menu as MenuIcon,Search as SearchIcon} from "@mui/icons-material"
const Header = () => {
  const handMobile=()=>console.log("clciked")
  const openSearchDialog=()=>console.log("openSearchDialog")
  return (
    <Box sx={{ flexGrow: 1, height: '4rem', width: '100%' }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange, // Using Material-UI's orange color palette
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Chattu
          </Typography>
          <Box sx={{
            display:{xs:"block", sm:"none"}
          }}>
            <IconButton color='inherit' onClick={handMobile}>
              <MenuIcon/>
            </IconButton>
          </Box>
          <Box sx={{flexGrow:1}}></Box>
          <Box> <IconButton color='inherit' onClick={openSearchDialog}>
              <SearchIcon/>
            </IconButton></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
