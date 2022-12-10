//load dashboard function
function loadDashboard(){
    document.getElementById("dashboard-div").style.display="flex";
    document.getElementById("video-div").style.display="none";
    document.getElementById("testimonial-div").style.display="none";
    document.getElementById("achievement-div").style.display="none";
    document.getElementById("help-div").style.display="none";
    document.getElementById("setting-div").style.display="none";
}
//Active link function
let list = document.querySelectorAll(".menu-ulli");
function activeLink(){
    list.forEach((item) =>
    item.classList.remove("checked"));
    this.classList.add("checked");
}
//window load
window.addEventListener("load",function()
{   
    /* Preloader */
    var loader=document.getElementById("preloader-div");
    loader.style.display="none";
    loadDashboard();
});
//slide menuwrapper-div on click
let toggle=document.querySelector("#imgLogo");
let nevigation=document.querySelector("#menuwrapper-div");
let formwrapper=document.querySelector("#form-wrapper-div");
toggle.onclick=function(){
    nevigation.classList.toggle("active");
    formwrapper.classList.toggle("active");
}
//add hovered class in selected list item 
    list.forEach((item) =>
    item.addEventListener("click",activeLink));

//#region  nevigation menu click function
function openDashboard(){
    document.getElementById("dashboard-div").style.display="flex";
    document.getElementById("video-div").style.display="none";
    document.getElementById("testimonial-div").style.display="none";
    document.getElementById("achievement-div").style.display="none";
    document.getElementById("help-div").style.display="none";
    document.getElementById("setting-div").style.display="none";
}
function openVideo(){    
    document.getElementById("dashboard-div").style.display="none";
    document.getElementById("video-div").style.display="flex";
    document.getElementById("testimonial-div").style.display="none";
    document.getElementById("achievement-div").style.display="none";
    document.getElementById("help-div").style.display="none";
    document.getElementById("setting-div").style.display="none";
}
function openTestimonial(){    
    document.getElementById("dashboard-div").style.display="none";
    document.getElementById("video-div").style.display="none";
    document.getElementById("testimonial-div").style.display="flex";
    document.getElementById("achievement-div").style.display="none";
    document.getElementById("help-div").style.display="none";
    document.getElementById("setting-div").style.display="none";
}
function openAchievement(){
    document.getElementById("dashboard-div").style.display="none";
    document.getElementById("video-div").style.display="none";
    document.getElementById("testimonial-div").style.display="none";
    document.getElementById("achievement-div").style.display="flex";
    document.getElementById("help-div").style.display="none";
    document.getElementById("setting-div").style.display="none";
}
function openHelp(){
    document.getElementById("dashboard-div").style.display="none";
    document.getElementById("video-div").style.display="none";
    document.getElementById("testimonial-div").style.display="none";
    document.getElementById("achievement-div").style.display="none";
    document.getElementById("help-div").style.display="flex";
    document.getElementById("setting-div").style.display="none";
}
function openSetting(){    
    document.getElementById("dashboard-div").style.display="none";
    document.getElementById("video-div").style.display="none";
    document.getElementById("testimonial-div").style.display="none";
    document.getElementById("achievement-div").style.display="none";
    document.getElementById("help-div").style.display="none";
    document.getElementById("setting-div").style.display="flex";
}
//#endregion
//#region  on nevigation menu click 
document.getElementById("dashboard-nbtn").onclick=function(){
    openDashboard();
}
document.getElementById("video-nbtn").onclick=function(){
    openVideo();
}
document.getElementById("testimonial-nbtn").onclick=function(){
    openTestimonial();
}
document.getElementById("achievement-nbtn").onclick=function(){
    openAchievement();
}
document.getElementById("help-nbtn").onclick=function(){
    openHelp();
}
document.getElementById("setting-nbtn").onclick=function(){
    openSetting();
}
//#endregion
