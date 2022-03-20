import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, DocumentReference } from 'firebase/firestore';

import { firebaseAuth, firebaseStore } from '../firebase';

import type { UserInformation } from '../types/user-information';

type UseAuth = {
  userInformation: UserInformation | undefined;
  isLoading: boolean;
};

export const useAuth = (): UseAuth => {
  const [userInformation, setUserInformation] = useState<UserInformation>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        setUserInformation(undefined);
        setIsLoading(false);
        return;
      }

      getDoc(doc(firebaseStore, 'users', user.uid) as DocumentReference<UserInformation>)
        .then((userDocument) => setUserInformation(userDocument.data()))
        .finally(() => setIsLoading(false));
    });

    return () => unsubscribe();
  }, []);

  return { userInformation, isLoading };
};
