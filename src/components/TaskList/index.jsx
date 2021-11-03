import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../contexts/auth"
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import styles from './styles.module.scss';

function TaskList() {
  const { userData, signOut } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState();
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('@today:token');
    if (token) {
      api.defaults.headers.authorization = token;
      api.get('/tasks').then((response) => {
        setTasks(response.data);
      });
      const userData = JSON.parse(localStorage.getItem('@today:user'));
      setUserName(userData.name);
    } else {
      history.push('/');
    }
  }, []);
  return (
    <div className={ styles.taskLisWrapper }>
      Tarefas de { userName }
      <ul className={ styles.taskList }>
        { tasks.map((task) => (
          <li
            key={ task._id }
            className={ styles.task }
            id={ task._id }>
            <p className={ styles.taskContent }>
              Título:
              { task.title }
            </p>
            <p>
              Descrição:
              { task.description }
            </p>
            <p>
              Data de início:
              { task.initialDate }
            </p>
            <p>
              Data de entrega:
              { task.endDate }
            </p>
            <div className={ styles.taskUser }>
              <span>
                Id do usuário:
                { task.userId }
              </span>
            </div>
            <input type="checkbox" checked={ task.taskDone } />
          </li>
        )) }
      </ul>
    </div>
  );
}

export default TaskList;
