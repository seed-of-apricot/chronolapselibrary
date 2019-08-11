import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';

import { muiTheme } from 'storybook-addon-material-ui';
import Navigation from '../src/components/organisms/Navigation';
import { defaultTheme } from '../src/theme/defaultTheme';
import { Header } from '@src/index';

storiesOf('Material-UI', module)
  .addDecorator(muiTheme([defaultTheme]))
  .add('Header', () => {
    return <Header />;
  })
  .add('Navigation', () => {
    return (
      <Navigation
        list={{ items: [{ text: 'Multiplayer' }, { text: 'About' }] }}
      />
    );
  });
