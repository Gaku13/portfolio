
/* GAKU13 main.js */

// chart.js options
/*Chart.defaults.global = {
	
}
*/// chart.js datas
var htmlSkill = [
	{
		value: 85,
		color:'#F7464A'
	},{
		value: 15,
		color: '#ffffff'
	}
]
var cssSkill = [
	{
		value: 90,
		color:'#3498DB'
	},{
		value: 10,
		color: '#ffffff'
	}
]
var jsSkill = [
	{
		value: 50,
		color:'#9B59B6'
	},{
		value: 50,
		color: '#ffffff'
	}
]
var codaSkill = [
	{
		value: 90,
		color:'#1ABC9C'
	},{
		value: 10,
		color: '#ffffff'
	}
]
var sketchSkill = [
	{
		value: 80,
		color:'#2C3E50'
	},{
		value: 20,
		color: '#ffffff'
	}
]
var psSkill = [
	{
		value: 30,
		color:'#2980B9'
	},{
		value: 70,
		color: '#ffffff'
	}
]
var aiSkill = [
	{
		value: 30,
		color:'#E74C3C'
	},{
		value: 70,
		color: '#ffffff'
	}
]
var fwSkill = [
	{
		value: 70,
		color:'#F39C12'
	},{
		value: 30,
		color: '#ffffff'
	}
]
var dwSkill = [
	{
		value: 70,
		color:'#27AE60'
	},{
		value: 30,
		color: '#ffffff'
	}
]
var flashSkill = [
	{
		value: 20,
		color:'#C0392B'
	},{
		value: 80,
		color: '#ffffff'
	}
]

var options = {
	animationEasing: 'easeOutQuart',
	showScale: false,
	scaleShowLabels: false,
	showTooltips: false,
	responsive: true,
	percentageInnerCutout : 60,
	maintainAspectRatio: true,
	onAnimationProgress: function(){},
	onAnimationComplete: function(){},
}


// fire wi loading
$(function () {


	// skill charts
	var ctx = document.getElementById('my-html').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(htmlSkill, options);
	
	var ctx = document.getElementById('my-css').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(cssSkill, options);
	
	var ctx = document.getElementById('my-js').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(jsSkill, options);
	
	var ctx = document.getElementById('my-coda').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(codaSkill, options);
	
	var ctx = document.getElementById('my-sketch').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(sketchSkill, options);
	
	var ctx = document.getElementById('my-ps').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(psSkill, options);
	
	var ctx = document.getElementById('my-ai').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(aiSkill, options);
	
	var ctx = document.getElementById('my-fw').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(fwSkill, options);
	
	var ctx = document.getElementById('my-dw').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(dwSkill, options);
	
	var ctx = document.getElementById('my-flash').getContext('2d');
	window.myDoughnut = new Chart(ctx).Doughnut(flashSkill, options);
	

});

