import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import User from './components/User';

export default function App() {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex flex-column">
          <Navigation />
          <div className="my-auto">
            <User />
          </div>
        </Col>
        <Col md={6} className="border-start border-end">
          2 of 3
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}
