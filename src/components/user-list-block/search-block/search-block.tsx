import React, { useState } from 'react';

import { UserInfoMenu } from '../user-info-menu';

import type { FirebaseMessage } from '../../../types/firebase-message';

import './search-block.css';

type SearchBlockArgs = {
  defaultChats: FirebaseMessage[] | undefined;
  setChats: (messages: FirebaseMessage[]) => void;
};

export const SearchBlock = ({ defaultChats, setChats }: SearchBlockArgs): JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
    if (!defaultChats) return;

    const searchValue = event.currentTarget.value;
    const filteredMessages = defaultChats.filter(({ text }) => {
      return text.toLowerCase().includes(searchValue.toLowerCase());
    });

    setChats(filteredMessages);
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
