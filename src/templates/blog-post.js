import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import useSiteMetadata from '../components/SiteMetadata';
import { Disqus } from 'gatsby-plugin-disqus';

export const BlogPostTemplate = ({
  id,
  content,
  contentComponent,
  date,
  categories,
  tags,
  title,
  helmet,
  slug,
}) => {
	const PostContent = contentComponent || Content

	// Disqus comments
	const { url } = useSiteMetadata();
	const disqusConfig = {
		url: `${url + slug}`,
		identifier: id,
		title,
	};

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
					<div className="column is-10 is-offset-1">
						<Disqus config={disqusConfig} />
					</div>
				</div>
			</div>
		</section>
  );
}

BlogPostTemplate.propTypes = {
  id: PropTypes.number,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
  slug: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
        date={post.frontmatter.date}
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Leo Caseiro">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        slug={post.frontmatter.slug}
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
			query BlogPostByID($id: String!) {
				markdownRemark(id: { eq: $id }) {
					id
					html
					frontmatter {
						date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
						title
						tags
						categories
						slug
					}
				}
			}
		`;
