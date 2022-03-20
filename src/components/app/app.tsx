import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthPage } from '../../pages/auth-page';
import { ChatPage } from '../../pages/chat-page';
import { Loading } from '../loading';

import { useAuth } from '../../hooks/use-auth';

import './app.css';

export const App = (): JSX.Element => {
  const [userInformation, isLoading] = useAuth();

  return (
    <div className='app'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Redirect to={{ pathname: userInformation ? '/' : '/login' }} />
          <Switch>
            <Route exact path='/'>
              {userInformation && <ChatPage userInformation={userInformation} />}
            </Route>
            <Route exact path='/registration'>
              <AuthPage />
            </Route>
            <Route exact path='/login'>
              <AuthPage />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
};
