import { format } from 'date-fns';

import type { FirebaseMessage } from '../../../types/firebase-message';

import './messages.css';

type MessagesArgs = {
  messages: FirebaseMessage[] | undefined;
};

export const Messages = ({ messages }: MessagesArgs): JSX.Element => (
  <ul className='messages-block'>
    {messages?.map((message) => (
      <li key={message.id}>
        <p className='message-username'>{message.name}</p>
        <div className='message-wrapper'>
          <p className='message-text'>{message.text}</p>
          <span className='message-time'>{format(message.timestamp.toDate(), 'HH:mm')}</span>
        </div>
      </li>
    ))}
  </ul>
);
