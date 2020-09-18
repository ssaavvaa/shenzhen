import React from "react"
import css from "./footer.module.scss"

export default () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40667.365007883374!2d-74.01889128727211!3d40.74838662922721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25901a4127ca9%3A0xbecdcc9081d6cfdb!2sMidtown%20Manhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1600400920910!5m2!1sen!2sus"
          width="600"
          height="450"
          frameborder="0"
          allowFullscreen=""
          aria-hidden="false"
        ></iframe>
        <div></div>
        <div></div>
      </div>
    </footer>
  )
}
