import Task from "./Task"
import NoTasksMsg from "./NoTasksMsg"

export default function Tasks({ tasks, setTasks, mode, setMode }) {
  return (
    <section className='tasks'>
      {/* {tasks.length ? tasks.map(task => <Task tasks={tasks} setTasks={setTasks} key={task.key} task={task} mode={mode} setMode={setMode} />) : <NoTasksMsg />} */}
      {tasks.length ? tasks.map(task => <Task tasks={tasks} setTasks={setTasks} key={task.id} task={task} mode={mode} setMode={setMode} />) : <NoTasksMsg />}
    </section>
  )
}
// is there a better way to distribute the props than passing the mode down to each task?
// maybe deciding at this level which one is editing and passing isEditing or smth like this? 