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
