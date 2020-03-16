---
title: "Leafnet: Species identification using leaf images"
excerpt: "Identify species of a tree using an image of its leaf. Model powered by deep learning and hosted as a chatbot. <br/><img src='/images/leafnet.png'>"
collection: projects
---

Understanding and preserving worldwide biodiversity is central to addressing challenges associated with resilience to climate change and reducing the impact of greenhouse gases. Amidst growing threats to biodiversity - such as deforestation, overexploitation, or pollution - species conservation becomes increasingly important. Plant species identification - a fundamental first step to quantifying biodiversity - can be challenging for both researchers and the general public. Therefore, the ability to reliably and easily identify plant species holds great potential to increase knowledge accesssibility as well as facilitate greater collective ability to protect the environment. With this goal in mind we designed an algorithm that takes as an input an RGB leaf image. We then used a ResNet18 to classify the image into 1 of 185 classes corresponding to its species. The model was tuned for various hyperparameters to achieve an overall top-1 precision of 93.8% on the dev set which is higher than any previously known model. The final model is hosted on a remote server and allows anyone to use the classifier for free by logging into Google Hangouts and opening a chat with leafnetstanford@gmail.com.

|               | Top-1 Precision| Top-5 Precision|
|---------------|:--------------:|:--------------:|
|    Leafsnap   |      70.8%     |      96.8%     |
| Deep-Leafsnap |      86.2%     |      98.4%     |
| **Leafnet**   |    **93.8%**   |    **99.5%**   |

{% include image.html url="/images/leafnet.png" caption="Leafnet chatbot in action- user captures an image of a leaf on white background and chatbot replies with the predicted species instantly" %}

<a href="https://github.com/kkraoj/leafnet" target="_blank">Link to repository</a>
