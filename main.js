<!-- Home page tussen tab titels javascript -->
// de openta b functie -> //w3schools.com/howto/tryit.asp?filename=tryhow_js_expanding_grid
   //www.w3schools.com/howto/howto_js_tabs.asp-->
// https://www.w3schools.com/howto/howto_js_active_element.asp //
//https://www.w3schools.com/w3css/w3css_tabulators.asp//

var tabcontents = document.getElementsByClassName("tab-contents");

var tablinks = document.getElementsByClassName("tab-links");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}