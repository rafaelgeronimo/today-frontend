import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import styles from './styles.module.scss';

function UserProfile() {
  const { userData } = useContext(AuthContext);
  return (
    <section className={ styles.userProfileSection }>
      <h1>{ userData.name }</h1>
      <img src={ userData.avatar } alt="Avatar" className={ styles.avatar } />
      <p>
        Perfil:
        { userData.role === 'user' ? <span> Usuário</span> : <span> Administrador</span> }
      </p>
    </section>
  );
}

export default UserProfile;
