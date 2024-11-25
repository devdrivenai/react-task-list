import ShortUniqueId from "short-unique-id"
import { useState } from "react"

const uid = new ShortUniqueId()

export default function NewTaskForm({ setTasks, editingTask }) {
  const [ value, setValue ] = useState('')

  function handleSubmit(ev) {
    // console.log('before prevent default')
    ev.preventDefault()
    // console.log('after prevent default')
    if (!value) return
    setTasks(tasks => ([...tasks, { id: uid.rnd(), text: value }]))
    setValue('')
  }

  return (
    <form className='new-task-form' autoComplete='off' onSubmit={(value) => handleSubmit(value)} >
      <input type='text' className='new-task-text' placeholder='Add your task here...' disabled={editingTask} value={value} onChange={(ev) => setValue(ev.target.value)} />
      <button type='submit' className='submit-new-task magic' disabled={editingTask} >Add Task</button>
    </form>
  )
}
