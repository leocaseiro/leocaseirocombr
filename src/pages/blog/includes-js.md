---
templateKey: blog-post
title: "Como chamar um Javascript externo dentro de um js tipo include"
author: admin
date: 2008-11-29T07:20:30+11:00
categories:
  - "Desenvolvimento"
  - "Novidades"
  - "Portfólio"
  - "Tutorial"
tags:
  - "função"
  - "javascript"
slug: includes-js
draft: false
meta_title: "Como chamar um Javascript externo dentro de um js tipo include"
---

Eu sempre tentei fazer uma chamada de um arquivo Java Script externo dentro de outro. E sempre tive problemas.

Estava fazendo manutenção em um código, quando me deparei com o código do [analytics](http://www.google.com/analytics/pt-BR/index.html "Google Analytics"). E percebi que o Google faz isso a décadas.\
<br>

Se você, como eu, ainda não sabe(sabia) como fazer isso, veja:
```javascript
<script type="text/javascript">
  document.write(unescape("%3Cscript src='nomedoarquivo.js' type='text/javascript'%3E%3C/script%3E"));
</script>
```
<br>

É simples e funcional. Nunca mais eu farei algo concatenando strings com strings, como:
```javascript
<script type="text/javascript">
  document.write('<scr '+ 'IPT type="text/javascript" SRC="arquivo.js">< /SCRIPT>');
</scr></script>
```
<br>

Fui super contente avisar meu colega de trabalho pelo MSN, o [Pedro Rogério](http://www.pinceladasdaweb.com.br/blog/ "Pedro Rogerio do Pinceladas da Web") que me mostrou uma outra forma. É um pouco mais complexa, utiliza o createElement por DOM. E pode funcionar melhor para scripts dinâmicos.
```javascript
function include(file_path) {
  /**
   * criando um elemento script:
   * </script><script></script>
   */
  var j = document.createElement("script");

  /**
   * informando o type como text/javacript:
   * <script type="text/javascript"></script>
   */
  j.type = "text/javascript";

  /**
   * Inserindo um src com o valor do parâmetro file_path:
   * <script type="javascript" src="+file_path+"></script>
   */
  j.src = file_path;

  /**
   * Inserindo o seu elemento(no caso o j) como filho(child) do BODY:
   * <html><body><script type="javascript" src="+file_path+"></script></body></html>
   */
  document.body.appendChild(j);
}

/**
 * incluindo um arquivo com a função include()
 */
include("arquivo.js");

function include_once(file_path) {
  var sc = document.getElementsByTagName("script");
  for (var x in sc) {
    if (sc[x].src != null) {
      sc[x].src.indexOf(file_path) != -1) return;
    }
    include(file_path);
  }
}

/**
 * incluindo um arquivo com a função include_once()
 */
include_once("arquivo.js");

/**
 * incluindo um arquivo com a função include()
 */
include("arquivo.js");
```
