import React, { useState } from 'react';

import { UserInfoMenu } from '../user-info-menu';

import type { UserMessage } from '../../../types/user-message';

import './search-block.css';

type SearchBlockArgs = {
  defaultMessages: UserMessage[];
  setMessages: (messages: UserMessage[]) => void;
};

export const SearchBlock = ({ defaultMessages, setMessages }: SearchBlockArgs): JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    const filteredMessages = defaultMessages.filter(({ messageText }) => {
      return messageText.toLowerCase().includes(searchValue.toLowerCase());
    });

    setMessages(filteredMessages);
  };

  const onMenuShow = (event: React.MouseEvent) => {
    event.stopPropagation();

    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className='search-block'>
      <button type='button' className='user-menu-button' onClick={onMenuShow}>
        <span />
      </button>
      <input onChange={onSearch} className='search-input' type='text' placeholder='Искать здесь...' />

      {isMenuVisible && <UserInfoMenu setVisible={setIsMenuVisible} />}
    </div>
  );
};
