import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogSingle = props => {
	const { pageContext, data } = props;
	const { previousPagePath, nextPagePath, previousItem, nextItem } = pageContext;
	const { post } = data;

	return (
		<div>
			<h1>{post.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.html }} />
			<div>
				{previousPagePath ? (
					<Link to={pageContext.previousPagePath}>{previousItem.node.frontmatter.title}</Link>
				) : null}
				{nextPagePath ? <Link to={pageContext.nextPagePath}>{nextItem.node.frontmatter.title}</Link> : null}
			</div>
		</div>
	);
};

export default BlogSingle;

export const pageQuery = graphql`
	query($pageId: String!) {
		post: markdownRemark(id: { eq: $pageId }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
