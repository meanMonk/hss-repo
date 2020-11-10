import React from "react"

export default function Header(params) {
  return <h1>{params.title || params.children}</h1>
}
