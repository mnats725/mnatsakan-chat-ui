import type { FormField } from '../../types/form-field';
import type { LoginFormValues } from '../../types/forms/login-form-values';

export const LOGIN_FORM_FIELDS: FormField<LoginFormValues>[] = [
  {
    name: 'email',
    type: 'text',
    placeholder: 'Почта',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Пароль',
  },
];
