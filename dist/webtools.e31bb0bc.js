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
// main title change
var mainTitle = document.getElementById("mainTitle");
var h2Tag = document.getElementsByTagName("h2"); // mainTitle.textContent=h2Tag[0].textContent;
// Header creation

var bodyTag = document.getElementsByTagName("body");
bodyTag[0].insertAdjacentHTML("afterbegin", "\n<header>\n        <nav>\n            <section id=\"title\">\n                <a href=\"./index.html\">\n                    <p>Fan site of</p>\n                    <h1>Chuck Palahniuk</h1>\n                </a>\n            </section>\n            <section id=\"nav-options\">\n                <ul>\n                    <li><a id=\"personalLife\" href=\"./personalLife.html\">Personal life</a></li>\n                    <li><a id=\"fictionBooks\" href=\"./fictionBooks.html\">Fiction books</a></li>\n                    <li><a id=\"nonFiction\" href=\"./nonFiction.html\">Non-fiction books</a></li>\n                </ul>\n            </section>\n        </nav> \n    </header>\n    \n\n");

if (document.getElementsByTagName("h2")) {
  var personalLife = document.getElementById("personalLife");
  var fictionBooks = document.getElementById("fictionBooks");
  var nonFiction = document.getElementById("nonFiction");

  if (h2Tag[0].textContent === "Personal Life") {
    personalLife.classList.add("here");
  } else if (h2Tag[0].textContent === "Fiction Books") {
    fictionBooks.classList.add("here");
  } else if (h2Tag[0].textContent === "Non-Fiction Books") {
    nonFiction.classList.add("here");
  }
} // footer creation


var mainTag = document.getElementsByTagName("main");
mainTag[0].insertAdjacentHTML("afterend", "\n<footer>\n<ul>\n    <li><span id=\"copyrightDate\"></span> &#169; Rub\xE9n Puerta C\xF3rdoba</li>\n    <li><a href=\"./privacy.html\">Privacy Policy</a></li>\n</ul>\n\n\n\n\n<a href=\"#title\"><i id=\"goUp\" class=\"fas fa-arrow-up\"></i></a>\n</footer>\n\n"); //list of books

var fictionBookList = [{
  title: "Fight Club",
  imgURL: "https://live.staticflickr.com/2291/2320868352_c577a53c9d.jpg",
  imgAuthor: "K嘛 / Flickr",
  imgLink: "https://www.flickr.com/photos/kmar/2320868352/in/photolist-bp1QF-2js1E3B-2iX9Zb5-F5JP2d-KpD91P-b6myET-2iYxana-2go7vCg-4x64iA-JnzG8z-mXZpn1-2iAfb22-Ku7ATr-25G5xy-TnoBDA-87ybiz-86TQPG-fe2AwY-7adQdN-88KgQU-7aa1Ea-2a6c8ci-jvxk6-2uTjQX-26jYJKN-Q4hJsW-R8qBfK-92Jvhw-qkPrF4-27JZeDN-bqZ9Hm-8DNuSJ-7yuQFL-7cfw5Y-rm4v7S-po7qyH-S7a8BV-4KKujS-m2BKPn-8nHegF-5E8JFK-7Kwe9V-oLFx9v-611ffi-9SZK3p-dEDe3A-8nLmMh-mGUQGF-YRS7Lf-ea7oqa",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 1996,
  alt: "Alternative Book Cover designed by a fan of the book ",
  quote: "The things you used to own, now they own you.",
  videoURL: "https://www.youtube.com/embed/GCuSDH-YEKI",
  videoTitle: "Poscast Joe Rogan about fight club",
  videoCaption: "Poscast Joe Rogan about fight club"
}, {
  title: "Survivor",
  imgURL: "https://live.staticflickr.com/6170/6190753659_7db2ef228e_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6190753659/in/photostream/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 1999,
  alt: "Alternative Book Cover designed by a fan of the book ",
  quote: 'A girl calls and asks, "Does it hurt very much to die?"Well, sweetheart," I tell her, "yes, but it hurts a lot more to keep living.',
  videoURL: "https://www.youtube.com/embed/mAdjnwPLikw",
  videoTitle: "Book review of Survivor",
  videoCaption: "Book review of Survivor by Charley Cook"
}, {
  title: "Invisible Monsters",
  imgURL: "https://live.staticflickr.com/6161/6190754069_be1de27651_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6190754069/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 1999,
  alt: "Alternative Book Cover designed by a fan of the book ",
  videoURL: "https://www.youtube.com/embed/YacX2h1zfEU",
  videoTitle: "Invisible Monsters Review",
  videoCaption: "Invisible Monsters Review by Shane's Reviews",
  quote: "Your past is just a story. And once you realise this, it has no power over you"
}, {
  title: "Choke",
  imgURL: "https://live.staticflickr.com/6158/6190754229_27b7a288ea_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6190754229/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 2001,
  alt: "Alternative Book Cover designed by a fan of the book ",
  quote: "We can spend our lives letting the world tell us who we are. Sane or insane. Saints or sex addicts. Heroes or victims. Letting history tell us how good or bad we are. Letting our past decide our future. Or we can decide for ourselves. And maybe it's our job to invent something better",
  videoURL: "https://www.youtube.com/embed/qkIEuWIk4v4",
  videoTitle: "Chuck Palahniuk Interview",
  videoCaption: "How Choke was originated"
}, {
  title: "Lullaby",
  imgURL: "https://live.staticflickr.com/6158/6191271450_5434d284f3_b.jpg",
  imgAuthor: "Kristen Withers / Flickr",
  imgLink: "https://www.flickr.com/photos/kris10withers/6191271450/in/album-72157627770293394/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 2002,
  alt: "Alternative Book Cover designed by a fan of the book ",
  quote: "In a world where vows are worthless.Where making a pledge means nothing. Where promises are made to be broken, it would be nice to see words come back into power.",
  videoURL: "https://www.youtube.com/embed/MJVwZjwva-c",
  videoTitle: "Lullaby Book Review",
  videoCaption: "Lullaby book review by Stepyyisms"
}, {
  title: "Diary",
  imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
  imgAuthor: "jana. / Flickr",
  imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2003,
  alt: "Palahniuk Books, between them, ",
  quote: "We all die. The goal isn't to live forever, the goal is to create something that will.",
  videoURL: "https://www.youtube.com/embed/8sWTCjIVQQE",
  videoTitle: "Book review of Diary",
  videoCaption: "Book review of Diary by Climb The Stacks"
}, {
  title: "Haunted",
  imgURL: "https://live.staticflickr.com/145/417417780_2884dd3af1_b.jpg",
  imgAuthor: "Tnarik Innael / Flickr",
  imgLink: "https://www.flickr.com/photos/tnarik/417417780/",
  imgLicense: "(CC BY-SA 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
  year: 2005,
  alt: "Person holding the book ",
  quote: "The world will always punish the few people with special talents the rest of us don’t recognize as real.",
  videoURL: "https://www.youtube.com/embed/7OJu1rRndBk",
  videoTitle: "Book review of Haunted",
  videoCaption: "Book review of Haunted by Philip Lanz"
}, {
  title: "Rant",
  imgURL: "https://live.staticflickr.com/2751/4173057317_a9905302d0_b.jpg",
  imgAuthor: "Hugo Chisholm / Flickr",
  imgLink: "https://www.flickr.com/photos/evilmutent/4173057317/",
  imgLicense: "(CC BY-SA 2.0) ",
  imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
  year: 2007,
  alt: "Book cover Signed by Chuck Palahniuk, ",
  quote: "Life's greatest comfort is being able to look over your shoulder and see people worse off, waiting in line behind you.",
  videoURL: "https://www.youtube.com/embed/OZlaptLnrJ0",
  videoTitle: "Book review of Rant",
  videoCaption: " Book review of rant by The Story Magpie"
}, {
  title: "Snuff",
  imgURL: "https://live.staticflickr.com/2214/2512624124_49862bc645_b.jpg",
  imgAuthor: "Sal / Flickr",
  imgLink: "https://www.flickr.com/photos/wondermonkey2k/2512624124/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2008,
  alt: "book cover signed by Chuck Palahniuk, ",
  quote: "It can only take a moment to waste the rest of your life."
}, {
  title: "Pygmy",
  imgURL: "https://live.staticflickr.com/2616/4158040651_f6460a9e95_b.jpg",
  imgAuthor: "Pesky Librarians / Flickr",
  imgLink: "https://www.flickr.com/photos/peskylibrary/4158040651/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2009,
  alt: "Books in a Library, one of them is the book",
  quote: "According lecture, entire effort United States to incite desire, inflict want, inspire demand."
}, {
  title: "Tell All",
  imgURL: "https://live.staticflickr.com/6183/6066435840_5fff40da8a_z.jpg",
  imgAuthor: "federico novaro / Flickr",
  imgLink: "https://www.flickr.com/photos/federiconovaro/6066435840",
  imgLicense: "(CC BY-NC-SA 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-sa/2.0/",
  year: 2010,
  alt: "Rodrigo Corral cover version of the book  ",
  quote: "I disconnect the telephone to keep the outside world in it's correct place",
  videoURL: "https://www.youtube.com/embed/iuboXWN0F10",
  videoTitle: "Tell all event",
  videoCaption: "Tell All event with Chuck Palahniuk"
}, {
  title: "Damned",
  imgURL: "https://live.staticflickr.com/3787/9254011665_ba476b221f.jpg",
  imgAuthor: "Emiliano / Flickr",
  imgLink: "https://www.flickr.com/photos/taskforsome/9254011665/",
  imgLicense: "(CC BY-SA 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
  year: 2011,
  alt: "Book signed by Chuck Palahniuk, ",
  quote: "Life is short, death is forever",
  videoURL: "https://www.youtube.com/embed/EbaERz37ieg",
  videoTitle: "Presentation of Damned",
  videoCaption: "Presentation of Damned at Strand Book Store"
}, {
  title: "Doomed",
  imgURL: "https://live.staticflickr.com/3736/10581759016_5af50e956f_z.jpg",
  imgAuthor: "Pesky Librarians / Flickr",
  imgLink: "https://www.flickr.com/photos/peskylibrary/10581759016/in/photolist-guNF4C-h85hhY",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2013,
  alt: "Books in a library, between them is ",
  quote: "When you die, trust me, the most difficult person to leave behind is yourself.",
  videoURL: "https://www.youtube.com/embed/6pQG12lUS2Q",
  videoTitle: "Chuck Palahniuk reads from Doomed",
  videoCaption: "Chuck Palahniuk reads from Doomed"
}, {
  title: "Burnt Tongues",
  imgURL: "https://live.staticflickr.com/2372/1716382953_65647762bf_z.jpg",
  imgAuthor: "Adams K. / Flickr",
  imgLink: "https://www.flickr.com/photos/adamskev/1716382953/",
  imgLicense: "(CC BY-NC 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 2014,
  alt: "Books arround broken Tv,  ",
  quote: "Young people want mirrors. Older people want art."
}, {
  title: "Beautiful You",
  imgURL: "https://live.staticflickr.com/5219/5384227790_204867f061_z.jpg",
  imgAuthor: "Platform",
  imgLink: "https://www.flickr.com/photos/ouplatform/5384227790/in/photolist-9cMzkC-b44RyH",
  imgLicense: "(CC BY-NC 2.0) ",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
  year: 2014,
  alt: "Books on a Shelf, ",
  quote: "The mistakes we make in our youth,\" she said solemnly, \"we pay for with the rest of our lives.",
  videoURL: "https://www.youtube.com/embed/r9QgBrLWMXA",
  videoTitle: "Chuck Palahniuk \"Beautiful You\" tour at Powerhouse Arena in Brooklyn",
  videoCaption: "Chuck Palahniuk \"Beautiful You\" tour at Powerhouse Arena in Brooklyn"
}, {
  title: "Make Something Up",
  imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
  imgAuthor: "jana. / Flickr",
  imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2015,
  alt: "Palahniuk Books, ",
  quote: "The ice-cold way death can hit you in the noontime of a sunny day just when you'd never expect."
}, {
  title: "Fight Club 2",
  imgURL: "https://live.staticflickr.com/7153/6624162303_832a483579_z.jpg",
  imgAuthor: "Scott Ellis / Flickr",
  imgLink: "https://www.flickr.com/photos/vsellis/6624162303/",
  imgLicense: "(CC BY-SA 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
  year: 2016,
  alt: "Soap pills representing Fight Club, ",
  videoURL: "https://www.youtube.com/embed/TGYEoKbGi4Q",
  videoTitle: "Chuck Palahniuk talks about Fight Club 2",
  videoCaption: "Chuck Palahniuk talks about Fight Clubt 2 at San Diego Comic-con"
}, {
  title: "Bait",
  imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
  imgAuthor: "jana. / Flickr",
  imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2016,
  alt: "Palahniuk Books, "
}, {
  title: "Legacy",
  imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
  imgAuthor: "jana. / Flickr",
  imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2017,
  alt: "Palahniuk Books, ",
  videoURL: "https://www.youtube.com/embed/ER_p4KKq2FU",
  videoTitle: "Presentation of Legacy",
  videoCaption: "Presentation of Legacy in KGW news"
}, {
  title: "Adjustment Day",
  imgURL: "https://live.staticflickr.com/978/40975530065_ea04998cc0_z.jpg",
  imgAuthor: "Pesky Librarians / flickr",
  imgLink: "https://www.flickr.com/photos/peskylibrary/40975530065/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2018,
  alt: "Books in library, one of them is ",
  quote: "Imagine there is no God. There is no Heaven or Hell. There is only your son and his son and his son, and the world you leave for them.",
  videoURL: "https://www.youtube.com/embed/UNbRzEssSi8",
  videoTitle: "Chuck Palahniuk talks about Adjustment Day",
  videoCaption: "Chuck Palahniuk talks about Adjustment Day at KGW News"
}, {
  title: "Fight Club 3",
  imgURL: "https://live.staticflickr.com/7153/6624162303_832a483579_z.jpg",
  imgAuthor: "Scott Ellis / Flickr",
  imgLink: "https://www.flickr.com/photos/vsellis/6624162303/",
  imgLicense: "(CC BY-SA 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
  year: 2016,
  alt: "Soap pills representing Fight Club, ",
  videoURL: "https://www.youtube.com/embed/6lROjhB0vOk",
  videoTitle: "Fight Club 3 trailer",
  videoCaption: "Fight Club 3 trailer by Dark Horse Comics"
}, {
  title: "The Invention of Sound",
  imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
  imgAuthor: "jana. / Flickr",
  imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2017,
  alt: "Palahniuk Books, "
}];
var nonFictionBookList = [{
  title: "Fugitives and Refugees",
  imgURL: "https://live.staticflickr.com/221/468501794_663acb4c72.jpg",
  imgAuthor: "susieredshores /Flickr",
  imgLink: "https://www.flickr.com/photos/saundersmecklem/468501794/in/photolist-Hpcg9-fgnxjQ-273RFUs",
  imgLicense: "(CC BY-NC-ND 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2003,
  alt: "Chuck Palahniuk's book in Portland, oregon. "
}, {
  title: "Stranger than Fiction",
  imgURL: "https://live.staticflickr.com/3502/3947970111_2377df0cef.jpg",
  imgAuthor: "Jessie Pearl / Flickr",
  imgLink: "https://www.flickr.com/photos/terwilliger911/3947970111/",
  imgLicense: "(CC BY 2.0)",
  imgLicenseURL: "https://creativecommons.org/licenses/by/2.0/",
  year: 2004,
  alt: "Books of palahniuk, ",
  quote: "A good story should make you laugh, and a moment later break your heart.",
  videoURL: "https://www.youtube.com/embed/AqdYbZ8tBXg",
  videoTitle: "Book Review of Stranger Than Fiction",
  videoCaption: "Book review of Stranger than Fiction by Michael Guiliano"
}, {
  title: "Consider This",
  imgURL: "https://live.staticflickr.com/65535/49400748353_7369efc1c4.jpg",
  imgAuthor: "Pesky Librarians / Flickr",
  imgLink: "https://www.flickr.com/photos/peskylibrary/49400748353/",
  imgLicense: "(CC BY-NC-ND 2.0) ",
  imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
  year: 2020,
  alt: "Book cover of the book ",
  quote: "By writing , people present their lives as fiction and tackle their issues as a craft exercise . By redeeming their protagonist , they find their own redemption .",
  videoURL: "https://www.youtube.com/embed/nHqx9nEtSVg",
  videoTitle: "Chuck Palahniuk speaking about Consider This",
  videoCaption: "Chuck Palahniuk speaking about Consider This, by Hachette book Group"
}]; // ,
//     {
//       title: "",
//       imgURL: "",
//       imgAuthor: "",
//       imgLink: "",
//       imgLicense: "",
//       imgLicenseURL: "",
//       year: "",
//       alt: "",
//     }
// book Display

if (document.getElementById("bookDisplay")) {
  var _bookDisplay = document.getElementById("bookDisplay");

  if (h2Tag[0].textContent === "Fiction Books") {
    fictionBookList.forEach(displayBook);
  } else {
    nonFictionBookList.forEach(displayBook);
  }
} // Fiction detail Display book


if (document.getElementById("detailFiction")) {
  detailBook(fictionBookList, "detailFiction");
} else if (document.getElementById("detailNonFiction")) {
  detailBook(nonFictionBookList, "detailNonFiction");
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

; // functions

function displayBook(book) {
  var link = book.title.charAt(0).toLowerCase() + book.title.slice(1).split(' ').join('');
  bookDisplay.insertAdjacentHTML("beforeend", "\n  \n  <div>\n \n     <figure> \n     <a href=\"".concat(link, ".html\">\n     <h4>").concat(book.title, "</h4>\n     <img src=\"").concat(book.imgURL, "\" alt=\"").concat(book.alt, "\" title=\"").concat(book.alt).concat(book.title, "\" >\n     </a>\n     <figcaption>\n     Book publication year: ").concat(book.year, "\n     <strong>Image Source: </strong> \n     <a class=\"external\" href=\"").concat(book.imgLink, "\">\n      ").concat(book.imgAuthor, "\n     </a>\n     <strong>License:</strong>\n     <a class=\"external\" href=\"").concat(book.imgLicenseURL, "\">\n     ").concat(book.imgLicense, "\n     </a>\n     </figcaption>\n    </figure>\n  </div>\n  \n  \n  "));
}

function detailBook(bookList, bookSelector) {
  var selectedBook = document.getElementsByTagName("h2");
  var bookDisplay = document.getElementById(bookSelector);
  var footerTag = document.getElementsByTagName("footer");

  for (var _x2 = 0; _x2 < bookList.length; _x2++) {
    if (selectedBook[0].textContent === bookList[_x2].title) {
      var book = bookList[_x2];

      if (bookSelector === "detailFiction") {
        bookDisplay.insertAdjacentHTML("afterbegin", "<div id=\"returnTag\" ><a href=\"./fictionBooks.html\"> < return to Fiction Book section</a></div>");
      } else {
        bookDisplay.insertAdjacentHTML("afterbegin", "<div id=\"returnTag\" ><a href=\"./nonFiction.html\"> < return to Non Fiction Book section</a></div>");
      }

      bookDisplay.insertAdjacentHTML("beforeend", "\n\n      <section>\n      <h3>Description of ".concat(book.title, "</h3>\n      <figure> \n      <img src=\"").concat(book.imgURL, "\" alt=\"").concat(book.alt, "\" title=\"").concat(book.alt).concat(book.title, "\" >\n      </a>\n      <figcaption>\n      ").concat(book.alt, "\n      <strong>Image Source: </strong> \n      <a class=\"external\" href=\"").concat(book.imgLink, "\">\n       ").concat(book.imgAuthor, "\n      </a>\n      <strong>License:</strong>\n      <a class=\"external\" href=\"").concat(book.imgLicenseURL, "\">\n      ").concat(book.imgLicense, "\n      </a>\n      </figcaption>\n     </figure>\n    \n      <p>By the pricking of my thumbs, But this denoted a foregone conclusion:  Yes, so please your Majesty. I did go between them, as I said; but more than that, he loved her-for indeed he was mad for her, and talk'd of Satan, and of Limbo, and of Furies, and I know not what.  Besides this nothing that he so plentifully gives me, the something that nature gave me his countenance seems to take from me.   A fool, a fool! I met a fool i' th' forest, A motley fool.  I must have liberty Withal, as large a charter as the wind, To blow on whom I please, for so fools have; And they that are most galled with my folly, They most must laugh.  Hast any philosophy in thee, shepherd?</p>\n      \n      <p id=\"beforeQuote\">What's mine is yours and what is yours is mine.  Besides this nothing that he so plentifully gives me, the something that nature gave me his countenance seems to take from me.  Your brother- no, no brother; yet the son- Yet not the son; I will not call him son Of him I was about to call his father- Hath heard your praises; and this night he means To burn the lodging where you use to lie, And you within it.  I think he be transform'd into a beast; For I can nowhere find him like a man. Invest me in my motley; give me leave To speak my mind, and I will through and through Cleanse the foul body of th' infected world, If they will patiently receive my medicine. Hast any philosophy in thee, shepherd?</p>\n      \n      \n      \n      <p>It is meat and drink to me to see a clown:  This is no place; this house is but a butchery; Abhor it, fear it, do not enter it. Well then, if ever I thank any man, I'll thank you; but that they call compliment is like th' encounter of two dog-apes; and when a man thanks me heartily, methinks have given him a penny, and he renders me the beggarly thanks. </p>\n      \n      </section>\n      "));

      if (book.quote) {
        var beforeQuote = document.getElementById("beforeQuote");
        beforeQuote.insertAdjacentHTML("afterend", "\n        \n        <blockquote cite=\"".concat(book.title, "\">\n        <p>\n        \u201C").concat(book.quote, "\u201D <cite>").concat(book.title, " by Chuck Palahniuk</cite> </p>\n        </blockquote>"));
      }

      if (book.videoURL) {
        bookDisplay.insertAdjacentHTML("beforeend", "\n        <section>\n          <figure>\n            <h3>".concat(book.videoTitle, "<h3>\n            <iframe src=\"").concat(book.videoURL, "\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            <figcaption>").concat(book.videoCaption, "</figcaption>\n          <figure>\n          </section>\n        \n        "));
      }

      if (_x2 === 0) {
        footerTag[0].insertAdjacentHTML("beforebegin", "<div id=\"previous\"> <p>No previous books</p></div>");
      } else {
        var previousBook = bookList[_x2 - 1];
        var previousLink = previousBook.title.charAt(0).toLowerCase() + previousBook.title.slice(1).split(' ').join('');
        footerTag[0].insertAdjacentHTML("beforebegin", "<div id=\"previous\"> <a href=\"".concat(previousLink, ".html\">< ").concat(previousBook.title, "</a></div>"));
      }

      if (_x2 === bookList.length - 1) {
        footerTag[0].insertAdjacentHTML("beforebegin", "<div id=\"next\"> <p>No next books</p></div>");
      } else {
        var nextBook = bookList[_x2 + 1];
        var nextLink = nextBook.title.charAt(0).toLowerCase() + nextBook.title.slice(1).split(' ').join('');
        footerTag[0].insertAdjacentHTML("beforebegin", "<div id=\"next\"> <a href=\"".concat(nextLink, ".html\"><p>").concat(nextBook.title, " ></p> </a></div>"));
      }
    }
  }
}
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35765" + '/');

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