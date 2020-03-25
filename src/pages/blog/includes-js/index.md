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

Estava fazendo manutenção em um código, quando me deparei com o código do [analytics](http://www.google.com/analytics/pt-BR/index.html "Google Analytics"). E percebi que o Google faz isso a décadas.

Se você, como eu, ainda não sabe(sabia) como fazer isso, veja:
\[sourcecode language='javascript'\]
document.write(unescape("%3Cscript src='nomedoarquivo.js' type='text/javascript'%3E%3C/script%3E"));
\[/sourcecode\]

É simples e funcional. Nunca mais eu farei algo concatenando strings com strings, como:
\[sourcecode language='javascript'\]
document.write('<scr '+ 'IPT type="text/javascript" SRC="arquivo.js">< /SCRIPT>'); </scr>
\[/sourcecode\]

Fui super contente avisar meu colega de trabalho pelo MSN, o [Pedro Rogério](http://www.pinceladasdaweb.com.br/blog/ "Pedro Rogerio do Pinceladas da Web") que me mostrou uma outra forma. É um pouco mais complexa, utiliza o createElement por DOM. E pode funcionar melhor para scripts dinâmicos.
\[sourcecode language='javascript'\]
function include(file\_path){ var j = document.createElement("script"); /\* criando um elemento script: \*/
j.type = "text/javascript"; /\* informando o type como text/javacript: \*/
j.src = file\_path; /\* Inserindo um src com o valor do parâmetro file\_path: \*/
document.body.appendChild(j); /\* Inserindo o seu elemento(no caso o j) como filho(child) do BODY: \*/
}

//incluindo um arquivo com a função include()
include("arquivo.js");

function include\_once(file\_path) {
var sc = document.getElementsByTagName("script");
for (var x in sc)
if (sc\[x\].src != null &amp;amp;amp;amp;amp;amp;amp;amp;amp;&amp;amp;amp;amp;amp;amp;amp;amp;amp; sc\[x\].src.indexOf(file\_path) != -1) return;
include(file\_path);
}
//incluindo um arquivo com a função include\_once()
include\_once("arquivo.js");

\[/sourcecode\]
