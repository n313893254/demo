import React from "react"

export default ({ data }) => {
  console.log(data)
  return <div>Hello World</div>
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime
        }
      }
    }
  }
`
