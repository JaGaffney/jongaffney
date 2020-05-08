import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const ContactBanner = () => {
  const [contactEmail, setContactEmail] = useState("")

  // useEffect(() => {
  //   if (contactEmail !== "") {
  //     sessionStorage.setItem("email", contactEmail)
  //     //windowGlobal.sessionStorage.setItem("email", contactEmail)
  //   }
  // }, [contactEmail])

  return (
    <div className="contact-banner-container" id="landing-contact">
      <span>If your in need of my services</span>
      <form>
        <input
          placeholder="john-smith@email.com.au"
          onChange={e => setContactEmail(e.target.value)}
          value={contactEmail}
        ></input>
        <Link to={`/contact?email=${contactEmail}`}>Get in touch</Link>
      </form>
    </div>
  )
}

export default ContactBanner
