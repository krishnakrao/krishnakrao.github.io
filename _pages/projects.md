---
layout: collection
title: Projects
permalink: /projects/
author_profile: true
collection: projects
entries_layout: grid
classes: wide
---

{% include base_path %}

{% for post in site.projects reversed %}
  {% include archive-single.html %}
{% endfor %}
