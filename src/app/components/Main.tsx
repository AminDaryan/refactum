import React from 'react';
import Button from '@mui/material/Button';

const Main = () => {
  return (
    <main>
      <Button variant="contained">Diameter match</Button>;
      <Button variant="contained">Roughness match</Button>;
      <Button variant="contained">Reset NEO4J DB</Button>;
    </main>
  );
};

export default Main;