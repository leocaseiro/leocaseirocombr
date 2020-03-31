import React from 'react'
import { navigate } from 'gatsby-link'
import Helmet from 'react-helmet';
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
		<Layout>
			<Helmet titleTemplate="%s | Leo Caseiro">
				<title>Contato</title>
			</Helmet>
			<section className="section">
				<div className="container">
					<div className="content">
						<h1>Contato</h1>
						<div>
							<p>
								<strong>Favor leia antes de me enviar um contato!</strong>
							</p>
							<p>
								Aqui é o <strong>Leo Caseiro</strong> e eu adoraria receber um contato seu, porém eu
								estou focado em diversos projetos aqui na{' '}
								<a
									title="Sydney, Austrália"
									href="http://pt.wikipedia.org/wiki/Sydney"
									rel="noopener noreferrer"
									target="_blank"
								>
									Austrália
								</a>{' '}
								e não estou conseguindo ajudar a comunidade como eu gostaria.
							</p>
							<p>
								Caso precise de ajuda com WordPress, acesse o{' '}
								<a
									title="Fórum Oficial do WordPress em Português"
									href="http://br.forums.wordpress.org/"
									rel="noopener noreferrer"
									target="_blank"
								>
									Fórum oficial
								</a>
								! Tem muita gente que ajuda por lá mais rápido que eu. Quem sabe até a sua dúvida já foi
								respondida por lá?
							</p>
							<p>
								Se realmente decidir enviar um pedido de ajuda, me envie no mínimo, o Link do Seu post
								no{' '}
								<a
									title="Fórum Oficial do WordPress em Poruguês"
									href="http://br.forums.wordpress.org/"
									rel="noopener noreferrer"
									target="_blank"
								>
									Fórum do WordPress
								</a>
								&nbsp;com o seu código no{' '}
								<a
									title="pastebin"
									href="http://pastebin.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									pastebin
								</a>
								, vai me ajudar muito.
							</p>
							<p>
								Leia:{' '}
								<a
									href="http://imasters.com.br/gerencia-de-ti/mercado/por-que-voce-deveria-parar-de-fazerresponder-perguntas-tecnicas-via-redes-sociais/"
									target="_blank"
									rel="noopener noreferrer"
								>
									http://imasters.com.br/gerencia-de-ti/mercado/por-que-voce-deveria-parar-de-fazerresponder-perguntas-tecnicas-via-redes-sociais/
								</a>
							</p>
							<p>
								Abraços <br />
								<br /> <br />
							</p>
						</div>
						<form
							name="contato"
							method="post"
							action="/contato/obrigado/"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							onSubmit={this.handleSubmit}
						>
							{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
							<input type="hidden" name="form-name" value="contato" />
							<div hidden>
								<label>
									Não preencha: <input name="bot-field" onChange={this.handleChange} />
								</label>
							</div>
							<div className="field">
								<label className="label" htmlFor={'name'}>
									Seu nome (obrigatório)
								</label>
								<div className="control">
									<input
										className="input"
										type={'text'}
										name={'name'}
										onChange={this.handleChange}
										id={'name'}
										required={true}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor={'email'}>
									Seu e-mail (obrigatório)
								</label>
								<div className="control">
									<input
										className="input"
										type={'email'}
										name={'email'}
										onChange={this.handleChange}
										id={'email'}
										required={true}
									/>
								</div>
							</div>
							<div className="field">
								<label className="label" htmlFor={'message'}>
									Sua mensagem
								</label>
								<div className="control">
									<textarea
										className="textarea"
										name={'message'}
										onChange={this.handleChange}
										id={'message'}
										required={true}
									/>
								</div>
							</div>
							<div className="field">
								<button className="button is-link" type="submit">
									Enviar
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</Layout>
	);
  }
}
