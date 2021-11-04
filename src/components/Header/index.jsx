import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.scss';

function Header() {
  const { userData, signOut } = useContext(AuthContext);
  const { name } = userData;
  return (
    <header className={ styles.header }>
      <div>
      Olá { name }
      </div>
      <nav className={ styles.navmenu }>
        <Link to='/tasks'>
          Tarefas
        </Link>
        <Link to='/profile'>
          Perfil
        </Link>
        <Link to='/' onClick={ signOut }>
          Sair
        </Link>
      </nav>
    </header>
  );
}

export default Header;
