import type { LoginFormValues } from './login-form-values';

export type RegistrationFormValues = LoginFormValues & {
  username: string;
};
