import Nav from 'react-bootstrap/Nav';
import NavItem from './NavItem';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
  return (
    <nav>
      <Nav defaultActiveKey="/home" className="flex-column fs-5">
        <NavItem icon="twitter" className="fs-2" />
        <NavItem icon="house-door-fill" href="/home" label="Home" />
        <NavItem icon="hash" href="/" label="Explore" />
        <NavItem icon="bell" href="/" label="Notifications" />
        <NavItem icon="envelope" href="/" label="Messages" />
        <NavItem icon="card-list" href="/" label="Lists" />
        <NavItem icon="bookmark" href="/" label="Bookmarks" />
        <NavItem icon="twitter" href="/" label="Twitter Blue" />
        <NavItem icon="person" href="/" label="Profile" />

        <div className="d-flex">
          <Button className="rounded-pill flex-grow-1 m-3 p-2 fs-4">
            Tweet
          </Button>
        </div>
      </Nav>
    </nav>
  );
}
