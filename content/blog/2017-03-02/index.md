---
title: "When To Use Buttons"
date: "2017-03-02"
category: "Accessibility"
---

When to use a button is often confusing for beginners and advanced HTML authors alike. The confusion is made worse by the many different types of buttons that you can use and personal preferences.

## Buttons : 

`<button>Button</button>`

`<button type="submit">Submit button</button>`

## Input Buttons : 

`<input type="button" value="Input button">`

`<input type="submit" value="Input submit button">`

## When do you use a button?

You can use a `<button>` inside a `<form>`, as it will behave exactly like a `<button type="submit">Submit button</button>`. The button element was introduced to HTML as an alternative to inputs as they are easier to style. By default, a buttons type is set to submit like so `<button type="submit">Submit button</button>`.

When you have an action on the page and you need an element to trigger that action, rather than using an empty link, use a `<button>`. If you need to link somewhere, say to another page or a website use `<a href="#"></a>` but for everything else, both `<button>` and `<input>` are perfectly valid so which you choose is down to personal preference and is less about semantics at this point.

## Styling?

There are styling differences between buttons and inputs but I suggest you read this [presentation from Nick Cowie](http://nickcowie.com/presentation/s5-button.html) for more information on that.
