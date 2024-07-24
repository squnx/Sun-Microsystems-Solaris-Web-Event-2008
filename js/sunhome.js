/* ###########################################################################

GLOBAL ASSETS RELEASE v2.7.1

SUNHOME.JS v1.4

BUILD DATE: 20070531

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

// prep b7 boxes
function prephome(){
	setup_boxes();
	setup_b7selects();
}

function OmnitureSetObject(fobj){
	if (hasParent(fobj,'div','b1x1') && fobj.nodeName.toLowerCase() == 'area'){
		var p = fobj.parentNode.parentNode;
		set_sobj('B1-'+p.id);
	}else{
		if (hasParent(fobj,'div','b5v0')){
			set_sobj('B5-Promo Top');
		}else if (hasParent(fobj,'div','a2search')){
			set_sobj('A2-Search Form');
		}else if (hasParent(fobj,'div','b5v1')){
			set_sobj('B5-Promo Middle');
		}else if (hasParent(fobj,'div','b5v2')){
			set_sobj('B5-Promo Bottom');
		}else if (hasParent(fobj,'div','promos')){
			set_sobj('B5-Promo All');
		}else if (hasParent(fobj,'ul','footerlinks')){
			set_sobj('A5-'+fobj.innerHTML);
		}else if (hasParent(fobj,'div','a5w2')){
			set_sobj('A5-Stay Connected');
		}else if (hasParent(fobj,'div','b1x1') && !hasParent(fobj,'div','b1sel') && fobj.parentNode.id != ""){
			var p = fobj.parentNode;
			set_sobj('B1-'+p.id);
		}else if (hasParent(fobj,'div','a1menu')){
			var p = hasParent(fobj,'div','a1menu');
			set_sobj('A1-'+p.id+'-'+fobj.innerHTML);
		}else if (hasParent(fobj,'div','a1r2')){
			set_sobj('A1-'+fobj.innerHTML);
		}else if (hasParent(fobj,'div','flymenus')){
			var p = hasParent(fobj,'div','flymenus');
			p = p.id.replace(/flymenu/,"");
			set_sobj('A2-'+document.getElementById('mtopic'+p).getElementsByTagName('a')[0].innerHTML+'-'+fobj.innerHTML);
		}else if (hasParent(fobj,'div','a2w4')){
			if (fobj.getElementsByTagName("img")[0]){
				var a2 = "Sun Logo Link"; 
			}else if (fobj.nodeName.toLowerCase() == 'a' && fobj.innerHTML != ""){
				var a2 = fobj.innerHTML; 
			}
			set_sobj('A2-'+a2);
		}else if (hasParent(fobj,'div','b1selw3')){
			set_sobj('B1-'+fobj.innerHTML);
		}else if (hasParent(fobj,'td','col3') && hasParent(fobj,'div','b3w2')){
			set_sobj('B3-Feeds');
		}else if (hasParent(fobj,'td','col2') && hasParent(fobj,'div','b3w2')){
			set_sobj('B3-Ticker');
		}else if (hasParent(fobj,'div','b3w2')){
			set_sobj('B3-'+fobj.innerHTML);
		}else if (hasParent(fobj,'div','b7sect')){
			var p = hasParent(fobj,'div','b7sect');
			if (fobj.getElementsByTagName("img")[0]){
				var b7 = getFilenameOnly(" "+fobj.getElementsByTagName("img")[0].src);
			}else{
				var b7 = fobj.innerHTML; 
			}
			set_sobj('B7-'+p.id+'-'+b7);
		}else if (hasParent(fobj,'div','k2pbw2')){
			set_sobj('Powered By-'+fobj.innerHTML);
		}else if (hasParent(fobj,'div','d7jsmenupop')){
			set_sobj('B7-MENU-'+fobj.innerHTML);
		}
	}
}

function getFilenameOnly(theString){
		return theString.replace(/.*\/([^\/.]+)\..*$/g,"$1");
}

function getb5Filename(theString){
		return theString.replace(/.*\/([^\/.]+)_v\d\..*$/g,"$1");
}

function set_sobj(sobjValue) {
		sobjValue = sobjValue.replace(/\n/g,"");
		sobjValue = sobjValue.replace(/^[ \t]+/g,"");
		sobjValue = sobjValue.replace(/amp;/gi,"");
		sobjValue = sobjValue.replace(/<img[^>]+>/gi,"");
		s_objectID = sobjValue;
		//debug	--> 		alert('s_objectID = '+sobjValue);
}

function setb5tracking() {
	if (document.getElementById('b5v0') && document.getElementById('b5v1') && document.getElementById('b5v2')){
		if (document.getElementById('b5v0').getElementsByTagName('a')[0].href.indexOf('?') == -1) { var intcmp = "?intcmp=" }else{ var intcmp = "&intcmp=" }
		document.getElementById('b5v0').getElementsByTagName('a')[0].href = document.getElementById('b5v0').getElementsByTagName('a')[0].href + intcmp + getb5Filename(document.getElementById('b5v0').getElementsByTagName('a')[0].getElementsByTagName('img')[0].src);
		if (document.getElementById('b5v1').getElementsByTagName('a')[0].href.indexOf('?') == -1) { var intcmp = "?intcmp=" }else{ var intcmp = "&intcmp=" }
		document.getElementById('b5v1').getElementsByTagName('a')[0].href = document.getElementById('b5v1').getElementsByTagName('a')[0].href + "?intcmp=" + getb5Filename(document.getElementById('b5v1').getElementsByTagName('a')[0].getElementsByTagName('img')[0].src);
		if (document.getElementById('b5v2').getElementsByTagName('a')[0].href.indexOf('?') == -1) { var intcmp = "?intcmp=" }else{ var intcmp = "&intcmp=" }
		document.getElementById('b5v2').getElementsByTagName('a')[0].href = document.getElementById('b5v2').getElementsByTagName('a')[0].href + "?intcmp=" + getb5Filename(document.getElementById('b5v2').getElementsByTagName('a')[0].getElementsByTagName('img')[0].src);
		s_prop22 = getb5Filename(document.getElementById('b5v0').getElementsByTagName('a')[0].getElementsByTagName('img')[0].src) +", "+ getb5Filename(document.getElementById('b5v1').getElementsByTagName('a')[0].getElementsByTagName('img')[0].src)  +", "+ getb5Filename(document.getElementById('b5v2').getElementsByTagName('a')[0].getElementsByTagName('img')[0].src);
	}
}

var d7m = 0;
function setup_b7selects() {
	var dselects = document.getElementById("b4wrapper").getElementsByTagName('select');
	for(i = dselects.length - 1; i >= 0; i = i - 1){
		d7m++;
		var selopt = dselects[i].getElementsByTagName('option');
		var options = "";
		for (var n=0;n<selopt.length;n++){
			var tcl = "";
			if (selopt[n].className){
				tcl = selopt[n].className;
			}
			var lclass = "";
			if (selopt[n].innerHTML.search('^[ \t\n]*- ?') > -1){
				selopt[n].innerHTML = selopt[n].innerHTML.replace(/^[ \t\n]*- ?/i,"");
				lclass = ' class="sublist"';
			}
			if (selopt[n].getAttribute('value') && !hasClassName(selopt[n], 'oTitle')){
				options = options+'<li'+lclass+'><a href="'+selopt[n].getAttribute('value')+'" class="small '+tcl+'" onclick="OmnitureSetObject(this)">'+selopt[n].innerHTML+'</a></li>';
			}else if (selopt[n].getAttribute('value') && hasClassName(selopt[n], 'oTitle')){
				options = options+'<b><a href="'+selopt[n].getAttribute('value')+'" class="'+tcl+'" onclick="OmnitureSetObject(this)">'+selopt[n].innerHTML+'</a></b>';
			}else if (selopt[n].innerHTML.search('[\-]+') > -1){
				options = options+'<div class="hr"><hr></div>';
			}else{
				options = options+'<b>'+selopt[n].innerHTML+'</b>';
			}
		}
		var seldiv = document.createElement('div');
		seldiv.className = 'd7jsmenu vAlignTopBottom hMiddleRight y10 x-5 k2over-d7menu'+d7m;
		if (dselects[i].parentNode.getElementsByTagName('h4')[0]){
			dselects[i].parentNode.getElementsByTagName('h4')[0].style.display = "none";
			if(dselects[i].parentNode.getElementsByTagName('h4')[0].getElementsByTagName('a')[0]){
				seldiv.innerHTML = dselects[i].parentNode.getElementsByTagName('h4')[0].innerHTML;
			}else{
				seldiv.innerHTML = '<span>'+dselects[i].parentNode.getElementsByTagName('h4')[0].innerHTML+'</span>';
			}
		}else{
			seldiv.innerHTML = dselects[i].options[0].innerHTML;
		}
		dselects[i].parentNode.insertBefore(seldiv, dselects[i]);
		dselects[i].parentNode.removeChild(dselects[i]);
		var popdiv = document.createElement('div');
		popdiv.className = 'k2 d7jsmenupop';
		popdiv.id = 'd7menu'+d7m;
		popdiv.innerHTML = '<ul class="bluearrows">'+options+'</ul>';
		document.getElementById("a0v2").insertBefore(popdiv,document.getElementById("a0v2").getElementsByTagName('div')[0]);
		sniffK2(seldiv);
	}
}

function setup_boxes() {
	var boxDiv = document.getElementById("b4wrapper");
	if (!boxDiv) return;
	var as = boxDiv.getElementsByTagName('a');
	for (var a=0; a<as.length; a++) {
		if (hasClassName(as[a], 'b7control') || hasClassName(as[a], 'b7prev') || hasClassName(as[a], 'b7next')) {
			if (!as[a].href) { alert('link has no href'); continue; }
			if (as[a].href.indexOf('#') == -1) { alert('link has no #pagefrag'); continue; }
			as[a].onclick = function() {
				var id = this.href.substring(this.href.indexOf('#') + 1);
				var el = document.getElementById(id);
				if (!el) { alert('document.getElementById("'+id+'") not found'); return false; }
				var parentSect = this.parentNode.parentNode.parentNode;
				removeClassName(parentSect, 'b7default');
				addClassName(el, 'b7default');
				return false;
			}
		}
	}
}
