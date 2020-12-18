// Book Objects  

const fictionBookList = [
  { title: "Fight Club",
    imgURL: "./fb_01_sm.a701879e.jpg",
    imgMd:"./fb_01_md.e350a00a.jpg",
        imgLg:"./fb_01_lg.222fca1a.png",
    imgAuthor: "K嘛 / Flickr",
    imgLink:"https://www.flickr.com/photos/kmar/2320868352/in/photolist-bp1QF-2js1E3B-2iX9Zb5-F5JP2d-KpD91P-b6myET-2iYxana-2go7vCg-4x64iA-JnzG8z-mXZpn1-2iAfb22-Ku7ATr-25G5xy-TnoBDA-87ybiz-86TQPG-fe2AwY-7adQdN-88KgQU-7aa1Ea-2a6c8ci-jvxk6-2uTjQX-26jYJKN-Q4hJsW-R8qBfK-92Jvhw-qkPrF4-27JZeDN-bqZ9Hm-8DNuSJ-7yuQFL-7cfw5Y-rm4v7S-po7qyH-S7a8BV-4KKujS-m2BKPn-8nHegF-5E8JFK-7Kwe9V-oLFx9v-611ffi-9SZK3p-dEDe3A-8nLmMh-mGUQGF-YRS7Lf-ea7oqa",
    imgLicense: "(CC BY-NC-ND 2.0)",
    imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
    year: 1996,
    alt: "Alternative Book Cover designed by a fan of the book ",
    quote: "The things you used to own, now they own you.",
    videoURL: "https://www.youtube.com/embed/GCuSDH-YEKI",
    videoTitle: "Poscast Joe Rogan about fight club",
    videoCaption: "Poscast Joe Rogan about fight club",

    
  }, {title:"Survivor",
      imgURL: "./fb_02_sm.6ac9fcf9.jpg",
      imgMd:"./fb_02_md.1f813943.jpg",
        imgLg:"./fb_02_lg.3846a17e.png",
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
    },

      {
        title: "Invisible Monsters",
        imgURL: "./fb_03_sm.c215dcac.jpg",
        imgMd:"./fb_03_md.2dcfde06.jpg",
        imgLg:"./fb_03_lg.731b68ee.png",
        imgAuthor: "Kristen Withers / Flickr",
        imgLink: "https://www.flickr.com/photos/kris10withers/6190754069/",
        imgLicense:"(CC BY-NC 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 1999,
        alt: "Alternative Book Cover designed by a fan of the book ",
        videoURL: "https://www.youtube.com/embed/YacX2h1zfEU",
        videoTitle: "Invisible Monsters Review",
        videoCaption: "Invisible Monsters Review by Shane's Reviews",
        quote: "Your past is just a story. And once you realise this, it has no power over you"
      },

      {
        title: "Choke",
        imgURL: "./fb_04_sm.ebff7fa6.jpg",
        imgMd:"./fb_04_md.5cc7629d.jpg",
        imgLg:"./fb_04_lg.3df8a249.png",
        imgAuthor: "Kristen Withers / Flickr",
        imgLink: "https://www.flickr.com/photos/kris10withers/6190754229/",
        imgLicense:"(CC BY-NC 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 2001,
        alt: "Alternative Book Cover designed by a fan of the book ",
        quote: "We can spend our lives letting the world tell us who we are. Sane or insane. Saints or sex addicts. Heroes or victims. Letting history tell us how good or bad we are. Letting our past decide our future. Or we can decide for ourselves. And maybe it's our job to invent something better",
        videoURL: "https://www.youtube.com/embed/qkIEuWIk4v4",
        videoTitle: "Chuck Palahniuk Interview",
        videoCaption: "How Choke was originated"
      },

      {
        title: "Lullaby",
        imgURL: "./fb_05_sm.5a1d9a16.jpg",
        imgMd:"./fb_05_md.dfb24b24.jpg",
        imgLg:"./fb_05_lg.1e933f84.png",
        imgAuthor: "Kristen Withers / Flickr",
        imgLink: "https://www.flickr.com/photos/kris10withers/6191271450/in/album-72157627770293394/",
        imgLicense:"(CC BY-NC 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 2002,
        alt: "Alternative Book Cover designed by a fan of the book ",
        quote: "In a world where vows are worthless.Where making a pledge means nothing. Where promises are made to be broken, it would be nice to see words come back into power.",
        videoURL: "https://www.youtube.com/embed/MJVwZjwva-c",
        videoTitle: "Lullaby Book Review",
        videoCaption: "Lullaby book review by Stepyyisms"

      },

      {
        title: "Diary",
        imgURL: "./index_sm.598dd799.jpg",
        imgMd:"./index_md.bb176651.jpg",
        imgLg:"./index_lg.3d5490d8.png",
        imgAuthor: "jana. / Flickr",
        imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
        imgLicense:"(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2003,
        alt: "Palahniuk Books, between them, ",
        quote: "We all die. The goal isn't to live forever, the goal is to create something that will.",
        videoURL: "https://www.youtube.com/embed/8sWTCjIVQQE",
        videoTitle: "Book review of Diary",
        videoCaption: "Book review of Diary by Climb The Stacks"
      },

      {
        title: "Haunted",
        imgURL: "./fb_07_sm.34d1b82e.jpg",
        imgMd:"./fb_07_md.418e9f78.jpg",
        imgLg:"./fb_07_lg.92315c31.png",
        imgAuthor: "Tnarik Innael / Flickr",
        imgLink: "https://www.flickr.com/photos/tnarik/417417780/",
        imgLicense:"(CC BY-SA 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
        year: 2005,
        alt: "Person holding the book ",
        quote: "The world will always punish the few people with special talents the rest of us don’t recognize as real.",
        videoURL:"https://www.youtube.com/embed/7OJu1rRndBk",
        videoTitle: "Book review of Haunted",
        videoCaption: "Book review of Haunted by Philip Lanz"
      },
      {
        title: "Rant",
        imgURL: "./fb_08_sm.988e7948.jpg",
        imgMd:"./fb_08_md.8fe58d1b.jpg",
        imgLg:"./fb_08_lg.84f304cd.png",
        imgAuthor: "Hugo Chisholm / Flickr",
        imgLink: "https://www.flickr.com/photos/evilmutent/4173057317/",
        imgLicense: "(CC BY-SA 2.0) ",
        imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
        year: 2007,
        alt: "Book cover Signed by Chuck Palahniuk, ",
        quote: "Life's greatest comfort is being able to look over your shoulder and see people worse off, waiting in line behind you.",
        videoURL: "https://www.youtube.com/embed/OZlaptLnrJ0",
        videoTitle: "Book review of Rant",
        videoCaption:" Book review of rant by The Story Magpie"
      },
      {
        title: "Snuff",
        imgURL: "./fb_09_sm.26680fda.jpg",
        imgMd:"./fb_09_md.e36ef0b8.jpg",
        imgLg:"./fb_09_lg.d130b0a1.png",
        imgAuthor: "Sal / Flickr",
        imgLink: "https://www.flickr.com/photos/wondermonkey2k/2512624124/",
        imgLicense: "(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2008,
        alt: "book cover signed by Chuck Palahniuk, ",
        quote: "It can only take a moment to waste the rest of your life.",
        
      },
      {
        title: "Pygmy",
        imgURL: "./fb_10_sm.64d88a4b.jpg",
        imgMd:"./fb_10_md.a3b5b4f6.jpg",
        imgLg:"./fb_10_lg.94d272a9.png",
        imgAuthor: "Pesky Librarians / Flickr",
        imgLink: "https://www.flickr.com/photos/peskylibrary/4158040651/",
        imgLicense: "(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2009,
        alt: "Books in a Library, one of them is the book",
        quote: "According lecture, entire effort United States to incite desire, inflict want, inspire demand.",

      },
      {
        title: "Tell All",
        imgURL: "./fb_11_sm.003bca65.jpg",
        imgMd:"./fb_11_md.b9e033fc.jpg",
        imgLg:"./fb_11_lg.6d169f7f.png",
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

      },
      {
        title: "Damned",
        imgURL: "./fb_12_sm.b97e36a9.jpg",
        imgMd:"./fb_12_md.cd8d089b.jpg",
        imgLg:"./fb_12_lg.243e22f3.png",
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

      },
      {
        title: "Doomed",
        imgURL: "./fb_13_sm.88a9f78d.jpg",
        imgMd:"./fb_13_md.90381f78.jpg",
        imgLg:"./fb_13_lg.af2ef436.png",
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
      },
      {
        title: "Burnt Tongues",
        imgURL: "./index_sm.598dd799.jpg",
        imgMd:"./index_md.bb176651.jpg",
        imgLg:"./index_lg.3d5490d8.png",
        imgAuthor: "Adams K. / Flickr",
        imgLink: "https://www.flickr.com/photos/adamskev/1716382953/",
        imgLicense: "(CC BY-NC 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 2014,
        alt: "Books arround broken Tv,  ",
        quote: "Young people want mirrors. Older people want art.",
        
      },
      {
        title: "Beautiful You",
        imgURL: "./index_sm.598dd799.jpg",
        imgMd:"./index_md.bb176651.jpg",
        imgLg:"./index_lg.3d5490d8.png",
        imgAuthor: "Platform",
        imgLink: "https://www.flickr.com/photos/ouplatform/5384227790/in/photolist-9cMzkC-b44RyH",
        imgLicense: "(CC BY-NC 2.0) ",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 2014,
        alt: "Books on a Shelf, ",
        quote: `The mistakes we make in our youth," she said solemnly, "we pay for with the rest of our lives.`,
        videoURL: "https://www.youtube.com/embed/r9QgBrLWMXA",
        videoTitle: `Chuck Palahniuk "Beautiful You" tour at Powerhouse Arena in Brooklyn`,
        videoCaption: `Chuck Palahniuk "Beautiful You" tour at Powerhouse Arena in Brooklyn`
      },

      {
        title: "Make Something Up",
        imgURL: "./index_sm.598dd799.jpg",
        imgMd:"./index_md.bb176651.jpg",
        imgLg:"./index_lg.3d5490d8.png",
        imgAuthor: "jana. / Flickr",
        imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
        imgLicense:"(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2015,
        alt: "Palahniuk Books, ",
        quote: "The ice-cold way death can hit you in the noontime of a sunny day just when you'd never expect.",

      },
      {
        title: "Fight Club 2",
        imgURL: "./fb_17_sm.f102e10e.jpg",
        imgMd:"./fb_17_md.ddf0431b.jpg",
        imgLg:"./fb_17_lg.da0a47ba.png",
        imgAuthor: "Scott Ellis / Flickr",
        imgLink: "https://www.flickr.com/photos/vsellis/6624162303/",
        imgLicense: "(CC BY-SA 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
        year: 2016,
        alt: "Soap pills representing Fight Club, ",
        videoURL: "https://www.youtube.com/embed/TGYEoKbGi4Q",
        videoTitle: "Chuck Palahniuk talks about Fight Club 2",
        videoCaption: "Chuck Palahniuk talks about Fight Clubt 2 at San Diego Comic-con"
      },
      {
        title: "Bait",
        imgURL: "./index_sm.598dd799.jpg",
        imgMd:"./index_md.bb176651.jpg",
        imgLg:"./index_lg.3d5490d8.png",
        imgAuthor: "jana. / Flickr",
        imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
        imgLicense:"(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2016,
        alt: "Palahniuk Books, "
      },
      {
        title: "Legacy",
        imgURL: "./index_sm.598dd799.jpg",
        imgMd:"./index_md.bb176651.jpg",
        imgLg:"./index_lg.3d5490d8.png",
        imgAuthor: "jana. / Flickr",
        imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
        imgLicense:"(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2017,
        alt: "Palahniuk Books, ",
        videoURL: "https://www.youtube.com/embed/ER_p4KKq2FU",
        videoTitle: "Presentation of Legacy",
        videoCaption: "Presentation of Legacy in KGW news"
      },
      {
        title: "Adjustment Day",
        imgURL: "./fb_20_sm.0ca91cd4.jpg",
        imgMd:"./fb_20_md.89f3f49c.jpg",
        imgLg:"./fb_20_lg.e1ded58f.png",
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
      },
      {
        title: "Fight Club 3",
        imgURL: "./fb_17_sm.f102e10e.jpg",
        imgMd:"./fb_17_md.ddf0431b.jpg",
        imgLg:"./fb_17_lg.da0a47ba.png",
        imgAuthor: "Scott Ellis / Flickr",
        imgLink: "https://www.flickr.com/photos/vsellis/6624162303/",
        imgLicense: "(CC BY-SA 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
        year: 2016,
        alt: "Soap pills representing Fight Club, ",
        videoURL: "https://www.youtube.com/embed/6lROjhB0vOk",
        videoTitle: "Fight Club 3 trailer",
        videoCaption: "Fight Club 3 trailer by Dark Horse Comics"
      },
      {
        title: "The Invention of Sound",
        imgURL: "./index_sm.598dd799.jpg",
        imgMd:"./index_md.bb176651.jpg",
        imgLg:"./index_lg.3d5490d8.png",
        imgAuthor: "jana. / Flickr",
        imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
        imgLicense:"(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2017,
        alt: "Palahniuk Books, "
      },
  
  
  
  
  ]

  const nonFictionBookList =[
          {
        title: "Fugitives and Refugees",
        imgURL: "./nfb1_sm.39768b53.jpg",
        imgMd: "./nfb1_md.630ef2c1.jpg",
        imgLg:"./nfb1.88fc19e3.png",
        imgAuthor: "susieredshores /Flickr",
        imgLink: "https://www.flickr.com/photos/saundersmecklem/468501794/in/photolist-Hpcg9-fgnxjQ-273RFUs",
        imgLicense: "(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2003,
        alt: "Chuck Palahniuk's book in Portland, oregon. ",
      },
      {
        title: "Stranger than Fiction",
        imgURL: "./nfb2_sm.4319dba7.jpg",
        imgMd:"./nfb2_md.86175913.jpg",
        imgLg:"./nfb2.4b161525.png",
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
      },
      {
        title: "Consider This",
        imgURL: "./nfb3_sm.c7fc3188.jpg",
        imgMd:"./nfb3_md.31f19d61.jpg",
        imgLg:"./nfb3.7c9c18d9.png",
        imgAuthor: "Pesky Librarians / Flickr",
        imgLink: "https://www.flickr.com/photos/peskylibrary/49400748353/",
        imgLicense: "(CC BY-NC-ND 2.0) ",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2020,
        alt: "Book cover of the book ",
        quote: "By writing , people present their lives as fiction and tackle their issues as a craft exercise . By redeeming their protagonist , they find their own redemption .",
        videoURL:"https://www.youtube.com/embed/nHqx9nEtSVg",
        videoTitle: "Chuck Palahniuk speaking about Consider This",
        videoCaption: "Chuck Palahniuk speaking about Consider This, by Hachette book Group"
      }

  ]



// main title change
const mainTitle= document.getElementById("mainTitle");
const h2Tag = document.getElementsByTagName("h2");
// mainTitle.textContent=h2Tag[0].textContent;


// Header creation

const bodyTag = document.getElementsByTagName("body");
bodyTag[0].insertAdjacentHTML("afterbegin",`
<header>
        <nav>
            <div id="title">
                <a href="./index.html">
                    <p>Fan site of</p>
                    <h1>Chuck Palahniuk</h1> 
                    
                    <img id="logoNav" src="/logo.ec7bfaae.svg" alt="Chuck Palahniuk Fan Site Logo">
               </a>
                
            </div>
            <div id="nav-options">
                <ul>
                    <li><a id="chuck" href="./home.html"> Home </a></li>
                    <li><a id="personal" href="./personalLife.html"> Personal life </a></li>
                    <li><a id="fictionBooks" href="./fictionBooks.html"> Fiction books </a></li>
                    <li><a id="nonFiction" href="./nonFiction.html"> Non-fiction books </a></li>
                </ul>
            </div>
        </nav> 
    </header>

    

`);

// navbar selector

if(document.getElementsByTagName("h2")){
  
const personalLife= document.getElementById("personal");
const fictionBooks = document.getElementById("fictionBooks");
const nonFiction = document.getElementById("nonFiction");
const writer = document.getElementById("chuck");


if(h2Tag[0].textContent === "Personal Life"){
  personalLife.classList.add("here");
}else if(h2Tag[0].textContent === "Fiction Books"){
  fictionBooks.classList.add("here");
}else if(h2Tag[0].textContent === "Non-Fiction Books"){
  nonFiction.classList.add("here");
}else if(h2Tag[0].textContent === "Chuck Palahniuk"){
  writer.classList.add("here");
}
}



// footer creation
const mainTag = document.getElementsByTagName("main");

mainTag[0].insertAdjacentHTML("afterend",`
<footer>
<ul>
    <li id="footerAdd"> 
    <a href="./index.html">
    <div></div> 
    <p>    Chuck Palahniuk</p>
    </a>
    </li>
    <li><span id="copyrightDate"></span> &#169; Rubén Puerta Córdoba</li>
    <li><a href="./privacy.html">Privacy Policy</a></li>
</ul>





<a href="#title"><i id="goUp" class="fas fa-arrow-up"></i></a>
</footer>

`);



  // book Display
  if(document.getElementById("bookDisplay")){
  const bookDisplay= document.getElementById("bookDisplay");

  if(h2Tag[0].textContent === "Fiction Books"){
      fictionBookList.forEach(displayBook);
  }else{
    nonFictionBookList.forEach(displayBook);

  }
}

// Fiction detail Display book

if(document.getElementById("detailFiction")){
  detailBook(fictionBookList, "detailFiction")
}else if (document.getElementById("detailNonFiction")){
  detailBook(nonFictionBookList, "detailNonFiction")

}

// External icon after external link class external

const externalLink = document.getElementsByClassName("external");
for(let x=0; x<externalLink.length; x++){
    externalLink[x].setAttribute("target", "_blank")
    externalLink[x].insertAdjacentHTML("beforeend"," <i class='fas fa-external-link-alt'></i>");
}

// Copyright date
const copyrightDate =document.getElementById("copyrightDate");
copyrightDate.textContent=new Date().getFullYear();


// adult content display
if(document.getElementById("Unlock")){
  const adultUnlocker= document.getElementById("Unlock");
  const hiddenContent= document.getElementById("hidden");
  const adultChecker= document.getElementById("adult");
  
  adultUnlocker.addEventListener("click",()=>{
    let age=document.getElementById("age").value;
      if(age>=18){
        hiddenContent.classList.toggle("hidden");
        adultChecker.classList.toggle("hidden");
      }else{
        adultChecker.innerHTML= "<p><strong>Sorry. You are not allowed to see this content</strong></p>"
      }
   
  })
};


// functions


function displayBook(book){

const  link= book.title.charAt(0).toLowerCase() + book.title.slice(1) .split(' ').join('');
  bookDisplay.insertAdjacentHTML("beforeend",`

 
     <picture> 
     <a href="${link}.html">
     <h4>${book.title}</h4>
     <img src="${book.imgURL}" alt="${book.alt}" title="${book.alt}${book.title}" >
     </a>
     <span>
     Book publication year: ${book.year}
     <strong>Image Source: </strong> 
     <a class="external" href="${book.imgLink}">
      ${book.imgAuthor}
     </a>
     <strong>License:</strong>
     <a class="external" href="${book.imgLicenseURL}">
     ${book.imgLicense}
     </a>
     </span>
    </picture>
  
  
  `)

}


function detailBook(bookList, bookSelector){
  const selectedBook = document.getElementsByTagName("h2");
  const bookDisplay= document.getElementById(bookSelector);
  const footerTag = document.getElementsByTagName("footer");

  for(let x= 0; x<bookList.length; x++){
    if(selectedBook[0].textContent=== bookList[x].title){
      const book = bookList[x];

      if(bookSelector=== "detailFiction"){
        bookDisplay.insertAdjacentHTML("afterbegin", `<div id="returnTag" ><a href="./fictionBooks.html"> < return to Fiction Book section</a></div>`)
      }else{
        bookDisplay.insertAdjacentHTML("afterbegin", `<div id="returnTag" ><a href="./nonFiction.html"> < return to Non Fiction Book section</a></div>`)
      }
      

      
     bookDisplay.insertAdjacentHTML("beforeend", `

      <section>
      <h3>Description of ${book.title}</h3>
      <picture class="mainImage"> 
      <source media="(min-width:1200px)" srcset="${book.imgLg}">
      <source media="(min-width:700px)" srcset="${book.imgMd}">
      <source media="(min-width:0px)" srcset="${book.imgURL}">
      <img  src="${book.imgMd}" alt="${book.alt}" title="${book.alt}${book.title}" >
      </a>
      <span>
      ${book.alt}
      <strong>Image Source: </strong> 
      <a class="external" href="${book.imgLink}">
       ${book.imgAuthor}
      </a>
      <strong>License:</strong>
      <a class="external" href="${book.imgLicenseURL}">
      ${book.imgLicense}
      </a>
      </span>
     </picture>
    
      <p>By the pricking of my thumbs, But this denoted a foregone conclusion:  Yes, so please your Majesty. I did go between them, as I said; but more than that, he loved her-for indeed he was mad for her, and talk'd of Satan, and of Limbo, and of Furies, and I know not what.  Besides this nothing that he so plentifully gives me, the something that nature gave me his countenance seems to take from me.   A fool, a fool! I met a fool i' th' forest, A motley fool.  I must have liberty Withal, as large a charter as the wind, To blow on whom I please, for so fools have; And they that are most galled with my folly, They most must laugh.  Hast any philosophy in thee, shepherd?</p>
      
      <p id="beforeQuote">What's mine is yours and what is yours is mine.  Besides this nothing that he so plentifully gives me, the something that nature gave me his countenance seems to take from me.  Your brother- no, no brother; yet the son- Yet not the son; I will not call him son Of him I was about to call his father- Hath heard your praises; and this night he means To burn the lodging where you use to lie, And you within it.  I think he be transform'd into a beast; For I can nowhere find him like a man. Invest me in my motley; give me leave To speak my mind, and I will through and through Cleanse the foul body of th' infected world, If they will patiently receive my medicine. Hast any philosophy in thee, shepherd?</p>
      
      
      
      <p>It is meat and drink to me to see a clown:  This is no place; this house is but a butchery; Abhor it, fear it, do not enter it. Well then, if ever I thank any man, I'll thank you; but that they call compliment is like th' encounter of two dog-apes; and when a man thanks me heartily, methinks have given him a penny, and he renders me the beggarly thanks. </p>
      
      </section>
      `);

      if(book.quote){
        const beforeQuote = document.getElementById("beforeQuote");
        beforeQuote.insertAdjacentHTML("afterend",`
        
        <blockquote cite="${book.title}">
        <p>
        “${book.quote}” <cite>${book.title} by Chuck Palahniuk</cite> </p>
        </blockquote>`
        
        );
      }

      if(book.videoURL){

        bookDisplay.insertAdjacentHTML("beforeend", `
        <section> 
            <figure>
            <h3>${book.videoTitle}</h3>
            <iframe src="${book.videoURL}"   srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${book.videoURL}><img src=https://img.youtube.com/vi/${book.videoURL.slice(30)}/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>" title="${book.videoCaption}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figcaption>${book.videoCaption}</figcaption>
          </figure>
          </section>
        
        `);


      }


      if(x=== 0){
        footerTag[0].insertAdjacentHTML("beforebegin", `<div id="previous"> <p>No previous books</p></div>`)
      }else{
       const previousBook=  bookList[x-1];
        const  previousLink= previousBook.title.charAt(0).toLowerCase() + previousBook.title.slice(1) .split(' ').join('');

        footerTag[0].insertAdjacentHTML("beforebegin", `<div id="previous"> <a href="${previousLink}.html">< ${previousBook.title}</a></div>`)

  
      }

      if(x === bookList.length - 1){
        footerTag[0].insertAdjacentHTML("beforebegin", `<div id="next"> <p>No next books</p></div>`)

      }else{
        const nextBook=  bookList[x+1];
        const  nextLink= nextBook.title.charAt(0).toLowerCase() + nextBook.title.slice(1) .split(' ').join('');

        footerTag[0].insertAdjacentHTML("beforebegin", `<div id="next"> <a href="${nextLink}.html"><p>${nextBook.title} ></p> </a></div>`)

      }

    }
  }
}

