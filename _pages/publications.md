---
layout: page
permalink: /publications/
title: publications
description: Complete list of peer-reviewed publications, working papers and work in progress.
nav: true
nav_order: 2
---

<!-- Published Papers -->

## peer-reviewed

<div class="peer-reviewed publications">
{% bibliography -f papers --query @article %}
</div>

<!-- Working Papers -->
<br>
## working papers

<div class="working-papers publications">
{% bibliography -f papers --query @techreport %}
</div>

<!-- Other Work -->
<br>
## other work

<div class="working-papers publications">
{% bibliography -f papers --query @dataset %}
</div>

<!-- Work in Progress -->
<br>
## work in progress

<div class="in-progress publications">
{% bibliography -f papers --query @document %}
{% bibliography -f papers --query @book %}
</div>
