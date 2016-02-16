/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
  css: {
    files: config.css.files,
    tasks: 'pleeease:dev',
    atBegin: true
  },

  js: {
    files: [config.js.hintFiles, config.tests.specs],
    tasks: ['jshint', 'jscs', 'karma:unit']
  },

  livereload: {
    options: {
      livereload: true
    },
    files: config.css.files
  }
};
