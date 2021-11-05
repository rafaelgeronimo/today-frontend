import React, { useContext, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.scss';

function LoginBox() {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className={ styles.loginBoxWrapper }>
      <div className={ styles.loginBoxText }>
        <strong>[ Today ]</strong>
        <strong>Organize o seu dia na Ebytr</strong>
      </div>
      <form
        action=""
        className={ styles.loginBoxForm }
        onSubmit={ (e) => (e.preventDefault(), signIn(email, password)) }
      >
        <div className={ styles.emailInput }>
          <AiOutlineMail size="32" />
          <input
            type="email"
            placeholder="E-mail"
            className={ styles.signInInput }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className={ styles.passwordInput }>
          <RiLockPasswordLine size="32" />
          <input
            type="password"
            placeholder="Senha"
            className={ styles.signInInput }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <input
          type="submit"
          className={ styles.signInButton }
          value="Login"
        />
      </form>
    </div>
  );
}

export default LoginBox;
