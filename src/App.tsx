import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Profile from './components/Profile';

const Home = lazy(() => import('./pages/Home'));
const Compose = lazy(() => import('./pages/Compose'));
const SignIn = lazy(() => import('./pages/Signin'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Post = lazy(() => import('./pages/Post'));

export default function App() {
  const user = null;
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex flex-column">
          <Navigation />
          <div className="my-auto">{user && <Profile />}</div>
        </Col>
        <Col md={6} className="px-0 border-start border-end">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/compose" element={<Compose />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/tweet/:id" element={<Post />} />
            </Routes>
          </Suspense>
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
