import { Switch, Route, Redirect } from 'react-router-dom';

import { AuthPage } from '../../pages/auth-page';
import { ChatPage } from '../../pages/chat-page';
import { Loading } from '../loading';

import { useAuth } from '../../hooks/use-auth';

import { PAGE_ROUTES } from '../../constants/page-routes';

import './app.css';

export const App = (): JSX.Element => {
  const { userInformation, isLoading } = useAuth();

  console.log(userInformation);

  return (
    <div className='app'>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path={PAGE_ROUTES.main}>
            {!userInformation && <Redirect to={PAGE_ROUTES.login} />}
            <ChatPage userInformation={userInformation} />
          </Route>
          <Route path={PAGE_ROUTES.auth}>
            {userInformation && <Redirect to={PAGE_ROUTES.main} />}
            <AuthPage />
          </Route>
        </Switch>
      )}
    </div>
  );
};
