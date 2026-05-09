import './About.css'

function About(){
    return(
        <section className="about" id="about">
            <div className="about-container">
                 <h2>About Our School</h2>
        <p>We are committed to providing world-class education, 
        nurturing talent, and building future leaders since 1992.</p>
        <div className="about-stats">

          <div className="stat-card">
            <h3>🏆</h3>
            <h4>Est. 1992</h4>
            <p>Years of Excellence</p>
          </div>

          <div className="stat-card">
            <h3>👨‍🎓</h3>
            <h4>5000+</h4>
            <p>Students Enrolled</p>
          </div>

          <div className="stat-card">
            <h3>👩‍🏫</h3>
            <h4>200+</h4>
            <p>Expert Teachers</p>
          </div>

          <div className="stat-card">
            <h3>⭐</h3>
            <h4>A+ Grade</h4>
            <p>CBSE Accredited</p>
          </div>

        </div>
            </div>
        </section>
    )
}
export default About;