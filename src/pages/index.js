import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <>
      <Header>Hello world!</Header>
      <p>
        <Link to="/contact">Click here</Link> for more details!
      </p>
      <Link to="/about">About Us!</Link>
      <img
        src="https://source.unsplash.com/random/800X400"
        alt="randomg images"
      />
    </>
  )
}
