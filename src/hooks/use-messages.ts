import { useState, useEffect } from 'react';
import { addDoc, onSnapshot, QuerySnapshot, collection, CollectionReference, query, orderBy } from 'firebase/firestore';

import { firebaseStore } from '../firebase';

import type { FirebaseMessage } from '../types/firebase-message';

type UseFirestore = [FirebaseMessage[] | undefined, (document: Omit<FirebaseMessage, 'id'>) => void];

export const useMessages = (chatId: string): UseFirestore => {
  const messagesReference = collection(
    firebaseStore,
    `chats/${chatId}/messages`
  ) as CollectionReference<FirebaseMessage>;
  const [newMessages, setNewMessages] = useState<FirebaseMessage[]>([]);

  const sendNewMessageToFirebase = (message: Omit<FirebaseMessage, 'id'>) => {
    addDoc(messagesReference, message).catch((reason) => console.log(reason));
  };

  const onSetMessages = (messages: QuerySnapshot<Omit<FirebaseMessage, 'id'>>) => {
    const messagesData = messages.docs.map<FirebaseMessage>((message) => ({ id: message.id, ...message.data() }));

    setNewMessages(messagesData);
  };

  useEffect(() => {
    const messagesQueryWithSort = query(messagesReference, orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(messagesQueryWithSort, { next: (messages) => onSetMessages(messages) });

    return () => unsubscribe();
  }, [chatId]);

  return [newMessages, sendNewMessageToFirebase];
};
