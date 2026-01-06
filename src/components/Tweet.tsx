import { Col, Container, Image, Row } from 'react-bootstrap';
import { formatNumber } from '../utils/utils';

interface TweetProps {
  createdAt: string;
  content: string;
  name: string;
  photo: string;
  username: string;
  statistics: StatisticsTweetProps;
}

interface StatisticsTweetProps {
  commentsCount: number;
  retweetsCount: number;
  likesCount: number;
  viewsCount: number;
}

export default function Tweet({
  createdAt,
  name = 'Andrés Marulanda',
  photo = 'https://placehold.co/50x50',
  username = 'andresmarulandam',
  content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui quidem blanditiis nobis laboriosam? Obcaecati modi laborum explicabo nihil ipsam pariatur? Explicabo ratione eos a ex dolor earum doloremque saepe!',
  statistics = {
    commentsCount: 2332,
    retweetsCount: 0,
    likesCount: 12345678,
    viewsCount: 0,
  },
}: TweetProps) {
  const { commentsCount, retweetsCount, likesCount, viewsCount } = statistics;

  return (
    <Container fluid className=" pt-2 border-top border-bottom">
      <Row>
        <Col md={1} className="pt-1">
          <div>
            <Image src={photo} roundedCircle />
          </div>
        </Col>

        <Col>
          <div>
            <header className="d-flex w-100 justify-content-between">
              <div className="d-flex gap-1 ">
                <strong>{name}</strong>
                <span className="text-secondary">@{username}</span>
                <div className="text-secondary">
                  <i className="bi bi-dot"></i>
                </div>
                <span className="text-secondary">{createdAt}</span>
              </div>
              <div>
                <i className="bi bi-three-dots text-secondary"></i>
              </div>
            </header>
          </div>
          <div>{content}</div>
          <footer className="d-flex w-100 justify-content-between">
            <div className="d-flex gap-2 pb-2  text-secondary">
              <i className="bi bi-chat"></i>
              {formatNumber(commentsCount)}
            </div>
            <div className="d-flex gap-2 pb-2 text-secondary">
              <i className="bi bi-repeat"></i>
              {formatNumber(retweetsCount)}
            </div>
            <div className="d-flex gap-2 pb-2 text-secondary">
              <i className="bi bi-heart"></i>
              {formatNumber(likesCount)}
            </div>
            <div className="d-flex gap-2 pb-2 text-secondary">
              <i className="bi bi-bar-chart"></i>
              {formatNumber(viewsCount)}
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
