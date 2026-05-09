import './Courses.css'

const coursesData =[
    { id: 1, icon: "🔬", name: "Science", grade: "Grade 6 - 10"},
    { id: 2, icon: "💻", name: "Information Technology", grade: "Grade 8 - 12"},
    { id: 3, icon: "🎨", name: "Arts & Culture", grade: "Grade 6 - 12" },
    { id: 4, icon: "📊", name: "Commerce", grade: "Grade 11 - 12" },
    { id: 5, icon: "📐", name: "Mathematics", grade: "Grade 6 - 12" },
    { id: 6, icon: "🌍", name: "Social Studies", grade: "Grade 6 - 10" },
]

function Courses(){
    return(
        <section className="courses" id="courses">
            <div className="courses-container">
                <h2>Our Courses</h2>
                <p>Explore our wide range of academic programs</p>

                <div className="courses-grid">
                    {coursesData.map((course) => (
                        <div className="course-card" key={course.id}>
                            <h3>{course.icon}</h3>
                            <h4>{course.name}</h4>
                            <p>{course.grade}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default Courses;