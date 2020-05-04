'use strict';
/**
 * Inline and compress html file.
 *
 * Compiles:
 *      build/index.html
 *
 * @command npm build
 */
const { inlineSource } = require('inline-source');
const fs = require('fs');
const path = require('path');
const src = path.resolve('src/index.html');
const build = path.resolve('build/index.html');

inlineSource(src, {
  compress: true,
  attribute: false,
  svgAsImage: true,
  rootpath: path.resolve('www'),
  ignore: ['script']
})
  .then((html) => {
    fs.writeFileSync(build, html);
  })
  .catch((err) => {
    throw err;
  });
