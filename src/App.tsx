import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Tweet from './components/Tweet';
import Create from './components/Create';
import Account from './components/Account';

export default function App() {
  const user = null;
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col className="d-flex flex-column">
          <Navigation />
          <div className="my-auto">
            <Account />
          </div>
        </Col>
        <Col md={6} className="px-0 border-start border-end">
          <h1 className="fs-4 m-2">Home</h1>
          {user && <Create />}
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </Col>
        <Col>
          <Aside />
        </Col>
      </Row>
    </Container>
  );
}
