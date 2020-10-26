var contentEle = document.body.querySelector(".content");
var counter = 0;
function makeHome(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Home Page"
}
function makeAbout(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1")
  var nameEle = document.createElement("h3")
  nameEle.innerHTML="Kyeson Stark"
  headEle.innerHTML="About Page"
  contentEle.appendChild(headEle)
  contentEle.appendChild(nameEle)
}

function makeInteract(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Interact Page";
  var counterEle = document.createElement("button")
  var numberEle = document.createElement("h3")
  numberEle.innerHTML=counter
  counterEle.setAttribute("id", "counter")
  counterEle.innerHTML="Counter + 1"
  contentEle.appendChild(numberEle)
  contentEle.appendChild(counterEle)
}
makeInteract();
function counterUp(){
  counter = counter + 1;
}
document.body.querySelector(".homebutt").addEventListener("click", function(){
  makeHome();
})
document.body.querySelector(".aboutbutt").addEventListener("click", function(){
  makeAbout();
})
document.body.querySelector(".interactbutt").addEventListener("click", function(){
  makeInteract();
})
document.body.querySelector("#counter").addEventListener("click", function(){
  counterUp();
})
window.onload=function(){
  var numberEle = document.createElement("h3")
  numberEle.innerHTML=counter
  counterEle.setAttribute("id", "counter")
}
makeHome();