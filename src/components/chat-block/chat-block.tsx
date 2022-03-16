import TextareaAutosize from 'react-textarea-autosize';
import { Timestamp } from 'firebase/firestore';

import { Header } from './header';
import { Messages } from './messages';

import { useMessages } from '../../hooks/use-messages';

import './chat-block.css';

type ChatBlockArgs = {
  userId: string;
  chatId: string;
};

export const ChatBlock = ({ userId, chatId }: ChatBlockArgs): JSX.Element => {
  const [messages, sendMessage] = useMessages(chatId);

  const onSendMessage = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.shiftKey === false) {
      event.preventDefault();

      sendMessage({
        userId,
        name: 'Kirill',
        text: event.currentTarget.value,
        timestamp: Timestamp.fromDate(new Date()),
      });
    }
  };

  return (
    <div className='chat-block'>
      <Header name='kirill' onlineStatus='21:20' />
      <Messages messages={messages} currentUserId={userId} />
      <div className='message-input-field-block'>
        <TextareaAutosize onKeyDown={onSendMessage} minRows={1} maxRows={5} placeholder='Введите сообщение...' />
      </div>
    </div>
  );
};
