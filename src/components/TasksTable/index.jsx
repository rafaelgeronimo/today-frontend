import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import api from '../../services/api';

const TasksTable = () => {
  const { userData } = useContext(AuthContext);
  const userId = userData.id;
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem('@today:token');
    if (token) {
      api.defaults.headers.authorization = token;
      api.get(`/tasks/user/${userId}`).then((response) => {
        setTasks(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
    }
  });
  const columns = [
    {
      title: 'Título',
      id: '1'
    },
    {
      title: 'Data inicial',
      id: '2'
    },
    {
      title: 'Data final',
      id: '3'
    },
    {
      title: 'Situação',
      id: '4'
    }
  ];

  return (
    <>
      { tasks.length === 0 ? 
        <div>
          <p>Não há tarefas cadastradas para {userData.name}.</p>
          <p>Utilize o formulário acima para cadastrar suas tarefas.</p>
        </div> : 
        <table className="sortable">
          <thead>
            <tr>
              { columns.map((column) => (
                <th key={ column.id }>
                  { column.title }
                </th>
              )) }
            </tr>
          </thead>
          <tbody>
              { tasks.map((task) => (
                <tr key={ task._id }>
                    <td>
                        { task.title }
                    </td>
                    <td>
                      { task.initialDate }
                    </td>
                    <td>
                      { task.endDate }
                    </td>
                    <td>
                      { task.taskStatus}
                    </td>
                </tr>
              )) }
          </tbody>
        </table>
      }
    </>
  )
}

export default TasksTable;
