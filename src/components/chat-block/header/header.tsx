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

    <div className='chat-menu-block'>
      <button type='button' className='chat-menu-button'>
        <span />
      </button>

      {
        // В будущем будет реализация меню через хуки
        /* 
        <menu className='chat-menu'>
          <li>Меню 1</li>
          <li>Меню 2</li>
          <li>Меню 3</li>
        </menu> */
      }
    </div>
  </header>
);
