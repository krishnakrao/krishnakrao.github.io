---
title: "FireNet: Wildfire Risk Forecaster for Social Equality"
excerpt: "A deep learning system saving you from falling into the trap of wildfire risk and social inequality <br/><img src='/images/firenet.png'>"
collection: projects
---

Try my web-based risk forecasting tool [here](https://kkraoj.users.earthengine.app/view/wildfire-danger).

Climate change is exacerbating wildfire likelihood and severity in the western USA. For instance, in the state of California, USA, in the last century, 12 of the largest wildfires, 13 of the most destructive wildfires, and 7 of the deadliest wildfires occurred during the last decade. Wildfires emit massive amounts of harmful particulate matter posing a direct threat to humans. The severity of wildfire's effects combined with the probability of them worsening in the future due to climate change. Most importantly, increasing wildfire risk prompts an urgent need to understand, estimate, and forecast wildfire risk for social inequality. Our FireNet, a deep-learning-powered system, helps improve the forecasting of wildfire risk by the following "PR. S^3" solutions:

1. **P--Prevent smoke inhalation** : Wildfire smoke is known to cause serious respiratory disorders. Wildfire exposure ratings can help better forecast the severity and probability of wildfire smoke.

2. **R--Reallocate disaster relief resources** : By knowing when and where fires are likely to occur, fire managers can better allocate their resources to be well-prepared when wildfires do occur.

3. **S--Save lives** : High resolution maps of wildfire risk, if prepared periodically, can help evacuate people in advance of an occurrence of wildfire.

4. **S--Sustainability** : Wildfires not only cause damages to human society, but also decrease species diversity and increase greenhouse gas emissions. 

5. **S--Social Equality**: People from different backgrounds, such as wealth, urban proximity, race, and ethnicity, are unequally exposed to wildfire risk. Poor communities and black, Hispanic or Native American experience greater vulnerability to wildfires compared with other communities. We are dedicated to eliminate the "unnatural" humanity crisis and consequences of natural disasters, such as wildfires. 

FireNet is a rapid risk forecasting tool to characterize the three fundamental components of risk--hazard, exposure, and vulnerability--by combining high resolution remote sensing imagery with deep learning.** The system integrates microwave remote sensing (Sentinel-1) and optical remote sensing (Landsat-8) information over 3 months to produce accurate estimates of fuel conditions (cross-validated r-squared = 0.63) exceeding previous methods by a wide margin (r-squared = 0.3). Moreover, by linking the Long Short Term Memory (LSTM) outputs for fuel conditions with data on human settlements and population density, FireNet indicates the aggregate risk imposed by wildfires on humans. FireNet is hosted as a Google Earth Engine App.

FireNet is the first wildfire risk forecasting system that operates at 250 m spatial resolution. The best wildfire danger models like the National Fire Danger Rating System operate at approximate 25 Kms. This was possible because of the system's unique use of microwave as well as optical remote sensing. Moreover, existing systems have lesser accuracy in predicting fuel flammability (r-squared = 0.3) than our system (r-squared = 0.63). 


{% include image.html url="/images/firenet.png" caption="Firenet web-app being used to understand wildfire risk." %}


[Link to repository](https://devpost.com/software/wildfire-risk-treehacks)


