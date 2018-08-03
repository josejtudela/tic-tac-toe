import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './styles/index.scss';
import BoardComponent from './components/Board.component';
import Statistics from './components/Statistics.component';
import store from './store/configureStore';

const Header = () => (
  <header>
    <NavLink activeClassName="is-active" to="/" exact>
      Game
    </NavLink>
    <NavLink activeClassName="is-active" to="/statistics">
      Statistics
    </NavLink>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={BoardComponent}
          exact
        />
        <Route
          path="/statistics"
          component={Statistics}
          exact
        />
        {/* <Route component={Error_404}/> */}
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render((
  <Provider store={store}>
    <AppRouter />
  </Provider>
), document.getElementById('root'));
