export const initialMode  = {status: 'display', task: null}

export function modeReducer(state, action) {
  switch (action.type) {
    case 'changed_mode':
      const { status, task } = action
      return { status, task }
    case 'reset_mode':
      return { status: 'display', task: null }
    default:
      break;
  }
}

