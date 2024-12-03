import { useState } from "react"

export default function NewTaskForm({ onSubmitNewTask, mode }) {
  const [ value, setValue ] = useState('')

  function handleSubmit(ev, value) {
    setValue('')
    onSubmitNewTask(ev, value)
  }
  
  const isEditing = mode.status === 'edit'

  return (
    <form className='new-task-form' autoComplete='off' onSubmit={(ev) => handleSubmit(ev, value)} >
      <input type='text' className='new-task-text' placeholder='Add your task here...' disabled={isEditing} value={value} onChange={(ev) => setValue(ev.target.value)} />
      <button type='submit' className='submit-new-task magic' disabled={isEditing} >Add Task</button>
    </form>
  )
}
