import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import { useRegister } from '../../hooks/use-register';
import { validate } from './validate';

import { RegistrationFormFields } from '../../constants/form-fields/registration-form-fields';

import type { RegistrationForm } from '../../types/forms/registration-form';

import './registration-page.css';

export const RegistrationPage = (): JSX.Element => {
  const [response, register] = useRegister();
  const initialValues: RegistrationForm = {
    email: '',
    password: '',
    username: '',
  };

  const onSubmit = (values: RegistrationForm, { setSubmitting }: FormikHelpers<RegistrationForm>) => {
    register(values, setSubmitting);
  };

  return (
    <div className='registration-page'>
      <Formik validate={validate} onSubmit={onSubmit} initialValues={initialValues}>
        {({ isSubmitting, isValid, dirty }) => (
          <Form className='registration-form'>
            <h1>login</h1>
            {RegistrationFormFields.map(({ name, type, placeholder, errorComponentName }) => (
              <div key={name} className='registration-field-block'>
                <Field type={type} name={name} placeholder={placeholder} />
                <ErrorMessage component={errorComponentName} name={name} />
              </div>
            ))}
            <button disabled={isSubmitting || !(isValid && dirty)} className='submit-button' type='submit'>
              Login
            </button>
            <span className='registration-result'>{response}</span>
          </Form>
        )}
      </Formik>
    </div>
  );
};
