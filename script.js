//navbar//
function toggleMenu(){
    document.getElementById("nav-link").classList.toggle("show");
}
//end navbar//

//popup//
function openPopup(prouct){
    document.getElementById("popup").style.display = "block";


    document.getElementById("productName").value = prouct;
}

function popup(productName){
    document.getElementById("productName").value = productName;
    document.getElementById("productName").value = productName;

}

 function closePoupup(){
        document.getElementById("popup").style.display = "none";
    } 

    //end popup//

    // Forms//
document.getElementById("FORMS").onsubmit = function(e) {
  e.preventDefault();

  fetch("https://formspree.io/f/xnjnewzr", {
    method: "POST",
    body: new FormData(this),
    headers: { "Accept": "application/json" }
  }).then(() => {
    window.location.href = "Thanks.html";
  });
};

//end forms//
