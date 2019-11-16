module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Roboto","Orbitron"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-tagmanager/gatsby-browser.js'),
      options: {"plugins":[],"id":"GTM-W9TQVF7","includeInDevelopment":true,"defaultDataLayer":{"type":"object","value":{"platform":"gatsby"}}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Jamal Dahbur","short_name":"jamal.dahbur","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/favicon.jpg"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
