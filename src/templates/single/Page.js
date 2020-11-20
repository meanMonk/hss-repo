import { graphql } from "gatsby"
import React from "react"
import Menu from "../../components/menu/menu"
export default ({ data, id }) => {
  return (
    <div className="container">
      <Menu menu={data.menu} />
      <h1>{data.page.title}</h1>
    </div>
  )
}

export const query = graphql`
  query page($id: String!) {
    page: wpPage(id: { eq: $id }) {
      title
      content
    }
    menu: allWpContentNode(
      sort: { fields: modifiedGmt, order: DESC }
      filter: { nodeType: { ne: "MediaItem" } }
    ) {
      nodes {
        nodeType
        uri
        id
      }
    }
  }
`
