---
templateKey: blog-post
title: "Tudo sobre utilizar Permalinks no Wordpress"
author: admin
date: 2009-05-20T10:46:48+10:00
categories:
  - "Tutorial"
tags:
  - "htaccess"
  - "seo"
  - "wordpress"
slug: permalinks-wordpress
draft: false
meta_title: "Tudo sobre utilizar Permalinks no Wordpress"
---

Acompanho muitos feeds de Blogs e a maioria deles é em Wordpress.
Percebo que alguns blogueiros, por não conhecerem a simplicidade de utilizarem esta função no Wordpress, não utilizam URL Amigáveis.

Para quem ainda não conhece, **URL Amigáveis** são aquelas URLs fáceis de serem decoradas. Onde deixamos de utilizar aquelas variáveis via GET que deixam a URL confusa e poluída. Ainda por cima dificulta a indexação do Google.

Se você precisa de um motivo para alterar os Links Permanentes do seu Wordpress, saiba que seus leitores poderão facilmente decorar as URLs de seus posts ou de suas categorias e até mesmo dos seus ficheiros de arquivos antigos.
Além de possuir influência em SEO, uma vez que o Google e os demais buscadores pode indexar as URLs em maior relevância separadas por diretórios(URL amigáveis) ao invés de parâmetros enviados via GET.

Agora vou ensinar como trocar sua URL de:
_http://www.meusite.com.br/?p=123_
para
_http://www.meusite.com.br/nome-do-meu-post_

No Tutorial, estou utilizando a **versão 2.7 do Wordpress**, mas seguindo minhas orientações você conseguirá alterar em **qualquer versão do Wordpress**.

> Antes de mais nada, você precisa habilitar o MOD REWRITE do APACHE. Mas a maioria dos servidores de hospedagem já habilitam essa opção por padrão. Aconselho a utilização de servidores LINUX para o seu Wordpress com Apache2.

Após estar Logado em seu wp-admin, clique em Configurações(em algumas traduções você irá clicar em Opções).

![Menu Configurações do Wordpress 2.7](./menu-configuracoes-wordpress1.jpg "Menu de configurações do Wordpress")

\[caption id="attachment\_485" align="alignnone" width="158" caption="Escolha Links Permanentes (Permalinks)"\]![Escolha Links Permanentes no menu Configurações](./links-permanentes-menu-configuracoes-wp.jpg "Links Permanentes no Menu Configurações do Wordpress")\[/caption\]

Perceba que o padrão é a opção: _http://www.meusite.com.br/?p=123_ :
[![Links Permanentes - Padrão ?p=123](./permalinks-wp-configuracoes-300x131.jpg "Links Permanentes - Padrão ?p=123")](http://leocaseiro.com.br/wp-content/uploads/2009/05/permalinks-wp-configuracoes.jpg "Links Permanentes - Padrão ?p=123")

Você pode escolher a opção **Mês e nome** ou **Dia e nome**, ideais para blogs de notícias, em que a data é importante. E útil deixá-la na própria URL. Assim, o usuário poderá identificar se o post é antigo ou atual.
[![Permalink Mês e Nome pelo Wordpress](./permalink-mes-nome-wordpress-300x115.jpg "Permalink Mês e Nome pelo Wordpress")](http://leocaseiro.com.br/wp-content/uploads/2009/05/permalink-mes-nome-wordpress.jpg "Permalink Mês e Nome pelo Wordpress")

Perceba, que ao selecionar as opções você pode alterar a Estrutura Personalizada.
[![Permalinks Personalizados no Wordpress](./permalinks-excluir-ano-mes-300x119.jpg "Permalinks Personalizados no Wordpress")](http://leocaseiro.com.br/wp-content/uploads/2009/05/permalinks-excluir-ano-mes.jpg "Permalinks Personalizados no Wordpress")

A **minha recomendação é deixar apenas _/%postname%/
_**[![Permalink recomendado para o Wordpress](./permalink-ideal-wordpress-300x116.jpg "Permalink recomendado para o Wordpress")](http://leocaseiro.com.br/wp-content/uploads/2009/05/permalink-ideal-wordpress.jpg "Permalink recomendado para o Wordpress")

Antigamente, quando utilizava o domínio _.com_, deixei os permalinks com _.html_. Mas com o tempo percebi que atrapalha a leitura e também dificulta a memorização.
Não pense que a indexação do Google para SEO é melhor com _.html_ que não é verdade.
[![Permalinks com .html no Wordpress](./permalink-html-wordpress-300x115.jpg "Permalinks com .html no Wordpress")](http://leocaseiro.com.br/wp-content/uploads/2009/05/permalink-html-wordpress.jpg "Permalinks com .html no Wordpress")

Você também pode incluir o nome da **categoria na URL do post**. Muito útil para blogs que possuem muitos assuntos. Imagine que você tenha uma seção de esportes e outra de música.
E queira fazer um post sobre o Roberto Carlos(cantor ou jogador?)
Não seria interessante as URLs:
_http://www.meusite.com.br/esportes/roberto-carlos/_
e
_http://www.meusite.com.br/musica/roberto-carlos/_
Para isso, basta inserir, a variável **%category%** antes da barra do seu **/%postname%/**, conforme o meu exemplo:
[![Permalinks com a Categoria e Nome do Post no Wordpress](./permalink-categoria-nome-post-wp-300x117.jpg "Permalinks com a Categoria e Nome do Post no Wordpress")](http://leocaseiro.com.br/wp-content/uploads/2009/05/permalink-categoria-nome-post-wp.jpg "Permalinks com a Categoria e Nome do Post no Wordpress")

Se quiser customizar sua URL com o nome do autor do post, utilize **%author%**

Mais customizações pela Documentação do Wordpress sobre [Using Permalinks](http://codex.wordpress.org/Using_Permalinks "Usando Permalinks do Wordpress")

<span style="color: #800000;">Muitos blogueiros alteram o nome de suas URLs e acabam se esquecendo de “traduzir” **o category**(valor padrão para categorias) **para categoria**. O local para esta tarefa é em **Base da categoria**.
[![Permalink da Base de Categorias no Wordpress](./permalink-categorias-wordpress-300x68.jpg "Permalink da Base de Categorias no Wordpress")](http://leocaseiro.com.br/wp-content/uploads/2009/05/permalink-categorias-wordpress.jpg "Permalink da Base de Categorias no Wordpress")</span>

Em alguns servidores, será necessário incluirmos um arquivo **.htaccess**.
O próprio Wordpress costuma nos informar e ainda disponibiliza uma caixa de texto com conteúdo deste arquivo.

Deixarei abaixo o **conteúdo do arquivo .htaccess do Wordpress**:
```

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```

Caso tenha alguma dúvida, poste nos comentários.

> Aproveito para pedir desculpas sobre minha ausência. Estou envolvido em 3 projetos grandes e como sempre o prazo é curto. Saibam que nem estou lendo meus feeds.
> Mas em breve, postarei mais informações sobre Wordpress e o Zend Framework. O qual tenho me [dedicado muito tempo](http://leocaseiro.com.br/programador-web-estuda-mais-q-medico/ "Programador Web precisa estudar mais do que Médico").
>
> Também deixarei dicas e tutoriais de tudo que aprendi no [Curso SEO](http://www.marketingdebusca.com.br/curso-seo/ "Curso SEO") do professor Paulo do [Marketing de Busca](http://www.marketingdebusca.com.br/ "Marketing de Busca"), e também autor do livro [Livro SEO Otimização de Sites](http://livroseo.com "Link permanente Livro SEO Otimização de Sites")(li e recomendo) e em breve deixarei informações e algumas dicas para otimização de sites.
