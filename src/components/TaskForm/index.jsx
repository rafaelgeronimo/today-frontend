import { useState } from "react";
import api from "../../services/api";

import styles from './styles.module.scss';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [initialDate, setInitialDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [taskStatus, setTaskStatus] = useState('todo');

  const registerTask = async (title, description, initialDate, endDate, taskStatus) => {
    await api.post('/tasks', {
      title,
      description,
      initialDate,
      endDate,
      taskStatus,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      })
  }

  return (
    <div className={ styles.taskFormComponent }>
        <h1>Adicione uma tarefa:</h1>
      <form
        className={ styles.taskForm }
        action=""
        onSubmit={ (e) => (e.preventDefault(),
          registerTask(title, description, initialDate, endDate, taskStatus)) }
          >
        <input
          type="text"
          placeholder="Título da tarefa"
          onChange={ (e) => setTitle(e.target.value) }
          />
        {/* <textarea
          name="description"
          type="text"
          placeholder="Descrição"
          autoComplete="off"
          onChange={ (e) => setDescription(e.target.value) }
        ></textarea> */}
        <div className={ styles.taskDateFields }>
          <label className={ styles.dateLabel } htmlFor="initialDate">
            <p>Data inicial:</p>
            <input
              name="initialDate"
              type="date"
              onChange={ (e) => setInitialDate(e.target.value) }
              />
          </label>

          <label className={ styles.dateLabel } htmlFor="endDate">
            <p>Data final:</p>
            <input
              name="finalDate"
              type="date"
              onChange={ (e) => setEndDate(e.target.value) }
              />
          </label>
        </div>

        <label htmlFor="taskselect">Situação: </label>
        <select
          name=""
          defaultValue="todo"
          onChange={ (e) => setTaskStatus(e.target.value) }
          >
          <option value="todo">Pendente</option>
          <option value="doing">Em andamento</option>
          <option value="done">Pronto</option>
        </select>
        <input
          type="submit"
          value="Cadastrar tarefa"
          />
      </form>
    </div>
  );
}

export default TaskForm;
