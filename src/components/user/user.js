import React from "react"
import userStyles from "./user.module.scss"
export function User(props) {
  return (
    <div className={userStyles.user}>
      <img
        className={userStyles.avatar}
        src="https://source.unsplash.com/user/erondu/200x200"
        alt={props.name}
      />
      <div className={userStyles.description}>
        <h2 className={userStyles.username}>{props.username}</h2>
        <p className={userStyles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
  )
}
