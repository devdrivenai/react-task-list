import { useState } from "react"

export default function NewTaskForm({ onSubmitNewTask, editingTask }) {
  const [ value, setValue ] = useState('')

  function handleSubmit(ev, value) {
    setValue('')
    onSubmitNewTask(ev, value)
  }

  return (
    <form className='new-task-form' autoComplete='off' onSubmit={(ev) => handleSubmit(ev, value)} >
      <input type='text' className='new-task-text' placeholder='Add your task here...' disabled={editingTask} value={value} onChange={(ev) => setValue(ev.target.value)} />
      <button type='submit' className='submit-new-task magic' disabled={editingTask} >Add Task</button>
    </form>
  )
}
