---
templateKey: blog-post
title: "Capturando informações do Flickr, Yotube e etc com oEmbed"
author: admin
date: 2010-09-22T07:50:56+10:00
categories:
  - "API"
slug: img-flickr-embed-youtube-oembed
draft: false
meta_title: "Capturando informações do Flickr, Yotube e etc com oEmbed"
---

Estava procurando como inserir videos do Youtube e fotos do Flickr no Wordpress e acabei me deparando com um Projeto muito bom, o [**oEmbed**](http://www.oembed.com/)

Descobri lendo uma matéria sobre [videos do Wordpress](http://meiobit.com/69943/coloque-videos-youtube-wordpress-sem-plugins/) que à partir da versão Wordpress 2.9, a equipe do [Matt Mullenweg](http://ma.tt/), a [Automattic](http://automattic.com/ ) introduziu o [**oEmbed**](http://www.oembed.com/) no Wordpress. Foi por isso que me interessei e pesquisei sobre ele.

É simples, ele utiliza as URLs dos melhores serviços de Web2.0, como o Flickr, Vimeo, Youtube, entre outros e retorna um XML ou um JSON para utilizarmos em um EMBED, IMG ou o que seja necessário em seu projeto.

### Flickr

No exemplo do Flickr, utilizei uma [foto do Flickr](http://www.flickr.com/photos/mbottan/3418061959/) da blogueira [Miriam Bottan](http://substantivolatil.com/)

Percebam que a URL abaixo retorna um XML:

<span style="color: #009900;">http://www.flickr.com/services/oembed/?url=</span>**<span style="color: #ff0000;">http://www.flickr.com/photos/mbottan/3418061959/</span>**

\[sourcecode language="xml"\]
< ?xml version="1.0" encoding="utf-8" standalone="yes"?>

1.0
photo
http://www.flickr.com/photos/mbottan/
3600 Flickr http://www.flickr.com/ Mirian Bottan
Mirian Bottan
333
500
http://farm4.static.flickr.com/3622/3418061959\_759d05812d.jpg

\[/sourcecode\]

Ou seja, capturamos facilmente a URL da foto e inserimos num elemento img, fora as outras informações que ele retorna no XML.

Podemos usar o JSON para Ajax também, desta maneira:

http://flickr.com/services/oembed?url=http://www.flickr.com/photos/mbottan/3418061959/**<span style="color: #ff0000;">&format=json</span>**

\[sourcecode language="javascript"\]
{
"author\_name": "Mirian Bottan",
"author\_url": "http://www.flickr.com/photos/mbottan/",
"cache\_age": 3600,
"height": "500",
"provider\_name": "Flickr",
"provider\_url": "http://www.flickr.com/",
"title": "Mirian Bottan",
"type": "photo",
"url": "http://farm4.static.flickr.com/3622/3418061959\_759d05812d.jpg",
"version": "1.0",
"width": "333"
}
\[/sourcecode\]

Existem diversos parâmetros para utilizarmos a ferramenta que podem ser encontrados na documentação do [Site Oficial](http://www.oembed.com/).

### Youtube

Para Youtube, o exemplo foi um video que eu legendei sobre [Como segurar uma palheta](http://www.youtube.com/watch?v=cm_u2QHwpRk) do [Justin Guitar](http://www.justinguitar.com/):

<span style="color: #009900;">http://www.youtube.com/oembed/?url=</span>**<span style="color: #ff0000;">http://www.youtube.com/watch?v=cm\_u2QHwpRk</span>**

\[sourcecode language="javascript"\]
{
"author\_name": "leobok4",
"author\_url": "http://www.youtube.com/user/leobok4",
"height": 295,
"html": "",
"provider\_name": "YouTube",
"provider\_url": "http://www.youtube.com/",
"thumbnail\_height": 360,
"thumbnail\_url": "http://i4.ytimg.com/vi/cm\_u2QHwpRk/hqdefault.jpg",
"thumbnail\_width": 480,
"title": "BC-101 Aula Sobre Como Segurar uma Palheta - Aula de Viol\\u00e3o - Justin Guitar",
"type": "video",
"version": "1.0",
"width": 480
}
\[/sourcecode\]

O retorno padrão da API no Youtube é em formato **JSON**, mas podemos retornar em XML se quisermos, basta adicionarmos o parâmetro format:

<span style="color: #009900;">http://www.youtube.com/oembed/?url=</span>**<span style="color: #009900;">http://www.youtube.com/watch?v=cm\_u2QHwpRk&<span style="color: #ff0000;">format=xml</span></span>**

\[sourcecode language="xml"\]
http://www.youtube.com/ BC-101 Aula Sobre Como Segurar uma Palheta - Aula de ViolÃ£o - Justin Guitar

leobok4
295 480 480
1.0
http://www.youtube.com/user/leobok4 YouTube http://i4.ytimg.com/vi/cm\_u2QHwpRk/hqdefault.jpg video 360
\[/sourcecode\]
