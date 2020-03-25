---
templateKey: blog-post
title: "Solução em Javascript para Imagens inexistentes no servidor"
author: admin
date: 2008-11-06T23:00:25+11:00
categories:
  - "Desenvolvimento"
  - "Tutorial"
tags:
  - "evento"
  - "javascript"
slug: evento-onerror-javascript-imagens-inexistentes
draft: false
meta_title: "Solução em Javascript para Imagens inexistentes no servidor"
---

Saiba como utilizar o **evento onerror do JavaScript** para substituir falhas de imagem(_<img>_) ou até janela(window).

Com certeza você já passou por algum deste problemas:  

*   O seu site precisava de uma imagem e ela não estava mais lá.
*   A imagem não foi carregou corretamente e nem Deus sabe o motivo.
*   O seu script de UpLoad deu problema e corrompeu o arquivo antes de subir para o seu
*   servidor.
*   O nome da imagem está errado no seu banco de dados

Comigo foi assim, estava criando uma galeria de vídeos que devia exibir um screenshot(na agência chamamos de _frame_), mas acontece que tínhamos alguns vídeos que ainda não possuíam o screenshot. E tendo todos os dados necessários para serem exibidos no site, menos o screenshot, deveriam ser listados na HOME.

O que fazer neste caso?
Criar um código php do tipo **if file\_exists()**?
Conheço uma opção melhor e nativa do JavaScript.

**Evento OnError**

Como funciona o evento OnError?
Funciona ao contrário do evento OnLoad que é a resposta de uma imagem (ou uma janela) que foi carregada com sucesso(ta aí o nome OnLoad = Carregou com Sucesso)

Assim que o browser interpretar um erro de carregamento de uma imagem(também pode ser utilizado em um window, como uma PopUp), ele executa o método OnError.

Como e onde utilizar o método OnError?
\[sourcecode language='javascript'\]
![](./imagem-nao-existe.gif)
\[/sourcecode\]

[Exemplo do evento OnError em funcionamento](http://exemplos.leocaseiro.com/imagem-inexistente-no-servidor.html "Exemplo do evento OnError funcionando").
