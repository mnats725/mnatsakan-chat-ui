import { Header } from '../header';
import { Footer } from '../footer';
import { ChatPage } from '../../pages/chat-page';

import './app.css';

export const App = (): JSX.Element => (
  <div className='app'>
    <Header />
    <ChatPage />
    <Footer />
  </div>
);
