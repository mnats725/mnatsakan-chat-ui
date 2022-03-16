import { useState } from 'react';

import { UserListItem } from './user-list-item';
import { SearchBlock } from './search-block';

import { MOCK_USER_MESSAGES } from '../../constants/mock-user-messages';

import './user-list-block.css';

export const UserListBlock = (): JSX.Element => {
  const [userMessages, setUserMessages] = useState(MOCK_USER_MESSAGES);

  return (
    <div className='user-list-block'>
      <SearchBlock defaultMessages={MOCK_USER_MESSAGES} setMessages={setUserMessages} />
      <ul className='user-list'>
        {userMessages.map(({ userName, messageDate, messageText, avatar, id }) => (
          <UserListItem
            key={id}
            userName={userName}
            messageDate={messageDate}
            messageText={messageText}
            avatar={avatar}
          />
        ))}
      </ul>
    </div>
  );
};
