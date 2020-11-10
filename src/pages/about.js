import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function functionName(params) {
  return (
    <>
      <Header title={"Hello 123 !"}></Header>
      <Link to="/">Home!</Link>
      <h5>I am about us page!</h5>
    </>
  )
}
