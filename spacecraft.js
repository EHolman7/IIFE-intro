//console.log("Linked to spacecraft.js");
var SolarSystem = (function(oldSolarSystem){
	const spacecraft = ["space shuttle", "rocket", "millennium falcon", "tie fighter", "x-wing starfighter", "star destroyer"];

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	};

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecraft.push(newSpacecraft);
	};

		return oldSolarSystem;
})(SolarSystem || {});