/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

 // The UserAgent is used to detect IE11. Only IE11 requires ES5.
(function () {
  
  function _ojIsIE11() {
    var nAgt = navigator.userAgent;
    return nAgt.indexOf('MSIE') !== -1 || !!nAgt.match(/Trident.*rv:11./);
  };
  var _ojNeedsES5 = _ojIsIE11();

  requirejs.config(
    {
      baseUrl: 'js',

      paths:
      /* DO NOT MODIFY 
      ** All paths are dynamicaly generated from the path_mappings.json file.
      ** Add any new library dependencies in path_mappings json file
      */      
      // injector:mainReleasePaths
      {
        'knockout': 'libs/knockout/knockout-3.5.1.debug',
        'jquery': 'libs/jquery/jquery-3.5.1',
        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
        'hammerjs': 'libs/hammer/hammer-2.0.8',
        'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.2',
        'ojs': 'libs/oj/v9.1.0/debug' + (_ojNeedsES5 ? '_es5' : ''),
        'ojL10n': 'libs/oj/v9.1.0/ojL10n',
        'ojtranslations': 'libs/oj/v9.1.0/resources',
        'text': 'libs/require/text',
        'signals': 'libs/js-signals/signals',
        'customElements': 'libs/webcomponents/custom-elements.min',
        'proj4': 'libs/proj4js/dist/proj4-src',
        'css': 'libs/require-css/css',
        'touchr': 'libs/touchr/touchr',
        'persist': '@samplesjsloc@/persist/debug',
        'corejs' : 'libs/corejs/shim',
        'chai': 'libs/chai/chai-4.2.0',
        'regenerator-runtime' : 'libs/regenerator-runtime/runtime'
      }
      // endinjector
    }
  );
}());

require(['ojs/ojbootstrap', 'root'], function (Bootstrap, Root) {
  // this callback gets executed when all required modules are loaded
  Bootstrap.whenDocumentReady().then(function () {
    Root.init();
  });
});
