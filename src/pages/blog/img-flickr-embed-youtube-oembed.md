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

Estava procurando como inserir videos do Youtube e fotos do Flickr no WordPress e acabei me deparando com um Projeto muito bom, o [**oEmbed**](http://www.oembed.com/)

Descobri lendo uma matéria sobre [videos do WordPress](http://meiobit.com/69943/coloque-videos-youtube-wordpress-sem-plugins/) que à partir da versão WordPress 2.9, a equipe do [Matt Mullenweg](http://ma.tt/), a [Automattic](http://automattic.com/ ) introduziu o [**oEmbed**](http://www.oembed.com/) no WordPress. Foi por isso que me interessei e pesquisei sobre ele.

É simples, ele utiliza as URLs dos melhores serviços de Web2.0, como o Flickr, Vimeo, Youtube, entre outros e retorna um XML ou um JSON para utilizarmos em um EMBED, IMG ou o que seja necessário em seu projeto.

### Flickr

No exemplo do Flickr, utilizei uma [foto do Flickr](http://www.flickr.com/photos/mbottan/3418061959/) da blogueira [Miriam Bottan](http://substantivolatil.com/)

Percebam que a URL abaixo retorna um XML:

```
http://www.flickr.com/services/oembed/?url=http://www.flickr.com/photos/mbottan/3418061959/
```

```
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<oembed>
<version>1.0</version>
<type>photo</type>
<author_url>http://www.flickr.com/photos/mbottan/</author_url>
<cache_age>3600</cache_age>
<provider_name>Flickr</provider_name>
<provider_url>http://www.flickr.com/</provider_url>
<title>Mirian Bottan</title>
<author_name>Mirian Bottan</author_name>
<width>333</width>
<height>500</height>
<url>http://farm4.static.flickr.com/3622/3418061959_759d05812d.jpg</url>
</oembed>
```

Ou seja, capturamos facilmente a URL da foto e inserimos num elemento img, fora as outras informações que ele retorna no XML.

Podemos usar o JSON para Ajax também, desta maneira:

```
http://www.flickr.com/services/oembed/?url=http://www.flickr.com/photos/mbottan/3418061959/&format=json
```

```javascript
{
  "author_name": "Mirian Bottan",
  "author_url": "http://www.flickr.com/photos/mbottan/",
  "cache_age": 3600,
  "height": "500",
  "provider_name": "Flickr",
  "provider_url": "http://www.flickr.com/",
  "title": "Mirian Bottan",
  "type": "photo",
  "url": "http://farm4.static.flickr.com/3622/3418061959_759d05812d.jpg",
  "version": "1.0",
  "width": "333"
}
```

Existem diversos parâmetros para utilizarmos a ferramenta que podem ser encontrados na documentação do [Site Oficial](http://www.oembed.com/).

### Youtube

Para Youtube, o exemplo foi um video que eu legendei sobre [Como segurar uma palheta](http://www.youtube.com/watch?v=cm_u2QHwpRk) do [Justin Guitar](http://www.justinguitar.com/):

```
http://www.youtube.com/oembed/?url=http://www.youtube.com/watch?v=cm_u2QHwpRk
```

```javascript
{
  "author_name": "leobok4",
  "author_url": "http://www.youtube.com/user/leobok4",
  "height": 295,
  "html": "<object width=\"480\" height=\"295\"><param name=\"movie\" value=\"http://www.youtube.com/v/cm_u2QHwpRk?fs=1\"></param><param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param></object>",
  "provider_name": "YouTube",
  "provider_url": "http://www.youtube.com/",
  "thumbnail_height": 360,
  "thumbnail_url": "http://i4.ytimg.com/vi/cm_u2QHwpRk/hqdefault.jpg",
  "thumbnail_width": 480,
  "title": "BC-101 Aula Sobre Como Segurar uma Palheta - Aula de Viol\u00e3o - Justin Guitar",
  "type": "video",
  "version": "1.0",
  "width": 480
}
```

O retorno padrão da API no Youtube é em formato **JSON**, mas podemos retornar em XML se quisermos, basta adicionarmos o parâmetro format:

```
http://www.youtube.com/oembed/?url=http://www.youtube.com/watch?v=cm_u2QHwpRk&format=xml
```

```
<oembed>
<provider_url>http://www.youtube.com/</provider_url>
<title>BC-101 Aula Sobre Como Segurar uma Palheta - Aula de ViolÃ£o - Justin Guitar</title>
<html><object width="480" height="295"><param name="movie" value="http://www.youtube.com/v/cm_u2QHwpRk?fs=1"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param></object></html>
<author_name>leobok4</author_name>
<height>295</height>
<thumbnail_width>480</thumbnail_width>
<width>480</width>
<version>1.0</version>
<author_url>http://www.youtube.com/user/leobok4</author_url>
<provider_name>YouTube</provider_name>
<thumbnail_url>http://i4.ytimg.com/vi/cm_u2QHwpRk/hqdefault.jpg</thumbnail_url>
<type>video</type>
<thumbnail_height>360</thumbnail_height>
</oembed>
```
