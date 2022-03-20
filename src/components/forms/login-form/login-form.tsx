import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import { LOGIN_FORM_FIELDS } from '../../../constants/form-fields/login-form-fields';

import { useRegister } from '../../../hooks/use-register';
import { validate } from './validate';

import type { LoginFormValues } from '../../../types/forms/login-form-values';

import '../auth-form.css';

export const LoginForm = (): JSX.Element => {
  const [response, register] = useRegister();
  const initialValues: LoginFormValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
    // register(values, setSubmitting);
  };

  return (
    <Formik validate={validate} onSubmit={onSubmit} initialValues={initialValues}>
      {({ isSubmitting, isValid, dirty }) => (
        <Form className='auth-form'>
          <h1>Авторизация</h1>
          {LOGIN_FORM_FIELDS.map(({ name, type, placeholder }) => (
            <div key={name} className='auth-field-block'>
              <Field type={type} name={name} placeholder={placeholder} />
              <ErrorMessage component='span' name={name} />
            </div>
          ))}
          <button disabled={isSubmitting || !(isValid && dirty)} className='submit-button' type='submit'>
            Авторизоваться
          </button>
          <span className='auth-result'>{response}</span>
        </Form>
      )}
    </Formik>
  );
};
