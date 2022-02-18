import { useState } from 'react';

import './header.css';

type HeaderArgs = {
  name: string;
  onlineStatus: string;
};

export const Header = ({ name, onlineStatus }: HeaderArgs): JSX.Element => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const onShowMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className='chat-header'>
      <div className='user-information-block'>
        <p className='username'>{name}</p>
        <p className='online-status'>{onlineStatus}</p>
      </div>
      <div className='chat-menu-block'>
        <button type='button' className='chat-menu-button' onClick={onShowMenu}>
          <span />
        </button>
        {isMenuVisible && (
          <menu className='chat-menu'>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
          </menu>
        )}
      </div>
    </header>
  );
};
