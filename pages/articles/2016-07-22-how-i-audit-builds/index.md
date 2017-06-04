---
title: "How I audit builds"
date: "2016-07-22T22:12:03.284Z"
layout: post
path: "/how-I-audit-builds/"
category: "Front End"
description: "Front End Accessibility Checks"
---

Accessibility isn't just a technical issue. It's a design issue. It's a content issue. It's something that every department that touches a website should think about.

[Accessibility is about people](http://empat.io/). Not people with disabilities.

I see an audit as a way to correct issues prior to a website going live.

## First steps

Due to time constraints, I almost always try and build in accessibility and usability from the off. That way, an important part of how a website should be built isn't left out.

At the end of a project I check the website for glaring issues from a build point of view. I prefer to do this once a client has populated everything as how they populate can also affect accessibility. 

[Google Chromes Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) is brilliant for spotting these glaring issues. I usually run an accessibility audit from console and fix any issues that arise.

Testing a website with real disabled users is the only way to ensure it offers optimum accessibility but I realise that this option isn't always available.

## Colour Contrast

I check for colour contrast issues using [Webaims checker](http://webaim.org/resources/contrastchecker/) before anything else. Usually I can eyeball if something is bad and try to aim for WCAG AA.

If accessibility fails badly to the point that even I myself am struggling, I will pass these issues back to the designers for a rework.

## Keyboard Testing

I personally rarely use a mouse. I have one at work but prefer the keyboard. At home I don't use a mouse. Keyboard testing for the most part is easy. Developers tend to develop for themselves which usually means a lack of visual feedback upon tabbing through a website.
My approach to testing is usually just using my keyboard to navigate around the website. It's as simple as that.

## Screen Readers & Assistive Technologies

Testing content with a screen reader is made easy by using [Chrome Vox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en). Anything that doesn't make sense verbally, gets fixed.

## Headings

I begin testing by using the [HTML5 Outliner tool](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo/related) from the Google store. Read my [previous post](https://emily.ghost.io/document-outlines/) to learn more about heading structure.
