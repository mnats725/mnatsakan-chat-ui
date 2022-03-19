import type { UserInformation } from '../user-information';

export type AuthForm = Omit<UserInformation, 'userId'> & {
  password: string;
};
