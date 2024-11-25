export default function Icon({iconType}) {
  return <div className="icon" style={{mask: `url(src/assets/${iconType}-icon.svg) no-repeat center`}}></div>
}