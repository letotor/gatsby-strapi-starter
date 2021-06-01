let facebook_pixel = ''
let gtm = '1234'

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `DGwebcreation`,
    description: `Créacteur, intégrateur et maintenance de votre site web `,
    author: `Victor de GERMAIN`,
    siteUrl: `https://cv-vgwebcreation.netlify.app`,
    phone: "06 16 80 17 46",
    fax: "",
    address: "1 Plaisance 44260 Lavau sur loire",
    email: "v.degermain@gmail.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-smoothscroll`,

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          quality: 100,
          placeholder: "blurred",
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: gtm,
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: facebook_pixel,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "./src/assets/images/gatsby-icon.png",
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // ssr: false
        // displayName: false,
        // minify: false
        // see docs
      },
    },

    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`article`, `user`],
        contentTypes: [`jobs`, `formations`],
        //If using single types place them in this array.
        //  singleTypes: [`home-page`, `top-left-menu`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },
  ],
}
