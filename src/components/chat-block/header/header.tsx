import { useState } from 'react';

import { ChatSettingsPopupMenu } from '../chat-settings-popup-menu';

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

      <button type='button' className='chat-menu-button' onClick={onShowMenu}>
        <span />
      </button>

      {isMenuVisible && <ChatSettingsPopupMenu setVisible={setIsMenuVisible} />}
    </header>
  );
};
