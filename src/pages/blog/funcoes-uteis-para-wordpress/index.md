---
templateKey: blog-post
title: "Funções úteis para Wordpress no functions.php"
author: admin
date: 2011-07-28T05:41:02+10:00
categories:
  - "Wordpress"
tags:
  - "wordpress"
  - "get"
  - "wp_query"
  - "functions"
  - "função"
slug: funcoes-uteis-para-wordpress
draft: false
meta_title: "Funções úteis para Wordpress no functions.php"
---

Ultimamente tenho feito muitos trabalhos(sites) utilizando o [Wordpress](http://wordpress.org/). E na maioria deles, sempre que utilizo a [WP\_Query](http://codex.wordpress.org/Class_Reference/WP_Query) ou até quero programar em PHP mesmo, preciso criar ou utilizar uma função no functions.php.

Mas o que percebi, é que sempre utilizo 3 funções. E resolvi compartilhar, pois se servem pra mim, podem servir para vocês que também trabalham com Wordpress.

As funções servem para habilitar o menu do Wordpress, retornar o id pelo permalink(post\_name) e utilizar variáveis $\_GET com Wordpress

#### [Habilitar Administração de Menus pelo Admin do Wordpress no _functions.php_](#menus-no-wp)

Quase todos os sites que eu faço, eu habilito os Menus do próprio Wordpress. Assim os redatores podem alterar os Menus e seus links

\[sourcecode language='php'\]
add\_theme\_support('menus'); //Basta inserir esse código no functions.php que já vai aparecer a opção Menu no Admin
\[/sourcecode\]

#### [Como retornar o id de um post pelo permalink(slug)?](#get-id-by-permalink)

Na minha opinião, essa função já devia ser nativa do Wordpress, mas enquanto não sai, usem essa aí:

\[sourcecode language='php'\]
function get\_id\_by\_post\_name($post\_name)
{
global $wpdb;
$id = $wpdb->get\_var("SELECT ID FROM $wpdb->posts WHERE post\_name = '".$post\_name."'");
return $id;
}
\[/sourcecode\]

Para saber mais sobre os Menus Personalizados do Wordpress, acesse a documentação do [wp\_nav\_menu()](http://codex.wordpress.org/Function_Reference/wp_nav_menu)

#### [Como utilizar variáveis $\_GET no Wordpress?](#variaveis-get-wp)

O Wordpress não deixa trabalharmos com variáveis GET por padrão, mas basta adicionar um filtro na função query\_vars com o nome da sua variável e você vai conseguir:

\[sourcecode language='php'\]
add\_filter('query\_vars', 'customquery\_vars' );
function customquery\_vars( $qvars )
{
$qvars\[\] = 'variavel'; //Exemplo: http://url.com.br/?variavel=
return $qvars;
}
\[/sourcecode\]

Para utilizar no php, utilize conforme o exemplo abaixo:

\[sourcecode language='php'\]
global $wp\_query;
echo $wp\_query->query\_vars\['variavel'\];
\[/sourcecode\]

> Se você também costuma utilizar algumas funções no Wordpress e o seu functions.php sempre inicia do mesmo jeito, comenta aí que eu atualizo aqui!
