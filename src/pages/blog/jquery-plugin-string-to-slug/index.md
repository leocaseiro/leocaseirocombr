---
templateKey: blog-post
title: "jQuery Plugin stringToSlug"
author: admin
date: 2009-09-18T03:47:28+10:00
categories:
  - "jQuery Plugin"
  - "Plugin jQuery"
  - "Projetos"
tags:
  - "jquery"
  -  "plugin"
slug: jquery-plugin-string-to-slug
draft: false
meta_title: "jQuery Plugin stringToSlug"
---

O plugin **jQuery stringToSlug** serve para criar [URL AMIGÁVEIS (SLUG)](https://leocaseiro.com.br/permalinks-wordpress/), conhecidas como [permalinks](https://leocaseiro.com.br/permalinks-wordpress/).

> #### Download no GitHub (migrado para o GitHub em 26/07/2011)
>
> > Acesse pelo link [http://leocaseiro.github.io/jQuery-Plugin-stringToSlug/](http://leocaseiro.github.io/jQuery-Plugin-stringToSlug/ "Usaje jQuery Plugin StringToSlug")
>
> * [jquery.stringToSlug.js 1.3](https://github.com/leocaseiro/jQuery-Plugin-stringToSlug/archive/1.3.zip "Download jQuery stringToSlug Plugin")
> * [jQuery stringToSlug Plugin no GitHub para quem quiser contribuir](https://github.com/leocaseiro/jQuery-Plugin-stringToSlug "jQuery stringToSlug Plugin no github")

Depois de muito pesquisar um **Plugin em jQuery** que fizesse isso, encontrei muitos que funcionam para outros idiomas. Mas somente para idiomas que não possuem acentuação.

_JQUERY SLUG PLUGIN (PT-BR Special Chars Replaces)_<br>
_JQUERY SIMPLESLUG (PT-BR Special Chars Replaces)_

**<span style="font-weight: normal;">Por isso, fiz questão de estudar as melhores features dos 2 plugins, e obviamente, que funcionasse em</span> Português do Brasil** \[**PT-BR**\].

> #### [Demo](http://leocaseiro.github.io/jQuery-Plugin-stringToSlug/)

Abaixo, segue a documentação em Inglês, pois pretendo disponibilizar no site da jQuery.

#### Default Usage:

```javascript
/**
* Default Events: Blur, KeyUp e KeyDown:
* Default Get Put: #permalink
* Default Space Replacement: - (hiphen)
*/
$(document).ready( function() {
  $("#string").stringToSlug();
});
```

#### The values Default at Plugin Usage:

```javascript
$(document).ready( function() {
  $("#title").stringToSlug({
    setEvents: 'keyup keydown blur',
    getPut: '#permalink',
    space: '-'
  });
});
```

#### Other(s) Event(s) Usage:

Para alterar os eventos, devemos inserir 1 ou mais eventos, separados por epaço:
```javascript
$(document).ready( function() {
  //Only Event Blur
  $("#only-blur-event").stringToSlug({
    setEvents: "blur"
  );

  //2 Events or More
  //This sample, Usage Events: KeyUp and KeyDown
  $("#keyup-and-keydown-events").stringToSlug({
    setEvents: "keyup keydown"
  );
});
```

#### Other Get Put Preview Usage:

```javascript
$(document).ready( function() {
  //Previem in all texarea
  $("input[name=string]").stringToSlug({
    getPut: "textarea"
  );

  //Preview in all elements preview class
  $("#input[name=string]").stringToSlug({
    getPut: ".class"
  );
});
```

#### Replace dash by other char Usage:

```javascript
$(document).ready( function() {
  //Replace by underscore
  $("#input[name=string]").stringToSlug({
    space: "_"
  );
});
```
Dúvidas e/ou sugestões, favor informar nos comentários.<br>
Melhorias na documentação são bem vindas.

> Se este plugin é útil para você, por favor dê um feedback votando no site do jQuery:
> [http://plugins.jquery.com/project/stringToSlug](http://plugins.jquery.com/project/stringToSlug "jQuery Plugin strinToSlug")

> #### Versão Server Side em PHP<br>
>
> <small>atualizado em 25 de Julho de 2010</small><br>
> Para visualizar e efetuar o download da Classe em PHP que faz o mesmo que este plugin, acesse o link da [Classe StringToSlug PHP](https://leocaseiro.com.br/classe-stringtoslug-php)
