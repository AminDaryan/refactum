import React from 'react';
import { Box, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: "primary.main",
        color: "white"
      }}
    >
      <Stack
        direction="row"
        useFlexGap
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          sx={{
            alignItems: "center",
          }}
        >
          <MenuIcon />
          <h1>REFACTUM Fertigungsassiastent</h1>
        </Stack>
        <div>
          <AccountCircleIcon sx={{ width: 24, height: 24 }} />
        </div>
      </Stack>
    </Box>
  );
};

export default Header;