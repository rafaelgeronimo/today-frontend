import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import TaskList from '../../components/TaskList';

function App() {
  return (
    <main>
      <Header />
      <p>Está na página de tarefas</p>
      <TaskList />
      <Link to="/profile">
        <button type="button">
          Perfil
        </button>
      </Link>
    </main>
  );
}

export default App;
