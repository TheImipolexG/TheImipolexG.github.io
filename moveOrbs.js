
function removeTrigger() {
	var oldButton = document.getElementById("theTrigger");
	oldButton
		.removeAttribute("onclick")
		;

/* Now remove the trigger circle with an animation */
	var button = d3.select("#theTrigger");
	button
		.transition("removeButton")
		.duration(5000)
		.attr("r",0)
		.attrTween("transform",function(d,i,a){return d3.interpolateString("rotate(0)","rotate(360)")})
		.remove()
	;
}

function animateOrbs() {
	var orbs    = d3.select("#theWorld").selectAll(".orbs");
	/* Shift the color of the orbs */
	orbs
		.transition("colorShift")
		.duration(function(d,i){return 2000+8000*Math.random()})
		.attr("fill","red")
		;
	/* Shift the size of the orbs */
	orbs
		.transition("shrinkOrbs")
		.duration(function(d,i){return 2000+8000*Math.random()})
		.attr("r",20)
		.transition("growOrbs")
		.duration(2000)
		.attr("r",50)
		;
	/* Shift the position of the orbs and spirals*/
	orbs
		.transition("rotateOrbs")
		.duration(function(d,i){return 2000+8000*Math.random()})
		.attrTween("transform",function(d,i,a){return d3.interpolateString("rotate(0)","rotate(-360)")})
		;
	/* Now shift the color back */
	orbs
		.transition("delayOnly")
		.duration(11000)
		.transition("recolorOrbs")
		.duration(2000)
		.attr("fill","steelblue")
		.transition("fadeOut")
		.duration(2000)
		/*.attrTween("stroke",function(d) {return d3.interpolateString("white","steelblue")}) */
		/*.attr("stroke-dasharray",function(d) {return d3.interpolateString("10,3","0,0")}) */
		.attrTween("fill-opacity",function(d) {return d3.interpolateNumber(1,0)})				
		.attrTween("opacity",function(d) {return d3.interpolateNumber(1,0)})
		.remove()
		;		
}
