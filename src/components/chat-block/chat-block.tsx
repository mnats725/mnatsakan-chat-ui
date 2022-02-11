import TextareaAutosize from 'react-textarea-autosize';

import { Header } from './header';

import './chat-block.css';

export const ChatBlock = (): JSX.Element => (
  <div className='chat-block'>
    <Header />
    <div className='message-input-field-block'>
      <TextareaAutosize minRows={1} maxRows={5} placeholder='Введите сообщение...' />
    </div>
  </div>
);
