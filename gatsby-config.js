const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types');

module.exports = {
  siteMetadata: {
    title: `Jamal Dahbur`,
    description: `We believe in the future, because we believe that the required change is within our grasp, if we can refocus minds, innovate and invest accordingly.`,
    author: `Marc Fehr`,
    siteUrl: `https://tfe-energy.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Orbitron']
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W9TQVF7",
      
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
      
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
    {
      resolve:`gatsby-source-cloudinary`,
      options:{
        cloudName: 'marc-fehr-media',
        apiKey: '262922255981186',
        apiSecret: '6EMN8xsDaiIVOgSIgfyYVmUg5Pw',
        resourceType: 'video',
        prefix: `tfe/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `r2n8q1jk3a3h`,
        accessToken: `VSLNvEuJd_PD7yXIBQ8jVIVasE_YmsCCWPOvSfYd1sE`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jamal Dahbur`,
        short_name: `jamal.dahbur`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@contentful/gatsby-transformer-contentful-richtext',
      options: {
        renderOptions: {
          /*
           * Defines custom html string for each node type like heading, embedded entries etc..
           */
          renderNode: {
            // Example
            [INLINES.ASSET_HYPERLINK]: node => {
              return `<img class='custom-asset' src="${
                node.data.target.fields.file['en-US'].url
              }"/>`;
            },
            [INLINES.EMBEDDED_ENTRY]: node => {
              return `<div class='custom-entry' />${node.data.target.fields.name['en-US']}</div>`;
            },
          },
          /*
           * Defines custom html string for each mark type like bold, italic etc..
           */
          renderMark: {
            // Example
            [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`,
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
