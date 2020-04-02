---
templateKey: blog-post
title: "Trocando o $this do php4 por self no php5"
author: admin
date: 2008-10-30T03:13:16+11:00
categories:
  - "Desenvolvimento"
  - "Tutorial"
tags:
  - "desenvolvimento"
  - "oop"
  - "php"
slug: this-php4-para-self-php5
draft: false
meta_title: "Trocando o $this do php4 por self no php5"
---

Estava criando uma classe em um servidor de um cliente.
Como sempre, utilizo métodos ou atributos de uma mesma classe chamando por **$this**. E tive o mesmo problema que o [Tiago Floriano](http://tiagofloriano.com.br/blog/?p=194).
Eu estava desatualizado na linguagem e tive um problema de sintaxes.

Mesmo sendo tudo php, o php5 melhorou sua performance e desempenho, principalmente com questões de OOP. Com isso, algumas sintaxes foram re-estruturadas.

Por isso, o meu código estava aparecendo o seguinte erro: **_Fatal error: Using $this when not in object context in_**

Depois de muito pesquisar no [pai dos burros](http://www.google.com.br), encontrei a [solução](http://www.arquivodecodigos.net/arquivo/tutoriais/php/geral/poo1/usando_metodos_estaticos.php). Descobri que trocando o **$this->nomeDoMetodo()** por **self::nomeDoMetodo()** funcionaria no php5.

Mas para mim, não basta ter apenas a solução. Portanto pesquisei mais sobre php5 e sua "nova" estrutura de Classes. Que é Composta por Encapsulamento(Public, Protected e Private), Constantes de Classe, Interfaces e Propriedades Estáticas(que é o caso do $this), o Design Pattern Singleton que é muito interessante e outros conceitos que pretendo abordar logo mais.

Se você é tão curioso quanto eu, ou apenas gosta de atualizar-se, leia este [material completo em PDF](http://www.fop.unicamp.br/informatica/index.php?option=com_docman&task=doc_view&gid=3&Itemid=36) que absorve bastante sobre OOP(Programação Orientada a Objetos) em PHP5.
