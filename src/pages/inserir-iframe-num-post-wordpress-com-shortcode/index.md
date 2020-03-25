---
templateKey: blog-post
title: "Inserir iframe num Post Wordpress com shortcode"
author: admin
date: 2011-12-03T06:16:16+11:00
categories:
  - "Wordpress"
tags:
  - "iframe"
  - "php"
  - "shortcode"
  - "wordpress"
slug: inserir-iframe-num-post-wordpress-com-shortcode
draft: false
meta_title: "Inserir iframe num Post Wordpress com shortcode"
---

Adicione o seguinte código no seu arquivo functions.php

```
[php]
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

		return ''.$content.'';

	}

	add_shortcode('iframe','iframe_shortcode');
[/php]
```

Para usar, basta seguir o exemplo abaixo e inserir no seu post:

```
[php]
[iframe url"http://leocaseiro.com.br/" width="500" height="300"]
[/php]
```

Referência [graphicbeacon.com](http://www.graphicbeacon.com/web-design-development/embed-an-iframe-into-a-post-or-page-without-using-a-plugin/)
