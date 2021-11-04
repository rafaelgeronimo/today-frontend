import { useState } from "react";
import api from "../../services/api";

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
    // const {  }
  }

  return (
    <form
      action=""
      onSubmit={ (e) => (e.preventDefault(),
        registerTask(title, description, initialDate, endDate, taskStatus)) }
    >
      <input
        type="text"
        placeholder="Título da tarefa"
        onChange={ (e) => setTitle(e.target.value) }
      />
      <textarea
        name="description"
        type="text"
        placeholder="Descrição"
        autoComplete="off"
        onChange={ (e) => setDescription(e.target.value) }
      ></textarea>
      Data inicial:
      <input
        name="initialDate"
        type="date"
        onChange={ (e) => setInitialDate(e.target.value) }
      />
      Data final:
      <input
        name="finalDate"
        type="date"
        onChange={ (e) => setEndDate(e.target.value) }
      />
      <label htmlFor="taskselect">Situação: </label>
      <select
        name=""
        onChange={ (e) => setTaskStatus(e.target.value) }
      >
        <option value="todo" selected>A fazer</option>
        <option value="doing">Em andamento</option>
        <option value="done">Concluído</option>
      </select>
      <input
        type="submit"
        value="Cadastrar tarefa"
      />
    </form>
  );
}

export default TaskForm;
