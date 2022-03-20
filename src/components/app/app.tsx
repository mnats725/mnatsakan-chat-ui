import { Switch, Route, Redirect } from 'react-router-dom';

import { RegistrationPage } from '../../pages/registration-page';
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
              <RegistrationPage />
            </Route>
            <Route exact path='/login'>
              <RegistrationPage />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
};
