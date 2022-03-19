import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import { useRegister } from '../../hooks/use-register';
import { validate } from './validate';

import { AuthFormFields } from '../../constants/form-fields/auth-form-fields';

import type { AuthForm } from '../../types/forms/auth-form';

import './auth-page.css';

export const AuthPage = (): JSX.Element => {
  const [response, register] = useRegister();
  const initialValues: AuthForm = {
    email: '',
    password: '',
    username: '',
  };

  const onSubmit = (values: AuthForm, { setSubmitting }: FormikHelpers<AuthForm>) => {
    register(values, setSubmitting);
  };

  return (
    <div className='auth-page'>
      <Formik validate={validate} onSubmit={onSubmit} initialValues={initialValues}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form className='auth-form'>
            <h1>login</h1>
            {AuthFormFields.map(({ name, type, placeholder, errorComponentName }) => (
              <div key={name} className='auth-field-block'>
                <Field type={type} name={name} placeholder={placeholder} />
                <ErrorMessage component={errorComponentName} name={name} />
              </div>
            ))}
            <button disabled={isSubmitting || !(isValid && dirty)} className='submit-button' type='submit'>
              Login
            </button>
            <span className='auth-result'>{response}</span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
