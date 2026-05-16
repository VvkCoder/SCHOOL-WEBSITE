import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [sending, setSending] = useState(false)
    const [status, setStatus] = useState("")

function handleSubmit(e){
  e.preventDefault()
  setSending(true)
  setStatus("")

    fetch('https://school-website-ln24.onrender.com/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => {
    if(data.success){
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus("error")
    }
    setSending(false)
  })
  .catch((error) => {
  console.error("FRONTEND ERROR:", error)
  setStatus("error")
  setSending(false)
})
}

    return(
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you!</p>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                        const value = e.target.value

                        if (/^[A-Za-z ]*$/.test(value)) {
                        setName(value)
                         }
                      }}
                        pattern="[A-Za-z ]+"
                        minLength={2}
                        maxLength={50}
                        required
                        onInvalid={(e) =>
                        e.target.setCustomValidity(
                        "Name should contain only letters"
                           )
                        }
                         onInput={(e) => e.target.setCustomValidity("")}
                        />
                    </div>

                   <div className="form-group">
                   <label>Email Address</label>
                   <input
                   type="email"
                   placeholder="Enter your email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value.trim())}
                   pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"
                   autoComplete="email"
                   spellCheck="false"
                   required
                   onInvalid={(e) =>
                   e.target.setCustomValidity(
                   "Please enter a valid email address"
                    )
                    }
                   onInput={(e) => e.target.setCustomValidity("")}
                    />
                   </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                         placeholder="Write your message"
                         rows="5"
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}
                         minLength={10}
                         maxLength={500}
                         required
                         />
                    </div>

                    {status === "success" && (
                      <p className="success-msg">
                        ✅ Message sent successfully!
                      </p>
                    )}

                    {status === "error" && (
                      <p className="error-msg">
                        ❌ Something went wrong. Try again!
                      </p>
                    )}

                    <button
                      type="submit"
                      className="submit-btn"
                      disabled={sending}
                    >
                      {sending ? "Sending... ⏳" : "Send Message "}
                    </button>

                </form>
            </div>
        </section>
    )
}
export default Contact;
