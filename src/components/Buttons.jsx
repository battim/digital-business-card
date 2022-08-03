import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Buttons () {
  return (
    <div className="buttons">
      <a href="mailto://chadwick.tim.81@gmail.com"><FontAwesomeIcon icon="fa-solid fa-envelope" />Email</a>
      <a href="https://www.linkedin.com/in/timchadwick"><FontAwesomeIcon icon="fa-brands fa-linkedin" />LinkedIn</a>
    </div>
  )
}