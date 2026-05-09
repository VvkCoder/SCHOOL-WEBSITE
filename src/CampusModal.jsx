import './CampusModal.css'

const campusData = [
    { city: "Mumbai", schools: "35+ Schools", boards: ["CBSE", "ICSE", "IB"] },
    { city: "Pune", schools: "20+ Schools", boards: ["CBSE", "ICSE", "SSC"] },
    { city: "Thane", schools: "12+ Schools", boards: ["CBSE", "Cambridge"] },
    { city: "Nashik", schools: "8+ Schools", boards: ["CBSE", "SSC"] },
    { city: "Nagpur", schools: "6+ Schools", boards: ["CBSE", "ICSE"] },
    { city: "Navi Mumbai", schools: "10+ Schools", boards: ["CBSE", "SSC"] },
    { city: "Aurangabad", schools: "5+ Schools", boards: ["CBSE", "SSC"] },
    { city: "Other Cities", schools: "20+ Locations", boards: ["Multiple Boards"] },
]

function CampusModal({ onClose }) {
    return(
        <div className="campus-overlay" onClick={onClose}>
            <div className="campus-box" onClick={(e) => e.stopPropagation()}>

                <button className="campus-close" onClick={onClose}>X</button>

                <div className="campus-header">
                    <p className="campus-tag">— OUR CAMPUSES</p>
                    <h2>Find a School <span>Near You</span></h2>
                     <p className="campus-desc">
                      100+ campuses across Maharashtra and beyond — 
                      a world-class education is closer than you think.
                      </p>
                </div>

                <div className="campus-grid">
                     {campusData.map((campus, index) => (
                         <div className="campus-card" key={index}>
                              <h3>{campus.city}</h3>
                               <p className="campus-schools">{campus.schools}</p>
                                <div className="campus-boards"> 
                                     {campus.boards.map((board, i) => (
                                     <span className="board-tag" key={i}>{board}</span>
                                    ))}
                                </div>
                          </div>
                       ))}                     
                </div>
            </div>
        </div>

    )
}
export default CampusModal;