import React from "react"
import layoutStyles from "./Layout.module.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Header from "../header"
export const ListLink = params => {
  return (
    <li className={layoutStyles.navLinkItem}>
      <Link to={params.to}>{params.children}</Link>
    </li>
  )
}

export function Layout({ children }) {
  const {
    site: {
      siteMetadata: { title, author, email },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            email
          }
        }
      }
    `
  )

  return (
    <div className={layoutStyles.layout}>
      <Header>
        <Link to="/">
          <h3>{title || "Hss report!"}</h3>
        </Link>
        <ul className={layoutStyles.navLinks}>
          <ListLink to="/files">File</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </Header>
      {children}
      <footer style={{ position: "fixed", bottom: 0, marginBottom: "5rem" }}>
        <small style={{ float: "right" }}>
          {author}! ({email})
        </small>
      </footer>
    </div>
  )
}
