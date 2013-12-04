'use strict';
console.log('demo.js Window Loading');
window.onload = function () {
	console.log('demo.js Window Loaded');
	//Create List Container
	var obj = {
		tag: 'ul',
		id: 'demo_list',
		style: {
			width: '200px',
			height: '100px',
			border: '1px solid black'
		}
	};
	var el = Useful.NewElement(obj);
	Useful.AddElementToTop(el, document.body);
	
	//Create List Item
	var obj_item = {
		tag: 'li',
		style: {
			height: '10px'
		},
		innerHTML: 'Hello'
	};
	var item = Useul.NewElement(obj_item);
	Useful.AddElementToTop(el, document.getElementById('demo_list'));

};
