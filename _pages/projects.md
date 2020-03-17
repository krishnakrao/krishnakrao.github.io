---
layout: archive
title: Projects
permalink: /projects/
author_profile: true
collection: projects
entries_layout: grid
classes: wide
image: "/images/coverpicture.jpeg"
---

{% for post in site.projects reversed %}
  {% include archive-single.html type="grid" %}
{% endfor %}
