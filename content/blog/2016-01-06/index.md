---
title: "Document Outlines"
date: "2016-01-06"
category: "Accessibility"
---

Every Web page has a document outline and it is created by your headings, table titles, form titles etc. The document outline is the *structure* of your web page.

A document outline is pretty much like a table of contents for your web page and is then used by assistive technologies and search engines.

Carefully thought out document outlines also aid usability. It helps people to visually navigate through your content.

I'm not going to touch upon the HTML5 outline algorithm here as it isn't quite there in terms of support. We are still being advised to [use headings to convey document structure.](http://www.w3.org/html/wg/drafts/html/master/sections.html#rank)

## Structure over style

It isn't uncommon to come across designers and developers who don't understand that HTML headings indicate structure, not style. Assistive technologies use HTML headings as a page outline and allows users to navigate through your content. Additionally, your outline can be parsed by a machine like a search engine to improve search results. 

Headings tend to be chosen for style purposes, without paying any attention to semantics. Time and client restrictions are usually the best excuses for this and I am no exception. I almost always try and create useful page outlines whilst I am building a project but I am aware that clients may break away from this on a content managed website.

Creating useful page outlines on a content managed website can be difficult but not impossible. Educating a client about structure and hierarchy is the first step. Sometimes it can be difficult to explain that headings are not just for styling purposes but working with them to introduce a working hierarchy is often the best approach.

## Fixing Your Document Outlines

I have collated a lovely succinct list of things to do or not do for the time poor among us. Keep in mind that sometimes a design will dictate what you can do. It's your job to dance around these issues and try to keep the user in mind.

* If you have already built your project, then the [HTML5 Outliner tool](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo/related) from the Chrome store will be useful. This quick test will indicate if there is room for improvement in your markup and an opportunity to create more useful page structures.
* Don't use HTML headings to dictate visual appearance.
* Don't skip any level of heading. Eg: H1, H3, H4 etc.
* Provide a logical heading structure.
* Your webpage should have at least have one H1 and it should represent the title of the page.
* The H1 of your webpage should be at the beginning of the main content.
* The primary and/or secondary navigations on your webpage can have headings but should be below the level of your main heading. Your main heading should be a H1 so follow the same logic and make your navigation headings a H2. 
* Keep in mind that assistive technologies are able to navigate heading markup which can be an effective way for users to more quickly find content of interest.
