import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation />
        </Col>
        <Col md={6} className="border-start border-end">
          2 of 3
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}
