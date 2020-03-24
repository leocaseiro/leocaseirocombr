import React from 'react'
import { Link } from 'gatsby'

import linkedin from '../img/social/linkedin.svg'
import github from '../img/social/github.svg'
import twitter from '../img/social/twitter.svg'
import slideshare from '../img/social/slideshare.svg'
import slides from '../img/social/desktop.svg'
import wordpress from '../img/social/wordpress.svg'
import stackoverflow from '../img/social/stack-overflow.svg';

const Footer = class extends React.Component {
  render() {
    return (
		<footer className="footer has-background-black has-text-white-ter">
			<div className="content has-text-centered has-background-black has-text-white-ter">
				<div className="container has-background-black has-text-white-ter">
					<div className="columns">
						<div className="column is-6">
							<section className="menu">
								<ul className="menu-list">
									<li>
										<Link to="/" className="navbar-item">
											Home
										</Link>
									</li>
									<li>
										<Link className="navbar-item" to="/contato">
											Contato
										</Link>
									</li>
									<li>
										<Link className="navbar-item" to="/sobre">
											Sobre o Autor
										</Link>
									</li>
								</ul>
							</section>
						</div>
						<div className="column is-6 social">
							<a
								target="_blank"
								rel="noopener noreferrer"
								title="twitter"
								href="https://twitter.com/leocaseiro"
							>
								<img
									className="fas fa-lg"
									src={twitter}
									alt="Twitter"
									style={{ width: '1em', height: '1em' }}
								/>
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								title="linkedin"
								href="https://linkedin.com/in/leocaseiro"
							>
								<img src={linkedin} alt="Linkedin" style={{ width: '1em', height: '1em' }} />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								title="WordPress"
								href="https://profiles.wordpress.org/leocaseiro"
							>
								<img src={wordpress} alt="WordPress" style={{ width: '1em', height: '1em' }} />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								title="github"
								href="https://github.com/leocaseiro"
							>
								<img src={github} alt="GitHub" style={{ width: '1em', height: '1em' }} />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								title="slideshare"
								href="https://slideshare.net/leocaseiro"
							>
								<img src={slideshare} alt="SlideShare" style={{ width: '1em', height: '1em' }} />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								title="slides"
								href="https://slides.com/leocaseiro"
							>
								<img src={slides} alt="Slides" style={{ width: '1em', height: '1em' }} />
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								title="stackoverflow"
								href="https://stackoverflow.com/users/3415716/leo-caseiro"
							>
								<img src={stackoverflow} alt="StackOverflow" style={{ width: '1em', height: '1em' }} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
  }
}

export default Footer
