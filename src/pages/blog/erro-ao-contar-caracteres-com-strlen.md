---
templateKey: blog-post
title: "Problemas ao contar caracteres com strlen do PHP"
author: admin
date: 2009-09-11T03:22:15+10:00
categories:
  - "Desenvolvimento"
  - "Tutorial"
tags:
  - "função"
  - "php"
slug: erro-ao-contar-caracteres-com-strlen
draft: false
meta_title: "Problemas ao contar caracteres com strlen do PHP"
---

#### Problema

Estava validando uma string que tinha valor máximo de caracteres com a função **strlen()** do php.

Acontece que a função strlen() funciona muito bem para encoding **iso-8859-1** ou quando a **string não tem acentuação**. Ou seja, **quando a string tem um caracter acentuado** a função retorna um **strlen maior** do que realmente deveria.

Para isso, devemos utilizar a função **mb\_strlen()** que possui um **segundo parâmetro**, _onde definimos qual o **encoding utilizado**_.

#### Solução

Como sempre utilizo encoding **utf8** nos sites que desenvolvo, tanto no php/MySQL quanto no html, precisei trocar o strlen pelo **mb\_strlen():**
```php
mb_strlen($string_utf8, 'utf8');
```

Para mais informações sobre a função **mb\_stren()** acesse:\
[http://us3.php.net/manual/en/function.mb-strlen.php](http://us3.php.net/manual/en/function.mb-strlen.php)
