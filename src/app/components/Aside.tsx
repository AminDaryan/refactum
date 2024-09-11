import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from '@mui/material';

const Aside = () => {
  return (
    <aside>
      <div>
        <AddIcon />
        <p>Auftrag erstellen</p>
      </div>
      <div>
        <div>
          <AccessTimeIcon />
          <p>Letzte auftrage</p>
        </div>
        <Divider />
        <ul>
          <li>674878</li>
          <li>568567</li>
        </ul>
        <Divider />
        <div>
          <SearchIcon />
          <p>Auftrag Suchen</p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;