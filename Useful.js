'use strict';
//var Useful = (typeof Useful == 'object') ? Useful : {};
var Useful = {};
console.log('Useful.js by Michael T. Harbach, BSCE (Open source code available at URL: https://github.com/harbhub/Useful');
if (typeof window == 'object') console.log('Browser');
if (typeof process == 'object') console.log('Node');

//General code

//Node specific code

//Browser specific code
Useful.AddElementToTop = function (el, par) {
	//el = the element to add
	//par = the parent element that the el is added to
	par.insertBefore(el, par.firstChild);
};

Useful.AddElementToBottom = function (el, par) {
	//el = the element to add
	//par = the parent element that the el is added to
	par.appendChild(el);
};

Useful.NewElement = function (props) {
	//props.tag = the tag/type of html element to create (div, input, etc)
	//props = the properties of the new element (src, style, etc)
	//el = the element to create
	var el = document.createElement(props.tag);
	var keys = Object.keys(props);
	if (keys.length !== 0) {
		for (var i = 0; i < keys.length; ++i) {
			if (keys[i] == 'style') {
				var keys_style = Object.keys(props.style);
				for (var j = 0; j < keys_style.length; ++j) {
					el.style[ keys_style[j] ] = props.style[ keys_style[j] ];
				};
				continue;
			};
			el[ keys[i] ] = props[ keys[i] ];
		};
	};
	return el;
};

//Useful environment detection
if (typeof window == 'object') {
	Useful.isBrowser = true;
}

if (typeof process == 'object') {
	Useful.isNode = true;
}

if (typeof localStorage == 'object') {
	Useful.hasLocalStorage = true;
}
