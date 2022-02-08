import { useState } from 'react';

import { UserListItem } from './user-list-item';

import { MOCK_USER_MESSAGES } from '../../constants/mock-user-messages';

import './user-list-block.css';

export const UserListBlock = (): JSX.Element => {
  const [userMessages, setUserMessages] = useState(MOCK_USER_MESSAGES);

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    const filteredMessages = MOCK_USER_MESSAGES.filter(({ messageText }) => {
      return messageText.toLowerCase().includes(searchValue.toLowerCase());
    });

    setUserMessages(filteredMessages);
  };

  return (
    <div className='user-list-block'>
      <div className='search-block'>
        <input onChange={onSearch} className='search-input' type='text' placeholder='Искать здесь...' />
      </div>
      <ul className='user-list'>
        {userMessages.map(({ userName, messageDate, messageText, avatar }, index) => (
          <UserListItem
            key={index.toString()}
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
