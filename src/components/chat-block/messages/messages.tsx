import { format } from 'date-fns';
import classNames from 'classnames';

import type { FirebaseMessage } from '../../../types/firebase-message';

import './messages.css';

type MessagesArgs = {
  currentUserId: string;
  messages: FirebaseMessage[] | undefined;
};

export const Messages = ({ currentUserId, messages }: MessagesArgs): JSX.Element => (
  <ul className='messages-block'>
    {messages?.map((message) => (
      <li className={classNames({ 'is-current-user': currentUserId === message.userId })} key={message.id}>
        <p className='message-username'>{message.username}</p>
        <div className='message-wrapper'>
          <p className='message-text'>{message.text}</p>
          <span className='message-time'>{format(message.timestamp.toDate(), 'HH:mm')}</span>
        </div>
      </li>
    ))}
  </ul>
);
