import './SchoolCard.css'

function SchoolCard(props){
    return(
        <div className="card">
         <h1>{props.name}</h1>
         <p>{props.tagline}</p>
         <p>{props.city}</p>
        </div>
    )
}
export default SchoolCard;