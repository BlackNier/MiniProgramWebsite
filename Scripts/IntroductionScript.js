var register = document.getElementById("register");
$.getJSON("./JSON/IntroductionContent.json", function (json) {
    $.each(json.register, function(i,val){
        register.innerHTML += json.register[i].text;
        if(json.register[i].img!=""){
            var image=document.createElement("img");
            image.src=json.register[i].img;
            register.appendChild(image);
            register.innerHTML += "<br>";
        }
        //alert(json.register[i].text);
    });
    //alert(json.register[0].text);
});