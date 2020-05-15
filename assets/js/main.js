function WinLoad() {

}
window.onload = WinLoad;

function responsiveMenu(){
  console.log('responsiveMenu');
  var jsDropdownMobileMenu = document.getElementById("js-dropdown");
  if(jsDropdownMobileMenu.classList.contains('uk-hidden')){
    jsDropdownMobileMenu.classList.remove('uk-hidden');
  } else {
    jsDropdownMobileMenu.classList.add('uk-hidden');
  }
  console.log(jsDropdownMobileMenu);
}
