---
title: "SAR-enhanced mapping of live fuel moisture content"
collection: publications
permalink: /publication/lfmc_from_sar
excerpt: 'This paper prsents a deep learning-based solution to rapidly estimate forest dryness across western USA.'
date: 2020-05-01
venue: 'Remote Sensing of Environment'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S003442572030167X'
citation: '</b>Rao, K.</b>, Williams, A.P., Fortin, J. & Konings, A.G. (2020). SAR-enhanced mapping of live fuel moisture content. </i>Remote Sens. Environ.</i>, 245.'
---

Assessing wildfire risk presents several challenges due to uncertainty in fuel flammability and ignition potential. Live fuel moisture content (LFMC) - the mass of water per unit dry biomass in vegetation - exerts a direct control on fuel ignitability, fuel availability and fire spread, and is thus an important parameter in assessing wildfire risk. Current estimates of LFMC from optical remote sensing or meteorological indices are insufficient to accurately map LFMC at landscape scale. 

In this study, we present a physics-assisted recurrent neural network model for mapping LFMC every 15 days at 250 m resolution over the western US using microwave backscatter (from Sentinel-1) and optical reflectance (from Landsat-8). The model was physics-assisted by adding handcrafted inputs representing radiative transfer processes and related parameters. Field data from the National Fuel Moisture Database was used to train the deep learning model. 

The model had a satisfactory overall predictability of R2 = 0.63, RMSE = 25.0% and bias = 1.9% when cross-validated at 125 sites. The model was substantially better at predicting site-means (R2 = 0.71 and RMSE = 14.3%) as compared to site-anomalies (R2 = 0.55 and RMSE = 21.3%). Of the 6 land cover types tested, the model was most accurate in predicting LFMC in shrublands (R2 = 0.69), while closed broadleaf deciduous sites had the least accuracy (R2 = 0.49). Incorporating microwave backscatter as a model input significantly enhanced performance (R2 increasing from 0.44 to 0.63, and RMSE decreasing from 31.8% to 25.0%). Microwave backscatter therefore presents a complementary source of information to optical remote sensing metrics for LFMC mapping. 

The high resolution dynamic LFMC maps presented here may assist in improved wildfire risk characterization and also have potential applications in quantifying plant drought stress at large scales.

![Seasonal changes in forest dryness mapped using our AI model. Forest dryness is displayed as a percentage of water in trees relative to their dry biomass.](/images/lfmc.gif){:height="50%" width="50%"}

_Seasonal changes in forest dryness mapped using our AI model. Forest dryness is displayed as a percentage of water in trees relative to their dry biomass._
