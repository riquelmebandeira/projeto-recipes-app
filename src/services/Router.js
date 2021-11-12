import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Bebidas from '../pages/Bebidas';
import BebidasDetalhes from '../pages/BebidasDetalhes';
import Comidas from '../pages/Comidas';
import ComidasDetalhes from '../pages/ComidasDetalhes';
import Explorar from '../pages/Explorar';
import ExplorarBebidas from '../pages/ExplorarBebidas';
import ExplorarBebidasIngredientes from '../pages/ExplorarBebidasIngredientes';
import ExplorarComidas from '../pages/ExplorarComidas';
import ExplorarComidasArea from '../pages/ExplorarComidasArea';
import ExplorarComidasIngredientes from '../pages/ExplorarComidasIngredientes';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
import Progresso from '../pages/Progresso';
import ReceitasFavoritas from '../pages/ReceitasFavoritas';
import ReceitasFeitas from '../pages/ReceitasFeitas';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route
        path="/comidas/:id/in-progress"
        render={ (props) => <Progresso { ...props } recipeType="comida" /> }
      />
      <Route path="/comidas/:id" component={ ComidasDetalhes } />
      <Route path="/comidas" component={ Comidas } />

      <Route
        path="/bebidas/:id/in-progress"
        render={ (props) => <Progresso { ...props } recipeType="bebida" /> }
      />
      <Route path="/bebidas/:id" component={ BebidasDetalhes } />
      {/* <Route path="/bebidas" component={ Bebidas } /> */}

      <Route
        path="/explorar/comidas/ingredientes"
        component={ ExplorarComidasIngredientes }
      />
      <Route
        path="/explorar/bebidas/ingredientes"
        component={ ExplorarBebidasIngredientes }
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
