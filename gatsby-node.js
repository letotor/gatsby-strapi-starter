module.exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              layout
              Title
              Date
            }
            html
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 4))
}

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === "MarkDownRemark") {
//     console.log(JSON.stringify(node, undefined, 4))
//   }
// }
