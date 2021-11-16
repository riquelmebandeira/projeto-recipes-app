import React from 'react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

function renderWithRouterAndRedux(componentToRender) {
  const customHistory = createMemoryHistory();

  return {
    ...render(
      <Provider store={ store }>
        <Router history={ customHistory }>
          { componentToRender}
        </Router>
      </Provider>,
    ),
    history: customHistory,
    store,
  };
}

export default renderWithRouterAndRedux;
