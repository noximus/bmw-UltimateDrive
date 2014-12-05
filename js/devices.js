
if (navigator.userAgent.indexOf('iPhone') != -1) {
	iphoneButtons();
}
if (navigator.userAgent.indexOf('iPad') != -1) {
    ipadButtons();
}
if (navigator.userAgent.indexOf('Android') != -1) {
	androidButtons()
}

function iphoneButtons(){
	//hide all android
	$(".download-ios").show();
	$(".download-android").hide();
	$(".download-other").hide();
};
function ipadButtons(){
	$(".download-ios").show();
	$(".download-android").hide();
	$(".download-other").hide();
	$(".android-nav-download").hide();
	//hide all android
};
function androidButtons(){
	$(".download-android").show();
	$(".download-ios").hide();
	$(".download-other").hide();
	$(".iphone-nav-download").hide();
	//hide all android
};
