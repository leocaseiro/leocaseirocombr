---
templateKey: blog-post
title: "Funções úteis para WordPress no functions.php"
author: admin
date: 2011-07-28T05:41:02+10:00
categories:
  - "WordPress"
tags:
  - "wordpress"
  - "get"
  - "wp_query"
  - "functions"
  - "função"
slug: funcoes-uteis-para-wordpress
draft: false
meta_title: "Funções úteis para WordPress no functions.php"
---

Ultimamente tenho feito muitos trabalhos(sites) utilizando o [WordPress](http://wordpress.org/). E na maioria deles, sempre que utilizo a [WP_Query](http://codex.wordpress.org/Class_Reference/WP_Query) ou até quero programar em PHP mesmo, preciso criar ou utilizar uma função no functions.php.

Mas o que percebi, é que sempre utilizo 3 funções. E resolvi compartilhar, pois se servem pra mim, podem servir para vocês que também trabalham com WordPress.

As funções servem para habilitar o menu do WordPress, retornar o id pelo permalink(post\_name) e utilizar variáveis $\_GET com WordPress

\\

#### Habilitar Administração de Menus pelo Admin do WordPress no _functions.php_

Quase todos os sites que eu faço, eu habilito os Menus do próprio WordPress. Assim os redatores podem alterar os Menus e seus links

```php
/**
 * Basta inserir esse código no functions.php que já vai aparecer a opção Menu no Admin
 */
add_theme_support('menus');
```
\\

#### Como retornar o id de um post pelo permalink(slug)?

Na minha opinião, essa função já devia ser nativa do WordPress, mas enquanto não sai, usem essa aí:

```php
function get_id_by_post_name($post_name)
{
    global $wpdb;
    $id = $wpdb->get_var($wpdb->prepare("SELECT ID FROM $wpdb->posts WHERE post_name = '%s'", $post_name));
    return $id;
}
```

Para saber mais sobre os Menus Personalizados do WordPress, acesse a documentação do [wp\_nav\_menu()](http://codex.wordpress.org/Function_Reference/wp_nav_menu)
\\


#### Como utilizar variáveis $_GET no WordPress?

O WordPress não deixa trabalharmos com variáveis GET por padrão, mas basta adicionar um filtro na função query\_vars com o nome da sua variável e você vai conseguir:

```php
add_filter('query_vars', 'customquery_vars' );
function customquery_vars( $qvars )
{
    $qvars[] = 'variavel'; //Exemplo: http://url.com.br/?variavel=
    return $qvars;
}
```

Para utilizar no php, utilize conforme o exemplo abaixo:

```php
global $wp_query;
echo $wp_query->query_vars['variavel'];
```

> Se você também costuma utilizar algumas funções no WordPress e o seu functions.php sempre inicia do mesmo jeito, comenta aí que eu atualizo aqui!
