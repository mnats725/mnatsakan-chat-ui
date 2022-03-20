import type { FormField } from '../../types/form-field';
import type { RegistrationForm } from '../../types/forms/registration-form';

export const RegistrationFormFields: FormField<RegistrationForm>[] = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Почта',
    errorComponentName: 'span',
  },
  {
    name: 'username',
    type: 'text',
    placeholder: 'Логин',
    errorComponentName: 'span',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
    errorComponentName: 'span',
  },
];
