import React from 'react';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';

const Navigation: React.FC = () => {
  return (
    <Drawer variant="persistent" open={true} anchor="left">
      <Toolbar>
        <IconButton>aaa</IconButton>
      </Toolbar>
    </Drawer>
  );
};

export default Navigation;
