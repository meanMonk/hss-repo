import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout/Layout"

const files = ({ data }) => {
  const { edges } = data.allFile
  console.log(edges)
  return (
    <Layout>
      <h2>File System use the GraphQl inteligence!</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Extension</th>
            <th>BirthTime</th>
          </tr>
        </thead>
        <tbody>
          {edges &&
            edges.map(item => {
              const { node: file } = item
              return (
                <tr>
                  <td>{file.name}</td>
                  <td>{file.prettySize}</td>
                  <td>{file.extension}</td>
                  <td>{file.birthTime}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile {
      edges {
        node {
          prettySize
          name
          accessTime
          relativePath
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default files
