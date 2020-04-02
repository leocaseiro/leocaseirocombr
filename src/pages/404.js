import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
	<Layout>
		<section className="section section--gradient">
			<div className="container">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="section">
							<h2 className="title is-size-3 has-text-weight-bold is-bold-light">
								Opa! Esta página não pode ser encontrada.
							</h2>
							<div className="content">Parece que não foi encontrado nada neste local.</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default NotFoundPage
