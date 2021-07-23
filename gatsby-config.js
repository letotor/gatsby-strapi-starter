let facebook_pixel = ''
let gtm = '1234'

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    google: `bckrXFVr91bgwp1o8wdtcaTdpzmp3Jq7vEKSyP4Wy9s`,
    title: `DGwebcreation`,
    description: `Créacteur, intégrateur et maintenance de votre site web `,
    author: `Victor de GERMAIN`,
    siteUrl: `https://gatsbycvvgwebcreation.gtsb.io/`,
    phone: "06 XX XX XX 46",
    fax: "",
    address: "Lavau sur loire",
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
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
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
        // ssr: true,
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
        singleTypes: [`header`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: "",
          password: "",
        },
      },
    },

    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
        // audience: process.env.AUTH0_AUDIENCE, // Optional
        // responseType: process.env.AUTH0_RESPONSE_TYPE, // Optional
        // scope: process.env.AUTH0_SCOPE, // Optional
        // callbackPath: "/auth/callback", // Optional
      },
    },
  ],
}
