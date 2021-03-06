import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useAuth } from './firebase';
import ROUTES from './constants/routes';
import Spinner from 'react-spinkit';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Pong = lazy(() => import('./pages/Pong'));

function App() {
  const [_, loading] = useAuth();

  if (loading) return <Spinner name="circle" />;

  return (
    <>
      <Router>
        <Link to={ROUTES.LOGIN}>Login</Link>
        <Suspense fallback={<Spinner name="circle" />}>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Home />
            </Route>
            <Route path={ROUTES.LOGIN}>
              <Login />
            </Route>
            <Route path={ROUTES.PONG}>
              <Pong />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
