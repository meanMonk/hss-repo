import React from "react"

import headerStyles from "./header.module.scss"

export default function Header(params) {
  return (
    <div className={headerStyles.header}>{params.title || params.children}</div>
  )
}
