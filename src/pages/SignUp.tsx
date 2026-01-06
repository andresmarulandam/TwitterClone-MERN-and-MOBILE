import { Button, Form } from 'react-bootstrap';

export default function SignUp() {
  return (
    <>
      <h1 className="fs-4 m-3 fw-bolder">Sign up</h1>

      <Form>
        <h2 className="fs-5 my-4 mx-3">Personal information</h2>
        <Form.Group className="m-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="m-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="m-3">
          <Form.Label>Biography</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder="About you" />
        </Form.Group>

        <Form.Group className="m-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>

        <h2 className="fs-5 my-4 mx-3">Login information</h2>

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
