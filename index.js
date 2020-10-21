// External logo after external link class external

const externalLink = document.getElementsByClassName("external");
for(let x=0; x<externalLink.length; x++){
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

