import React from 'react';
import { Header } from 'chronolapselibrary-commons';
import Container from '@material-ui/core/Container';
import { Grid, Paper } from '@material-ui/core';
import Home from './Home';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Grid item xs={10}>
        <Home />
      </Grid>
    </Container>
  );
};

export default Layout;
