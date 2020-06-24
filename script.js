$(document).ready(function(){

    $(".button1").on("click",function(){
        $(".button1").css("display","none");
        var newText = document.createElement("p");
        $(newText).html("Why are you like this?");
        $(".row").append(newText);
    })
    
})