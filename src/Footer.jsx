import './Footer.css'

function Footer(){
  return(
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>🏫 Sunrise International High School</h3>
          <p>  Empowering Minds, Building Futures since 1992</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p>📍 Mumbai, Maharashtra</p>
          <p>📞 +91 9930225281</p>
          <p>✉️ info@sunriseschool.com</p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>© 2026 Sunrise International High School. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer;