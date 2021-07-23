const path = require(`path`)
const slash = require(`slash`)

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
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
   if (result.errors) {
     throw new Error(result.errors)
   }
  console.log(JSON.stringify(result, null, 4))
}

// const pageTemplate = path.resolve(`./src/templates/page.js`)
// result.data.allMarkdownRemark.edges.forEach((edge) => {
//   createPage({
//     path: `/${edge.node.slug}/`,
//     component: slash(pageTemplate),
//   })
// })
