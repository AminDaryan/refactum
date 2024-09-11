import React from 'react';
import { Avatar, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <header>
      <Stack
        direction="row"
        useFlexGap
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          bgcolor: "#455b79",
          color: "white"
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
          <h1>REFACTUM</h1>
        </Stack>
        <div>
          <Avatar src="/broken-image.jpg" />
        </div>
      </Stack>
    </header>
  );
};

export default Header;