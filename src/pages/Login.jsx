import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser } from '../redux/actions';
import '../styles/loagin.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const MIN_CHARACTERES_PASSWORD = 7;
    const passwordValidate = password.length >= MIN_CHARACTERES_PASSWORD;

    const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);

    if (testEmail && passwordValidate) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  // formato do personEmail = { email: email} -> é um objeto
  const personEmail = { email };

  const handleClick = () => {
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    dispatch(loginUser(personEmail));
    history.push('/comidas');
  };

  return (
    <main className="login-container">
      <section>
        <h1>Let's Cook!</h1>
      </section>
      <section>
        <form className="form-container">
          <input
            className="box-text"
            type="email"
            name="email"
            placeholder="email"
            value={ email }
            data-testid="email-input"
            onChange={ (e) => setEmail(e.target.value) }
            required
          />

          <input
            className="box-text"
            type="password"
            name="password"
            placeholder="Password"
            data-testid="password-input"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            required
          />
          <button
            className="btn-form"
            type="button"
            data-testid="login-submit-btn"
            disabled={ disabled }
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
