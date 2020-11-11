import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import layoutStyles from "../Layout/Layout.module.scss"

export const ListLink = params => {
  return (
    <li className={layoutStyles.navLinkItem}>
      <Link to={params.to}>{params.children}</Link>
    </li>
  )
}

export default ({ data }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "menu-1" }) {
        name
        menuItems {
          nodes {
            label
            url
            path
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)
  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <ul>
      {wpMenu.menuItems.nodes.map(menuItem => {
        return <ListLink to={menuItem.path}>{menuItem.label}</ListLink>
      })}
    </ul>
  ) : null
}
