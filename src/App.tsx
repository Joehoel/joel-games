import { Box, Container } from '@chakra-ui/layout';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Header from './components/Header';
import ROUTES from './constants/routes';
import { useAuth } from './firebase';
import { Fonts } from './Fonts';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Pong = lazy(() => import('./pages/Pong'));

function App() {
  const [_, loading] = useAuth();

  if (loading) return <Spinner name="circle" />;

  return (
    <>
      <Fonts />
      <Box bgImage="url('background.png')" w="100%" h="100vh" color="white">
        <Router>
          {/* <Link to={ROUTES.LOGIN}>Login</Link> */}
          <Suspense fallback={<Spinner name="circle" />}>
            <Container
              maxW={{
                base: '100%',
                md: '80%',
              }}
              centerContent
            >
              <Header />
              <Box
                bgColor="#fff"
                w="100%"
                mx="auto"
                mt="2rem"
                h="calc(100vh - 62px - 6rem)"
                border="3px solid #32220b"
                boxShadow="3px 3px 0px 0px #32220b"
              >
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
              </Box>
            </Container>
          </Suspense>
        </Router>
      </Box>
    </>
  );
}

export default App;
