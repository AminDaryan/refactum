import React, { FC, ReactNode } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import { Stack, Divider, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

interface ListComponentI {
  children: ReactNode;
}

const ListComponent: FC<ListComponentI> = ({ children }) => {
  return (
    <Stack
      direction="row"
      useFlexGap
      sx={{
        alignItems: "center",
        padding: "1rem",
        gap: "2rem"
      }}
    >
      {children}
    </Stack>
  );
};

const Aside = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: "20rem",
      }}
    >
      <Stack
        direction="column"
        useFlexGap
        sx={{
          justifyContent: "center",
        }}
      >
        <ListComponent>
          <AddIcon />
          <p>Auftrag erstellen</p>
        </ListComponent>
        <Divider />
        <div>
          <List>
            <ListItem>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <p>Letzte auftrage</p>
            </ListItem>
            <ListItem>
              <ListItemText
                inset
                primary="674878"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                inset
                primary="568567"
              />
            </ListItem>
          </List>
          <Divider />
          <ListComponent>
            <SearchIcon />
            <p>Auftrag Suchen</p>
          </ListComponent>
        </div>
      </Stack>
    </Box >
  );
};

export default Aside;