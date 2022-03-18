import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { firebaseConfiguration } from './firebase-configuration';

const firebaseApp = initializeApp(firebaseConfiguration);

export const firebaseStore = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
