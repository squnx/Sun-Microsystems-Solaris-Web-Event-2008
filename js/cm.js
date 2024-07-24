function initializeMyAccount() {
	itemList = new Array ("loginForm", "orderHistory", "orderStatus", "addressBook", "myProfile", "discounts", "changePassword");
	for (i=0; i<itemList.length; i++) {
		var j = 1;
		while (document.getElementById(itemList[i] + j)) {
			document.getElementById(itemList[i] + j).style.display = "none";
			j++;
		}
	}
}

function initializeMyAccountOpen() {
	itemList = new Array ("loginForm", "orderHistory", "orderStatus", "addressBook", "myProfile", "discounts", "changePassword");
	for (i=0; i<itemList.length; i++) {
		var j = 1;
		 displayMode = (document.getElementById && document.all) ? "block" : "table-row";
		while (document.getElementById(itemList[i] + j)) {
			document.getElementById(itemList[i] + j).style.display = displayMode;
			j++;
		}
	}
}

 function initializeMyAccountLoggedin() {
	itemList = new Array ("myAccountList");
	for (i=0; i<itemList.length; i++) {
		var j = 1;
		displayMode = (document.getElementById && document.all) ? "block" : "table-row";
		while (document.getElementById(itemList[i] + j)) {
			document.getElementById(itemList[i] + j).style.display = displayMode;
			j++;
		}
	}
}

function expandCollapse(sectionName) {
	var sh = addClassName;
	var img = document.getElementById(sectionName + "-img");
	if (img.src.indexOf("ic_show_plus") > -1) {
		sh = removeClassName;
		img.src = img.src.replace(/ic_show_plus/,"ic_hide_minus");
	} else {
		img.src = img.src.replace(/ic_hide_minus/,"ic_show_plus");
	}
	var i = 1;
	while (document.getElementById(sectionName + i)) {
		sh(document.getElementById(sectionName + i),"hidethis");
		i++;
	}
}

/* Expand Collapse for Sotfware Portfolio */

function expandCollapseSoftwarePortfolio(sectionName) {
	var displayMode = "none";
	if (document.getElementById(sectionName + "-img").src.indexOf("ic_show_plus.gif") > -1) {
		 displayMode = "block"
		 document.getElementById(sectionName + "-img").src = "/im/ic_hide_minus.gif";
	} else {
		 document.getElementById(sectionName + "-img").src = "/im/ic_show_plus.gif";
	}
	var i = 1;
	while (document.getElementById(sectionName + i)) {
		document.getElementById(sectionName + i).style.display = displayMode;
		i++;
	}
}

function initializeOrderParts() {
	itemList = new Array ("orderParts");
	for (i=0; i<itemList.length; i++) {
		var j = 1;
		while (document.getElementById(itemList[i] + j)) {
			document.getElementById(itemList[i] + j).style.display = "none";
			j++;
		}
	}
}

//Function to Chnage the State from Not Logged-In to Logged-In 

function showMyAccount() {
	var loginDiv = document.getElementById("loginForm");
	var myAccountDiv = document.getElementById("myAccount");
	loginDiv.style.display = (loginDiv.style.display == "none") ? "block" : "none";
	myAccountDiv.style.display = (loginDiv.style.display == "none") ? "block" : "none";
	displayMode = (document.getElementById && document.all) ? "block" : "table-row";
	for (i=1; i<3; i++) {
		if (document.getElementById("discountedPrice"+i)) {
			document.getElementById("discountedPrice"+i).style.display = (loginDiv.style.display == "none") ? displayMode : "none";
			document.getElementById("originalPrice"+i).style.display = (loginDiv.style.display == "none") ? "none" : displayMode;
		}
	}
}

//Function to check the selected IOs for 4200

function checkSelectedIo(itemId) {
	var maxItems;
	var totalItems = 0;
	if (itemId == 2) {
		maxItems = 3;
	} else {
		maxItems = 2;
	}
	for (i=1; i<=5; i++) {
		if (document.getElementById("cmIO" + i + itemId).checked) {
			totalItems++;
		}
	}
	if (totalItems >= maxItems) {
		for (i=1; i<=5; i++) {
			if (document.getElementById("cmIO" + i + itemId).checked) {
				document.getElementById("cmIO" + i + itemId).disabled = false;
				document.getElementById("cmIO" + i + itemId + "lbl").disabled = false;
			} else {
				document.getElementById("cmIO" + i + itemId).disabled = true;
				document.getElementById("cmIO" + i + itemId + "lbl").disabled = true;					
			}
		}
	}
}	

function showPrintPage(pagename, popupheight, popupwidth) {
	var documentHeight = document.documentElement.clientHeight;
	var documentWidth = document.body.clientWidth;
	leftpos= parseInt((documentWidth - popupwidth)/2);			
	toppos= parseInt((documentHeight - popupheight)/2);
	switch(pagename) {
		case("orderdetails") : {
			newWindow = window.open("order_details_print_page.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=600,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
		case("quotedetails") : {
			newWindow = window.open("quote_details_print_page.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=600,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
		case("shoppingcart") : {
			newWindow = window.open("shoppingcart_print_page.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=600,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}

		case("receipt") : {
			newWindow = window.open("receipt_print_page.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=600,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
		case("itemdetails") : {
			newWindow = window.open("item_details_print_page.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=600,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
		case("configuration") : {
			newWindow = window.open("configuration_print_page.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=400,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
	}
}

function showPopup(pagename, popupheight, popupwidth) {
	var documentHeight = document.documentElement.clientHeight;
	var documentWidth = document.body.clientWidth;
	leftpos= parseInt((documentWidth - popupwidth)/2);			
	toppos= parseInt((documentHeight - popupheight)/2);
	switch(pagename) {
		case("sunsystemmanager") : {
			newWindow = window.open("candyrack_sunsystemmanager.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=400,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
		case("solarissoftwarekit") : {
			newWindow = window.open("candyrack_solarissoftwarekit.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=600,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
		case("warrantyPrice") : {
			newWindow = window.open("warranty_prices.jsp", "popupwindow", "scrollbars=yes, resizable=yes, height=300,width=815,top=" + toppos +", left=" + leftpos + "\"");
			break;
		}
	}
}

function showShipWithinPopup(windowname) {
	var documentHeight = document.documentElement.clientHeight;
	var documentWidth = document.documentElement.clientWidth;
	var popupheight = 275;
	var popupwidth = 550;
	leftpos= parseInt((documentWidth - popupwidth)/2);			
	toppos= parseInt((documentHeight - popupheight)/2);
	newWindow = window.open(windowname, "popupwindow", "scrollbars=yes, resizable=yes, height=275,width=550,top=" + toppos +", left=" + leftpos + "\"");
}

/* Show Spares and System Options Results */
function showSearchResults(btnId) {
	document.getElementById(btnId).style.display = "block";
	if (document.getElementById("systemSummary")) {
		document.getElementById("systemSummary").style.display = "block";
	}
}


function showPartSearchResults(btnId) {
	document.getElementById("narrow-search-msg").style.display = "none";
	document.getElementById(btnId).style.display = "none";
	document.getElementById("no-result-msg").style.display = "none";
	var displayMode = (document.getElementById && document.all) ? "block" : "table-row";
	var categoryDisplayVal = displayMode;
	var searchVal= document.getElementById("part-search").value;
	var tRows = document.getElementById("searchResult-table").tBodies[0].rows;
	var errorDisplay = "block";

	for (i=0; i< tRows.length; i++) {

		tRows[i].style.display = "none";

		var cellNum = tRows[i].cells;

		if (cellNum[2]) {
			if (cellNum[2].innerHTML.indexOf(searchVal) > -1) {
				document.getElementById(btnId).style.display = "block";
				tRows[i].style.display = displayMode;
				tRows[0].style.display = displayMode;
				document.getElementById("numResults").innerHTML = "1 item";
				errorDisplay = "none";
			} 
		}

	}

	if((searchVal != "generic")&&(searchVal != "power supply")) {
		document.getElementById("keyword").innerHTML = searchVal;
		document.getElementById("no-result-msg").style.display = errorDisplay;
	} 
	else if(searchVal == "generic") {
		document.getElementById("narrow-search-msg").style.display = errorDisplay;
	}
	else if(searchVal == "power supply") {
		for (i=0; i< tRows.length; i++) {
			tRows[i].style.display = "none";
		}
		document.getElementById("search-results").style.display = "block";
		document.getElementById("powerSupplySearch").style.display = displayMode;
		document.getElementById("powersupply2").style.display = displayMode;
		document.getElementById("powersupply3").style.display = displayMode;
	}

	if (document.getElementById("viewTypeSystem").checked) {
			document.getElementById("productCat1").innerHTML = "System Options";
			document.getElementById("productCat2").innerHTML = "System Options";
	} else {
		document.getElementById("productCat1").innerHTML = "Spare Parts";
		document.getElementById("productCat2").innerHTML = "Spare Parts";
	}

	/*if ((searchVal.indexOf("x") > -1) || ((searchVal.indexOf("X") > -1)) {
		for (i=0; i< tRows.length; i++) {
			if ((tRows[i].getAttribute('name') == "spare")) {
				tRows[i].style.display = "none";
			} else {
				tRows[i].style.display = displayMode;
			}
		}

	} else {
		for (i=0; i< tRows.length; i++) {
			if ((tRows[i].getAttribute('name') == "system")) {
				tRows[i].style.display = "none";
			} else {
				tRows[i].style.display = displayMode;
			}
		}
	}*/
}

/* Show/Hide Cart Details */

function showCartDetails(cartId) {
	var viewAllStatus = "true";
	cartDetails = document.getElementById('cart-details' + cartId);
	viewIcon = document.getElementById('icView' + cartId);
	viewLink = document.getElementById('view-link' + cartId);
	viewIcon.src = (cartDetails.style.display == "none") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
	viewLink.innerHTML = (cartDetails.style.display == "none") ? "Hide Details" : "View Details";
	cartDetails.style.display = (cartDetails.style.display == "none") ? "block" : "none";
	viewAllLink = document.getElementById("viewAll-link");
	var i = 1;
	while (document.getElementById('cart-details' + i)) {
		if (document.getElementById('cart-details' + i).style.display == "none") {
			viewAllStatus = "false";
		}
		i++;
	}
	viewAllLink.innerHTML = (viewAllStatus == "false") ? "View All Details" : "Hide All Details";
	viewAllIcon = document.getElementById('icViewAll');
	viewAllIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
}

function showAllCartDetails() {
	var cartId = 1;
	viewAllLink = document.getElementById("viewAll-link");
	viewAllLink.innerHTML = (viewAllLink.innerHTML == "View All Details") ? "Hide All Details" : "View All Details";
	viewAllIcon = document.getElementById('icViewAll');
	viewAllIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
	while (document.getElementById('cart-details' + cartId)) {
		cartDetails = document.getElementById('cart-details' + cartId);
		viewIcon = document.getElementById('icView' + cartId);
		viewLink = document.getElementById('view-link' + cartId);
		viewIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
		viewLink.innerHTML = (viewAllLink.innerHTML == "Hide All Details") ? "Hide Details" : "View Details";
		cartDetails.style.display = (viewAllLink.innerHTML == "Hide All Details") ? "block" : "none";
		cartId++;
	}
}

/* Spares and System Options Filters */

function showCategoryDescription(selectedCategory) {
	var displayMode = (document.getElementById && document.all) ? "block" : "table-row";
	var tRows = document.getElementById("searchResult-table").tBodies[0].rows;
	for (i=0; i< tRows.length; i++) {
		tRows[i].style.display = displayMode;
	}
	document.getElementById("filter-all").style.display = "none";
	document.getElementById("filter-spares").style.display = "none";
	document.getElementById("filter-systemoptions").style.display = "none";
	if (selectedCategory == 1) {
		document.getElementById("filter-spares").style.display = "inline";
		for (i=0; i< tRows.length; i++) {
			if ((tRows[i].getAttribute('name') == "system")) {
				tRows[i].style.display = "none";
			} else {
				tRows[i].style.display = displayMode;
			}
		}
	} else if (selectedCategory == 0) {
		document.getElementById("filter-systemoptions").style.display = "inline";
		for (i=0; i< tRows.length; i++) {
			if ((tRows[i].getAttribute('name') == "spare")) {
				tRows[i].style.display = "none";
			} else {
				tRows[i].style.display = displayMode;
			}
		}
	}
}

/* Show models for the selected product */

function showProductModels(selectedOption, pageVersion) {
	if (pageVersion == "dynamic") {
		document.getElementById("productModels").style.display = (selectedOption != 0) ? "block" : "none";
	}
	if (document.getElementById("productOptions").selectedIndex == 0) {
		document.getElementById("cmservermodels").style.display = "none";
		document.getElementById("cmstoragemodels").style.display = "none";
		document.getElementById("cmdefaultmodels").style.display = "block";
	}
	else if (document.getElementById("productOptions").selectedIndex == 2) {
		document.getElementById("cmservermodels").style.display = "block";
		document.getElementById("cmstoragemodels").style.display = "none";
		document.getElementById("cmdefaultmodels").style.display = "none";
	} else if (document.getElementById("productOptions").selectedIndex == 3) {
		document.getElementById("cmstoragemodels").style.display = "block";
		document.getElementById("cmservermodels").style.display = "none";
		document.getElementById("cmdefaultmodels").style.display = "none";
	}
 }
 
 /* Expand and Collapse */
 
 function expandCollapseSpare(sectionName) {
	var displayMode = "none";
	if (document.getElementById(sectionName + "-img").src.indexOf("ic_show_plus.gif") > -1) {
		displayMode = (document.getElementById && document.all) ? "block" : "table-row";
		 document.getElementById(sectionName + "-img").src = "/im/ic_hide_minus.gif";
	} else {
		 document.getElementById(sectionName + "-img").src = "/im/ic_show_plus.gif";
	}
	var i = 1;
	while (document.getElementById(sectionName + i)) {
		document.getElementById(sectionName + i).style.display = displayMode;
		i++;
	}
}

/* Show Discounted Pricing on Login */

function showMyAccount() {
	var loginDiv = document.getElementById("loginForm");
	var myAccountDiv = document.getElementById("myAccount");
	loginDiv.style.display = (loginDiv.style.display == "none") ? "block" : "none";
	myAccountDiv.style.display = (loginDiv.style.display == "none") ? "block" : "none";
	displayMode = (document.getElementById && document.all) ? "block" : "table-row";
	var i = 1;
	if (document.getElementById("listPrice1")) {
		while(document.getElementById("listPrice" + i)) {

			document.getElementById("listPrice" + i).style.display = (loginDiv.style.display == "none") ? "none" : "block";
			document.getElementById("yourPrice" + i).style.display = (loginDiv.style.display == "none") ?"block" : "none";
			i++;
		}
	}

	if (document.getElementById("originalPrice1")) {
		var j = 1;
		while(document.getElementById("originalPrice" + j)) {
			document.getElementById("originalPrice" + j).style.display = (loginDiv.style.display == "none") ? "none" : "block";
			document.getElementById("discountedPrice" + j).style.display = (loginDiv.style.display == "none") ?"block" : "none";
			j++;
		}
	}
 }
 
 /* Show DHTML PoP UP */
 
 function showDHTML(windowName, popupheight) {

	if (document.getElementById(windowName + "iframe")) {
		document.getElementById(windowName + "iframe").className = "k4";
	}

	var browserHeight = document.body.clientHeight;

	var divMoreWin = document.getElementById(windowName);
	topPos = 10 + parseInt(getScrollY());
	bottomPadding = browserHeight - parseInt(topPos + popupheight);

	divMoreWin.style.paddingTop = topPos + "px"
	divMoreWin.style.paddingBottom = bottomPadding+ "px";
	document.getElementById(windowName).className = "k4 k4v0";
}

function getScrollY() {
	var scrOfX = 0, scrOfY = 0;
	if( typeof( window.pageYOffset ) == 'number' ) {
		//Netscape compliant
		scrOfY = window.pageYOffset;
		scrOfX = window.pageXOffset;
	} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
		//DOM compliant
		scrOfY = document.body.scrollTop;
		scrOfX = document.body.scrollLeft;
	} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) 			
		{
		//IE6 standards compliant mode
		scrOfY = document.documentElement.scrollTop;
		scrOfX = document.documentElement.scrollLeft;
	}
	return [ scrOfY ];
}

function hideDHTML(windowName) {
	document.getElementById(windowName).className = "k4 k4v0 k4hidden";
	if (document.getElementById(windowName + "iframe")) {
		document.getElementById(windowName + "iframe").className = "k4 k4v0 k4hidden";
	}
}

/* Show/Hide Item Details in Cart */

function showCartDetails(cartId) {
	var viewAllStatus = "true";
	cartDetails = document.getElementById('cart-details' + cartId);
	viewIcon = document.getElementById('icView' + cartId);
	viewLink = document.getElementById('view-link' + cartId);
	viewIcon.src = (cartDetails.style.display == "none") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
	viewLink.innerHTML = (cartDetails.style.display == "none") ? "Hide Details" : "View Details";
	cartDetails.style.display = (cartDetails.style.display == "none") ? "block" : "none";

	var i = 1;
	while (document.getElementById('cart-details' + i)) {
		if (document.getElementById('cart-details' + i).style.display == "none") {
			viewAllStatus = "false";
		}
		i++;
	}
	if (document.getElementById("viewAll-link")) {
		viewAllLink = document.getElementById("viewAll-link");
		viewAllLink.innerHTML = (viewAllStatus == "false") ? "View All Details" : "Hide All Details";
		viewAllIcon = document.getElementById('icViewAll');
		viewAllIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
	}
}

function showAllCartDetails() {
	var cartId = 1;
	viewAllLink = document.getElementById("viewAll-link");
	viewAllLink.innerHTML = (viewAllLink.innerHTML == "View All Details") ? "Hide All Details" : "View All Details";
	viewAllIcon = document.getElementById('icViewAll');
	viewAllIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
	while (document.getElementById('cart-details' + cartId)) {
		cartDetails = document.getElementById('cart-details' + cartId);
		viewIcon = document.getElementById('icView' + cartId);
		viewLink = document.getElementById('view-link' + cartId);
		viewIcon.src = (viewAllLink.innerHTML == "Hide All Details") ? "/im/ic_hide_minus.gif" : "/im/ic_show_plus.gif";
		viewLink.innerHTML = (viewAllLink.innerHTML == "Hide All Details") ? "Hide Details" : "View Details";
		cartDetails.style.display = (viewAllLink.innerHTML == "Hide All Details") ? "block" : "none";
		cartId++;
	}
}

function showSavedItemMsg() {
	document.getElementById("saveditemmessage").style.display = "block";
	location.href="#";
}
 
function showChatPopup() {
	window.open('https://ssl1.taggingserver.netmining.com/script/sun/chat/', 'callnow', 'directories=no,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=yes,toolbar=no,height=450,width=370,top=' + (screen.availHeight/2-225) + ',left=' + (screen.availWidth/2-175));
}



// ############################################################################################

function initializeComponents() {
	var allComponents = document.getElementsByTagName("div");
	for (i=0; i< allComponents.length; i++) {
		if (allComponents[i].className.indexOf("cmOptions") > -1) {
			allComponents[i].onmouseover = function () {
				//alert(this.className);
				if (this.className.indexOf("cmSelected") <= -1) {
					this.className = "cmOptions cmHover";
					//alert (this.className);
				}
			}
			allComponents[i].onmouseout = function() {
				if (this.className.indexOf("cmSelected") <= -1) {
					this.className = "cmOptions";
				}
			}
		}
		var arrCheck = new Array ("processorqty", "memoryqty", "diskqty");
		
		for (k=0; k< arrCheck.length; k++) {
			if(document.getElementById(arrCheck[k] + 1)) {
				j = 1;
				while (document.getElementById(arrCheck[k]+j)) {
					document.getElementById(arrCheck[k] + j).disabled = true;
					document.getElementById(arrCheck[k] + j).checked = false;
					j++;
				}
				document.getElementById(arrCheck[k]+1).parentNode.className = "label-disabled";
			}
		}
		if (document.getElementById("cmCpu1")) {
			document.getElementById("cmCpu1").checked = true;
			document.getElementById("cmDisk11").checked = true;
			document.getElementById("cmMem11").checked = true;
		}
	}
	
/*	var allInput = document.getElementsByTagName("input");
	for(j=0; j< allInput.length; j++) {
		if (allInput[j].type == "radio" || allInput[j].type == "checkbox") {
			allInput[j].onclick = function() {
				highlightSelected(this);
			}
		} 
	} */
}

function highlightSelected(obj, objName) {
	var formElements = "";
	if (obj.type == "radio") {
		i=1;
	
		while (document.getElementById(objName + i)) {
			document.getElementById(objName + i).parentNode.className = "cmOptions";
	
			//Show the price information for all the items
			if (document.getElementById(objName + i + "Price")) {
				document.getElementById(objName + i + "Price").style.display = "inline";
			}
			i++;
		}
	}
	if (obj.checked) {
		obj.parentNode.className = "cmOptions cmSelected";
		//obj.style.background = "#fff1ca";
		//Hide the price information for the selected item - Only for Memory and Disk Drives
		if (document.getElementById(obj.id + "Price")) {
			document.getElementById(obj.id + "Price").style.display = "none";
		}
	} else {
		obj.parentNode.className = "cmOptions";
	}

	switch(objName) {
		case("cmDisk1") : {
			formElements = document.myform.cmDisk1Num;
			break;
		}
		case("cmMem1") : {
			formElements = document.myform.cmNumMemory;
			break;
		}
		case("cmCpu") : {
			formElements = document.myform.cmNumProcessor;
			break;
		}
	}

	if (objName != "cmMem1") {
		if ((document.myform.cmDisk1Num)&&(formElements != "")) {
			var numItems = formElements.length;
			for (i=0; i<numItems; i++) {
				formElements[i].disabled = (obj.id == (objName+1));
			}
			formElements[0].parentNode.className = (obj.id == (objName+1)) ? "label-disabled" : "label";
			formElements[0].checked = (obj.id != (objName+1));
		}
	}

	if ((obj.id == "cmPs1")||(obj.id == "cmRp1")) {
		for (j=1; j<3; j++) {
			document.getElementById(obj.name + "qty" + j).disabled = !(obj.checked);
		}
		if ((obj.id == "cmPs1")&&(!(obj.checked))) {
			document.getElementById("cmRp1").checked = false;
			document.getElementById("cmRp1").parentNode.className = "cmOptions";
			for (j=1; j<3; j++) {
				document.getElementById("powercordqty" + j).disabled = true;
			}
		}
		
		/*if (obj.id == "cmRp1") {
			document.getElementById("cmPs1").checked = obj.checked;
		}*/
	}
}

function updateIOCardSlots(obj, objName) {
	var totalSlots = 0;
	if (obj.selectedIndex > 0) {
		obj.parentNode.className = "cmOptions cmSelected";
	}
	j = 1;
	while (document.getElementById(objName + j)) {
		totalSlots = totalSlots + document.getElementById(objName + j).selectedIndex;
		j++;
	}
}

function updateMemoryInfo(obj, indexValue) {
	//Function to highlight the selecte row
	highlightSelected(obj, 'cmMem');
	switch (indexValue) {
		case 1:
			document.getElementById("cmMemInfo").innerHTML = "1GB DDR1 (2x512MB)";
			break;
		case 2:
			document.getElementById("cmMemInfo").innerHTML = "2GB DDR1 (4x512MB)";
			break;
		case 3:
			document.getElementById("cmMemInfo").innerHTML = "2GB DDR1 (2x1GB)";
			break;
	}
	//Highlight the Configuraiton Summary line for 2 seconds
	document.getElementById('cmMemInfo').style.background = '#ffffcc';
	setTimeout("document.getElementById('cmMemInfo').style.background = 'transparent'", 2000);
	
	updatePrice();
}

function updateSecondaryDrive(obj, indexValue) {
	//Function to highlight the selecte row
	highlightSelected(obj, 'cmDisk2');
	switch (indexValue) {
		case 1:
			document.getElementById("cmDisk2Info").style.display = "none";
			break;
		case 2:
			document.getElementById("cmDisk2Info").innerHTML = "80GB Secondary Disk";
			document.getElementById("cmDisk2Info").style.display = "list-item";
			document.getElementById("cmDisk2Info").className = "small";
			break;
		case 3:
			document.getElementById("cmDisk2Info").innerHTML = "250GB Secondary Disk";
			document.getElementById("cmDisk2Info").style.display = "list-item";
			document.getElementById("cmDisk2Info").className = "small";			
			break;
	}
	//Highlight the Configuraiton Summary line for 2 seconds
	document.getElementById('cmDisk2Info').style.background = '#ffffcc';
	setTimeout("document.getElementById('cmDisk2Info').style.background = 'transparent'", 2000);
	updatePrice();
}

/* function updateDvdInfo(obj) {
	highlightSelected(obj, 'cmOptical');
	if (obj.checked) {
		document.getElementById("cmOpticalDiskInfo").style.display = "block";
	} else {
		document.getElementById("cmOpticalDiskInfo").style.display = "none";
	}
	//Highlight the Configuraiton Summary line for 2 seconds
	document.getElementById('cmOpticalDiskInfo').style.background = '#ffffcc';
	setTimeout("document.getElementById('cmOpticalDiskInfo').style.background = 'transparent'", 2000);
	updatePrice();
} */

function updatePrice() {
	var memoryPrice = 0;
	var diskDrivePrice = 0;
	var opticalDrivePrice = 0;
	var	osPrice = 0;
	var osPriceList = new Array (49, 35, 349, 349, 799, 1499);
	//Check memory
	if(document.getElementById("cmMem1").checked) {
		memoryPrice = 0;
	} else if (document.getElementById("cmMem2").checked) {
		memoryPrice = 270;
	} else if (document.getElementById("cmMem3").checked) {
		memoryPrice = 590;
	}
	
	//Check Disk Drive
	if (document.getElementById("cmDisk21").checked) {
		diskDrivePrice = 0;
	} else if (document.getElementById("cmDisk22").checked) {
		diskDrivePrice = 150;
	} else if (document.getElementById("cmDisk23").checked) {
		diskDrivePrice = 299;
	}
	
	//Check Optical Drive price
	if (document.getElementById("cmOptical1").checked) {
		opticalDrivePrice = 95;
	}
	
	//Check Operating System Price
	for (i=1; i<=6; i++) {
		if (document.getElementById("cmOs" + i).checked) {
			osPrice += osPriceList[i-1];
		}
	}
	
	var finalPrice = 1390 + memoryPrice + diskDrivePrice + osPrice;
	document.getElementById("cmSubtotal1").innerHTML = "<strong>$" + finalPrice + "</strong>";
	document.getElementById("cmSubtotal2").innerHTML = "<strong>$" + finalPrice + "</strong>";
}

//Save as Quote


function checkLoginInfo(flowvariable, fieldId){
	if (document.getElementById(fieldId).value == "") {
		document.getElementById("errorMsg").style.display = "block";
	}
	else if (document.getElementById(fieldId).value != "") {
		hideDHTML('loginpopup'); 
		if (flowvariable == "savequote") {
			showDHTML('savequotepopup', 400);
		}
		else if (flowvariable == "saveitem") {
			location.href = "saved_item.jsp";
		}
	}
}

//Saving Quote and Saved Confirmation Message

function showSavingMsg(windowName) {
	var quotenamevalue = document.getElementById("quotename_field").value;
	
		 document.getElementById(windowName).style.display = "none";
		document.getElementById ("errorMsg").style.display = "none";
		document.getElementById ("savingMsg").style.display = "block";
		var t = setTimeout ("showSavedQuoteMsg()", 2000);

	location.href="#top";
}

function showSavedQuoteMsg() {
	document.getElementById ("savingMsg").style.display = "none";
 	document.getElementById("savedquotemsg").style.display = "block";
 	var quotenamevalue = document.getElementById("quotename_field").value;
	if (quotenamevalue == "") {
		quotenamevalue = "Quote XYZ";
	}
	document.getElementById("quotename").innerHTML = quotenamevalue;
 }
 
 function updateConfigSummary(obj, btnValue, btnName, indexValue) {
 	//Function to highlight the selecte row
	highlightSelectedRow(obj, btnName);
	//document.getElementById(btnName + "Info").innerHTML = btnValue;
	//updateSparePrice(btnName, indexValue);
 }
 
 /* Update Price on System Options Page */
 
 function updateSparePrice(btnName, indexValue) {
 	var arrSystemOptions = new Array ("cmBootDisk", "cmCod", "cmAccelerationBoards");
 	var cmBootDiskPriceList = new Array (7495, 8495, 7495); 
	var cmCodPriceList = 20000; 
	var cmAccelerationBoardsPriceList = 50; 
	var totalPrice = 0;
 	//Check Price
	
	
	for (j=0; j<arrSystemOptions.length; j++) {
		i=0;
		while (document.getElementById(arrSystemOptions[j] + (++i))) {
			
			if (document.getElementById(arrSystemOptions[j] + i).checked) {
				priceVar = arrSystemOptions[j] + "PriceList";
				switch(priceVar) {
					case("cmBootDiskPriceList") : {
						totalPrice += cmBootDiskPriceList[i-1];
						break;
					}
					case("cmCodPriceList") : {
						totalPrice += cmCodPriceList;
						break;
					}
					case("cmAccelerationBoardsPriceList") : {
						totalPrice += cmAccelerationBoardsPriceList;
						break;
					}
				}
			}
		}
	}
	//var finalPrice = memoryPrice + diskDrivePrice + osPrice;
	document.getElementById("cmSubtotal1").innerHTML = "<strong>$" + totalPrice + "</strong>";
 }
 
 function highlightSelectedRow(obj, objName) {
	var formElements = "";
	if (obj.checked) {
		(obj.parentNode).parentNode.className = "cmOptions cmSelected";
		(obj.parentNode).parentNode.cells[0].style.background = "#fff";
		//alert((obj.parentNode).parentNode.childNodes[0]);
		//(obj.parentNode).parentNode.childNodes[0].style.background = "none";
		//Hide the price information for the selected item - Only for Memory and Disk Drives
	} else {
		(obj.parentNode).parentNode.className = "cmOptions";
	}
}

 function highlightSelectedTableRow(obj, objName) {
	var formElements = "";
	if (obj.type == "radio") {
		i=1;
		while (document.getElementById(objName + i)) {
			document.getElementById(objName + i).parentNode.parentNode.className = "cmOptions";
			//Show the price information for all the items
			if (document.getElementById(objName + i + "Price")) {
				document.getElementById(objName + i + "Price").style.display = "inline";
			}
			i++;
		}
	}
	var numRows = document.getElementById(objName + "-table").tBodies[0].rows.length;
	
	for (i=0; i<numRows; i++) {
		document.getElementById(objName + "-table").tBodies[0].rows[i].className = "cmOptions";
	}

	if (obj.checked) {
		(obj.parentNode).parentNode.className = "cmOptions cmSelected";
		//Hide the price information for the selected item - Only for Memory and Disk Drives
		if (document.getElementById(obj.id + "Price")) {
			document.getElementById(obj.id + "Price").style.display = "none";
		}
	} else {
		(obj.parentNode).parentNode.className = "cmOptions";
	}
	switch(objName) {
		case("cmDisk1") : {
			formElements = document.myform.cmDisk1Num;
			break;
		}
		case("cmMem1") : {
			formElements = document.myform.cmNumMemory;
			break;
		}
		case("cmCpu") : {
			formElements = document.myform.cmNumProcessor;
			break;
		}
	}
	/*if ((document.myform.cmDisk1Num)&&(formElements != "")) {
		var numItems = formElements.length;
		for (i=0; i<numItems; i++) {
			formElements[i].disabled = (obj.id == (objName+1));
		}
		formElements[0].parentNode.className = (obj.id == (objName+1)) ? "label-disabled" : "label";
		formElements[0].checked = (obj.id != (objName+1));
	}*/
}


 function highlightSelectedQty(obj) {
	if ((obj.value != "")&&(obj.value != "0")) {
		(obj.parentNode).className = "cmOptions cmSelected";
	} else {
		(obj.parentNode).className = "cmOptions";
	}
}

/* On Changing the Quantity the Related Product gets Selected */

function highlightQty(obj, objId) {
	if ((obj.value != "") && (obj.value != "0")) {
		objCheck = document.getElementById(objId +1);
		objCheck.checked = true;
		highlightSelectedHardware(objCheck, objId);
	} else if ((obj.value == "") || (obj.value == "0")) {
		objCheck = document.getElementById(objId+1);
		objCheck.checked = false;
		highlightSelectedHardware(objCheck, objId);
	}
}

function highlightSelectedHardware(obj, objId) {
	var formElements = "";
	if (obj.checked) {
		(obj.parentNode).parentNode.className = "cmOptions cmSelected";
		//alert((obj.parentNode).parentNode.childNodes[0]);
		//(obj.parentNode).parentNode.childNodes[0].style.background = "none";
		//Hide the price information for the selected item - Only for Memory and Disk Drives
	} else {
		(obj.parentNode).parentNode.className = "cmOptions";
	}
}

function highlightSelectedSpare(obj, objName) {
	var formElements = "";
	if (obj.type == "radio") {
		i=1;
		while (document.getElementById(objName + i)) {
			document.getElementById(objName + i).parentNode.className = "cmOptions";
			//Show the price information for all the items
			if (document.getElementById(objName + i + "Price")) {
				document.getElementById(objName + i + "Price").style.display = "inline";
			}
			i++;
		}
	}
	if (obj.checked) {
		obj.parentNode.className = "cmOptions cmSelected";
		
		//Hide the price information for the selected item - Only for Memory and Disk Drives
		if (document.getElementById(obj.id + "Price")) {
			document.getElementById(obj.id + "Price").style.display = "none";
		}
	} else {
		obj.parentNode.className = "cmOptions";
	}
	
	if ((objName == "cmSupport")&& (obj.id != "cmSupport1")) {
		document.getElementById("serviceDeliveryMethod").style.display = "block";

	} else if ((objName == "cmSupport")&& (obj.id == "cmSupport1")) {
		document.getElementById("serviceDeliveryMethod").style.display = "none";
	
	}
}

function showQty(btnStatus, btnId) {
 	document.getElementById(btnId).value = btnStatus ? "1" : "";
}
