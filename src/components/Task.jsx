import { useState } from "react"
import Icon from "./Icon"

export default function Task({ tasks, setTasks, task, mode, setMode }) {
  const [ value, setValue ] = useState(task.text)

  function handleEditConfirmBtnClick(value){
    const newTaskText = value.trim()
    if (newTaskText === task.text) {
      setMode({status: 'display', task: null})
    } else {
      // console.log(tasks)
      const newTask = { ...task, text: value }
      setTasks(tasks.map((iteratedTask) => {
        return iteratedTask.id === task.id ? newTask : iteratedTask
      }))
      setMode({status: 'display', task: null})
    }
  }


  function handleEditClick() {
    setMode({status: 'edit', task: task.id})
  }

  function handleDeleteClick() {
    document.body.style.overflow = 'hidden'
    setMode({status: 'delete', task: task.id})
  }

  function handleValueChange(ev) {
    if (ev.target.value === value) return
    setValue(ev.target.value)
  }

  function isNotEditing(mode) {
    return mode.status !== 'edit' || mode.task !== task.id
  }

  function isAnotherEditing(mode) {
    return mode.status === 'edit' && mode.task !== task.id
  }

  return (
    <div className="task-item">
      <div className="task-text-wrapper">
        <input type="text" disabled={isNotEditing(mode)} title={!isNotEditing(mode) ? 'Press ESC to reject changes' : ''} value={value} onChange={handleValueChange} data-taskid={task.id} />
        <button onClick={() => handleEditConfirmBtnClick(value)} className={`edit-confirm-btn ${!isNotEditing(mode) ? 'active' : ''}`} data-taskid={task.id} >
          <Icon iconType={'confirm'} />
        </button>
      </div>
      <div className="task-action-btns">
        <button onClick={handleEditClick} className="task-action-btn task-edit-btn" disabled={!isNotEditing(mode) || isAnotherEditing(mode)}>
          <Icon iconType={'edit'} />
        </button>
        <button onClick={handleDeleteClick} className="task-action-btn task-delete-btn" disabled={!isNotEditing(mode) || isAnotherEditing(mode)}>
          <Icon iconType={'delete'} />
        </button>
      </div>
    </div>
  )
}

// To Do: I think I should make the task-text-wrapper a form, and the edit-confirm-btn type=submit...