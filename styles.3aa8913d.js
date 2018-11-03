// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"vendors/css/normalize.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"vendors/css/grid.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"vendors/css/animate.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"vendors/css/ionicons.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/ionicons.eot":[["ionicons.c628c025.eot","vendors/fonts/ionicons.eot"],"vendors/fonts/ionicons.eot"],"./../fonts/ionicons.woff":[["ionicons.e9956e69.woff","vendors/fonts/ionicons.woff"],"vendors/fonts/ionicons.woff"],"./../fonts/ionicons.ttf":[["ionicons.044e0f8b.ttf","vendors/fonts/ionicons.ttf"],"vendors/fonts/ionicons.ttf"],"./../fonts/ionicons.svg":[["ionicons.a54256ce.svg","vendors/fonts/ionicons.svg"],"vendors/fonts/ionicons.svg"],"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/magnific-popup/src/css/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"vendors/css/open-sans.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/open-sans/Regular/OpenSans-Regular.eot":[["OpenSans-Regular.6f84dea8.eot","vendors/fonts/open-sans/Regular/OpenSans-Regular.eot"],"vendors/fonts/open-sans/Regular/OpenSans-Regular.eot"],"./../fonts/open-sans/Regular/OpenSans-Regular.woff2":[["OpenSans-Regular.ce3fd952.woff2","vendors/fonts/open-sans/Regular/OpenSans-Regular.woff2"],"vendors/fonts/open-sans/Regular/OpenSans-Regular.woff2"],"./../fonts/open-sans/Regular/OpenSans-Regular.woff":[["OpenSans-Regular.ca32fc65.woff","vendors/fonts/open-sans/Regular/OpenSans-Regular.woff"],"vendors/fonts/open-sans/Regular/OpenSans-Regular.woff"],"./../fonts/open-sans/Regular/OpenSans-Regular.ttf":[["OpenSans-Regular.788d5c0b.ttf","vendors/fonts/open-sans/Regular/OpenSans-Regular.ttf"],"vendors/fonts/open-sans/Regular/OpenSans-Regular.ttf"],"./../fonts/open-sans/Regular/OpenSans-Regular.svg":[["OpenSans-Regular.fa5dd9a7.svg","vendors/fonts/open-sans/Regular/OpenSans-Regular.svg"],"vendors/fonts/open-sans/Regular/OpenSans-Regular.svg"],"./../fonts/open-sans/Italic/OpenSans-Italic.eot":[["OpenSans-Italic.9982dfd5.eot","vendors/fonts/open-sans/Italic/OpenSans-Italic.eot"],"vendors/fonts/open-sans/Italic/OpenSans-Italic.eot"],"./../fonts/open-sans/Italic/OpenSans-Italic.woff2":[["OpenSans-Italic.1da2563c.woff2","vendors/fonts/open-sans/Italic/OpenSans-Italic.woff2"],"vendors/fonts/open-sans/Italic/OpenSans-Italic.woff2"],"./../fonts/open-sans/Italic/OpenSans-Italic.woff":[["OpenSans-Italic.fd172362.woff","vendors/fonts/open-sans/Italic/OpenSans-Italic.woff"],"vendors/fonts/open-sans/Italic/OpenSans-Italic.woff"],"./../fonts/open-sans/Italic/OpenSans-Italic.ttf":[["OpenSans-Italic.9ce3d348.ttf","vendors/fonts/open-sans/Italic/OpenSans-Italic.ttf"],"vendors/fonts/open-sans/Italic/OpenSans-Italic.ttf"],"./../fonts/open-sans/Italic/OpenSans-Italic.svg":[["OpenSans-Italic.7b8cc3a1.svg","vendors/fonts/open-sans/Italic/OpenSans-Italic.svg"],"vendors/fonts/open-sans/Italic/OpenSans-Italic.svg"],"./../fonts/open-sans/Semibold/OpenSans-Semibold.eot":[["OpenSans-Semibold.f56d41d6.eot","vendors/fonts/open-sans/Semibold/OpenSans-Semibold.eot"],"vendors/fonts/open-sans/Semibold/OpenSans-Semibold.eot"],"./../fonts/open-sans/Semibold/OpenSans-Semibold.woff2":[["OpenSans-Semibold.51d14c83.woff2","vendors/fonts/open-sans/Semibold/OpenSans-Semibold.woff2"],"vendors/fonts/open-sans/Semibold/OpenSans-Semibold.woff2"],"./../fonts/open-sans/Semibold/OpenSans-Semibold.woff":[["OpenSans-Semibold.f155f604.woff","vendors/fonts/open-sans/Semibold/OpenSans-Semibold.woff"],"vendors/fonts/open-sans/Semibold/OpenSans-Semibold.woff"],"./../fonts/open-sans/Semibold/OpenSans-Semibold.ttf":[["OpenSans-Semibold.0d0eb292.ttf","vendors/fonts/open-sans/Semibold/OpenSans-Semibold.ttf"],"vendors/fonts/open-sans/Semibold/OpenSans-Semibold.ttf"],"./../fonts/open-sans/Semibold/OpenSans-Semibold.svg":[["OpenSans-Semibold.d9c7cb39.svg","vendors/fonts/open-sans/Semibold/OpenSans-Semibold.svg"],"vendors/fonts/open-sans/Semibold/OpenSans-Semibold.svg"],"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"resources/scss/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./img/mCherry-min.jpg":[["mCherry-min.035c1cd2.jpg","resources/scss/img/mCherry-min.jpg"],"resources/scss/img/mCherry-min.jpg"],"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"resources/scss/queries.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"styles.js":[function(require,module,exports) {
"use strict";

require("./vendors/css/normalize.scss");

require("./vendors/css/grid.scss");

require("./vendors/css/animate.scss");

require("./vendors/css/ionicons.scss");

require("./node_modules/magnific-popup/src/css/main.scss");

require("./vendors/css/open-sans.scss");

require("./resources/scss/style.scss");

require("./resources/scss/queries.scss");
},{"./vendors/css/normalize.scss":"vendors/css/normalize.scss","./vendors/css/grid.scss":"vendors/css/grid.scss","./vendors/css/animate.scss":"vendors/css/animate.scss","./vendors/css/ionicons.scss":"vendors/css/ionicons.scss","./node_modules/magnific-popup/src/css/main.scss":"node_modules/magnific-popup/src/css/main.scss","./vendors/css/open-sans.scss":"vendors/css/open-sans.scss","./resources/scss/style.scss":"resources/scss/style.scss","./resources/scss/queries.scss":"resources/scss/queries.scss"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60396" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","styles.js"], null)
//# sourceMappingURL=/styles.3aa8913d.map