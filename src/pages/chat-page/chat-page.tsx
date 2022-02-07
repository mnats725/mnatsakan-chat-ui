import { UserListBlock } from '../../components/user-list-block';
import { ChatBlock } from '../../components/chat-block';

import './chat-page.css';

export const ChatPage = (): JSX.Element => (
  <div className='chat-page'>
    <UserListBlock />
    <ChatBlock />
  </div>
);
