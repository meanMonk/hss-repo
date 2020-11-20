import { Link } from "gatsby"
import React from "react"
import layoutStyles from "../Layout/Layout.module.scss"

export const ListLink = params => {
  return (
    <li className={layoutStyles.navLinkItem}>
      <Link to={params.to}>{params.children}</Link>
    </li>
  )
}

export default props => {
  return !!props && !!props.menu && !!props.menu.nodes ? (
    <ul className="menu">
      {props.menu.nodes.map(menuItem => {
        return (
          <ListLink to={menuItem.uri}>
            {menuItem.uri.replace(new RegExp("/", "g"), " ")}
          </ListLink>
        )
      })}
    </ul>
  ) : (
    <>null</>
  )
}
