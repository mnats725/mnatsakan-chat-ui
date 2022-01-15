import { Header } from '../header';
import { Footer } from '../footer';

import './app.css';

export const App = (): JSX.Element => (
  <div className='app'>
    <Header />
    <div className='main-content'>Регистрация</div>
    <Footer />
  </div>
);
