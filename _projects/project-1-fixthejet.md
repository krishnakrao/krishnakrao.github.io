---
title: "Fix the Jet"
excerpt: "Make images and figures colorblind friendly by swapping their colormaps <br/><img src='/images/fixthejet.jpg'>"
collection: projects
---

Information is *not* knowledge. 

Information can be transformed into knowledge by consuming it in a way to understand patterns. One of the primary ways to consume large quantities of information is through pictures: charts, plots, maps that convey the message. Before, 2015, many such figures were inadvertantly prepared using a color scheme called _jet_ that is visually stimulating due to the abundance of colors. Unfortunately, we have come to know of the harm it causes only recently. The _jet_ is not <a href="https://programmingdesignsystems.com/color/perceptually-uniform-color-spaces/" target="_blank">perceptually uniform</a> which is a fancy way of saying what you see is not what you get. The colormap is known to create artificial gradients in perceptibility which can mislead interpretations of figures. It is also extremely unfriendly to people with colorblindness. For more information check out the <a href="https://www.youtube.com/watch?v=xAoljeRJ3lU" target="_blank">presentation</a> of launch of the new default colormaps in _matpltolib_. 

This script allows you to change an image (.jpg/.png) file made with _jet_ colormap to any other colormap of your choice. The script selectively changes _jet_ colors only. All others colors in the image remain unchanged (including background and text). 

<img src='/images/fixthejet.jpg'>

<a href="https://github.com/kkraoj/fixthejet" target="_blank">Link to repository</a>
