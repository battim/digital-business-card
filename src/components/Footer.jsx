import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer () {
  return (
    <div className="footer">
      <nav className="footer--nav">
        <a href="https://www.facebook.com/battimchadwick" target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-facebook" /></a>
        <a href="https://www.instagram.com/battim3c/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-instagram" /></a>
        <a href="https://www.github.com/battim" target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a>
      </nav>
    </div>
  )
}