import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

import { Loading } from '../../loading';

import { REGISTRATION_FORM_FIELDS } from '../../../constants/form-fields/registration-form-fields';

import { useRegister } from '../../../hooks/use-register';
import { validate } from './validate';

import type { RegistrationFormValues } from '../../../types/forms/registration-form-values';

import '../auth-form.css';

export const RegistrationForm = (): JSX.Element => {
  const [response, register] = useRegister();
  const initialValues: RegistrationFormValues = {
    email: '',
    password: '',
    username: '',
  };

  const onSubmit = (values: RegistrationFormValues, { setSubmitting }: FormikHelpers<RegistrationFormValues>) => {
    register(values, setSubmitting);
  };

  return (
    <Formik validate={validate} onSubmit={onSubmit} initialValues={initialValues}>
      {({ isSubmitting, isValid, dirty }) => (
        <Form className='auth-form'>
          <h1>Регистрация</h1>
          {REGISTRATION_FORM_FIELDS.map(({ name, type, placeholder }) => (
            <div key={name} className='auth-field-block'>
              <Field type={type} name={name} placeholder={placeholder} />
              <ErrorMessage name={name} />
            </div>
          ))}
          <button disabled={isSubmitting || !(isValid && dirty)} className='submit-button' type='submit'>
            Зарегистрироваться
          </button>
          <span className='auth-result'>{response}</span>

          {isSubmitting && <Loading />}
        </Form>
      )}
    </Formik>
  );
};
