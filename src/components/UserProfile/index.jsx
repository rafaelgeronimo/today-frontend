import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import styles from './styles.module.scss';

function UserProfile() {
  const { userData, signOut } = useContext(AuthContext);
  return (
    <section>
      <h1>{ userData.name }</h1>
      <img src={ userData.avatar } alt="Avatar" className={ styles.avatar } />
      <Link to="/">
        <button onClick={ signOut }>
          Sair
        </button>
      </Link>
      <Link to={ userData ? "/tasks" : "/" }>
        <button type="button">
          Minhas tarefas
        </button>
      </Link>
    </section>
  );
}

export default UserProfile;
