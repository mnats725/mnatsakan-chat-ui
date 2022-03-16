import { useState } from 'react';

import { UserListBlock } from '../../components/user-list-block';
import { ChatBlock } from '../../components/chat-block';

import { useChats } from '../../hooks/use-chats';
import { useAuth } from '../../hooks/use-auth';

import './chat-page.css';

export const ChatPage = (): JSX.Element => {
  const [currentChatId, setCurrentChatId] = useState('');
  const chats = useChats();
  const userId = useAuth();

  return (
    <div className='chat-page'>
      <UserListBlock setCurrentChatId={setCurrentChatId} chats={chats} />
      {currentChatId && userId ? <ChatBlock chatId={currentChatId} userId={userId} /> : null}
    </div>
  );
};
