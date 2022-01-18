import { UserListBlock } from '../../components/user-list-block';

import './chat-page.css';

export const ChatPage = (): JSX.Element => (
  <div className='chat-page'>
    <UserListBlock />
    <div className='chat-block'>Chat</div>
  </div>
);
