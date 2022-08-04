import React from "react"
import Profile from "./components/Profile"
import Content from "./components/Content"
import Footer from "./components/Footer"
import './App.scss'
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquareGithub } from "@fortawesome/free-brands-svg-icons"

library.add(faEnvelope, faLinkedin, faSquareFacebook, faSquareInstagram, faSquareGithub)

export default function App () {
  return (
    <div className="container">
      <Profile />
      <Content />
      <Footer />
    </div>
  )
}