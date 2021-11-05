import React, { useState } from 'react';
import api from '../../services/api';

import styles from './styles.module.scss';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskInitialDate, setTaskInitialDate] = useState(new Date());
  const [taskEndDate, setTaskEndDate] = useState(new Date());
  const [taskStatusProgress, setTaskStatusProgress] = useState('Pendente');

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
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className={ styles.taskFormComponent }>
      <h1>Adicione uma tarefa:</h1>
      <form
        className={ styles.taskForm }
        action=""
        onSubmit={ (e) => ([e.preventDefault(), registerTask(
          taskTitle, taskDescription, taskInitialDate, taskEndDate, taskStatusProgress,
        )]) }
      >
        <input
          type="text"
          placeholder="Título da tarefa"
          onChange={ (e) => setTaskTitle(e.target.value) }
        />
        <textarea
          name="description"
          type="text"
          placeholder="Descrição"
          autoComplete="off"
          onChange={ (e) => setTaskDescription(e.target.value) }
        />
        <div className={ styles.taskDateFields }>
          <label className={ styles.dateLabel } htmlFor="initialDate">
            <p>Data inicial:</p>
            <input
              name="initialDate"
              type="date"
              required
              onChange={ (e) => setTaskInitialDate(e.target.value) }
            />
          </label>

          <label className={ styles.dateLabel } htmlFor="endDate">
            <p>Data final:</p>
            <input
              name="finalDate"
              type="date"
              required
              onChange={ (e) => setTaskEndDate(e.target.value) }
            />
          </label>
        </div>

        <p>Situação: </p>
        <select
          name="taskselect"
          defaultValue="Pendente"
          onChange={ (e) => setTaskStatusProgress(e.target.value) }
        >
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Pronto">Pronto</option>
        </select>
        <input
          type="submit"
          value="Cadastrar tarefa"
        />
      </form>
    </div>
  );
};

export default TaskForm;
