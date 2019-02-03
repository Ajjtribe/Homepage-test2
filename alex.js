//Big heading scroll effect
        
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("bigheading").style.fontSize = "40px";
    } else {
    document.getElementById("bigheading").style.fontSize = "70px";
    }
}

//NME Logo toggle button JQuery code block

$(document).ready(function(){ 
    $("button").click(function(){
        $("#NMElogo").toggle();
    });
});

//Alert message appears when you double click the cat image

$(document).ready(function(){
    $("#cat1").dblclick(function(){
        alert("SECRET FOUND!");
    });
});


$(document).ready(function(){
    $("#slides").slidesjs({
        width: 600,
        height: 300,
    });
});
