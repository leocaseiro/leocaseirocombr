---
templateKey: blog-post
title: "Função que ordena arrays Randomicamente em JavaScript, como o shuffle() do PHP"
author: admin
date: 2008-11-06T00:35:49+11:00
categories:
  - "Desenvolvimento"
  - "Tutorial"
tags:
  - "array"
  - "função"
  - "javascript"
slug: shuffle-do-php-no-javascript
draft: false
meta_title: "Função que ordena arrays Randomicamente em JavaScript, como o shuffle() do PHP"
---

> Este post foi atualizado, pois eu encontrei que existem diversos algoritmos para esta função chamado shuffle()
>
> De qualquer maneira, ainda acredito que este seja o melhor e menor algoritmo.
>
> Então, se quiserem, o melhor nome para esta função é shuffle()
> Pois no php, existe esta função nativa e funciona da mesma maneira!

Procurei algo como **random()** ou **array\_rand()** que fosse nativa do **JavaScript**, porém não encontrei. Mas, [econtrei](http://javascript.about.com/library/blsort2.htm "Link de referência da função randOrd()") uma função interessante, que funciona muito bem:
\[code='javascript'\]
function randOrd() {
return (Math.round(Math.random())-0.5);
}
\[/code\]


Caso tenhamos um array como no modelo:
\[code='javascript'\]
var nome = Array();
nome\[0\] = "Carlos";
nome\[1\] = "João";
nome\[2\] = "Leo";
nome\[3\] = "Maria";
nome\[4\] = "Silvia";
\[/code\]

Perceba que os valores de nosso array está em ordem alfabética.
Utilizamos então a função randOrd() em nosso array:
\[code='javascript'\]
nome.sort(randOrd);
\[/code\]

Ao imprimir os array, eles estarão desordenados.

Uma maneira de exibí-los é utilizando um for:

\[code='javascript'\]
totalNomes = nome.sizeOf;
for (i=0; i Este é o array\['+i+'\]: '+nome\[i\]);
}
\[/code\]

Este exemplo poderá mostrar:

Este é o array\[0\]: Maria
Este é o array\[1\]: João
Este é o array\[2\]: Leo
Este é o array\[3\]: Carlos
Este é o array\[4\]: Silvia
