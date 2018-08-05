---
title: "ARIA Landmark Roles"
date: "2016-09-11"
category: "Accessibility"
---

ARIA landmark roles help screen reader users understand the purpose of different areas of a web page, such as search, navigation or the main content. They are  really simple to add to your markup.

Roles allow you to provide meaning and a relationship when HTML elements can't provide it. They give meaning to semantic elements that have not been fully adopted by all browsers. An example of this would be Internet Explorer (IE) and the Main element, IE doesn't understand what the main element is.

## Application Landmark

`role="application"`

The application landmark role is a region of the page that represents a unique software unit executing a set of tasks. It is strongly recommended that this role be used sparingly and with caution. 

## Banner Landmark

`role="banner"`

The landmark role banner is the main header or masthead of a page; usually assigned to the header element. The majority of content in a banner is site-oriented. It is unnecessary to have more than one banner role.

## Complementary Landmark

`role="complementary"`

The complementary role is content that is relevant to the main content but can be considered separate from the main content. Similar in semantics to the aside element. 

## Contentinfo Landmark

`role="contentinfo"`

Contentinfo usually encompasses metadata, copyright information, links to privacy statements etc. This role is usually found on the footer element at the bottom of the document. It is unnecessary to have more than one contentinfo role.

## Form Landmark

`role="form"`

The form landmark role is a region of the document that represents a collection of form elements. It is often advised for use on a semantically neutral element such as a div.

## Main Landmark

`role="main"`

The main landmark role is the main content or topic of a document. It is unnecessary to have more than one main role.

## Navigation Landmark

`role="navigation"`

The navigation landmark role is a collection of links for navigation and is usually found on a nav element.

## Search Landmark

`role="search"`

The search landmark role is a search element containing your site’s search interface.

## Some quick takeaways about landmark roles

* Aria is useful but overuse, and incorrect use, will make it useless
* role="link" used on anchors with a landmark role="navigation" as a parent is a wasted effort
* Don't use more then one role="main"
* Don't use a navigation role with only one link or clickable element
* Well crafted semantic HTML should always be your starting point
* A good authoring practice would be to apply landmarks to parent elements and make sure none of your content is orphaned. This will make navigating using a screen reader much easier.
