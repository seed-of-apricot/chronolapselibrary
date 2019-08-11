import React from 'react';
import { Header, Navigation } from 'chronolapselibrary-commons';
import Container from '@material-ui/core/Container';

const Layout: React.FC = props => {
  return (
    <Container>
      <Header />
      <Navigation
        list={{ items: [{ text: 'Multiplayer' }, { text: 'About' }] }}
      />
      {props.children}
    </Container>
  );
};

export default Layout;
