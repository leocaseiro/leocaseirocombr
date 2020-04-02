---
templateKey: blog-post
title: "Classe StringToSlug Versão PHP Server Side"
author: admin
date: 2010-07-26T00:19:33+10:00
categories:
  - "Classes em PHP"
slug: classe-stringtoslug-php
draft: false
meta_title: "Classe StringToSlug Versão PHP Server Side"
---

A Classe StringToSlug transforma qualquer String em formato Slug. Transformando os caracteres em letras minúsculas, fazendo uma troca/replace de caracteres com acentuação em caracteres não acentuados. E transformando espaços em hífens.

> #### Link para o GitHub
>
> <small>Migrado para o GitHub em 28/07/2010 por [Samir Braga](http://twitter.com/samirbraga/)</small>\
> [StringToSlug PHP](http://github.com/samir/StringToSlug)

Existem diversos algoritmos que transformam String em Slugs(permalinks). Mas à maioria com expressões regulares e que retiram qualquer caractere acentuado na língua Portuguesa. Funcionam muito bem no idioma Inglês, mas não resolve para o nosso idioma(Português do Brasil).


Foi por isso que o [Samir Braga](http://twitter.com/samirbraga) criou uma Classe com um algoritmo semelhante à do [jQuery Plugin StringToSlug](https://leocaseiro.com.br/jquery-plugin-string-to-slug) feita em PHP.\
O Samir à chamou de Permalink. Mas como percebi que na Web o termo SLUG é bem conhecido e utilizado. Deixo com este nome para facilitar quem procura este algoritmo.

Para quem não sabe o que é um SLUG. É simplesmente uma string transformada em letras minúsculas e sem acentuação. Assim transformamos títulos de artigos em URL amigáveis. Melhorando usabilidade e SEO.

Caso tenham alguma dúvida/crítica/sugestão deixem nos comentários que farei o possível para responder. Ou outros usuários podem ajudar nas respostas.

### Os exemplos de como utilizar a classe StringToSlug estão no link:

[http://github.com/samir/StringToSlug/blob/master/example.php](http://github.com/samir/StringToSlug/blob/master/example.php)
