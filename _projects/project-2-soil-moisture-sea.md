---
title: "Fire Prediction in Southeast Asia using Machine Learning"
excerpt: "Detecting fire occurence in Southeast Asia using satellite remote sensing and machine learning <br/><img src='/images/firepredsea.png'>"
collection: projects
---

Land fires in Southeast Asia have increased dramatically over the past 30 years due to changes in land use and population density, draining of swamp forests, etc.. In 2015, Indonesian fires alone are estimated to have emitted as much carbon dioxide as India’s annual fossil fuel usage, and to have caused around 12,000 premature deaths. The massive negative environmental and health impacts have prompted increasing interest from regional governments in better quantifying fire risks and identifying land management strategies. One of the major contributing factors is the equatorial Asian peatlands, which is one of the world’s biggest carbon sinks. However, regional-scale investigation of peatland hydrology is made difficult by the location's inaccessibility of peat forests. 

Therefore, in this project, I used machine learning to predict local fire risks from remote sensing satellite data over the tropical peatlands of Borneo, Sumatra, and Peninsular Malaysia in 2015- one of the worst years. The input to my algorithm was remote sensing data collected over seven features--soil moisture, vegetation optical depth, specific humidity, temperature, precipitation, potential and actual evapotranspiration over 25 km spatial grids in Southeast Asian peatlands. I then used multinomial logistic (Softmax) regression to output a predicted fire risk class. The objective of the study was to do better than the already existing fire index predictor which is said to have an accuracy of 50%. 

{% include image.html url="/images/firepredsea.png" alt="Confusion matrix of model performance. Classification accuracy = 71%" %}
_Confusion matrix of model performance. Classification accuracy = 71%_

<a href="http://cs229.stanford.edu/proj2017/final-reports/5239270.pdf" target="_blank">Link to paper</a>

