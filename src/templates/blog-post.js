import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
			content,
			contentComponent,
			date,
			description,
			categories,
			tags,
			title,
			helmet,
			pageContext,
		}) => {
	const PostContent = contentComponent || Content;
	const { previousPagePath, nextPagePath, previousItem, nextItem } = pageContext;

			return (
				<section className="section">
					{helmet || ''}
					<div className="container content">
						<div className="columns">
							<div className="column is-10 is-offset-1">
								<h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
								<small style={{ marginBottom: `3rem` }} className="is-block mb-2">
									publicado em {date}
								</small>
								<p>{description}</p>
								<PostContent content={content} />
								{categories && categories.length ? (
									<div style={{ marginTop: `4rem` }}>
										<h4>Categorias</h4>
										<ul className="taglist">
											{categories.map(category => (
												<li key={category + `category`}>
													<Link to={`/categoria/${kebabCase(category)}/`}>{category}</Link>
												</li>
											))}
										</ul>
									</div>
								) : null}
								{tags && tags.length ? (
									<div style={{ marginTop: `4rem` }}>
										<h4>Tags</h4>
										<ul className="taglist">
											{tags.map(tag => (
												<li key={tag + `tag`}>
													<Link to={`/tag/${kebabCase(tag)}/`}>{tag}</Link>
												</li>
											))}
										</ul>
									</div>
								) : null}
							</div>
						</div>
						<div className="columns">
							{previousPagePath ? (
								<Link className="column is-6" to={pageContext.previousPagePath}>
									{previousItem.node.frontmatter.title}
								</Link>
							) : null}
							{nextPagePath ? (
								<Link className="column is-6 align-right" to={pageContext.nextPagePath}>
									{nextItem.node.frontmatter.title}
								</Link>
							) : null}
						</div>
					</div>
				</section>
			);
		};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        date={post.frontmatter.date}
        content={post.html}
        contentComponent={HTMLContent}
		description={post.frontmatter.description}
		pageContext={pageContext}
        helmet={
          <Helmet titleTemplate="%s | Leo Caseiro">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        categories={post.frontmatter.categories}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
			query BlogPostByID($pageId: String!) {
				markdownRemark(id: { eq: $pageId }) {
					id
					html
					frontmatter {
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
						title
						description
						tags
						categories
					}
				}
			}
		`;
