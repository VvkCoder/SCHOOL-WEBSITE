import { useState } from 'react'
import './AdmissionModal.css'

function AdmissionModal({ onClose }) {
  const [parentName, setParentName] = useState("")
  const [childName, setChildName] = useState("")
  const [mobile, setMobile] = useState("")
  const [grade, setGrade] = useState("")
  const [board, setBoard] = useState("")
  const [city, setCity] = useState("")
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus("")

    try {
            
      const response = await fetch("https://school-website-ln24.onrender.com/send-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          parentName,
          childName,
          mobile,
          grade,
          board,
          city
        })
      })

      const data = await response.json()

      if(data.success){
        setStatus("success")
        setParentName("")
        setChildName("")
        setMobile("")
        setGrade("")
        setBoard("")
        setCity("")
      } else {
        setStatus("error")
      }

    } catch(error) {
      console.error(error)
      setStatus("error")
    }

    setSending(false)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-left">
          <p className="modal-tag">— ADMISSIONS 2026-27</p>
          <h2>Begin Your Child's <span>Journey</span></h2>
          <p className="modal-desc">Admissions are now open for 2026-27.
          Follow these simple steps to secure your child's place.</p>

          <div className="modal-steps">
            <div className="step">
              <div className="step-num">1</div>
              <div>
                <h4>Submit Enquiry</h4>
                <p>Fill in the form with your child's details.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div>
                <h4>Campus Visit</h4>
                <p>Schedule a school tour with our counsellors.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div>
                <h4>Submit Documents</h4>
                <p>Provide birth certificate and school records.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div>
                <h4>Confirm & Join</h4>
                <p>Complete fee payment and receive welcome kit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-right">
          <h3>Enquire Now</h3>
          <p className="modal-subtitle">We'll contact you within 24 hours</p>

          <form onSubmit={handleSubmit}>

            <div className="modal-form-group">
              <label>PARENT / GUARDIAN NAME</label>
              <input
              type="text"
              placeholder="Your full name"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
              minLength={2}
              maxLength={50}
              required
              onInvalid={(e) =>
              e.target.setCustomValidity(
              "Parent name should contain only letters"
               )
               }
               onInput={(e) => e.target.setCustomValidity("")}
               />
            </div>

            <div className="modal-row">
              <div className="modal-form-group">
                <label>CHILD'S NAME</label>
                <input
                 type="text"
                 placeholder="Child's name"
                 value={childName}
                 onChange={(e) => setChildName(e.target.value)}
                 pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                 minLength={2}
                 maxLength={50}
                 required
                 onInvalid={(e) =>
                 e.target.setCustomValidity(
                 "Child name should contain only letters"
                )
             }
                 onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <div className="modal-form-group">
                <label>GRADE APPLYING FOR</label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  required
                >
                  <option value="">Select Grade</option>
                  <option>Grade 6</option>
                  <option>Grade 7</option>
                  <option>Grade 8</option>
                  <option>Grade 9</option>
                  <option>Grade 10</option>
                  <option>Grade 11</option>
                  <option>Grade 12</option>
                </select>
              </div>
            </div>

            <div className="modal-row">
              <div className="modal-form-group">
                <label>MOBILE NUMBER</label>
                <input
                 type="tel"
                 placeholder="+91 XXXXX XXXXX"
                 value={mobile}
                 onChange={(e) => {
                 const value = e.target.value

                 if (/^\d{0,10}$/.test(value)) {
                 setMobile(value)
             }
    }}
                minLength={10}
                maxLength={10}
                pattern="[0-9]{10}"
                required
                onInvalid={(e) =>
                e.target.setCustomValidity(
                "Please enter a valid 10-digit mobile number"
              )
              }
                onInput={(e) => e.target.setCustomValidity("")}
                 />
              </div>
              <div className="modal-form-group">
                <label>BOARD PREFERENCE</label>
                <select
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  required
                >
                  <option value="">Select Board</option>
                  <option>CBSE</option>
                  <option>ICSE</option>
                  <option>State Board</option>
                  <option>IB</option>
                </select>
              </div>
            </div>

            <div className="modal-form-group">
              <label>PREFERRED CITY</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="">Select City</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Pune</option>
                <option>Bangalore</option>
              </select>
            </div>

            {status === "success" && (
              <p className="success-msg">
                ✅ Enquiry sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="error-msg">
                ❌ Something went wrong. Try again!
              </p>
            )}

            <button
              type="submit"
              className="modal-submit"
              disabled={sending}
            >
              {sending ? "Sending... ⏳" : "Submit Enquiry "}
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}
export default AdmissionModal;
