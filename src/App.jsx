import { useState } from 'react'
import NewTaskForm from './components/NewTaskForm'
import Tasks from './components/Tasks'
import Overlay from './components/Overlay'
import DeleteBox from './components/DeleteBox'

import ShortUniqueId from "short-unique-id"

function App() {
  const [ tasks, setTasks ] = useState([
    { 
      id: 1098,
      text:'my first task'
    }, 
    {
      id: 245,
      text: 'my second one'
    }
  ])
  const [ mode, setMode ] = useState({status: 'display', task: null}) 
  // modes: { status: 'delete', task: (<id-of-deletable-task>) }
  // modes: { status: 'edit', task: (<id-of-editable-task>) }

  function handleModeChange(newMode) {
    setMode(newMode)
  }

  function handleDeleteTask(taskId = null) {
    if (taskId) {
      const newTasks = tasks.filter(iterTask => iterTask.id !== taskId)
      setTasks(newTasks)
    }
    setMode({status: 'display', task: null})
    document.body.style.overflow = 'visible'
  }

  function handleEditTask(newTask) {
    const newTaskText = newTask.text.trim()
    console.log(newTaskText)
    if (newTaskText !== '') {
      setTasks(tasks.map(task => task.id === newTask.id ? newTask : task))
    }
    setMode({status: 'display', task: null})
  }

  function handleSubmitNewTask(ev, text) {
    ev.preventDefault()
    const uid = new ShortUniqueId()
    if (!text) return
    setTasks(tasks => ([...tasks, { id: uid.rnd(), text }]))
  }

  return (
    <>
      <h1>Your Tasks List</h1>
      <NewTaskForm onSubmitNewTask={handleSubmitNewTask} editingTask={mode.status==='edit'} />
      <Tasks tasks={tasks} mode={mode} onModeChange={handleModeChange} onEditTask={handleEditTask} />
      {mode.status === 'delete' &&
      <Overlay>
        <DeleteBox tasks={tasks} taskId={mode.task} onDeleteTask={handleDeleteTask} />
      </Overlay>
      }      
    </>
  )
}

export default App
