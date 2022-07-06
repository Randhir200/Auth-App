import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  function authenticate() {
    setIsAuth(isAuth ? false : true);
  }
  return (
    <div>
      <h1>
        {isAuth ? 'Logged in successfully done' : 'Logged out see you soon'}
      </h1>
      <button onClick={authenticate}>{isAuth ? 'logout' : 'login'}</button>
    </div>
  );
}
