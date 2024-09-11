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
        color: "white",
        boxShadow: "2"
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
          direction="row"
          useFlexGap
          sx={{
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          <MenuIcon />
          <Box component="h3" sx={{ fontWeight: "normal" }}>REFACTUM Fertigungsassiastent</Box>
        </Stack>
        <div>
          <AccountCircleIcon sx={{ width: 24, height: 24 }} />
        </div>
      </Stack>
    </Box>
  );
};

export default Header;