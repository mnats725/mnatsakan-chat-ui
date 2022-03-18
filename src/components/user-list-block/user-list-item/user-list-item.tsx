import { MouseEvent } from 'react';

import mnatsAvatar from './assets/user-logo3.jpg';

import './user-list-item.css';

type UserListItemArgs = {
  onClick: (event: MouseEvent) => void;
  userName: string;
  messageDate: string;
  messageText: string;
  avatar?: string;
};

export const UserListItem = ({
  onClick,
  userName,
  messageDate,
  messageText,
  avatar,
}: UserListItemArgs): JSX.Element => (
  <li aria-hidden onClick={onClick} className='user-list-item'>
    <img src={avatar || mnatsAvatar} alt='user avatar' className='unselectable' />
    <div className='message-info-block'>
      <div className='message-title-block'>
        <h4 className='user-name'>{userName}</h4>
        <p className='message-date'>{messageDate}</p>
      </div>
      <p className='message-text'>{messageText}</p>
    </div>
  </li>
);
