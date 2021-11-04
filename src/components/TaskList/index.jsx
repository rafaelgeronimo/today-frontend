import React, { useEffect, useState } from 'react';
import api from '../../services/api';
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
