---
templateKey: blog-post
title: "Formatar moedas ou números decimais com a função number_format() do PHP"
author: admin
date: 2008-10-25T05:50:44+11:00
categories:
  - "Desenvolvimento"
  - "Tutorial"
tags:
  - "função"
  - "php"
slug: moedas-decimais-funcao-number_format-php
draft: false
meta_title: "Formatar moedas ou números decimais com a função number_format() do PHP"
---

A **função number\_format() do PHP**, além de **trocar ponto(.) por vírgula(,)**, também serve para definir quantas **casas decimais** teremos no valor.

O número que é em Inglês _999.9_ fica _999,90_ no formato moeda brasileiro.
Além disso, podemos definir se irá exibir algum caracter a cada grupo de milhar(de mil em mil)

**_string number\_format ( float $number, int $decimals, string $dec\_point, string $thousands\_sep )_**

podemos definir por:
**_valor texto number\_format($valor\_decimal, $casas\_decimais,$caracter\_definicao\_decimal, $caracter\_definicao\_milhar)_**


Por exemplo, se quisermos que o número _1000_ fique como _1.000_, utilizamos a função desta maneira:
\[sourcecode language='php'\]
$valor = 1000;
echo number\_format($valor,0,",",".");
\[/sourcecode\]

Agora se quisermos que o valor 1,000.9(em formato inglês) tenha o formato 1.000,90(brasileiro), utilize:
\[sourcecode language='php'\]
$valor = 1,000.9;
echo number\_format($valor,2,",",".");
\[/sourcecode\]

Se não quiser que tenha o ponto(.) entre as casas de milhar, deixe com o última parâmetro vazio:
\[sourcecode language='php'\]
$valor = 1000.9;
echo number\_format($valor,2,",","");
\[/sourcecode\]

Existe uma maneira gambiarra para formatar número que eu não aconselho a utilizar. Seria algo do tipo:
\[sourcecode language='php'\]
$valor = 100.9
echo str\_replace(".",",",$valor);
\[/sourcecode\]

> Update: Uma maneira de utilizar com números negativos é utilizando **abs()** e **multiplicar por -1**:
> \[sourcecode language='php'\]
> $valor = -0.54;
> if ( $valor < 0 ) { $valor = abs($valor); $valor = number\_format($valor) \* -1; } else { $valor = number\_format($valor); } \[/sourcecode\] Encontrei aqui: [http://stackoverflow.com/a/6429576/3415716](http://stackoverflow.com/a/6429576/3415716)
