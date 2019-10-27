import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Layout from '@components/Layout';
import Home from '@components/Home/Home';

const AppRouter = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
    </Layout>
  </Router>
);

export default AppRouter;
