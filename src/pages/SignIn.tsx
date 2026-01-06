import { Button, Form } from 'react-bootstrap';

export default function SignIn() {
  return (
    <>
      <h1 className="fs-4 m-3 fw-bolder">Sign in</h1>

      <Form>
        <Form.Group className="m-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="m-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" className="rounded-pill m-3 px-4 text-white">
          Submit
        </Button>
      </Form>
    </>
  );
}
