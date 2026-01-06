import { Route, Routes } from 'react-router';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Profile from './components/Profile';

import Home from './pages/Home';
import Compose from './pages/Compose';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Post from './pages/Post';

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
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/compose" element={<Compose />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tweet/:id" element={<Post />} />
          </Routes>
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
