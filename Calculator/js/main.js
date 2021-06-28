$(document).ready(function(){
    var place = $("#text");
    let array = [];
    function calc(e){
        array.push($(e).children(".item")[0].textContent);
    }
    $("div[id^='n']").click(function(){
        calc(this);
        place.text(array.join(""));
    });
    $("#ac").click(function(){
        place.text(0);
        array = [];
    });
    $("#equal").click(function(){
        var answer = eval(array.join(''));
        array = [];
        array.push(answer);
        place.text(answer);
    })
    $("#clear").click(function(){
        array.pop();
        array = array.join("");
        place.text(array);
        array = array.split("");
        if(array.length == 0){
            place.text("0");
        }
        
    })
});



