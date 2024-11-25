import { useState } from 'react'
import NewTaskForm from './components/NewTaskForm'
import Tasks from './components/Tasks'
import Overlay from './components/Overlay'
import DeleteBox from './components/DeleteBox'

// import viteLogo from '/vite.svg'

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

  return (
    <>
      <h1>Your Tasks List</h1>
      <NewTaskForm tasks={tasks} setTasks={setTasks} editingTask={mode.status==='edit'} />
      <Tasks tasks={tasks} setTasks={setTasks} mode={mode} setMode={setMode} />
      {mode.status === 'delete' &&
      <Overlay>
        <DeleteBox tasks={tasks} setTasks={setTasks} taskId={mode.task} setMode={setMode} />
      </Overlay>
      }      
    </>
  )
}

export default App
