import './auth-page.css';

export const AuthPage = (): JSX.Element => (
  <div className='auth-page'>
    <form className='box' action='auth-page.tsx' method='post'>
      <h1>login</h1>
      <input type='Text' name='' placeholder='Username' />
      <input type='password' name='' placeholder='Password' />
      <input type='submit' name='' value='Login' />
    </form>
  </div>
);
