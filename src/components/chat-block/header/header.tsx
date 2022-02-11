import './header.css';

type HeaderArgs = {
  name: string;
  onlineStatus: string;
};

export const Header = ({ name, onlineStatus }: HeaderArgs): JSX.Element => (
  <header className='chat-header'>
    <div className='user-information-block'>
      <p className='username'>{name}</p>
      <p className='online-status'>{onlineStatus}</p>
    </div>

    <nav className='parametrs-menu'>
      <span />
      <ul className='parametrs-list'>
        <li>
          <a href='/user-profile' className='parametrs-link'>
            {/* а */}
          </a>
        </li>
        <li>
          <a href='/clear-chat' className='parametrs-link'>
            {/* d */}
          </a>
        </li>
        <li>
          <a href='/chat' className='parametrs-link'>
            {/* c */}
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
