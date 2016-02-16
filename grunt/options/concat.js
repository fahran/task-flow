/**
 * Concatenate pages
 */
'use strict';

var deepExtend = require('deep-extend');
var pages = require('../../pages');
var config = require('../config');
var pageName;
var pagePath;

// Extend the pages object with the destination path of the page
for (pageName in pages) {
  pagePath = 'temp/' + pageName + '.html';

  deepExtend(pages[pageName], { 'dest': pagePath });
}

module.exports = deepExtend(pages, config.concat || {});
