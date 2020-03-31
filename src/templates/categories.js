import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { removePrefix } from '../helpers';

class CategoriaRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={removePrefix(post.node.fields.slug)}>
			<Link to={removePrefix(post.node.fields.slug)}>
				<h2 className="is-size-2">{post.node.frontmatter.title}</h2>
			</Link>
		</li>
	));
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const categoryHeader = `${totalCount} artigo${
      totalCount === 1 ? '' : 's'
    } em “${category}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${category} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-4 is-bold-light">{categoryHeader}</h3>
                <ul className="categorylist">{postLinks}</ul>
                <p>
                  <Link to="/categorias/">Ver todas as categorias</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CategoriaRoute

export const categoryPageQuery = graphql`
  query CategoriaPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
