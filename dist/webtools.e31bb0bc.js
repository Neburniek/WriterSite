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
})({"index.js":[function(require,module,exports) {
//list of books
var booksList = [{
  title: "Fight Club",
  imgURL: "https://live.staticflickr.com/2291/2320868352_c577a53c9d.jpg",
  imgAuthor: "K嘛 / Flickr",
  imgLink: "https://www.flickr.com/photos/kmar/2320868352/in/photolist-bp1QF-2js1E3B-2iX9Zb5-F5JP2d-KpD91P-b6myET-2iYxana-2go7vCg-4x64iA-JnzG8z-mXZpn1-2iAfb22-Ku7ATr-25G5xy-TnoBDA-87ybiz-86TQPG-fe2AwY-7adQdN-88KgQU-7aa1Ea-2a6c8ci-jvxk6-2uTjQX-26jYJKN-Q4hJsW-R8qBfK-92Jvhw-qkPrF4-27JZeDN-bqZ9Hm-8DNuSJ-7yuQFL-7cfw5Y-rm4v7S-po7qyH-S7a8BV-4KKujS-m2BKPn-8nHegF-5E8JFK-7Kwe9V-oLFx9v-611ffi-9SZK3p-dEDe3A-8nLmMh-mGUQGF-YRS7Lf-ea7oqa",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 1996,
  alt: "Alternative Book Cover designed by a fan of the book "
}, {
  title: "Survivor",
  imgURL: "https://live.staticflickr.com/6170/6190753659_7db2ef228e_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6190753659/in/photostream/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 1999,
  alt: "Alternative Book Cover designed by a fan of the book "
}, {
  title: "Invisible Monsters",
  imgURL: "https://live.staticflickr.com/6161/6190754069_be1de27651_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6190754069/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 1999,
  alt: "Alternative Book Cover designed by a fan of the book "
}, {
  title: "Choke",
  imgURL: "https://live.staticflickr.com/6158/6190754229_27b7a288ea_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6190754229/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 2001,
  alt: "Alternative Book Cover designed by a fan of the book "
}, {
  title: "Lullaby",
  imgURL: "https://live.staticflickr.com/6158/6191271450_5434d284f3_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6191271450/in/album-72157627770293394/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 2002,
  alt: "Alternative Book Cover designed by a fan of the book "
}, {
  title: "Diary",
  imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
  imgAuthor: "jana. / Flickr",
  imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2003,
  alt: "Palahniuk Books, between them, "
}, {
  title: "Haunted",
  imgURL: "https://live.staticflickr.com/145/417417780_2884dd3af1_b.jpg",
  imgAuthor: "Tnarik Innael / Flickr",
  imgLink: "https://www.flickr.com/photos/tnarik/417417780/",
  imgLicense: "(CC BY-SA 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
  year: 2005,
  alt: "Person holding the book "
}, {
  title: "Rant",
  imgURL: "https://live.staticflickr.com/2751/4173057317_a9905302d0_b.jpg",
  imgAuthor: "Hugo Chisholm / Flickr",
  imgLink: "https://www.flickr.com/photos/evilmutent/4173057317/",
  imgLicense: "(CC BY-SA 2.0) ",
  imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
  year: 2007,
  alt: "Book cover Signed by Chuck Palahniuk, "
}, {
  title: "Snuff",
  imgURL: "https://live.staticflickr.com/2214/2512624124_49862bc645_b.jpg",
  imgAuthor: "Sal / Flickr",
  imgLink: "https://www.flickr.com/photos/wondermonkey2k/2512624124/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2008,
  alt: "book cover signed by Chuck Palahniuk, "
}, {
  title: "Pygmy",
  imgURL: "https://live.staticflickr.com/2616/4158040651_f6460a9e95_b.jpg",
  imgAuthor: "Pesky Librarians / Flickr",
  imgLink: "https://www.flickr.com/photos/peskylibrary/4158040651/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2009,
  alt: "Books in a Library, one of them is "
}, {
  title: "Tell All",
  imgURL: "https://live.staticflickr.com/4025/4581958687_4f76fc9338_b.jpg",
  imgAuthor: "I am R. / Flickr",
  imgLink: "https://www.flickr.com/photos/isfullofcrap/4581958687/",
  imgLicense: "(CC BY 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by/2.0/",
  year: 2010,
  alt: "Houston Galleria Border's, book "
}, {
  title: "Damned",
  imgURL: "",
  imgAuthor: "",
  imgLink: "",
  imgLicense: "",
  imgLicenseURL: "",
  year: "",
  alt: ""
}, {
  title: "",
  imgURL: "",
  imgAuthor: "",
  imgLink: "",
  imgLicense: "",
  imgLicenseURL: "",
  year: "",
  alt: ""
}]; // for(let x=0; x<booksList.length; x++ ){
//   if(booksList[x].title=== "Rant"){
//     console.log(booksList[x])
//   }
// }

if (document.getElementById("bookDisplay")) {
  var bookDisplay = document.getElementById("bookDisplay"); // for(x=0; x<booksList.length; x++){
  //   bookDisplay.insertAdjacentHTML("beforeend",`<p>${booksList[x].title}</p>`)
  // }

  booksList.forEach(displayBook);

  function displayBook(book) {
    bookDisplay.insertAdjacentHTML("beforeend", "\n    \n    <div>\n   \n       <figure> \n       <a href=\"".concat(book.title.split(' ').join('_'), ".html\">\n       <h4>").concat(book.title, "</h4>\n       <img src=\"").concat(book.imgURL, "\" alt=\"").concat(book.alt, "\" title=\"").concat(book.alt).concat(book.title, "\" >\n       </a>\n       <figcaption>\n       Book publication year: ").concat(book.year, "\n       <strong>Image Source: </strong> \n       <a class=\"external\" href=\"").concat(book.imgLink, "\">\n        ").concat(book.imgAuthor, "\n       </a>\n       <strong>License:</strong>\n       <a class=\"external\" href=\"").concat(book.imgLicenseURL, "\">\n       ").concat(book.imgLicense, "\n       </a>\n       </figcaption>\n      </figure>\n    </div>\n    \n    \n    "));
  }
} // External icon after external link class external


var externalLink = document.getElementsByClassName("external");

for (var x = 0; x < externalLink.length; x++) {
  externalLink[x].setAttribute("target", "_blank");
  externalLink[x].insertAdjacentHTML("beforeend", " <i class='fas fa-external-link-alt'></i>");
} // Copyright date


var copyrightDate = document.getElementById("copyrightDate");
copyrightDate.textContent = new Date().getFullYear(); // Image click eventListener

var imageArray = document.getElementsByTagName("img");

var _loop = function _loop(_x) {
  imageArray[_x].addEventListener("click", function () {
    imageArray[_x].classList.toggle("imageSelected");
  });
};

for (var _x = 0; _x < imageArray.length; _x++) {
  _loop(_x);
} // adult content display


if (document.getElementById("Unlock")) {
  var adultUnlocker = document.getElementById("Unlock");
  var hiddenContent = document.getElementById("hidden");
  var adultChecker = document.getElementById("adult");
  adultUnlocker.addEventListener("click", function () {
    var age = document.getElementById("age").value;

    if (age >= 18) {
      hiddenContent.classList.toggle("hidden");
      adultChecker.classList.toggle("hidden");
    } else {
      adultChecker.innerHTML = "<p><strong>Sorry. You are not allowed to see this content</strong></p>";
    }
  });
}

;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35213" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/webtools.e31bb0bc.js.map