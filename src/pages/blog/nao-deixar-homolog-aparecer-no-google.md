---
templateKey: blog-post
title: "Não deixar Homolog aparecer no Google"
author: admin
date: 2011-09-18T21:30:02+10:00
categories:
  - "Tutorial"
tags:
  - "desenvolvimento"
  - "ferramenta"
  - "google"
  - "homolog"
  - "htaccess"
  - "seo"
slug: nao-deixar-homolog-aparecer-no-google
draft: false
meta_title: "Não deixar Homolog aparecer no Google"
---

Muitos sites que eu desenvolvo precisam de um servidor de Homolog em um domínio/sudomínio. Assim, o cliente pode testar de qualquer lugar que tenha internet.

Mas já aconteceu comigo(com você provavelmente também) algumas vezes do cliente buscar seu site no Google, e não encontrar o site dele no topo(até porque está em Homolog). Mas...como meus sites são bem customizados para posicionamentos em sites de busca(SEO), o site de Homolog (normalmente `http://nomedocliente.leocaseiro.com.br`) aparecerem no Google.

É isso mesmo! Imagina o cliente encontrar o site que ainda está desenvolvendo. Pior...e se o cliente(usuário) do cliente encontrar o site em Homolog? É um problema que pode até entrar em ação jurídica.

E a razão deste post é exatamente essa. Previnir que isso aconteça.

Saiba então, como restringir o seu site em desenvolvimento(homologação) dos resultados de busca do Google.

Para isso, iremos utilizar o **Robots.txt** e uma restrição por Senha do Domínio, via **.htaccess** e **.htpasswd** conhecida como "Htaccess Authentication", em português, "Autentição por Htaccess".

### Robots.txt

Para ninguém encontrar o Hooolog no Google(Yahoo, Bing, Ask, etc), basta utilizar um arquivo muito conhecido pelos Analistas SEO. Com o Robots.txt, você pode bloquear os sites de busca de seguirem(nofollow) o seu site. Ou seja, que ele não fuçe navegue entre os links e aumente seu Banco de Dados e assim, não Indexar(noindex) os links do seu ambiente de homologação.

Salve como _robost.txt_ e deixe este arquivo na raiz(_public, www, httpdocs, etc_) do Servidor:
```
User-agent: *
Disallow: /
```

> Para conhecer mais sobre os Robots.txt, acesse o site [www.robotstxt.org](http://www.robotstxt.org/robotstxt.html)

### Htaccess Authentication

Mesmo que o site não esteja no Google, pode acontecer de algum usuário encontrar seu site de Homologação. Seja por um teste de Share de Twitter/Facebook que o analista de QA faz(twitter sem querer), ou de qualquer maneira que acidentalmente chegue à algum usuário.<br>
Por isso, recomendo que você bloqueie o acesso por usuário e senha. E a melhor maneira e a mais fácil é pelos arquivos **.htaccess** e **.htpasswd**

Adicione a descrição abaixo no seu arquivo _.htaccess_(geralmente no topo dele), mas altere o `/path/to/.htpasswd` para o [path](http://www.htaccesstools.com/articles/full-path-to-file-using-php/) específico do seu ambiente.
```
AuthType Basic
AuthName "Acesso restrito"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

> Para descobrir o seu path via PHP, basta dar um `<?php echo dirname(__FILE__);?>`.
> Para facilitar, existe uma Ferramenta do tipo Wizzard que pode gerar esses arquivos pra você.
> Acesse o site [htaccesstools](http://www.htaccesstools.com/htaccess-authentication/)

Não basta colocar uma restrição se você não souber a senha, certo?

Então abaixo, vou lhe mostrar um exemplo de um _.htpasswd_ gerado com **admin** e senha **1q2w3e4r**:
```
admin:$apr1$Gy3X0...$nmRbOnEabkNmH87lfZz2u/
```

> Como você ter percebido, é um tipo de hash bem diferente. Para gerá-lo, acesse o site htaccesstools e utilize o [Htpasswd Generator](http://www.htaccesstools.com/htpasswd-generator/)

Espero que ajude. Qualquer dúvida comenta ae!
