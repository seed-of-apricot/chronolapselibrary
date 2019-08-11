import React, { ReactNode } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import { WindowManager } from 'chronolapselibrary-commons';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = (): JSX.Element => {
  return (
    <WindowManager>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </WindowManager>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
