import Nav from 'react-bootstrap/Nav';
import NavItem from './NavItem';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
  const user = null;
  return (
    <nav>
      <Nav
        defaultActiveKey="/home"
        className="flex-column fs-5 align-items-start"
      >
        <NavItem
          icon="twitter"
          className="fs-2 mt-2"
          iconStyle={{ color: '#1DA1F2' }}
          to="/home"
        />
        <NavItem icon="house-door-fill" to="/home" label="Home" />
        <NavItem icon="hash" to="/" label="Explore" />
        {user && (
          <>
            <NavItem icon="bell" to="/" label="Notifications" />
            <NavItem icon="envelope" to="/" label="Messages" />
            <NavItem icon="card-list" to="/" label="Lists" />
            <NavItem icon="bookmark" to="/" label="Bookmarks" />
            <NavItem icon="twitter" to="/" label="Twitter Blue" />
            <NavItem icon="person" to="/" label="Profile" />

            <div className="d-flex align-self-stretch ">
              <Button className="rounded-pill flex-grow-1 m-3 p-2 fs-4 text-white">
                Tweet
              </Button>
            </div>
          </>
        )}
      </Nav>
    </nav>
  );
}
