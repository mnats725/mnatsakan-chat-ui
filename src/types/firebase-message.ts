import type { Timestamp } from 'firebase/firestore';
import type { UserInformation } from './user-information';

export type FirebaseMessage = Omit<UserInformation, 'email'> & {
  id: string;
  text: string;
  timestamp: Timestamp;
};
