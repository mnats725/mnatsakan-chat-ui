import { UserListItem } from './user-list-item';

import { MOCK_USER_MESSAGES } from '../../constants/mock-user-messages';

import './user-list-block.css';

export const UserListBlock = (): JSX.Element => (
  <div className='user-list-block'>
    <div className='search-block'>
      <input className='search-input' type='text' placeholder='Искать здесь...' />
    </div>
    <ul className='user-list'>
      {MOCK_USER_MESSAGES.map(({ userName, messageDate, messageText }) => (
        <UserListItem key={userName} userName={userName} messageDate={messageDate} messageText={messageText} />
      ))}
    </ul>
  </div>
);
