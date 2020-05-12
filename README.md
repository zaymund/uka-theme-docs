# WordPress Theme Documentation
Easily create beautiful, simple to use, and easily extendable documentation for your WordPress themes.

## Build with NPM
First of all install npm and run console in the project folder:

<pre>npm install</pre>

After that you will be able to build Theme Documentation:

<pre>npm start</pre>

Build will be added here: /build/index.html

If you need to change Theme Documentation styles run:

<pre>gulp watch</pre>

Scss files are located here: /src/sass/

## Variables
Uka-theme-docs is straight HTML, but it utilizes a few "Find and Replace" variables so it's that much easier to plug in your relevant data. Simply conduct a search and replace the following:

- [ ] `@@name` - theme name,
- [ ] `@@slug` - theme slug,
- [ ] `@@demoUrl` - demo url,
- [ ] `@@purchaseUrl` - purchase url,
- [ ] `@@supportUrl` - support url,
- [ ] `@@changelogUrl` - changelog url,
- [ ] `@@author` - author name,
- [ ] `@@authorUrl` - author url,
- [ ] `@@authorContactUrl` - author contact url.

## Sections
You'll need to add or remove your own sections, but that's easy to do as well - with minimal code.

Add a link in the `header nav` element, like this: `<a href="#Developers">Developers</a>` and then add a `section` below with the same ID, like this: `<section id="Developers">`. Then just add your content!
