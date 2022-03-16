import { useState, useEffect } from 'react';
import { onSnapshot, QuerySnapshot, collection, CollectionReference, query, orderBy } from 'firebase/firestore';

import { firebaseStore } from '../firebase';

import type { FirebaseMessage } from '../types/firebase-message';

export const useChats = (): FirebaseMessage[] => {
  const chatReference = collection(firebaseStore, 'chats') as CollectionReference<FirebaseMessage>;
  const [newChats, setNewChats] = useState<FirebaseMessage[]>([]);

  const onSetChats = (chats: QuerySnapshot<Omit<FirebaseMessage, 'id'>>) => {
    const chatsData = chats.docs.map<FirebaseMessage>((chat) => ({ id: chat.id, ...chat.data() }));

    setNewChats(chatsData);
  };

  useEffect(() => {
    const chatQueryWithSort = query(chatReference, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(chatQueryWithSort, { next: (chats) => onSetChats(chats) });

    return () => unsubscribe();
  }, []);

  return newChats;
};
