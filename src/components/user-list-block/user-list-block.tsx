import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import { UserListItem } from './user-list-item';
import { SearchBlock } from './search-block';

import type { FirebaseMessage } from '../../types/firebase-message';

import './user-list-block.css';

type UserListBlockArgs = {
  setCurrentChatId: (chatId: string) => void;
  chats: FirebaseMessage[] | undefined;
};

export const UserListBlock = ({ chats, setCurrentChatId }: UserListBlockArgs): JSX.Element => {
  const [filteredChats, setFilteredChats] = useState(chats);

  useEffect(() => {
    if (chats) {
      setFilteredChats(chats);
    }
  }, [chats]);

  return (
    <div className='user-list-block'>
      <SearchBlock defaultChats={chats} setChats={setFilteredChats} />
      <ul className='user-list'>
        {filteredChats?.map(({ name, text, timestamp, id }) => (
          <UserListItem
            setCurrentChatId={setCurrentChatId}
            chatId={id}
            key={id}
            userName={name}
            messageDate={format(timestamp.toDate(), 'HH:mm')}
            messageText={text}
          />
        ))}
      </ul>
    </div>
  );
};
