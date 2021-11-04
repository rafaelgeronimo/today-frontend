import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
// import { Modal, Button } from "react-bootstrap";
import styles from './styles.module.scss';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import api from '../../services/api';

const TasksTable = () => {
  const { userData } = useContext(AuthContext);
  const userId = userData.id;
  const [tasks, setTasks] = useState([]);
  const [currentSort, setCurrentSort] = useState('default');
  // const [modalTaskData, setModalTaskData] = useState();
  // const [taskModalShow, setTaskModalShow] = useState(false);
  // const [modalShow, setModalShow] = useState(false);

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

  // function TaskModal(props, task) {
  //   console.log(props);
  //   return (
  //     <Modal
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           { task.title }
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <h4>Centered Modal</h4>
  //         <p>
  //           { task.title }
  //         </p>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button onClick={props.onHide}>Close</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   )
  // }

  const columns = [
    {
      title: 'Título'
    },
    {
      title: 'Data inicial'
    },
    {
      title: 'Data final'
    },
    {
      title: 'Situação'
    }
  ];

  // function RenderModal(task) {  
  //   return (
  //     <>
  //       <Button variant="primary" onClick={() => setModalShow(true)}>
  //         Carregar modal
  //       </Button>
  //       <TaskModal
  //         show={modalShow}
  //         onHide={() => setModalShow(false)}
  //       ></TaskModal>
  //     </>
  //   )
  // }

  // function showModal(task) {
  //   setModalShow(true);
  //   // console.log(task);
  //   const modalProps = {show: modalShow, onHide: setModalShow(false)};
  //   TaskModal(modalProps, task);
    
    
  //   // <TaskModal
  //   //   show={modalShow}
  //   //   onHide={() => setModalShow(false)}
  //   // >
  //   // </TaskModal>
  // }

  const sortTypes = {
    up: {
      class: 'sort-up',
      fn: (a, b) => console.log(a.initialDate)
    },
    down: {
      class: 'sort-down',
      fn: (a, b) => b.initialDate - a.initialDate
    },
    default: {
      class: 'sort',
      fn: (a, b) => a
    }
  };

  const changeSort = () => {
    if (currentSort === 'down') setCurrentSort('up')
    else if (currentSort === 'up') setCurrentSort('default')
    else if (currentSort === 'default') setCurrentSort('down');
  };

  return (
    <>
      {/* <RenderModal /> */}
      { tasks.length === 0 ? 
        <div>
          <p>Não há tarefas cadastradas para {userData.name}.</p>
          <p>Utilize o formulário acima para cadastrar suas tarefas.</p>
        </div> : 
        <table className="sortable">
          <thead>
            <tr>
              { columns.map((column) => (
                <th>
                  { column.title }
                  <AiFillCaretUp onClick={() => changeSort()} />
                </th>
              )) }
            </tr>
          </thead>
          <tbody>
              { tasks.sort(sortTypes[currentSort].fn).map((task) => (
                <tr key={ task._id }/*  onClick={ () => showModal(task) } */>
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
                      { task.taskStatus }
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
