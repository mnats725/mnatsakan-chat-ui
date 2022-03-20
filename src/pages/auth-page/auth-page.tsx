import { Switch, Route, useHistory } from 'react-router-dom';

import { LoginForm, RegistrationForm } from '../../components/forms';

import { PAGE_ROUTES } from '../../constants/page-routes';

import './auth-page.css';

export const AuthPage = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className='auth-page'>
      <Switch>
        <Route exact path={PAGE_ROUTES.login}>
          <LoginForm />
        </Route>
        <Route exact path={PAGE_ROUTES.registration}>
          <RegistrationForm />
        </Route>
      </Switch>

      <div className='auth-footer'>
        <p className='auth-footer-text'>
          Уже зарегистрированы?
          <button type='button' onClick={() => history.push(PAGE_ROUTES.login)}>
            авторизоваться
          </button>
        </p>
        <p className='auth-footer-text'>
          Ещё не зарегистрировались?
          <button type='button' onClick={() => history.push(PAGE_ROUTES.registration)}>
            зарегистрироваться
          </button>
        </p>
      </div>
    </div>
  );
};
