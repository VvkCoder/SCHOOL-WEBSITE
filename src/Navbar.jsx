import './Navbar.css'

function Navbar(){
    return(
       <nav>
        <div className="navbar-container">
        <div className="left">🏫 Sunrise International High School</div>
            <div className="right">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#courses">Courses</a>
                <a href="#contact">Contact</a>          

        </div>
        </div>
       </nav>
    )
}
export default Navbar;