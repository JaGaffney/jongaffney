import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  // const urlParams = new URLSearchParams(
  //   typeof window !== "undefined" && window.location.search
  // )
  // const emailParamDefault = urlParams.get("email")

  // query param didnt work when using netlify forms
  const localEmail = localStorage.getItem("email")
  let emailDefault = localEmail
  if (localEmail === null) {
    emailDefault = ""
  }

  const [contactEmail, setContactEmail] = useState(emailDefault)
  localStorage.removeItem("email")

  // need data validation
  return (
    <Layout>
      <SEO title="Contact" />
      <div className="generic-container">
        <div className="contact-form__container">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/contact/thank-you"
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="contact-form__information">
              <label htmlFor="lname">
                Name or company name <span>*</span>
              </label>
              <input id="lname" type="text" name="name" required />

              <div className="contact-form__information-inner">
                <div>
                  <label htmlFor="lemail">
                    Email <span>*</span>
                  </label>
                  <input
                    id="lemail"
                    type="email"
                    name="email"
                    required
                    onChange={e => setContactEmail(e.target.value)}
                    value={contactEmail}
                  />
                </div>
              </div>
            </div>

            <hr className="contact-form__seperator" />

            <div className="contact-form__message">
              <label htmlFor="lsubject">
                Subject <span>*</span>
              </label>
              <input id="lsubject" type="text" name="subject" required />

              <label htmlFor="lmessage">
                Message <span>*</span>
              </label>
              <textarea
                id="lmessage"
                name="message"
                placeholder="Please enter your enquiry and I will get in touch."
                rows="6"
                cols="50"
              ></textarea>
            </div>

            <p style={{ textAlign: "right" }}>
              <button className="btn-submit" type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
