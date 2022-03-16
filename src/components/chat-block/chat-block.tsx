import TextareaAutosize from 'react-textarea-autosize';

import { Header } from './header';
import { Messages } from './messages';

import { useMessages } from '../../hooks/use-messages';

import './chat-block.css';

export const ChatBlock = (): JSX.Element => {
  const [messages, sendMessage] = useMessages('chats/cwfTXCLjNCzq5udqNqb1/messages');

  return (
    <div className='chat-block'>
      <Header name='kirill' onlineStatus='21:20' />
      <Messages messages={messages} />
      <div className='message-input-field-block'>
        <TextareaAutosize minRows={1} maxRows={5} placeholder='Введите сообщение...' />
      </div>
    </div>
  );
};
