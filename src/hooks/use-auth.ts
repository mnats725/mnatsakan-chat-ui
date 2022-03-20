import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, DocumentReference, DocumentSnapshot } from 'firebase/firestore';

import { firebaseAuth, firebaseStore } from '../firebase';

import type { UserInformation } from '../types/user-information';

type UseAuth = [userInformation: UserInformation | undefined, isLoading: boolean];

export const useAuth = (): UseAuth => {
  const [userInformation, setUserInformation] = useState<UserInformation>();
  const [isLoading, setIsLoading] = useState(true);

  const onAuthed = (userDocument: DocumentSnapshot<UserInformation>) => {
    setUserInformation(userDocument.data());
    setIsLoading(false);
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) return;

      getDoc(doc(firebaseStore, 'users', user.uid) as DocumentReference<UserInformation>).then(onAuthed);
    });
  }, []);

  return [userInformation, isLoading];
};
