import { AuthPage } from '../../pages/auth-page';

import { useAuth } from '../../hooks/use-auth';

import './app.css';
import { ChatPage } from '../../pages/chat-page';

export const App = (): JSX.Element => {
  const userInformation = useAuth();

  return <div className='app'>{userInformation ? <ChatPage userInformation={userInformation} /> : <AuthPage />}</div>;
};
