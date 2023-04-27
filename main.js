
var elSwitchButton = document.querySelector(".sait-header__btn");
var elButtonDark = document.querySelector (".sait-header__btn")
var elSearchLabel = document.querySelector(".countryies-info__label");
var  elExidLink = document.querySelector(".introduction__exid");
var  elCountryiesInfo = document.querySelector(".countryies-info__filter");

elSwitchButton.addEventListener("click", function(){
    document.body.classList.toggle("dark");
    elSearchLabel.classList.toggle("countryies-info__label--show");
});

elSwitchButton.addEventListener("click", function(){
    elExidLink.classList.toggle("introduction__exid--show");
   
});
elSwitchButton.addEventListener("click", function(){
    elCountryiesInfo.classList.toggle("countryies-info__filter--show");
})
elSwitchButton.addEventListener("click", function(){
    elButtonDark.classList.toggle("sait-header__btn--dark");
})