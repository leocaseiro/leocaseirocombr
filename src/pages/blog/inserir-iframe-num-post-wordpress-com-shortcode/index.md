---
templateKey: blog-post
title: "Inserir iframe num Post WordPress com shortcode"
author: admin
date: 2011-12-03T06:16:16+11:00
categories:
  - "WordPress"
tags:
  - "iframe"
  - "php"
  - "shortcode"
  - "wordpress"
slug: inserir-iframe-num-post-wordpress-com-shortcode
draft: false
meta_title: "Inserir iframe num Post WordPress com shortcode"
---

Adicione o seguinte código no seu arquivo functions.php

```php
function iframe_shortcode($atts, $content = null) {
  extract(shortcode_atts(array(
    'url'   => '',
    'scrolling'     => 'no',
    'width'     => '100%',
    'height'    => '500',
    'frameborder'   => '0',
    'marginheight'  => '0',
    'style'  => 'border:0',
  ), $atts));

  if (empty($url)) return '';

  return '<iframe class="shortcode" src="'.$url.'" scrolling="'.$scrolling.'" width="'.$width.'" height="'.$height.'" style="'.$style.'" frameborder="'.$frameborder.'" marginheight="'.$marginheight.'">'.$content.'</iframe>';
}

add_shortcode('iframe','iframe_shortcode');
```

Para usar, basta seguir o exemplo abaixo e inserir no seu post:

```php
[iframe url"http://leocaseiro.com.br/" width="500" height="300"]
```

Referência [graphicbeacon.com](http://www.graphicbeacon.com/web-design-development/embed-an-iframe-into-a-post-or-page-without-using-a-plugin/)
