const { resolve } = require(`path`)
const path = require(`path`)
const glob = require(`glob`)
const chunk = require(`lodash/chunk`)
const { dd } = require(`dumper.js`)

const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const templates = getTemplates()

  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(`
    query ALL_CONTENT_NODES {
      allWpContentNode(
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
  `)

  const contentTypeTemplateDirectory = "./src/templates/single"
  const contentTypeTemplates = templates.filter(path =>
    path.includes(contentTypeTemplateDirectory)
  )

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { nodeType, id, uri } = node
      const templatePath = `${contentTypeTemplateDirectory}/${nodeType}.js`
      const contentTypeTemplate = contentTypeTemplates.find(
        path => path === templatePath
      )
      if (!contentTypeTemplate) {
        return
      }
      await actions.createPage({
        component: resolve(contentTypeTemplate),
        path: uri,
        context: {
          id,
        },
      })
    })
  )
}
