/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `HSS report panel!`,
    author: `Sahil kashetwar`,
    email: `sahilkashetwar24@gmail.com`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    /*
     * Gatsby's data processing layer begins with “source”
     * plugins. Here the site sources its data from WordPress.
     */
    // highlight-start
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        /*
         * The full URL of the WordPress site's GraphQL API.
         * Example : 'https://www.example-site.com/graphql'
         */
        hostingWPCOM: false,
        url: `http://mes-society.gigassociates.com/graphql`,
        auth: {
          htaccess_user: "admin",
          htaccess_pass: "mes_society@123",
          htaccess_sendImmediately: false,
        },
        includedRoutes: ["/posts", "/pages", "/categories", "/tags", "/users"],
      },
    },
  ],
}
