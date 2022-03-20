import type { FormField } from '../../types/form-field';
import type { RegistrationFormValues } from '../../types/forms/registration-form-values';

export const REGISTRATION_FORM_FIELDS: FormField<RegistrationFormValues>[] = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Почта',
  },
  {
    name: 'username',
    type: 'text',
    placeholder: 'Логин',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
  },
];
