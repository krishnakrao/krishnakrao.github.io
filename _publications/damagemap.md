---
title: "DamageMap: A post-wildfire damaged buildings classifier"
collection: publications
permalink: /publication/damagemap
excerpt: 'This paper presents an AI-based method to classify damaged buildings using post-wildfire images only.'
date: 2021-09-01
venue: 'International Journal of Disaster Risk Reduction'
paperurl: 'https://www.sciencedirect.com/science/article/pii/S221242092100501X'
citation: 'Galanis, M., <b>Rao, K.</b>, Yao, X., Tsai, Y.-L., Ventura, J., & Fricker, G. A. (2021). DamageMap: A post-wildfire damaged buildings classifier. <i>International Journal of Disaster Risk Reduction</i>, 102540. https://doi.org/10.1016/j.ijdrr.2021.102540'
---

The increasing frequency and severity of wildfire events in the last few decades have created an urgent need for new technologies that allow rapid surveying and assessment of post-wildfire building damage. However, existing technologies lack in accuracy and ability to scale to effectively aid disaster relief and recovery. Even today, most wildfire event inspectors need to physically visit the areas impacted by wildfires and manually classify building damage, requiring considerable time and resources. Here, we present DamageMap, an artificial intelligence-powered post-wildfire building damage classifier. DamageMap is a binary classifier (outputs are –“damaged” or “undamaged”). Unlike existing solutions that require both pre- and post-wildfire imagery to classify building damage, DamageMap relies on post-wildfire images alone by separating the segmentation and classification tasks. Our model has an overall accuracy of 98% on the validation set (five wildfire events all around the world) and 92% and 98% on two independent test sets from the Camp Fire and the Carr Fire, respectively. Excellent model performance across a variety of datasets provides evidence of DamageMap's robustness to unseen data. Thus, DamageMap may help governmental and non-governmental agencies rapidly survey building damage using post-wildfire aerial or satellite imagery in wildfire-impacted areas. DamageMap is available as a server-side web-application.

![DamageNet App](https://github.com/kkraoj/damaged_structures_detector/blob/master/firgures/dashboard3.gif?raw=true)     
_DamageMap predictions on test set._


Check out DamageMap on an interactive app <a href="https://kkraoj.users.earthengine.app/view/damagemap" target="_blank">here</a>.