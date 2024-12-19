export default function Icon({iconType}) {

  return <div className="icon" style={{mask: `url(/react-task-list/${iconType}-icon.svg) no-repeat center`}}></div>
}