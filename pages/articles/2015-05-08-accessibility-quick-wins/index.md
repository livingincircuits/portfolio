---
title: "Accessibility Quick Wins"
date: "2015-05-08T22:12:03.284Z"
layout: post
path: "/accessibility-quick-wins/"
category: "Accessibility"
description: "Improve Accessibility With These Quick Wins"
---

Accessibility does't have to be hard, you shouldn't need to read reems of documentation or worry about the extra time it will take.

I started to take an increasing interest in accessibility when I realised I was having to jump through hoops in order to use the internet. I primarily use a keyboard and have shocking eyesight so I tend to change the text size a lot. Most websites don't work correctly and left me with creating my own stylesheets!

I am guilty of not thinking about accessibility in the past but I have taken steps to change this. In all my reading, I have found the below to be quick wins that will aid accessibility and usability for all:

* Browsers are really good at making websites accessible via a keyboard without you having to do much. Using the correct element is quite important. Many times I have seen an `<a>` and `<button>` used incorrectly or sometimes a `<div>` will be used instead. Buttons should be used for form controls that perform actions and links should be used to navigate. Unplug your mouse and try to use your website using only the keyboard. This will highlight areas for improvements.
* Ensure you are using ARIA attributes.
* Test your content with a screen reader. [Chrome Vox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) is a free Google Chrome Extension. Using a screen reader will highlight repeated content or sections that don't make sense.
* Mark up forms correctly. Most screen readers have modes specifically for form interaction so be as semantic as necessary and ensure you are associating Labels With Inputs.
* One accessibility concern that I personally have difficulty with is contrast. Not everyone has access to top of the range monitors, nor does everyone have perfect eyesight. An excellent tool to check contrast is the [contrast ratio](http://leaverou.github.io/contrast-ratio/#gray-on-lightgray) by [Lea Verou](http://lea.verou.me/). The [Contrast Rebellion](http://contrastrebellion.com/) does an excellent job at explaining why contrast is important on the web.
* Text sizing. Ensure that users can change the text size and/or zoom without breaking your layout.

Nearly all of these quick wins are simple and can be achieved quite easily. They will benefit accessibility but also usability for people without accessibility concerns. Applying common sense and caring about your users should be the quickest win.
