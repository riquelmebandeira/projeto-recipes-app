import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';

import Comida from '../pages/Comida';
import Login from '../pages/Login';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Comida } />
      </Switch>
      <Footer />
    </>
  );
}

export default Router;
