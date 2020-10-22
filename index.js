

//list of books



const booksList = [
  { title: "Fight Club",
    imgURL: "https://live.staticflickr.com/2291/2320868352_c577a53c9d.jpg",
    imgAuthor: "K嘛 / Flickr",
    imgLink:"https://www.flickr.com/photos/kmar/2320868352/in/photolist-bp1QF-2js1E3B-2iX9Zb5-F5JP2d-KpD91P-b6myET-2iYxana-2go7vCg-4x64iA-JnzG8z-mXZpn1-2iAfb22-Ku7ATr-25G5xy-TnoBDA-87ybiz-86TQPG-fe2AwY-7adQdN-88KgQU-7aa1Ea-2a6c8ci-jvxk6-2uTjQX-26jYJKN-Q4hJsW-R8qBfK-92Jvhw-qkPrF4-27JZeDN-bqZ9Hm-8DNuSJ-7yuQFL-7cfw5Y-rm4v7S-po7qyH-S7a8BV-4KKujS-m2BKPn-8nHegF-5E8JFK-7Kwe9V-oLFx9v-611ffi-9SZK3p-dEDe3A-8nLmMh-mGUQGF-YRS7Lf-ea7oqa",
    imgLicense: "(CC BY-NC-ND 2.0)",
    imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
    year: 1996,
    alt: "Alternative Book Cover designed by a fan of the book "
    
  }, {title:"Survivor",
      imgURL: "https://live.staticflickr.com/6170/6190753659_7db2ef228e_b.jpg",
      imgAuthor: "Kristen Withers / Flickr",
      imgLink: "https://www.flickr.com/photos/kris10withers/6190753659/in/photostream/",
      imgLicense: "(CC BY-NC 2.0)",
      imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
      year: 1999,
      alt: "Alternative Book Cover designed by a fan of the book ",
    },

      {
        title: "Invisible Monsters",
        imgURL: "https://live.staticflickr.com/6161/6190754069_be1de27651_b.jpg",
        imgAuthor: "Kristen Withers / Flickr",
        imgLink: "https://www.flickr.com/photos/kris10withers/6190754069/",
        imgLicense:"(CC BY-NC 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 1999,
        alt: "Alternative Book Cover designed by a fan of the book "
      },

      {
        title: "Choke",
        imgURL: "https://live.staticflickr.com/6158/6190754229_27b7a288ea_b.jpg",
        imgAuthor: "Kristen Withers / Flickr",
        imgLink: "https://www.flickr.com/photos/kris10withers/6190754229/",
        imgLicense:"(CC BY-NC 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 2001,
        alt: "Alternative Book Cover designed by a fan of the book "
      },

      {
        title: "Lullaby",
        imgURL: "https://live.staticflickr.com/6158/6191271450_5434d284f3_b.jpg",
        imgAuthor: "Kristen Withers / Flickr",
        imgLink: "https://www.flickr.com/photos/kris10withers/6191271450/in/album-72157627770293394/",
        imgLicense:"(CC BY-NC 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc/2.0/",
        year: 2002,
        alt: "Alternative Book Cover designed by a fan of the book "
      },

      {
        title: "Diary",
        imgURL: "https://live.staticflickr.com/4007/4709527753_c4d1c8c094_b.jpg",
        imgAuthor: "jana. / Flickr",
        imgLink: "https://www.flickr.com/photos/staticjana/4709527753/",
        imgLicense:"(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2003,
        alt: "Palahniuk Books, between them, "
      },

      {
        title: "Haunted",
        imgURL: "https://live.staticflickr.com/145/417417780_2884dd3af1_b.jpg",
        imgAuthor: "Tnarik Innael / Flickr",
        imgLink: "https://www.flickr.com/photos/tnarik/417417780/",
        imgLicense:"(CC BY-SA 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-sa/2.0/",
        year: 2005,
        alt: "Person holding the book "
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
      },
      {
        title: "Pygmy",
        imgURL: "https://live.staticflickr.com/2616/4158040651_f6460a9e95_b.jpg",
        imgAuthor: "Pesky Librarians / Flickr",
        imgLink: "https://www.flickr.com/photos/peskylibrary/4158040651/",
        imgLicense: "(CC BY-NC-ND 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
        year: 2009,
        alt: "Books in a Library, one of them is ",
      },
      {
        title: "Tell All",
        imgURL: "https://live.staticflickr.com/4025/4581958687_4f76fc9338_b.jpg",
        imgAuthor: "I am R. / Flickr",
        imgLink: "https://www.flickr.com/photos/isfullofcrap/4581958687/",
        imgLicense: "(CC BY 2.0)",
        imgLicenseURL: "https://creativecommons.org/licenses/by/2.0/",
        year: 2010,
        alt: "Houston Galleria Border's, book ",
      },
      {
        title: "Damned",
        imgURL: "",
        imgAuthor: "",
        imgLink: "",
        imgLicense: "",
        imgLicenseURL: "",
        year: "",
        alt: "",
      },
      {
        title: "",
        imgURL: "",
        imgAuthor: "",
        imgLink: "",
        imgLicense: "",
        imgLicenseURL: "",
        year: "",
        alt: "",
      }
  
  
  
  ]

  // for(let x=0; x<booksList.length; x++ ){
  //   if(booksList[x].title=== "Rant"){
  //     console.log(booksList[x])
  //   }
  // }
  
  if(document.getElementById("bookDisplay")){
  const bookDisplay= document.getElementById("bookDisplay");
  // for(x=0; x<booksList.length; x++){
  //   bookDisplay.insertAdjacentHTML("beforeend",`<p>${booksList[x].title}</p>`)
  // }
  booksList.forEach(displayBook);

  function displayBook(book){
    bookDisplay.insertAdjacentHTML("beforeend",`
    
    <div>
   
       <figure> 
       <a href="${book.title.split(' ').join('_')}.html">
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

// Image click eventListener
const imageArray= document.getElementsByTagName("img");
for(let x=0; x < imageArray.length; x++){
        imageArray[x].addEventListener("click",()=>{
          imageArray[x].classList.toggle("imageSelected");
          
        })
        
}

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


