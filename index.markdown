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
    {{ post.content }}
  </main>

</article>
{% endfor %}