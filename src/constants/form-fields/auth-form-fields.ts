import type { FormField } from '../../types/form-field';
import type { AuthForm } from '../../types/forms/auth-form';

export const AuthFormFields: FormField<AuthForm>[] = [
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
