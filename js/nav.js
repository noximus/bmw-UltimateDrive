init();
function init(){
	navHomeY = 0;navEarnY = 610;navAboutY = 1760;
	
	currentPosition = 1;
	this.page_ranges = {"browserWidths": [
					{"desktop": "1024x768", "home": "0", "earn": "610", "about": "1760"},
					{"iphoneRetL": "940x640", "home": "0", "earn": "600", "about": "1200"},
					{"iphoneRetP": "640x940", "home": "0", "earn": "900", "about": "1800"},
					{"iphoneL": "470x320", "home": "0", "earn": "300", "about": "600"},
					{"iphoneP": "320x470", "home": "0", "earn": "400", "about": "800"}
	]};
	//create listeners
	//listen for resize
	onResize(window.innerWidth);
	window.onresize=function(){onResize(window.innerWidth);};
	//listen for scroll
	window.onscroll=function(){onScroll(window.pageYOffset);};
	
};
function resetNav(){
	$("#desktop-fixed-nav").css("top, 150px");
	
}
function onResize(viewportwidth){
	//update the scroll jump to spots based on browser size
	if(viewportwidth>1023){updateWidth(0);}
	else if(viewportwidth<1023 && viewportwidth>940){updateWidth(1);}
	else if(viewportwidth<939 && viewportwidth>640){updateWidth(2);}
	else if(viewportwidth<639 && viewportwidth>470){updateWidth(3);}
	else if(viewportwidth<469){updateWidth(4);}
};
function onScroll(scrollPosition){
	//update menus based on scroll position
	if(scrollPosition >= navHomeY && scrollPosition < navEarnY){
		currentPosition = 1;
	}else if(scrollPosition >= navEarnY && scrollPosition < navAboutY){
		currentPosition = 2;
	}else if(scrollPosition >= navAboutY){
		currentPosition = 3;
	}
	updateNav(scrollPosition);
};
function updateWidth(newViewportwidth){
	//take the appropriate size from array and set the vars
	navHomeY = this.page_ranges.browserWidths[newViewportwidth].home;
	navEarnY = this.page_ranges.browserWidths[newViewportwidth].earn;
	navAboutY = this.page_ranges.browserWidths[newViewportwidth].about;
};
function updateNav(scrollPosition){
	//change the rollover state of buttons
	if(scrollPosition <= 100){$("#navFixed-item-up").hide();}else {$("#navFixed-item-up").show();};
	if(scrollPosition >= navAboutY){$("#navFixed-item-down").hide();}else {$("#navFixed-item-down").show();};
};

$("#navFixed-item-up").click(function(){
	if(currentPosition == 2){
		window.scrollTo(0,0);
	}else if(currentPosition == 3){
		window.scrollTo(0,navEarnY);
	};resetNav();
 });
$("#navFixed-item-earn, #nav-item-earn").click(function(){
	window.scrollTo(0,navEarnY);resetNav();	  
 });
$("#navFixed-item-about, #nav-item-about").click(function(){
	window.scrollTo(0,navAboutY);resetNav();
 });
$("#navFixed-item-download-apple, .iphone-download").click(function(){
	window.open("http://itunes.apple.com/ca/app//id453940086?mt=8");resetNav();
 });
$("#navFixed-item-download-android, .android-download").click(function(){
	window.open("https://market.android.com/details?id=com.socialnavinc.ultimatedrive&hl=en");resetNav();
 });
$("#navFixed-item-facebook, .facebook-nav-follow").click(function(){
	window.open("https://www.facebook.com/UltimateDriveApp");resetNav();
 });
$("#navFixed-item-twitter, .twitter-nav-follow").click(function(){
	window.open("https://twitter.com/#!/UltimateDriveFS");resetNav();
 });
$("#nav-item-dealers").click(function(){
	window.open("/dealer");resetNav();
 });
$("#navFixed-item-down").click(function(){
	if(currentPosition == 1){
		window.scrollTo(0,navEarnY);
	}else if(currentPosition == 2){
		window.scrollTo(0,navAboutY);
	};resetNav();
 });

