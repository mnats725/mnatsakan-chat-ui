import { KeyboardEvent, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Timestamp } from 'firebase/firestore';

import { Header } from './header';
import { Messages } from './messages';

import { useMessages } from '../../hooks/use-messages';

import type { UserInformation } from '../../types/user-information';

import './chat-block.css';

type ChatBlockArgs = {
  userInformaion: UserInformation;
  chatId: string;
};

export const ChatBlock = ({ userInformaion: { userId, username }, chatId }: ChatBlockArgs): JSX.Element => {
  const [messages, sendMessage] = useMessages(chatId);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const onSendMessage = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.shiftKey === false && textAreaRef.current) {
      event.preventDefault();

      sendMessage({ username, userId, text: event.currentTarget.value, timestamp: Timestamp.fromDate(new Date()) });

      textAreaRef.current.value = '';
    }
  };

  return (
    <div className='chat-block'>
      <Header name={chatId} onlineStatus='21:20' />
      <Messages messages={messages} currentUserId={userId} />
      <div className='message-input-field-block'>
        <TextareaAutosize
          ref={textAreaRef}
          onKeyDown={onSendMessage}
          minRows={1}
          maxRows={5}
          placeholder='Введите сообщение...'
        />
      </div>
    </div>
  );
};
