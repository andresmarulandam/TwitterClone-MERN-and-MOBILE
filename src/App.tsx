import { Route, Routes } from 'react-router';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Home from './pages/Home';
import Profile from './components/Profile';
import Compose from './pages/Compose';

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
          </Routes>
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
