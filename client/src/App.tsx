import React, { ReactNode } from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default process.env.NODE_ENV === 'development' ? hot(App) : App;
