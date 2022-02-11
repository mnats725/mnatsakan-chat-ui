import { Header } from './header';
import { InputField } from './input-field';

import './chat-block.css';

export const ChatBlock = (): JSX.Element => (
  <div className='chat-block'>
    <Header name='kirill' onlineStatus='21:20' />
    <InputField />
  </div>
);
