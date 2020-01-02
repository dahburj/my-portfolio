const path = require('path')
const pkg = require(`./package.json`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://jdahbur.com`,
    title: "Jamal Dahbur's Portfolio Single Page",
    author: "Jamal Dahbur",
    description: "Jamal Dahbur's Portfolio Single Page App using Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-tslint',
    `gatsby-plugin-typescript`,
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, '.'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        images: path.join(__dirname, `src/images`)
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: false,
        sourceMap: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [path.join(__dirname, `src/assets/scss/main.scss`)]
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
  ],
}
