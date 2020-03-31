---
templateKey: blog-post
title: "Liberar acesso externo no PHP para AJAX (crossdomain)"
author: admin
date: 2011-09-16T01:25:53+10:00
categories:
  - "Tutorial"
tags:
  - "desenvolvimento"
  - "função"
  - "javascript"
  - "jquery"
  - "php"
slug: acesso-externo-php-ajax-crodomain
draft: false
meta_title: "Liberar acesso externo no PHP para AJAX (crossdomain)"
---

Estou num projeto onde utilizo o PHP para gerar alguns JSON e HTMLs que devem ser acessados de outro domínio.

Como eu queria acessar por AJAX usando o jQuery, eu precisava liberar o acesso externo com PHP. Afinal um domínio não consegue acessar outro por AJAX sem ter uma liberação.

Achei que a liberação seria muito difícil. Que eu precisaria habilitar por htaccess ou alguma coisa assim.

Mas é muito fácil!

Basta você utilizar o header do php, conforme o exemplo abaixo

Neste exemplo, libero o acesso somente para um domínio específico:
```php
header('Access-Control-Allow-Origin: http://dominio.com.br');
```

Neste exemplo, libero o acesso para qualquer domínio
```php
header('Access-Control-Allow-Origin: \*');
```
 

E pronto! Basta acessar a url usando o método $.ajax, $.load, $.get do jQuery ou carregar o ajax da maneira que precisar.

> Caso você queira utilizar em ASP.NET ou qualquer outra linguagem, este site deve lhe ajudar [http://enable-cors.org/](http://enable-cors.org/)

Se você tiver uma maneira mais fácil(duvido) comenta ae. Se não der certo, comenta aí também que a gente tenta ajudar!
