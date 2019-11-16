const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/templates/project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/index.js"))),
  "component---src-pages-our-work-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/our-work.js"))),
  "component---src-pages-scrollmagic-components-lowres-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/scrollmagic/components-lowres.js"))),
  "component---src-pages-scrollmagic-components-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/scrollmagic/components.js"))),
  "component---src-pages-scrollmagic-sectionwipes-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/scrollmagic/sectionwipes.js"))),
  "component---src-pages-scrollmagic-sticky-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/scrollmagic/sticky.js"))),
  "component---src-pages-videos-js": hot(preferDefault(require("/Users/jamal/node-projects/tfe-energy/src/pages/videos.js")))
}

