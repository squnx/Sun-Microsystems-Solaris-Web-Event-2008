/* ###########################################################################

GLOBAL ASSETS RELEASE v2.7.1

MEDIA-SHELL.JS v1.0

BUILD DATE: 20070531

COPYRIGHT SUN MICROSYSTEMS INC. 2007

CONTACT webdesign -at- sun.com WITH ANY QUESTIONS

########################################################################### */

if (typeof window.onload != "function") {
    window.onload = function() {
        media_setup_all();
    };
} else {
    var oldonload = window.onload;
    window.onload = function() {
        media_setup_all();
    };
}

function media_setup_all() {
    media_setup_closeLink();
}

function media_setup_closeLink() {
    var wrap = document.getElementById('pagewrap');
    var body = document.getElementsByTagName('body')[0];
    if (!wrap || !body.className || !body.className.match(/a0v3/)) { return; }
    var p = document.createElement('p');
    var a = document.createElement('a');
    var img = document.createElement('img');
    var text = document.createTextNode('Close');

    a.appendChild(img);
    a.appendChild(text);
    p.appendChild(a);

    img.src = "/im/ic_close_win.gif";
    img.alt = "";
    p.id = "close-win";
    a.href = "#";
    a.onclick = function() { window.close(); };

    wrap.appendChild(p);

    wrap=a=p=img=text=null;
}

