import { useState } from 'react';

import { UserListBlock } from '../../components/user-list-block';
import { ChatBlock } from '../../components/chat-block';

import { useChats } from '../../hooks/use-chats';

import type { UserInformation } from '../../types/user-information';

import './chat-page.css';

type ChatPageArgs = {
  userInformation: UserInformation | undefined;
};

export const ChatPage = ({ userInformation }: ChatPageArgs): JSX.Element => {
  const [currentChatId, setCurrentChatId] = useState('');
  const chats = useChats();

  return (
    <div className='chat-page'>
      <UserListBlock setCurrentChatId={setCurrentChatId} chats={chats} />
      {currentChatId && userInformation ? <ChatBlock chatId={currentChatId} userInformaion={userInformation} /> : null}
    </div>
  );
};
