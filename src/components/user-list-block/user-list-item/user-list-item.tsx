import './user-list-item.css';

type UserListItemArgs = {
  userName: string;
  messageDate: string;
  messageText: string;
  avatar: string;
};

export const UserListItem = ({ userName, messageDate, messageText, avatar }: UserListItemArgs): JSX.Element => (
  <li className='user-list-item'>
    <img src={avatar} alt='user avatar' className='unselectable' />
    <div className='message-info-block'>
      <div className='message-title-block'>
        <h4 className='user-name'>{userName}</h4>
        <p className='message-date'>{messageDate}</p>
      </div>
      <p className='message-text'>{messageText}</p>
    </div>
  </li>
);
