import type { Timestamp } from 'firebase/firestore';

export type FirebaseMessage = {
  id: string;
  name: string;
  text: string;
  timestamp: Timestamp;
};
