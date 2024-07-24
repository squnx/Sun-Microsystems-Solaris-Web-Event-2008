/* ###########################################################################

GLOBAL ASSETS RELEASE v2.7.1

SUN WIDGET AND AJAX JS LIB v1.0

BUILD DATE: 20070531

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

// other scripts can test for the presence or contents of this object
var widgets = {'version':'1.0'};

// set up the wg1 widget
function sniffWg1(div) {
	// add scripting ref
	addClassName(div, 'wg1scripted');

	// grab ref to subhead
	var divs = div.getElementsByTagName('div');
	var sects = [];
	var subsects = [];
	for (var a=0; a<divs.length; a++) {
		if (hasClassName(divs[a], 'wg1subhead')) {
			var subhead = divs[a];
		} else if (hasClassName(divs[a], 'wg1sect')) {
			sects[sects.length] = divs[a];
		}
	}

	// add edit link
	var p = elem('p',{'class':'wg1edit-toggler'});
	var lnk = elem('a',{'href':'#'});
	lnk.editText = "Edit";
	lnk.closeEditText = "Close Edit";
	lnk.savingText = "Saving";
	p.appendChild(lnk);
	lnk.appendChild(document.createTextNode(lnk.editText));
	subhead.appendChild(p);
	lnk.setSaving = function(saving) {
		if (saving) {
			this.firstChild.data = this.savingText;
			addClassName(this, 'wg1saving');
		} else {
			if (this.firstChild.data == this.savingText) { this.firstChild.data = this.closeEditText; }
			removeClassName(this, 'wg1saving');
		}
	}

	// edit link handler
	addEvent(lnk, 'click', function(e){
		if (!e && window.EVENT) { e = window.EVENT; }
		var obj = (e.target) ? e.target : e.srcElement;
		if (obj.firstChild.data == obj.editText) {
			obj.firstChild.data = obj.closeEditText;
			obj.correspondingHeader.firstChild.data = obj.correspondingHeader.editingText;
			addClassName(obj.controlPanel, 'wg1editing');
		} else {
			obj.firstChild.data = obj.editText;
			obj.correspondingHeader.firstChild.data = obj.correspondingHeader.notEditingText;
			removeClassName(obj.controlPanel, 'wg1editing');
		}
		(e.preventDefault) ? e.preventDefault() : e.returnValue = false;
	});
	var h3 = subhead.getElementsByTagName('h3')[0];
	h3.notEditingText = elemText(h3);
	h3.editingText = 'Editing: '+h3.notEditingText;
	lnk.correspondingHeader = h3;

	// add control panel
	var cpnl = elem('div',{'class':'wg1control-panel'});
	lnk.controlPanel = cpnl;
	var form = elem('form',{'action':''});
	var tbl = elem('table', {'class':'twocol layout','summary':'layout'});
	var tr = tbl.insertRow(0);
	var td1 = tr.insertCell(0);
	td1.className = 'col1';
	var td2 = tr.insertCell(1);
	td2.className = 'col2';
	cpnl.appendChild(form);
	form.appendChild(tbl);
	for (var a=0; a<sects.length; a++) {
		var td = (a % 2) ? td2 : td1;
		var h4 = sects[a].getElementsByTagName('h4')[0].cloneNode(true);
		td.appendChild(h4);
		var subdivs = sects[a].getElementsByTagName('div');
		for (var b=0; b<subdivs.length; b++) {
			if (hasClassName(subdivs[b], 'wg1subsect')) {
				var ss_text = ' '+elemText(subdivs[b].getElementsByTagName('h5')[0]);
				var ss_id = subdivs[b].id;
				var ss_p = elem('p');
				var ss_label = elem('label');
				var ss_checkBox = elem('input',{'type':'checkbox'});
				ss_checkBox.editLink = lnk;
				ss_p.appendChild(ss_label);
				ss_label.appendChild(ss_checkBox);
				ss_label.appendChild(document.createTextNode(ss_text));
				td.appendChild(ss_p);
				ss_checkBox.correspondingSection = subdivs[b];
				if (ss_id) { ss_checkBox.id = 'check-'+ss_id; }
				if (hasClassName(subdivs[b], 'wg1shown')) {
					ss_checkBox.checked = true;
					ss_checkBox.defaultChecked = true;
				}
				addEvent(ss_checkBox, 'click', function(e) {
					if (!e && window.EVENT) { e = window.EVENT; }
					var obj = (e.target) ? e.target : e.srcElement;
					if (obj.checked) {
						addClassName(obj.correspondingSection, 'wg1shown');
					} else {
						removeClassName(obj.correspondingSection, 'wg1shown');
					}
				});
			}
		}
	}
	subhead.appendChild(cpnl);
}


