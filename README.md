# WPThemeDoc
Easily create beautiful, simple to use, and easily extendable documentation for your WordPress themes.

## Build with NPM
First of all install npm and run console in the project folder:

<pre>npm install</pre>

After that you will be able to build Theme Documentation

<pre>npm start</pre>

Build will be added here /build/index.html

## Variables
WPThemeDoc is straight HTML, but it utilizes a few "Find and Replace" variables so it's that much easier to plug in your relevant data. Simply conduct a search and replace the following:

- [ ] `@@name` - York Pro
- [ ] `@@slug` - york-pro
- [ ] `@@purchaseUrl` - https://themebeans.com/checkout/
- [ ] `@@demoUrl` - http://themebeans.com/york-pro/
- [ ] `@@supportUrl` - https://themebeans.com/support/
- [ ] `@@changelogUrl` - http://demo.themebeans.com/wp-content/themes/york-pro/changelog.txt

## Sections
You'll need to add or remove your own sections, but that's easy to do as well - with minimal code.

Add a link in the `header nav` element, like this: `[<a href="#Developers">Developers</a>]` and then add a `section` below with the same ID, like this: `[<section id="Developers">]`. Then just add your content!

## Contribute
If you have any suggestions, ideas, and the like - let me know!

##License
GPL v2.0 or later.
