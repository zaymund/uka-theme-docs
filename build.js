'use strict';
/**
 * Inline and compress html file.
 *
 * Compiles:
 *      build/index.html
 *
 * @command npm build
 */
var inline = require('inline-source'),
    fs = require('filendir'),
    path = require('path') ,
    src = 'src/index.html',
    build = 'build/index.html';

inline(src, {
    compress: true,
    attribute: false,
    svgAsImage: true,
    rootpath: path.dirname(src),
    ignore: ['script']
}, function (err, html) {
    if (!err) {
        fs.writeFileSync(build, html);
    } else {
        throw err;
    }
});
