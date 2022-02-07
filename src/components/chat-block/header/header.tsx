import './header.css';

export const Header = (): JSX.Element => (
  <header className='chat-header'>
    <div className='user-information-block'>
      <p className='username'>Mnats</p>
      <p className='online-status'>23:03</p>
    </div>

    <div className='parametrs'>Удалить</div>
  </header>
);
