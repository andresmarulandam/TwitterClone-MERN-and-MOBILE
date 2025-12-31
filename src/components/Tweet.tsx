import { Col, Container, Image, Row } from 'react-bootstrap';

export default function Tweet() {
  return (
    <Container fluid className=" pt-2 border-top border-bottom">
      <Row>
        <Col md={1} className="pt-1">
          <div>
            <Image src="https://placehold.co/50x50" roundedCircle />
          </div>
        </Col>

        <Col>
          <div>
            <header className="d-flex w-100 justify-content-between">
              <div className="d-flex gap-1 ">
                <strong>Andrés Marulanda</strong>
                <span className="text-secondary">@andresmarulandam</span>
                <div className="text-secondary">
                  <i className="bi bi-dot"></i>
                </div>
                <span className="text-secondary">11h</span>
              </div>
              <div>
                <i className="bi bi-three-dots text-secondary"></i>
              </div>
            </header>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
            culpa. Tempore cumque quo explicabo cum sapiente adipisci nisi natus
            ex maxime, harum id pariatur quis error, nostrum aut odit
            doloremque.
          </p>
          <footer className="d-flex w-100 justify-content-between">
            <div className="d-flex gap-2 pb-2 text-secondary">
              <i className="bi bi-chat"></i>
              144
            </div>
            <div className="d-flex gap-2 pb-2 text-secondary">
              <i className="bi bi-repeat"></i>
              1,448
            </div>
            <div className="d-flex gap-2 pb-2 text-secondary">
              <i className="bi bi-heart"></i>
              5,642
            </div>
            <div className="d-flex gap-2 pb-2 text-secondary">
              <i className="bi bi-bar-chart"></i>
              1,3M
            </div>
            <div className="d-flex gap-2 pb-2 pe-5 text-secondary">
              <i className="bi bi-upload"></i>
            </div>
          </footer>
        </Col>
      </Row>
    </Container>
  );
}
