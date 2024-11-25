import Icon from "./Icon"

export default function DeleteBox({ tasks, taskId, onDeleteTask }) {
  const [ task ] = tasks.filter(task => task.id === taskId)
  const taskText = task?.text || ''

  return (
    <div className="confirm-delete-box">
      <p>Are you sure you want to delete this task:</p>
      <p className="task-text">{taskText}</p>
      <div>
        <button className='task-action-btn confirm-delete-btn' onClick={() => onDeleteTask(taskId)}>
          <Icon iconType={'delete'} />
        </button>
        <button className='task-action-btn cancel-delete-btn' onClick={onDeleteTask}>
          <Icon iconType={'cancel'} />
        </button>        
      </div>
    </div>
  )
}