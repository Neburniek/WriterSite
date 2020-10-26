// Book Objects  

const fictionBookList = [
  { title: "Fight Club",
    imgURL: "https://live.staticflickr.com/2291/2320868352_c577a53c9d.jpg",
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
    },

      {
        title: "Invisible Monsters",
        imgURL: "https://live.staticflickr.com/6161/6190754069_be1de27651_b.jpg",
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
        imgURL: "https://live.staticflickr.com/6158/6190754229_27b7a288ea_b.jpg",
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
        imgURL: "https://live.staticflickr.com/6158/6191271450_5434d284f3_b.jpg",
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
        imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
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
        imgURL: "https://live.staticflickr.com/145/417417780_2884dd3af1_b.jpg",
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
        videoCaption:" Book review of rant by The Story Magpie"
      },
      {
        title: "Snuff",
        imgURL: "https://live.staticflickr.com/2214/2512624124_49862bc645_b.jpg",
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
        imgURL: "https://live.staticflickr.com/2616/4158040651_f6460a9e95_b.jpg",
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

      },
      {
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

      },
      {
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
      },
      {
        title: "Burnt Tongues",
        imgURL: "https://live.staticflickr.com/2372/1716382953_65647762bf_z.jpg",
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
        imgURL: "https://live.staticflickr.com/5219/5384227790_204867f061_z.jpg",
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
        imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
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
      },
      {
        title: "Bait",
        imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
        imgAuthor: "jana. / Flickr",
        imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
        imgLicense:"(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2016,
        alt: "Palahniuk Books, "
      },
      {
        title: "Legacy",
        imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
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
      },
      {
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
      },
      {
        title: "The Invention of Sound",
        imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
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
        imgURL: "https://live.staticflickr.com/221/468501794_663acb4c72.jpg",
        imgAuthor: "susieredshores /Flickr",
        imgLink: "https://www.flickr.com/photos/saundersmecklem/468501794/in/photolist-Hpcg9-fgnxjQ-273RFUs",
        imgLicense: "(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2003,
        alt: "Chuck Palahniuk's book in Portland, oregon. ",
      },
      {
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
      },
      {
        title: "Consider This",
        imgURL: "https://live.staticflickr.com/65535/49400748353_7369efc1c4.jpg",
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

  // ,
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

console.log(personalLife);

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
  
  <div>
 
     <figure> 
     <a href="${link}.html">
     <h4>${book.title}</h4>
     <img src="${book.imgURL}" alt="${book.alt}" title="${book.alt}${book.title}" >
     </a>
     <figcaption>
     Book publication year: ${book.year}
     <strong>Image Source: </strong> 
     <a class="external" href="${book.imgLink}">
      ${book.imgAuthor}
     </a>
     <strong>License:</strong>
     <a class="external" href="${book.imgLicenseURL}">
     ${book.imgLicense}
     </a>
     </figcaption>
    </figure>
  </div>
  
  
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
      <figure class="mainImage"> 
      <img  src="${book.imgURL}" alt="${book.alt}" title="${book.alt}${book.title}" >
      </a>
      <figcaption>
      ${book.alt}
      <strong>Image Source: </strong> 
      <a class="external" href="${book.imgLink}">
       ${book.imgAuthor}
      </a>
      <strong>License:</strong>
      <a class="external" href="${book.imgLicenseURL}">
      ${book.imgLicense}
      </a>
      </figcaption>
     </figure>
    
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
            <iframe src="${book.videoURL}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

