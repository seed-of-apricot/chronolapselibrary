import React from 'react';
import Navigation from './Navigation';
import Container from '@material-ui/core/Container';
import { Grid, Paper } from '@material-ui/core';
import Home from './Home';

const Layout: React.FC = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={2}>
          <Navigation />
        </Grid>
        <Grid item xs={10}>
          <Home />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
