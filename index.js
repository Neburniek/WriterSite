// External logo after external link class external

const externalLink = document.getElementsByClassName("external");
for(let x=0; x<externalLink.length; x++){
    externalLink[x].insertAdjacentHTML("beforeend"," <i class='fas fa-external-link-alt'></i>");
}

// Copyright date
const copyrightDate =document.getElementById("copyrightDate");
copyrightDate.textContent=new Date().getFullYear();

// Image click eventListener
var imageArray= document.getElementsByTagName("img");
for(let x=0; x < imageArray.length; x++){
        imageArray[x].addEventListener("click",()=>{
          imageArray[x].classList.toggle("imageSelected");
          
        })
        
}
