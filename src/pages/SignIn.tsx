import { ErrorMessage, Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

const signInSchema = z.object({
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

type SignInValues = z.infer<typeof signInSchema>;

export default function SignIn() {
  const initialValues: SignInValues = {
    email: '',
    password: '',
  };
  return (
    <>
      <h1 className="fs-4 m-3 fw-bolder">Sign in</h1>
      <Formik<SignInValues>
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log('values:', values);
          setSubmitting(false);
        }}
        validationSchema={toFormikValidationSchema(signInSchema)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          dirty,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="m-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
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
              disabled={isSubmitting || !isValid || !dirty}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
