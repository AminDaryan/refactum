import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        boxShadow: "3"
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
          <IconButton >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Box component="h3" sx={{ fontWeight: "normal" }}>REFACTUM Fertigungsassiastent</Box>
        </Stack>
        <IconButton >
          <AccountCircleIcon sx={{ color: "white", width: 24, height: 24 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Header;