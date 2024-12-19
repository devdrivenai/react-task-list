export default function Icon({iconType}) {

  return <div className="icon" style={{mask: `url(${import.meta.env.BASE_URL}${iconType}-icon.svg) no-repeat center`}}></div>
}