import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

export default function Account() {
  const navigate = useNavigate();

  function onSignIn() {
    navigate('/signin');
  }

  function onSignUp() {
    navigate('/signup');
  }

  return (
    <div className="d-flex">
      <div className="d-flex flex-grow-1 flex-column mt-3">
        <h2 className="fs-5">New on Twitter?</h2>
        <Button
          onClick={onSignUp}
          className="rounded-pill flex-grow-1 m-3 p-2 fs-6 text-white"
        >
          Sign Up
        </Button>

        <h2 className="fs-5">Already have an account?</h2>
        <Button
          variant="light"
          className="rounded-pill flex-grow-1 m-3 p-2 fs-6"
          onClick={onSignIn}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
