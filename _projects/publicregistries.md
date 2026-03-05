---
layout: page
title: Public registries
img: assets/img/DSC05511.jpg
importance: 1
related_publications: true
category: data
---

Public registries are a powerful tool to gather data that can be used for research. I will give you a short overview over some of the registries I use in my research.

## Marktstammdatenregister
I use the [Marktstammdatenregister](https://www.marktstammdatenregister.de/MaStR/) data to investigate whether the foundation of local energy agencies accelerates the expansion of solar PV in Germany {% cite bolz2026_do %}. As I work with R, I currently prepare the publication of R code to preprocess available bulk downloads. In case you use mainly work with python, check out [this](https://github.com/OpenEnergyPlatform/open-MaStR) python package.



## EU-ETS
Jan Abrell prepares and published EU-ETS transaction data such that they can conveniently be used to investigate effects of a cap-and-trade policy. I use these [EU-ETS data](https://www.euets.info/) to measure regulatory pressure and investigate whether regulatory pressure changes how sustainability reports are written {% cite bolz2026_sustainability %}.


## CORDIS

[CORDIS](https://cordis.europa.eu/projects) provides access to European research projects funded under the FP7, Horizon, and Horizon 2020 programs. I use these data to investigate whether EU funding for greener technologies increases existing regional disparities {% cite bolz2026_greener %}.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mastr.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/euets.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/cordis.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
