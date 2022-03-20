import type { UserInformation } from '../user-information';

export type RegistrationForm = Omit<UserInformation, 'userId'> & {
  password: string;
};
