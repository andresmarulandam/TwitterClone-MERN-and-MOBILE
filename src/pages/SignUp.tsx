import { ErrorMessage, Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const signUpSchema = z.object({
  name: z
    .string({ error: 'Name is required' })
    .min(1, { error: 'Name cannot be empty' })
    .max(50, { error: 'Maximum 50 characters' }),
  username: z
    .string({ error: 'Username is required' })
    .min(3, { error: 'Minimum 3 characters' })
    .max(30, { error: 'Maximum 30 characters' })
    .regex(/^[a-zA-Z0-9_]+$/, {
      error: 'Only letters, numbers and underscore ',
    }),
  biography: z
    .string()
    .max(160, { error: 'Maximum 160 characters' })
    .optional(),
  location: z.string().max(30, { error: 'Maximun 30 characters' }).optional(),
  email: z
    .string({ error: 'Email is required' })
    .min(1, { error: 'email cannot be empty' })
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      error: 'Invalid email',
    }),
  password: z
    .string({ error: 'Password is required' })
    .min(6, { error: 'Minimum 6 characters' })
    .max(16, { error: 'Maximum 16 characters' }),
});

type SignUpValues = z.infer<typeof signUpSchema>;

export default function SignUp() {
  const initialValues: SignUpValues = {
    name: '',
    username: '',
    biography: '',
    location: '',
    email: '',
    password: '',
  };
  return (
    <>
      <h1 className="fs-4 m-3 fw-bolder">Sign up</h1>
      <Formik<SignUpValues>
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values:', values);
          setSubmitting(false);
        }}
        validationSchema={toFormikValidationSchema(signUpSchema)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <h2 className="fs-5 my-4 mx-3">Personal information</h2>
            <Form.Group className="m-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.name && errors.name ? 'is-invalid' : ''}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="m-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.username && errors.username ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="username"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="m-3">
              <Form.Label>Biography</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="About you"
                name="biography"
                value={values.biography}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="biography"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="m-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="location"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <h2 className="fs-5 my-4 mx-3">Login information</h2>

            <Form.Group className="m-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? 'is-invalid' : ''}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Form.Group className="m-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.password && errors.password ? 'is-invalid' : ''
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="rounded-pill m-3 px-4 text-white"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
