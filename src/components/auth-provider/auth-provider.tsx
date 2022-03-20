import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../hooks/use-auth';

type AuthProviderArgs = {
  children: React.ReactNode;
  path: string;
};

export const AuthProvider = ({ children, path }: AuthProviderArgs): JSX.Element => {
  const [userInformation] = useAuth();

  return (
    <Route
      exact
      path={path}
      render={({ location }) =>
        userInformation ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }
    />
  );
};
