const { removePrefix } = require('./helpers');
module.exports = {
	siteMetadata: {
		title: 'Leo Caseiro',
		description: 'programação e desenvolvimento web (PHP, MySQL, JavaScript, jQuery, WordPress, etc)',
		url: 'https://leocaseiro.com.br/'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images'
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads'
						}
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048
						}
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static'
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: true
						}
					},
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_self',
							rel: 'nofollow'
						}
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`
			}
		},
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `leo-caseiro`
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-5498390-1',
				head: false
			}
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
					site {
						siteMetadata {
							title
							description
							url
							site_url: url
						}
					}
				}
				`,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.edges
								.map(edge => {
									return Object.assign({}, edge.node.frontmatter, {
										description: edge.node.excerpt,
										date: edge.node.frontmatter.date,
										url: site.siteMetadata.url.slice(0, -1) + removePrefix(edge.node.fields.slug),
										guid: site.siteMetadata.url.slice(0, -1) + removePrefix(edge.node.fields.slug),
										custom_elements: [{ 'content:encoded': edge.node.html }]
									});
								});
						},
						query: `
						{
							allMarkdownRemark(
								sort: { order: DESC, fields: [frontmatter___date] }
								filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
							) {
								edges {
									node {
										excerpt
										html
										fields { slug }
											frontmatter {
												title
												date
											}
										}
									}
								}
							}
						`,
						output: '/rss.xml',
						title: 'LeoCaseiro Blog',
						match: '^/blog/',
						link: 'https://feeds.feedburner.com/leocaseiro'
					}
				]
			}
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
			}
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify' // make sure to keep it last in the array
	]
};
