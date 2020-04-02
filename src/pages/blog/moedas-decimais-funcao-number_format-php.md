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

A **função number_format() do PHP**, além de **trocar ponto(.) por vírgula(,)**, também serve para definir quantas **casas decimais** teremos no valor.

O número que é em Inglês _999.9_ fica _999,90_ no formato moeda brasileiro.\
Além disso, podemos definir se irá exibir algum caracter a cada grupo de milhar (de mil em mil)

**string number\_format ( float $number, int $decimals, string $dec\_point, string $thousands\_sep )**

podemos definir por:\
**valor texto number\_format ( $valor\_decimal, $casas\_decimais, $caracter\_definicao\_decimal, $caracter\_definicao\_milhar )**


Por exemplo, se quisermos que o número _1000_ fique como _1.000_, utilizamos a função desta maneira:\
```php
$valor = 1000;
echo number_format($valor,0,",",".");
```

Agora se quisermos que o valor 1,000.9(em formato inglês) tenha o formato 1.000,90(brasileiro), utilize:
```php
$valor = 1,000.9;
echo number_format($valor,2,",",".");
```

Se não quiser que tenha o ponto(.) entre as casas de milhar, deixe com o última parâmetro vazio:
```php
$valor = 1000.9;
echo number_format($valor,2,",","");
```

Existe uma maneira gambiarra para formatar número que eu não aconselho a utilizar. Seria algo do tipo:
```php
$valor = 100.9
echo str_replace(".",",",$valor);
```

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

> Encontrei aqui: [http://stackoverflow.com/a/6429576/3415716](http://stackoverflow.com/a/6429576/3415716)
