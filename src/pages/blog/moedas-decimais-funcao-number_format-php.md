---
draft: false
templateKey: blog-post
author: admin
slug: moedas-decimais-funcao-number_format-php
title: Formatar moedas ou números decimais com a função number_format() do PHP
date: 2008-10-24T18:50:44.000Z
tags:
  - função
  - php
categories:
  - Desenvolvimento
  - Tutorial
meta_title: Formatar moedas ou números decimais com a função number_format() do PHP
---
A **função number_format() do PHP**, além de **trocar ponto(.) por vírgula(,)**, também serve para definir quantas **casas decimais** teremos no valor.

O número que é em Inglês *999.9* fica *999,90* no formato moeda brasileiro.\
Além disso, podemos definir se irá exibir algum caracter a cada grupo de milhar (de mil em mil).

**`string number_format ( float $number, int $decimals, string $dec_point, string $thousands_sep )`**

podemos definir por: \
**`valor texto number_format ( $valor_decimal, $casas_decimais, $caracter_definicao_decimal, $caracter_definicao_milhar )`**\
<br>

Por exemplo, se quisermos que o número *1000* fique como *1.000*, utilizamos a função desta maneira:

```php
$valor = 1000;
echo number_format($valor,0,",",".");
```

<br>

Agora se quisermos que o valor 1,000.9(em formato inglês) tenha o formato 1.000,90(brasileiro), utilize:

```php
$valor = 1,000.9;
echo number_format($valor,2,",",".");
```

<br>

Se não quiser que tenha o ponto(.) entre as casas de milhar, deixe com o última parâmetro vazio:

```php
$valor = 1000.9;
echo number_format($valor,2,",","");
```

<br>

Existe uma maneira gambiarra para formatar número que eu não aconselho a utilizar. Seria algo do tipo:

```php
$valor = 100.9
echo str_replace(".",",",$valor);
```

<br>

> Update: Uma maneira de utilizar com números negativos é utilizando **abs()** e **multiplicar por -1**:
>
> ```php
> $valor = -0.54;
> if ( $valor < 0 ) {
>      $valor = abs($valor);
>     $valor = number_format($valor) * -1;
> } else {
>     $valor = number_format($valor);
> }
> ```
>
> Encontrei aqui: <http://stackoverflow.com/a/6429576/3415716>