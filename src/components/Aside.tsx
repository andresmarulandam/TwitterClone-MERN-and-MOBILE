import { Form } from 'react-bootstrap';
import Follow from './Follow';
import Account from './Account';
import { useContext } from 'react';
import UserContext from '../containers/UserContext';

export default function Aside() {
  const { user } = useContext(UserContext);
  return (
    <aside>
      {user ? (
        <>
          <Form.Control
            type="search"
            placeholder="Search twitter"
            className="my-3 rounded-pill "
          />
          <div className="bg-light rounded py-2">
            <h2 className="fs-5 m-3 fw-semibold"> Who to follow</h2>
            <Follow />
            <Follow />
            <Follow />
            <Follow />
          </div>
        </>
      ) : (
        <Account />
      )}
    </aside>
  );
}
