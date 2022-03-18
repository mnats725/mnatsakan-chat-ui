import { useState, useEffect } from 'react';
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth';

import { firebaseAuth } from '../firebase';

export const useAuth = (): string | undefined => {
  const [userId, setUserId] = useState<string>();

  useEffect(() => {
    signInAnonymously(firebaseAuth);
    onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        return;
      }

      setUserId(user.uid);
    });
  }, []);

  return userId;
};
