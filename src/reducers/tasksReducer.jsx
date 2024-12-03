import ShortUniqueId from "short-unique-id"

export const initialTasks = [
  { 
    id: 1098,
    text:'my first task'
  }, 
  {
    id: 245,
    text: 'my second one'
  }
]

export function tasksReducer(state, action) {
  switch (action.type) {
    case 'deleted_task':
      const newTasks = state.filter(task => task.id !== action.taskId)
      return newTasks
    case 'edited_task':
      const newTaskText = action.newTask.text.trim()
      if (newTaskText === '') return state
      return state.map(task => task.id === action.newTask.id ? 
                        action.newTask : 
                        task
                      );
    case 'added_new_task':
      const uid = new ShortUniqueId()
      return [
        ...state,
        { 
          id: uid.rnd(), 
          text: action.text
        }
      ]
    default:
      break;
  }
}
