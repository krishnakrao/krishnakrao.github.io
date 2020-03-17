---
layout: archive
title: "Letters"
permalink: /letters/
author_profile: true
---

{% include image.html url="/images/writing.jpg"%}

These are the letters I send out to my community every year to stay connected. 

{% include base_path %}

{% for post in site.letters reversed %}
  {% include archive-single.html %}
{% endfor %}
