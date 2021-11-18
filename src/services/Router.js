import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BebidasDetalhes from '../pages/BebidasDetalhes';
import BebidasProgresso from '../pages/BebidasProgresso';
import ComidasDetalhes from '../pages/ComidasDetalhes';
import ComidasProgresso from '../pages/ComidasProgresso';
import Explorar from '../pages/Explorar';
import ExplorarBebidas from '../pages/ExplorarBebidas';
import ExplorarComidas from '../pages/ExplorarComidas';
import ExplorarComidasArea from '../pages/ExplorarComidasArea';
import ExplorarIngredientes from '../pages/ExplorarIngredients';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Receitas from '../pages/Receitas';
import ReceitasFavoritas from '../pages/ReceitasFavoritas';
import ReceitasFeitas from '../pages/ReceitasFeitas';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/comidas/:id/in-progress" component={ ComidasProgresso } />
      <Route path="/comidas/:id" component={ ComidasDetalhes } />
      <Route path="/comidas" component={ Receitas } />

      <Route path="/bebidas/:id/in-progress" component={ BebidasProgresso } />
      <Route path="/bebidas/:id" component={ BebidasDetalhes } />
      <Route path="/bebidas" component={ Receitas } />

      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExplorarIngredientes }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExplorarIngredientes }
      />
      <Route path="/explorar/bebidas" component={ ExplorarBebidas } />
      <Route path="/explorar/comidas/area" component={ ExplorarComidasArea } />
      <Route path="/explorar/comidas" component={ ExplorarComidas } />
      <Route path="/explorar" component={ Explorar } />

      <Route path="/perfil" component={ Perfil } />

      <Route path="/receitas-feitas" component={ ReceitasFeitas } />
      <Route path="/receitas-favoritas" component={ ReceitasFavoritas } />
    </Switch>
  );
}

export default Router;
