import React from 'react'

import './TaskItem.css'


function TaskItem({task, toggleComplete, deleteTask}) {
  return (
    <div className="task">
      <div className='left'>
        <input type="checkbox" onChange={() => toggleComplete(task.id)} />
        <div>{task.name}</div>
      </div>
      <div>{task.dueDate}</div>
      <button onClick={() => deleteTask(task.id)}> Izbrisi </button>
    </div>
  )
}

export default TaskItem