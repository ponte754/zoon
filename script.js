function toggleMenu(){
    document.getElementById("nav-link").classList.toggle("show");
}

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