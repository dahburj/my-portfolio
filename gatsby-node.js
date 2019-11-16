const path = require(`path`);
const slash = require(`slash`);
/*exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /react-awesome-slider/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}*/
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	// we use the provided allContentfulProject query to fetch the data from Contentful
	return graphql(
		`
      {
        allContentfulContentfulProject {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `
	).then(result => {
		if (result.errors) {
			console.log("Error retrieving contentful data", result.errors);
		}
		// Resolve the paths to our template
		const projectTemplate = path.resolve("./src/templates/project.js");
		// Then for each result we create a page.
		
		result.data.allContentfulContentfulProject.edges.forEach(edge => {
			createPage({
				path: `/project/${edge.node.slug}/`,
				component: slash(projectTemplate),
				context: {
					slug: edge.node.slug,
					id: edge.node.id
				}
			});
		});
		
	})
		.catch(error => {
			console.log("Error retrieving contentful data", error);
		});
};
