import Icon from "./Icon"

export default function ActionBtn({ action, onActionBtnClick, className }) {
  const classNames = action === 'edit' || action === 'delete' ? `task-action-btn task-${action}-btn` : className

  return (
    <button className={classNames} onClick={onActionBtnClick}>
      <Icon iconType={action} />
    </button>
  )
}