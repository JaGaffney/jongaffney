import React, { useState, useEffect } from "react"

const ContactBanner = () => {
  const [contactEmail, setContactEmail] = useState("")

  useEffect(() => {
    if (contactEmail !== "") {
      sessionStorage.setItem("email", contactEmail)
    }
  }, [contactEmail])

  return (
    <div className="contact-banner-container" id="landing-contact">
      <span>If your in need of my services</span>
      <form action={`/contact`} method="POST">
        <input
          placeholder="john-smith@email.com.au"
          onChange={e => setContactEmail(e.target.value)}
          value={contactEmail}
        ></input>
        <button>Get in touch</button>
      </form>
    </div>
  )
}

export default ContactBanner
