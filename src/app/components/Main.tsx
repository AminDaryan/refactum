import React from 'react';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';

const Main = () => {
  return (
    <Box
      component="main"
      sx={{
        padding: "2rem",
        color: "white",
        width: "100%"
      }}
    >
      <Stack
        direction="row"
        useFlexGap
        sx={{
          alignItems: "center",
          gap: "1rem"
        }}
      >
        <Button variant="contained">Diameter match</Button>
        <Button variant="contained">Roughness match</Button>
      </Stack>
      <Button variant="contained">Reset NEO4J DB</Button>
    </Box >
  );
};

export default Main;