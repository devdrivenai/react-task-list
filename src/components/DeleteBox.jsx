import Icon from "./Icon"

export default function DeleteBox({ tasks, setTasks, taskId, setMode }) {
  function confirmDeleteHandler(tasks, setTasks) {
    const newTasks = tasks.filter(iterTask => iterTask.id !== taskId)
    setTasks(newTasks)
    setMode({status: 'display', task: null})
    document.body.style.overflow = 'visible'
  }

  function cancelDeleteHandler() {
    setMode({status: 'display', task: null})
    document.body.style.overflow = 'visible'
  }

  function getTaskText(taskId) {
    return tasks.filter(iterTask => iterTask.id === taskId).text
  }

  return (
    <div className="confirm-delete-box">
      <p>Are you sure you want to delete this task:</p>
      <p className="task-text">{ getTaskText(taskId) || '' }</p>
      <div>
        <button className='task-action-btn confirm-delete-btn' onClick={() => confirmDeleteHandler(tasks, setTasks)}>
          <Icon iconType={'delete'} />
        </button>
        <button className='task-action-btn cancel-delete-btn' onClick={cancelDeleteHandler}>
          <Icon iconType={'cancel'} />
        </button>        
      </div>
    </div>
  )
}