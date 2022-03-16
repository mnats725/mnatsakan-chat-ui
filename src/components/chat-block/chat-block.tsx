import TextareaAutosize from 'react-textarea-autosize';

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

  return (
    <div className='chat-block'>
      <Header name='kirill' onlineStatus='21:20' />
      <Messages messages={messages} currentUserId={userId} />
      <div className='message-input-field-block'>
        <TextareaAutosize minRows={1} maxRows={5} placeholder='Введите сообщение...' />
      </div>
    </div>
  );
};
