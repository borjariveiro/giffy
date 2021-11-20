import React from "react";
import register from 'services/register'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from "wouter";


const initialValues = { username: '', password: '' }

const validateFields = values => {
  const errors = {}

  if (values.username) {
    errors.username = 'Required username'
  }

  if (values.password) {
    errors.password = 'Required password'
  } else if (values.password.length < 3) {
    errors.password = 'Length must be greater than 3'
  }
}

const handleSubmit = (values, { setFieldError }) => {
  return register(values)
    .catch(() => {
      setFieldError('username', 'This username is not valid')
    })
}

export default function Register() {

  return <>
    <Formik
      initialValues={initialValues}
      validate={validateFields}
      onSubmit={handleSubmit}
    >
      {
        ({ isSubmitting, errors }) =>
          <>
            <div className="Form-sign-container">
              <Form className="Form-sign">
                <label htmlFor="username">Username</label>
                <Field
                  className={errors.username ? 'error' : ''}
                  name="username"
                  placeholder="Username"
                />
                <ErrorMessage className="form-error" name='username' component='small' />
                <label htmlFor="password">Password</label>
                <Field
                  className={errors.password ? 'error' : ''}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage className="form-error" name='password' component='small' />

                <button type="submit" className="button" disabled={isSubmitting}>Register</button>
              </Form>
            </div>
            <div className="Form-linkSingUp">
              <span>Have an account? <Link href="/login">Sign in</Link></span>
            </div>
          </>
      }
    </Formik>
  </>
}
