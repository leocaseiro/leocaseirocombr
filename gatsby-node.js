const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { paginate, createPagePerItem } = require('gatsby-awesome-pagination');
const { removePrefix } = require('./helpers');


exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	// We return a promise immediately
	return new Promise((resolve, reject) => {
		// Start by creating all the blog pages
		const blogPost = path.resolve('./src/templates/blog-post.js');
		const blogIndex = path.resolve('./src/templates/blog-index.js');
		resolve(
			graphql(
				`
					{
						allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
							edges {
								node {
									id
									fields {
										slug
									}
									frontmatter {
										title
										categories
										tags
										templateKey
									}
								}
							}
						}
					}
				`
			).then(result => {
				if (result.errors) {
					result.errors.forEach(e => console.error(e.toString()));
					return Promise.reject(result.errors);
				}

				// Get an array of posts from the query result
				const blogPosts = _.get(result, 'data.allMarkdownRemark.edges');

				const posts = blogPosts.map(edge => {
					edge.node.fields.slug = removePrefix(edge.node.fields.slug);
					return edge;
				});

				// Create the blog index pages like `/blog`, `/blog/2`, `/blog/3`, etc.
				// The first page will have 3 items and each following page will have 10
				// blog posts and a link to the next and previous pages.
				paginate({
					createPage,
					items: posts,
					component: blogIndex,
					itemsPerPage: 10,
					itemsPerFirstPage: 3,
					pathPrefix: '/blog',
				});

				// Create one page per blog post, with a link to the previous and next
				// blog posts.
				createPagePerItem({
					createPage,
					items: posts,
					component: blogPost,
					itemToPath: 'node.fields.slug',
					itemToId: 'node.id',
				});
			})
		);
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
