// Variables

var openMenu = document.querySelector('.open-menu');
var closeMenu = document.querySelector('.close-menu');
var overlay = document.querySelector('header nav');
var logo = document.querySelector('.logo')
var main = document.querySelector('main')
var footer = document.querySelector('footer')


// Functions

function hideNav(){
 	overlay.classList.add('js-hide');
}

function hideMenu(){
	openMenu.classList.add('js-hide');
}

function hideLogo(){
	logo.classList.add('js-hide');
}

function hideMain(){
 	main.classList.add('js-hide');
}

function hideFooter(){
 	footer.classList.add('js-hide');
}

function showNav(){
 	overlay.classList.remove('js-hide');
}

function showMenu(){
	openMenu.classList.remove('js-hide');
}

function showLogo(){
	logo.classList.remove('js-hide');
}

function showMain(){
	main.classList.remove('js-hide')
}

function showFooter(){
	footer.classList.remove('js-hide')
}


// Events

openMenu.addEventListener("click", function(){
 	showNav(); hideMenu(); hideLogo(); hideMain(); hideFooter();
});

closeMenu.addEventListener("click", function(){
 	hideNav(); showMenu(); showLogo(); showMain(); showFooter();
});


// Initialize

hideNav();
