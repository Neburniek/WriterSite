

//list of books


const booksList = [
  {title: "Fight Club",
    imgURL: "https://live.staticflickr.com/2291/2320868352_c577a53c9d.jpg",
    imgAuthor: "K嘛 / Flickr",
    imgLink:"https://www.flickr.com/photos/kmar/2320868352/in/photolist-bp1QF-2js1E3B-2iX9Zb5-F5JP2d-KpD91P-b6myET-2iYxana-2go7vCg-4x64iA-JnzG8z-mXZpn1-2iAfb22-Ku7ATr-25G5xy-TnoBDA-87ybiz-86TQPG-fe2AwY-7adQdN-88KgQU-7aa1Ea-2a6c8ci-jvxk6-2uTjQX-26jYJKN-Q4hJsW-R8qBfK-92Jvhw-qkPrF4-27JZeDN-bqZ9Hm-8DNuSJ-7yuQFL-7cfw5Y-rm4v7S-po7qyH-S7a8BV-4KKujS-m2BKPn-8nHegF-5E8JFK-7Kwe9V-oLFx9v-611ffi-9SZK3p-dEDe3A-8nLmMh-mGUQGF-YRS7Lf-ea7oqa",
    imgLicense: "(CC BY-NC-ND 2.0)",
    imgLicenseURL: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
    year: 1996,

  
  }, {title:"Survivor",
      imgURL: "https://live.staticflickr.com/2291/2320868352_c577a53c9d.jpg",
      year: 1999}
  
  
  ]
  
  const bookDisplay= document.getElementById("bookDisplay");
  // for(x=0; x<booksList.length; x++){
  //   bookDisplay.insertAdjacentHTML("beforeend",`<p>${booksList[x].title}</p>`)
  // }
  booksList.forEach(displayBook);

  function displayBook(book){
    bookDisplay.insertAdjacentHTML("beforeend",`
    
    <div>
   
       <figure> 
       <a href="">
       <h4>${book.title}</h4>
       <img src="${book.imgURL}">
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


