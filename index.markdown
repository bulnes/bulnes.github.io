---
layout: base
type: page--home
---

{% for post in site.posts %}
<article class="article">

  <header class="article__header">
    <h1 class="article__title">
      <a href="{{ post.url }}" title="{{ post.title }}" class="article__title">{{ post.title }}</a>
    </h1>

    {% include author.html %}

    <time class="article__date" datetime="{{ post.date | date_to_xmlschema }}">
      {{ post.date | date: "%Y" }}
    </time>
  </header>

  <main class="article__content">
    {% if post.content contains "<!-- more -->" %}

      {{ post.content | split:"<!-- more -->" | first }}
      <p class="article__keep-reading-container">
        <a href="{{ post.url }}" class="article__keep-reading" title="Continuar lendo este artigo">Continue lendo</a>
      </p>

    {% else %}

      {{ post.content }}

    {% endif %}
  </main>

</article>
{% endfor %}