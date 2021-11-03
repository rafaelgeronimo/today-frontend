import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

function UserProfile() {
  const { userData, signOut } = useContext(AuthContext);
  return (
    <section>
      <h1>User</h1>
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
