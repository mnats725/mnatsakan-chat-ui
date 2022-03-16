import { useState, useEffect } from 'react';
import { addDoc, onSnapshot, QuerySnapshot, collection, CollectionReference, query, orderBy } from 'firebase/firestore';

import { firebaseStore } from '../firebase';

import type { FirebaseMessage } from '../types/firebase-message';

type UseFirestore = [FirebaseMessage[] | undefined, (document: FirebaseMessage) => void];

export const useMessages = (path: string): UseFirestore => {
  const chatReference = collection(firebaseStore, path) as CollectionReference<FirebaseMessage>;
  const [messages, setMessages] = useState<FirebaseMessage[]>([]);

  const sendNewMessageToFirebase = (message: FirebaseMessage) => {
    addDoc(chatReference, message).catch((reason) => console.log(reason));
  };

  const onSetMessages = (chat: QuerySnapshot<Omit<FirebaseMessage, 'id'>>) => {
    const messagesData = chat.docs.map<FirebaseMessage>((message) => ({ id: message.id, ...message.data() }));

    setMessages(messagesData);
  };

  useEffect(() => {
    const chatQueryWithSort = query(chatReference, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(chatQueryWithSort, { next: (chat) => onSetMessages(chat) });

    return () => unsubscribe();
  }, [path]);

  return [messages, sendNewMessageToFirebase];
};
