import DropdownButton from 'react-bootstrap/DropdownButton';
import User from './User';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Profile() {
  return (
    <User className="mx-3">
      <DropdownButton
        drop="up"
        variant=""
        title={<i className="bi bi-three-dots"></i>}
      >
        <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
        <Dropdown.Item eventKey="2">Security & Password</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="3">Sign Out</Dropdown.Item>
      </DropdownButton>
    </User>
  );
}
