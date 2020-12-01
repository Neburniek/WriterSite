// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
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
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
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
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./nfb1_sm.jpg":[["nfb1_sm.58026965.jpg","nfb1_sm.jpg"],"nfb1_sm.jpg"],"./fb_01_sm.jpg":[["fb_01_sm.46ea20b5.jpg","fb_01_sm.jpg"],"fb_01_sm.jpg"],"./fb_02_sm.jpg":[["fb_02_sm.5799f72b.jpg","fb_02_sm.jpg"],"fb_02_sm.jpg"],"./fb_03_sm.jpg":[["fb_03_sm.de10ecc2.jpg","fb_03_sm.jpg"],"fb_03_sm.jpg"],"./fb_04_sm.jpg":[["fb_04_sm.929df15f.jpg","fb_04_sm.jpg"],"fb_04_sm.jpg"],"./fb_05_sm.jpg":[["fb_05_sm.06204088.jpg","fb_05_sm.jpg"],"fb_05_sm.jpg"],"./fb_07_sm.jpg":[["fb_07_sm.05572717.jpg","fb_07_sm.jpg"],"fb_07_sm.jpg"],"./fb_08_sm.jpg":[["fb_08_sm.b7162b61.jpg","fb_08_sm.jpg"],"fb_08_sm.jpg"],"./fb_09_sm.jpg":[["fb_09_sm.48614f82.jpg","fb_09_sm.jpg"],"fb_09_sm.jpg"],"./fb_10_sm.jpg":[["fb_10_sm.eade2325.jpg","fb_10_sm.jpg"],"fb_10_sm.jpg"],"./fb_11_sm.jpg":[["fb_11_sm.94f6ef71.jpg","fb_11_sm.jpg"],"fb_11_sm.jpg"],"./fb_12_sm.jpg":[["fb_12_sm.f22e8063.jpg","fb_12_sm.jpg"],"fb_12_sm.jpg"],"./fb_13_sm.jpg":[["fb_13_sm.a54cf284.jpg","fb_13_sm.jpg"],"fb_13_sm.jpg"],"./fb_17_sm.jpg":[["fb_17_sm.c393f101.jpg","fb_17_sm.jpg"],"fb_17_sm.jpg"],"./fb_20_sm.jpg":[["fb_20_sm.305ff681.jpg","fb_20_sm.jpg"],"fb_20_sm.jpg"],"./nfb2_sm.jpg":[["nfb2_sm.6c918605.jpg","nfb2_sm.jpg"],"nfb2_sm.jpg"],"./nfb3_sm.jpg":[["nfb3_sm.6fa7cd1a.jpg","nfb3_sm.jpg"],"nfb3_sm.jpg"],"./chuck_1_sm.jpg":[["chuck_1_sm.d4bca969.jpg","chuck_1_sm.jpg"],"chuck_1_sm.jpg"],"./chuck_2_sm.jpg":[["chuck_2_sm.d7f19126.jpg","chuck_2_sm.jpg"],"chuck_2_sm.jpg"],"./chuck_3_sm.jpg":[["chuck_3_sm.5a1150e6.jpg","chuck_3_sm.jpg"],"chuck_3_sm.jpg"],"./chuck_0_sm.jpg":[["chuck_0_sm.7a247408.jpg","chuck_0_sm.jpg"],"chuck_0_sm.jpg"],"./index_sm.jpg":[["index_sm.ac6ae012.jpg","index_sm.jpg"],"index_sm.jpg"],"./chuck_0.jpg":[["chuck_0.a3a227f7.jpg","chuck_0.jpg"],"chuck_0.jpg"],"./chuck_1.jpg":[["chuck_1.d4a111fc.jpg","chuck_1.jpg"],"chuck_1.jpg"],"./chuck_2.jpg":[["chuck_2.9651e9e2.jpg","chuck_2.jpg"],"chuck_2.jpg"],"./chuck_3.jpg":[["chuck_3.c48ed5e4.jpg","chuck_3.jpg"],"chuck_3.jpg"],"./nfb1_md.jpg":[["nfb1_md.f6117aab.jpg","nfb1_md.jpg"],"nfb1_md.jpg"],"./fb_01_md.jpg":[["fb_01_md.d353b45c.jpg","fb_01_md.jpg"],"fb_01_md.jpg"],"./fb_02_md.jpg":[["fb_02_md.9816a10d.jpg","fb_02_md.jpg"],"fb_02_md.jpg"],"./fb_03_md.jpg":[["fb_03_md.c2644a35.jpg","fb_03_md.jpg"],"fb_03_md.jpg"],"./fb_04_md.jpg":[["fb_04_md.bc398b73.jpg","fb_04_md.jpg"],"fb_04_md.jpg"],"./fb_05_md.jpg":[["fb_05_md.6ae6f85f.jpg","fb_05_md.jpg"],"fb_05_md.jpg"],"./fb_07_md.jpg":[["fb_07_md.3bdf44fd.jpg","fb_07_md.jpg"],"fb_07_md.jpg"],"./fb_08_md.jpg":[["fb_08_md.42c55297.jpg","fb_08_md.jpg"],"fb_08_md.jpg"],"./fb_09_md.jpg":[["fb_09_md.eb83fb00.jpg","fb_09_md.jpg"],"fb_09_md.jpg"],"./fb_10_md.jpg":[["fb_10_md.d35135a5.jpg","fb_10_md.jpg"],"fb_10_md.jpg"],"./fb_11_md.jpg":[["fb_11_md.135f9969.jpg","fb_11_md.jpg"],"fb_11_md.jpg"],"./fb_12_md.jpg":[["fb_12_md.eaa01be0.jpg","fb_12_md.jpg"],"fb_12_md.jpg"],"./fb_13_md.jpg":[["fb_13_md.0ff666ea.jpg","fb_13_md.jpg"],"fb_13_md.jpg"],"./fb_17_md.jpg":[["fb_17_md.09e8e750.jpg","fb_17_md.jpg"],"fb_17_md.jpg"],"./fb_20_md.jpg":[["fb_20_md.4868bc23.jpg","fb_20_md.jpg"],"fb_20_md.jpg"],"./nfb2_md.jpg":[["nfb2_md.5a4c5a37.jpg","nfb2_md.jpg"],"nfb2_md.jpg"],"./nfb3_md.jpg":[["nfb3_md.d88a6b6d.jpg","nfb3_md.jpg"],"nfb3_md.jpg"],"./index_md.jpg":[["index_md.404a38d3.jpg","index_md.jpg"],"index_md.jpg"],"./nfb1.png":[["nfb1.fe88adc8.png","nfb1.png"],"nfb1.png"],"./fb_01_lg.png":[["fb_01_lg.99d0d162.png","fb_01_lg.png"],"fb_01_lg.png"],"./fb_02_lg.png":[["fb_02_lg.249a82e7.png","fb_02_lg.png"],"fb_02_lg.png"],"./fb_03_lg.png":[["fb_03_lg.99af96a0.png","fb_03_lg.png"],"fb_03_lg.png"],"./fb_04_lg.png":[["fb_04_lg.2a421a21.png","fb_04_lg.png"],"fb_04_lg.png"],"./fb_05_lg.png":[["fb_05_lg.df771bda.png","fb_05_lg.png"],"fb_05_lg.png"],"./fb_07_lg.png":[["fb_07_lg.a6fb5d3b.png","fb_07_lg.png"],"fb_07_lg.png"],"./fb_08_lg.png":[["fb_08_lg.502c9d87.png","fb_08_lg.png"],"fb_08_lg.png"],"./fb_09_lg.png":[["fb_09_lg.3a08b1d6.png","fb_09_lg.png"],"fb_09_lg.png"],"./fb_10_lg.png":[["fb_10_lg.b7d82f9d.png","fb_10_lg.png"],"fb_10_lg.png"],"./fb_11_lg.png":[["fb_11_lg.defed8ab.png","fb_11_lg.png"],"fb_11_lg.png"],"./fb_12_lg.png":[["fb_12_lg.1201ece2.png","fb_12_lg.png"],"fb_12_lg.png"],"./fb_13_lg.png":[["fb_13_lg.b18318f4.png","fb_13_lg.png"],"fb_13_lg.png"],"./fb_17_lg.png":[["fb_17_lg.aee5cfa6.png","fb_17_lg.png"],"fb_17_lg.png"],"./fb_20_lg.png":[["fb_20_lg.2e1149dc.png","fb_20_lg.png"],"fb_20_lg.png"],"./nfb2.png":[["nfb2.001564c5.png","nfb2.png"],"nfb2.png"],"./nfb3.png":[["nfb3.7eace943.png","nfb3.png"],"nfb3.png"],"./index_lg.png":[["index_lg.b5e2b376.png","index_lg.png"],"index_lg.png"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34693" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.8986bff4.js.map