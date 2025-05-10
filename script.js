var addnewbook = document.querySelector("#Add-New-book")
var popupoverlay = document.querySelector(".popup-overlay")
var popupinnerlay = document.querySelector(".popup-innerlay")
addnewbook.addEventListener("click", function () {
    popupinnerlay.style.display = "block";
    popupoverlay.style.display = "block";
})  
 var cancelpopup = document.querySelector("#cancel-popup")

 cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupinnerlay.style.display = "none";
    popupoverlay.style.display = "none";
 })

 var addbook = document.querySelector("#add-book")
 var Smallbookdiscription = document.querySelector("#Small-book-discription")
 var Booktitle = document.querySelector("#Book-title")
 var Bookauthor = document.querySelector("#Book-author")
 var row = document.querySelector(".container .row")
 

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","col-md-3 bg-danger-subtle rounded-2 m-3")
    div.innerHTML=`<h2 class="text-danger-emphasis">${Booktitle.value}</h2>
          <h4 class="text-info">${Bookauthor.value}</h4>
          <p>${Smallbookdiscription.value}</p>
          <button type="button" onclick="deletebook(event)" class="btn btn-primary mb-3">Delete</button>`

          row.append(div)
          popupinnerlay.style.display = "none";
          popupoverlay.style.display = "none";

 })

 function deletebook(event){
    event.target.parentElement.remove()
 }