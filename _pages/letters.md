  ---
layout: archive
title: "Letters"
permalink: /letters/
author_profile: true
---
{% include image.html url="/images/map.png" caption="Predicted vegetation wetness over western US using remote sensing and deep learning." %}

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
