import { useState } from "react"
import ActionBtn from "./ActionBtn"

export default function Task({ task, mode, onModeChange, onEditTask }) {
  const [ value, setValue ] = useState(task.text)

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

  const amIDisabled = !isNotEditing(mode) || isAnotherEditing(mode)

  return (
    <div className="task-item">
      <div className="task-text-wrapper">
        <input type="text" disabled={isNotEditing(mode)} title={!isNotEditing(mode) ? 'Press ESC to reject changes' : ''} value={value} onChange={handleValueChange} />
        <ActionBtn className={`edit-confirm-btn ${!isNotEditing(mode) ? 'active' : ''}`} action={'confirm'} onActionBtnClick={() => {onEditTask({text: value, id: task.id})}} />
      </div>
      <div className="task-action-btns">
        <ActionBtn disabled={amIDisabled} action={'edit'} onActionBtnClick={() => onModeChange({status: 'edit', task: task.id})} />
        <ActionBtn disabled={amIDisabled} action={'delete'} onActionBtnClick={() => onModeChange({status: 'delete', task: task.id})} />
      </div>
    </div>
  )
}

// To Do: I think I should make the task-text-wrapper a form, and the edit-confirm-btn type=submit...