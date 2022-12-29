let mobileMenu = document.querySelector ('#mobile_opening_menu');
let mobileMenuButton = document.querySelector('.header_mobile_menu');
let width=window.innerWidth;
if (width <=836) {
	$('.slider').slick();
}
if (width >836) {
	mobileMenu.style.display = "none";
}
mobileMenuButton.onclick = function () {
mobileMenu.classList.toggle('mobile_opening_menu_container');
} 

