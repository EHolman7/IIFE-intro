//console.log("Linked to planets.js");
var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "netune"];

	oldSolarSystem.getPlanets = function(){
		return planets;
	};

	oldSolarSystem.setPlanets = function(newPlanet){
		planets.push(newPlanet);
	};

		return oldSolarSystem;
})(SolarSystem || {});