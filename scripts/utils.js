function scrollToTop() {
    $(window).scrollTop(0);
}

function toMainPage() {
    window.location.href = "index.html"
}

function toLoginPage() {
    window.location.href = "login.html"
}

function toExplorePage() {
    window.location.href = "explore.html"
}

function loadMorePictures() {
    document.getElementById('hiddenGallery').style.display = "grid";
    document.getElementById("loadButton").innerHTML = "See Less Activities";
    document.getElementById("loadButton").onclick = function() {loadLessPictures();}
}

function loadLessPictures() {
    document.getElementById('hiddenGallery').style.display = "none";
    document.getElementById("loadButton").innerHTML = "See All Activities";
    document.getElementById("loadButton").onclick = function() {loadMorePictures();}
}

function loadMorePals() {
    document.getElementById('hiddenPals').style.display = "grid";
    document.getElementById("loadPalsButton").innerHTML = "See Less PetPals";
    document.getElementById("loadPalsButton").onclick = function() {loadLessPals();}
}

function loadLessPals() {
    document.getElementById('hiddenPals').style.display = "none";
    document.getElementById("loadPalsButton").innerHTML = "See All PetPals";
    document.getElementById("loadPalsButton").onclick = function() {loadMorePals();}
}