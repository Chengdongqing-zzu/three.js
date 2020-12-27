var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
			labels : ["2019-11-11","2019-12-13","2019-02-20","2020-04-22","2020-05-24"],
			datasets : [
				{
					label: "步行速度（m/s)",
					fillColor : "rgba(48, 164, 166, 0.2)",
					strokeColor : "rgba(48, 164, 255, 1)",
					pointColor : "rgba(48, 164, 255, 1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(48, 164, 255, 1)",
					data : [55,63,72,77,85]
				}
			]

		};
		

window.onload = function(){
	var chart= document.getElementById("line-chart").getContext("2d");
	window.myLine = new Chart(chart).Line(lineChartData, {
		responsive: true
	});
	
};