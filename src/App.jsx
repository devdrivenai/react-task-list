import { useReducer } from 'react'
import NewTaskForm from './components/NewTaskForm'
import Tasks from './components/Tasks'
import Overlay from './components/Overlay'
import DeleteBox from './components/DeleteBox'
import { initialTasks, tasksReducer } from './reducers/tasksReducer'
import { initialMode, modeReducer } from './reducers/modeReducer'

function App() {
  const [ tasks, dispatchTasks ] = useReducer(tasksReducer, initialTasks)
  const [ mode, dispatchMode ] = useReducer(modeReducer, initialMode)
  // modes: { status: 'delete', task: (<id-of-deletable-task>) }
  // modes: { status: 'edit', task: (<id-of-editable-task>) }

  function handleModeChange({ status, task }) {
    dispatchMode({ 
      type: 'changed_mode', 
      status, 
      task 
    })
  }

  function handleDeleteTask(taskId = null) {
    if (taskId) {
      dispatchTasks({
        type: 'deleted_task',
        taskId
      })
    }
    dispatchMode({ type: 'reset_mode'})
    document.body.style.overflow = 'visible'
  }

  function handleEditTask(newTask) {
    dispatchTasks({
      type: 'edited_task',
      newTask
    })
    dispatchMode({ type: 'reset_mode'})
  }

  function handleSubmitNewTask(ev, text) {
    ev.preventDefault()
    if (!text) return
    dispatchTasks({
      type: 'added_new_task',
      text
    })
  }

  const isDeleteMode = mode.status === 'delete'

  return (
    <>
      <h1>Your Tasks List</h1>
      <NewTaskForm onSubmitNewTask={handleSubmitNewTask} mode={mode} />
      <Tasks tasks={tasks} mode={mode} onModeChange={handleModeChange} onEditTask={handleEditTask} />
      {isDeleteMode &&
      <Overlay>
        <DeleteBox tasks={tasks} taskId={mode.task} onDeleteTask={handleDeleteTask} />
      </Overlay>
      }      
    </>
  )
}

export default App
