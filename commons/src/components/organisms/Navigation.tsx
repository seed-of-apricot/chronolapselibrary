import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {
  Drawer,
  Divider,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';
import ListCL, { ListCLProps } from '@src/components/molecules/ListCL';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      position: 'fixed',
      zIndex: 50,
      backgroundColor: theme.palette.primary.main,
      width: '298px'
    },
    toolBar: {
      paddingTop: '4.5rem'
    }
  })
);

interface NavigationProps {
  list: ListCLProps;
}

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="persistent"
      open={true}
      anchor="left"
      classes={{ paper: classes.drawer }}
    >
      <Divider />
      <Toolbar className={classes.toolBar}>
        <ListCL items={props.list.items} />
      </Toolbar>
    </Drawer>
  );
};

export default Navigation;
