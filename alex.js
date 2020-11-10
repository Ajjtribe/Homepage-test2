//Big heading scroll effect
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("bigheading").style.fontSize = "40px";
    } else {
    document.getElementById("bigheading").style.fontSize = "70px";
    }
}

//Once doc loaded do the following
$(document).ready(function(){ 
    //NME Logo toggle button JQuery code block
    $("button").click(function(){
        $("#NMElogo").toggle();
    });
    //Alert message appears when you double click the cat image
    $("#cat1").dblclick(function(){
        alert("SECRET FOUND!");
    });
    // JS for gallery slides
    $("#slides").slidesjs({
        width: 600,
        height: 300,
    });

    
});

// Below code is the html for the scroll progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}