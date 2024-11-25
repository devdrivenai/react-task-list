import Task from "./Task"
import NoTasksMsg from "./NoTasksMsg"

export default function Tasks({ tasks, mode, onModeChange, onEditTask }) {
  return (
    <section className='tasks'>
      {tasks.length ? tasks.map(task => <Task key={task.id} task={task} mode={mode} onModeChange={onModeChange} onEditTask={onEditTask} />) : <NoTasksMsg />}
    </section>
  )
}