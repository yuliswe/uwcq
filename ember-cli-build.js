/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    'hinting': false
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  
  // boostrap
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css.map', {
    destDir: "assets"
  });
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.min.css.map', {
    destDir: "assets"
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
    destDir: "fonts"
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: "fonts"
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
    destDir: "fonts"
  });
  
  // ramda
  app.import('bower_components/ramda/dist/ramda.min.js');
  
  // html2canvas
  app.import('bower_components/html2canvas/dist/html2canvas.min.js');
  
  // jquery-visible
  app.import('bower_components/df-visible/jquery.visible.min.js');
  
  return app.toTree();
};
