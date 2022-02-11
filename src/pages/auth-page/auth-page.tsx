import './auth-page.css';

export const AuthPage = (): JSX.Element => (
  <div className='auth-page'>
    <form className='auth-form'>
      <h1>login</h1>
      <input type='text' name='' placeholder='Username' />
      <input type='password' name='' placeholder='Password' />
      <button className='button' type='submit'>
        Login
      </button>
    </form>
  </div>
);
