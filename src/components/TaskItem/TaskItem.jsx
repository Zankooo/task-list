import React from 'react'

import './TaskItem.css'
import {FaTrash} from 'react-icons/fa';

function TaskItem({task, toggleComplete, deleteTask}) {
  return (
    <div className="task">
      <div className='left'>
        <input className="checkbox" checked={task.completed} type="checkbox" onChange={() => toggleComplete(task.id)} />
        <div>{task.name}</div>
      </div>
      <div>{task.dueDate}</div>
      <FaTrash onClick={() => deleteTask(task.id)}></FaTrash>
    </div>
  )
}

export default TaskItem