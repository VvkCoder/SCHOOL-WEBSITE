import { useState } from 'react'
import AdmissionModal from './AdmissionModal'
import CampusModal from './CampusModal'
import './Hero.css'

function Hero(){
     const [showModal, setShowModal] = useState(false)
     const [showCampus, setShowCampus] = useState(false)

    return(
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>Welcome to Sunrise International High School</h1>
                <p>Empowering Minds, Building Futures since 1992</p>
                <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => setShowModal(true)}>Apply Now</button>
                    <button className="btn-secondary" onClick={() => setShowCampus(true)}> Find a Campus</button>
                </div>
            </div>

            
            {showModal && (
            <AdmissionModal onClose={() => setShowModal(false)} />
           )}

            {showCampus && (
            <CampusModal onClose={() => setShowCampus(false)} />
           )}
           
        </section>
    )
}
export default Hero;