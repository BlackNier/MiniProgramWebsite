var register = document.getElementById("register");
var preparation = document.getElementById("preparation");
var code = document.getElementById("code");
var identification=document.getElementById("identification");
var payment=document.getElementById("payment");
var bind=document.getElementById("bind");
var officialAccounts=document.getElementById("officialAccounts");
var app=document.getElementById("app");
$.getJSON("./JSON/IntroductionContent.json", function (json) {
    $.each(json.register, function (i, val) {
        register.innerHTML += json.register[i].text;
        if (json.register[i].img != "") {
            var image = document.createElement("img");
            image.src = json.register[i].img;
            register.appendChild(image);
            register.innerHTML += "<br>";
        }
    });
    $.each(json.preparation, function (i, val) {
        preparation.innerHTML += json.preparation[i].text;
        if (json.preparation[i].img != "") {
            var image = document.createElement("img");
            image.src = json.preparation[i].img;
            preparation.appendChild(image);
            preparation.innerHTML += "<br>";
        }
    });
    $.each(json.code, function (i, val) {
        code.innerHTML += json.code[i].text;
        if (json.code[i].img != "") {
            var image = document.createElement("img");
            image.src = json.code[i].img;
            code.appendChild(image);
            code.innerHTML += "<br>";
        }
    });
    $.each(json.identification, function (i, val) {
        identification.innerHTML += json.identification[i].text;
        if (json.identification[i].img != "") {
            var image = document.createElement("img");
            image.src = json.identification[i].img;
            identification.appendChild(image);
            identification.innerHTML += "<br>";
        }
    });
    $.each(json.payment, function (i, val) {
        payment.innerHTML += json.payment[i].text;
        if (json.payment[i].img != "") {
            var image = document.createElement("img");
            image.src = json.payment[i].img;
            payment.appendChild(image);
            payment.innerHTML += "<br>";
        }
    });
    $.each(json.bind, function (i, val) {
        bind.innerHTML += json.bind[i].text;
        if (json.bind[i].img != "") {
            var image = document.createElement("img");
            image.src = json.bind[i].img;
            bind.appendChild(image);
            bind.innerHTML += "<br>";
        }
    });
    $.each(json.officialAccounts, function (i, val) {
        officialAccounts.innerHTML += json.officialAccounts[i].text;
        if (json.officialAccounts[i].img != "") {
            var image = document.createElement("img");
            image.src = json.officialAccounts[i].img;
            officialAccounts.appendChild(image);
            officialAccounts.innerHTML += "<br>";
        }
    });
    $.each(json.app, function (i, val) {
        app.innerHTML += json.app[i].text;
        if (json.app[i].img != "") {
            var image = document.createElement("img");
            image.src = json.app[i].img;
            app.appendChild(image);
            app.innerHTML += "<br>";
        }
    });
});