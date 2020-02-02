---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
type: page--home
---

<ol class="articles">
  {% for post in site.posts %}
  <li class="article">

    <h3>
      <a href="{{ post.url }}" title="{{ post.title }}" class="article__title">{{ post.title }}</a>
    </h3>

    <p class="article__categories">Categorias: {{ post.categories | join: ', ' }}</p>

  </li>
  {% endfor %}
</ol>
