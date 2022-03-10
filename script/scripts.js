const btnFeatures = document.getElementById("btnFeatures");
const btnPricing = document.getElementById("btnPricing");
const btnContact = document.getElementById("btnContact");
const btnLogin = document.getElementById("btnLogin");
const btnGetChrome = document.getElementById("btnGetChrome");
const btnGetFirefox = document.getElementById("btnGetFirefox");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const divChrome = document.getElementById("divChrome");
const divFirefox = document.getElementById("divFirefox");
const divOpera = document.getElementById("divOpera");
const btnContactUs = document.getElementById("btnContactUs");
const btnFeatures2 = document.getElementById("btnFeatures2");
const btnPricing2 = document.getElementById("btnPricing2");
const btnContact2 = document.getElementById("btnContact2");
const facebook = document.getElementById("facebook");
const twitter = document.getElementById("twitter");

btnFeatures.addEventListener("mouseenter", function() {
    btnFeatures.style.color = "rgb(250, 87, 87)";
    btnFeatures.addEventListener("mouseout", () => {
        btnFeatures.style.color = "black"
    })
});

btnPricing.addEventListener("mouseenter", function() {
    btnPricing.style.color = "rgb(250, 87, 87)";
    btnPricing.addEventListener("mouseout", () => {
        btnPricing.style.color = "black"
    })
});

btnContact.addEventListener("mouseenter", function() {
    btnContact.style.color = "rgb(250, 87, 87)";
    btnContact.addEventListener("mouseout", () => {
        btnContact.style.color = "black"
    })
});

btnLogin.addEventListener("mouseenter", function() {
    btnLogin.style.color = "rgb(250, 87, 87)";
    btnLogin.style.backgroundColor = "white"
    btnLogin.style.border = "solid"
    btnLogin.addEventListener("mouseout", () => {
        btnLogin.style.color = "white";
        btnLogin.style.backgroundColor = "rgb(250, 87, 87)"
        btnLogin.style.border = "none"    
    })
});

btnGetChrome.addEventListener("mouseenter", function() {
    btnGetChrome.style.color = "rgb(82, 102, 223)";
    btnGetChrome.style.backgroundColor = "white"
    btnGetChrome.style.border = "solid"
    btnGetChrome.addEventListener("mouseout", () => {
        btnGetChrome.style.color = "white";
        btnGetChrome.style.backgroundColor = "rgb(82, 102, 223)"
        btnGetChrome.style.border = "none" 
    })
});

btnGetFirefox.addEventListener("mouseenter", function() {
    btnGetFirefox.style.color = "black";
    btnGetFirefox.style.backgroundColor = "white"
    btnGetFirefox.style.border = "solid"
    btnGetFirefox.addEventListener("mouseout", () => {
        btnGetFirefox.style.color = "black";
        btnGetFirefox.style.backgroundColor = "white"
        btnGetFirefox.style.border = "none" 
    })
});

menu1.addEventListener("mouseenter", function() {
    menu1.style.color = "rgb(250, 87, 87)";
    menu1.addEventListener("mouseout", () => {
        menu1.style.color = "black";
    })
});

menu2.addEventListener("mouseenter", function() {
    menu2.style.color = "rgb(250, 87, 87)";
    menu2.addEventListener("mouseout", () => {
        menu2.style.color = "black";
    })
});

menu3.addEventListener("mouseenter", function() {
    menu3.style.color = "rgb(250, 87, 87)";
    menu3.addEventListener("mouseout", () => {
        menu3.style.color = "black";
    })
});

divChrome.addEventListener("mouseenter", function() {
    divChrome.style.color = "rgb(82, 102, 223)";
    divChrome.style.backgroundColor = "white"
    divChrome.style.border = "solid"
    divChrome.addEventListener("mouseout", () => {
        divChrome.style.color = "white";
        divChrome.style.backgroundColor = "rgb(82, 102, 223)"
        divChrome.style.border = "none" 
    })
});

divFirefox.addEventListener("mouseenter", function() {
    divFirefox.style.color = "rgb(82, 102, 223)";
    divFirefox.style.backgroundColor = "white"
    divFirefox.style.border = "solid"
    divFirefox.addEventListener("mouseout", () => {
        divFirefox.style.color = "white";
        divFirefox.style.backgroundColor = "rgb(82, 102, 223)"
        divFirefox.style.border = "none" 
    })
});

divOpera.addEventListener("mouseenter", function() {
    divOpera.style.color = "rgb(82, 102, 223)";
    divOpera.style.backgroundColor = "white"
    divOpera.style.border = "solid"
    divOpera.addEventListener("mouseout", () => {
        divOpera.style.color = "white";
        divOpera.style.backgroundColor = "rgb(82, 102, 223)"
        divOpera.style.border = "none" 
    })
});

btnContactUs.addEventListener("mouseenter", function() {
    btnContactUs.style.color = "rgb(250, 87, 87)";
    btnContactUs.style.backgroundColor = "white"
    btnContactUs.style.border = "solid"
    btnContactUs.addEventListener("mouseout", () => {
        btnContactUs.style.color = "white";
        btnContactUs.style.backgroundColor = "rgb(250, 87, 87)"
        btnContactUs.style.border = "none" 
    })
});

btnFeatures2.addEventListener("mouseenter", function() {
    btnFeatures2.style.color = "rgb(250, 87, 87)";
    btnFeatures2.addEventListener("mouseout", () => {
        btnFeatures2.style.color = "white"
    })
});

btnPricing2.addEventListener("mouseenter", function() {
    btnPricing2.style.color = "rgb(250, 87, 87)";
    btnPricing2.addEventListener("mouseout", () => {
        btnPricing2.style.color = "white"
    })
});

btnContact2.addEventListener("mouseenter", function() {
    btnContact2.style.color = "rgb(250, 87, 87)";
    btnContact2.addEventListener("mouseout", () => {
        btnContact2.style.color = "white"
    })
});

facebook.addEventListener("mouseenter", function() {
    facebook.style.color = "rgb(250, 87, 87)";
    facebook.addEventListener("mouseout", () => {
        facebook.style.color = "white"
    })
});

twitter.addEventListener("mouseenter", function() {
    twitter.style.color = "rgb(250, 87, 87)";
    twitter.addEventListener("mouseout", () => {
        twitter.style.color = "white"
    })
});