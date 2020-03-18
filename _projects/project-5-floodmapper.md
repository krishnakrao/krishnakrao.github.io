---
title: "Flood Mapper: Automated Flood Detection System"
excerpt: "Near-realtime global flood mapper using automated, localized change-detection <br/><img src='/images/floopmapper.png'>"
collection: projects
---

Flash floods pose severe danger to human life. They affected 1.2 billion people in the last decade costed the world more than $12 Bn. In spite of its severity and frequency, flash floods are rarely predicted because our current water balance models riddled with uncertainty. On the other hand, data-driven approaches can be promising.

Flood Mapper is a near-real time flood mapping tool which takes into account multiple inputs and produce flood affected areas maps. The model runs on an google earth engine which ingests the latest backscatter images from Sentinel-1, land-surface reflectance from LandSat and precipitation data from point rain gauges. The output extent is then predicted using a multi-class boosted classification. For quality control purposes, the flood extent is cropped to all regions with less than 5 degree slope (because of data limitation of backscatter). When compared with crowd-sourced information of flood occurrence during the flash floods in Venice, Italy on Oct 10 2018, the model showed an accuracy of 94%.

{% include image.html url="/images/floopmapper.png" alt="Flooding extent in Venice mapped just 4 hours after a flood using Flood Mapper." %}

_Flooding extent in Venice mapped just 4 hours after a flood using Flood Mapper._

<a href="https://devpost.com/software/floodmapper" target="_blank">Link to respository</a>



