/* ###########################################################################

GLOBAL ASSETS RELEASE v2.7.1

DISPLAYFLASH.JS 1.0

BUILD DATE: 20070531

COPYRIGHT SUN MICROSYSTEMS INC. 2007 - (c) 2005 Antics Online, Inc. All Rights Reserved

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

// Detect if the correct version of Flash is available on the client
// and center the Flash presentation vertically in a browser window

// Init global vars
var noFlashPage = "http://www.sun.com/inc/req_flash.html" // Send user here if no Flash

// Set default values in case they're not passed in
var flashCenter = true;	// Set true to center vertically; false if running in a fixed position on the page
var flashBorder = false;	// Set true to add a border (applies only if centering); false to disable border
var flashFullscreen = false;	// Set true to resize window to fullscreen
var flashStyle = "flashsunwhite"; // Sets the background color
var flashInstalled = false;		// boolean. true if flash Version is installed
var flashPageHeight = 0; // The height of the browser window
var flashVars = "";	 // 1/24/07 Added support for FlashVars

// Browser sniff stuff
var ns4 = document.layers;
var ie4 = document.all;
var nn6 = document.getElementById && !document.all;
var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;		// true if we're on ie
var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false; // true if we're on windows

// Add a function as the body onload event handler
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
  			oldonload();
			func();
		}
	}
}

//  Call in body onload.
function centerFlash(){
	var ns4 = document.layers; // Try again -- doesn't always work the first time
	var inner, outer, middle, loading;
	var y = 200; // Default position
	if( flashPageHeight ) { // If we were able to determine window dimensions
		y = (flashPageHeight/2) - (flashHeight/2); // Center the preso vertically
		if( y < 0 ) y = 0;
	}	
	if( ns4 ) { // Netscape 4
		document["flashLoadingDiv"].visibility = "hide";
		if( flashCenter ) { 
			document["flashOuterDiv"].top = y;
			document["flashOuterDiv"].visibility = "show";
		}
	}
	else {
		 if( nn6 ) { // Netscape 6, 7, Mozilla
				outer = document.getElementById("flashOuterDiv");
				inner = document.getElementById("flashInnerDiv");
				middle = document.getElementById("flashMiddleDiv");
				loading = document.getElementById("flashLoadingDiv");
		}
		else { // IE
			outer = document.all["flashOuterDiv"];
			inner = document.all["flashInnerDiv"];
			middle = document.all["flashMiddleDiv"];
			loading = document.all["flashLoadingDiv"];
		}
		
		loading.style.visibility = "hidden";
		
		if( flashCenter ) { // Don't center if playing in a fixed position
			middle.style.visibility = "visible"; // 5/8/06 -- IE/Flash 7 cropping bug workaround: make visible here just before repositioning 
			outer.style.height = "100%"; // Set the background layer to fill the page
			middle.style.top = y + "px"; // Position the Flash layer in the center
			if( flashBorder ) inner.style.width = flashWidth; // Set the border layer to the width of the Flash animation
			if( isIE && !isWin ) window.resizeBy(0,-1); // Bug fix for IE Macintosh -- resize forces Flash to reposition
			outer.style.visibility = "visible";
		}
	}
}

// This is the Flash detection routine provided by Sun Microsystems 8/21/05
function detectFlash() {	
	// write vbscript detection if we're not on mac. Check the browser...we're looking for ie/win
	if(isIE && isWin){ // don't write vbscript tags on anything but ie win
		document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
		document.write('on error resume next \n');
		document.write('flashInstalled = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+flashVersion+'"))) \n');	
		document.write('</SCR' + 'IPT\> \n'); // break up end tag so it doesn't end our script
	}
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] ? 
	navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0);if (plugin && 
	parseInt(plugin.description.substring(plugin.description.indexOf(".")-1)) >= flashVersion) 
	{ flashInstalled = true; }  //Flash 5 or greater is available 
}

function displayFlash() {
	var ns4 = document.layers; // Try again -- doesn't always work the first time
	var innerStyle = "";
	var outerStyle = "";
	var middleStyle = "";
	if( flashInstalled ) { // if we've detected flash
		if( flashCenter ) { // Set the styles only if we need to center the Flash
			outerStyle = middleStyle = flashStyle;
			if( flashBorder ) innerStyle = "flashBorder";
		}
		document.open();
		if( !ns4 ) {
			document.writeln('<div id="flashOuterDiv" class="' + outerStyle + '"><div id="flashMiddleDiv" class="' + middleStyle + '"><div id="flashInnerDiv" class="' + innerStyle + '">');
		}
		else {
			document.writeln('<div id="flashOuterDiv" class="' + outerStyle + '"><div id="flashInnerDiv" class="' + innerStyle + '">');
		}
		document.writeln('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + flashWidth + '" height="' + flashHeight + '" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab">'
		+ '<param name="MOVIE" value="' + flashSrc + '">'
		+ '<param name="LOOP" value="false"><param name="QUALITY" value="high">'
		+ '<param name="MENU" value="false">'
		
		+ '<param name="FlashVars" value="' + flashVars + '">' // 1/24/07 Added support for FlashVars
		+ '<embed src="' + flashSrc + '" width="' + flashWidth + '" height="' + flashHeight + '" loop="false" quality="high" menu="false" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" FlashVars="' + flashVars + '">'  // 1/24/07 Added support for FlashVars
		+ '</embed></object>');
		
		if( !ns4 ) document.writeln('</div></div></div>');
		else document.writeln('</div></div>');
		
		document.close();
	} 
}

// Detect if Flash is present and then set up the Flash display environment
function initFlash() {
	detectFlash(); // Call the Sun Flash detection code
	if( !flashInstalled ) {
		window.location=noFlashPage; // If Flash not installed
	}
	else {
		addLoadEvent(centerFlash); // Add our centerFlash function as the body onload event handler
	
		if( flashFullscreen ) {
			self.moveTo(0,0);
			self.resizeTo(screen.width,screen.height);
		}
		flashPageHeight = getPageHeight();
		if( flashPageHeight == 0 || flashPageHeight == flashHeight ) {
			flashCenter = false;	// If running in a popup window, don't center
		}
	}
}

// Return height of the broswer window or zero if unable
function getPageHeight() 
{
	var ns4 = document.layers; // Try again -- doesn't always work the first time
	if( !ns4 ) {
		var pageHeight = top.document.body.clientHeight; // If this doesn't work
		if( !pageHeight || isNaN(pageHeight) ) pageHeight = window.innerHeight; // Then try this
		if( isNaN(pageHeight) ) pageHeight = 0;
	}
	else {
		pageHeight = window.innerHeight;
	}
	return(pageHeight);
}