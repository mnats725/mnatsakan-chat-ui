import './user-list-item.css';

type UserListItemArgs = {
  userName: string;
  messageDate: string;
  messageText: string;
};

export const UserListItem = ({ userName, messageDate, messageText }: UserListItemArgs): JSX.Element => (
  <li>
    <img src='' alt='user avatar' />
    <div className='message-info-block'>
      <div className='message-title-block'>
        <h4 className='user-name'>{userName}</h4>
        <p className='message-date'>{messageDate}</p>
      </div>
      <p className='message-text'>{messageText}</p>
    </div>
  </li>
);
