import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'

const BlogIndex = props => {
	const { pageContext } = props;
	const { previousPagePath, nextPagePath } = pageContext;

	return (
		<div>
			{props.data.posts.edges.map(edge => (
				<pre>{JSON.stringify(edge.node, null, 2)}</pre>
			))}
			<div>
				{previousPagePath ? <Link to={previousPagePath}>Previous</Link> : null}
				{nextPagePath ? <Link to={nextPagePath}>Next</Link> : null}
			</div>
		</div>
	);
};

BlogIndex.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default BlogIndex;

export const pageQuery = graphql`
			query($skip: Int!, $limit: Int!) {
				posts: allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					skip: $skip
					limit: $limit
					filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
				) {
					edges {
						node {
							excerpt(pruneLength: 280)
							fields {
								slug
							}
							frontmatter {
								date(formatString: "DD MMMM, YYYY")
								title
							}
						}
					}
				}
			}
		`;
