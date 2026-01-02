import { Button } from 'react-bootstrap';
import Profile from './Profile';

export default function Account() {
  const user = null;
  return user ? (
    <Profile />
  ) : (
    <div className="d-flex">
      <div className="d-flex flex-grow-1 flex-column">
        <h2 className="fs-5">New on Twitter?</h2>
        <Button className="rounded-pill flex-grow-1 m-3 p-2 fs-6">
          Sign Up
        </Button>

        <h2 className="fs-5">Already have an account?</h2>
        <Button
          variant="secondary"
          className="rounded-pill flex-grow-1 m-3 p-2 fs-6"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
