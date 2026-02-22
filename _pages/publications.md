---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
---


<!-- Published Papers -->
## peer-reviewed

<div class="peer-reviewed publications">
{% bibliography -f papers --query @article %}
</div>

<!-- Working Papers -->
## working papers

<div class="working-papers publications">
{% bibliography -f papers --query @techreport %}
</div>

<!-- Work in Progress -->
## work in progress

<div class="in-progress publications">
{% bibliography -f papers --query @document %}
</div>