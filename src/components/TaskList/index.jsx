import React from 'react';
import styles from './styles.module.scss';

import TasksTable from '../TasksTable';

function TaskList() {
  return (
    <div className={ styles.taskLisWrapper }>
      <div className={ styles.tableContainer }>
        <TasksTable />
      </div>
    </div>
  );
}

export default TaskList;
