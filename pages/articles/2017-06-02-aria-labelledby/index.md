---
title: "ARIA labelledby"
date: "2017-06-02T22:12:03.284Z"
layout: post
path: "/aria-labelledby/"
category: "Accessibility"
description: "ARIA labelledby Explained"
---

The `aria-labelledby` attribute can be used to provide an accessible name to a subset of elements. It's used to associate a group of elements, or to establish a relationship between groups. It's function works similar to the alt and title attributes.

Semantic markup is always preferred over ARIA misuse. With that said, it isn't always possible to access the markup in certain situations so `aria-labelledby` is essential for letting a screenreader know what your intent is.

The example below uses the `aria-labelledby` property to indicate where the section's title is. The value must match the id of the element that contains the `<section>` title

```
<section aria-labelledby="section-heading">
    <h2 id="section-heading">I am a title</h2>
    <article role="article">
        I am a some article text
    </article>     
</section>
```

Another example would be to associate titles with lists. Often lists will be preceded by a title but the two are unrelated. **Labelledby** provides more contextual information to users when they are navigating the page.

```
<h3 id="colours">Colours of the rainbow</h3>
<ul aria-labelledby="colours">
  <li>Red</li>
  <li>Yellow</li>
  <li>Pink</li>
  <li>Green</li>
</ul>
```

## Example scenarios

These are only a few examples of what you would use `aria-labelledby` for in the wild.

* When used in a form context, the `aria-labelledby` attribute replaces the associated label element. This can be useful when you require multiple labels.
* Radio Groups
* Associating Headings With Regions
* Giving meaning to menus
