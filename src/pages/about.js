import { Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout/Layout"

export default function About({ data }) {
  return (
    <Layout>
      <h2>About us!</h2>
      <Link to="/">Home!</Link>
    </Layout>
  )
}
