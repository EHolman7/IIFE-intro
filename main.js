console.log("Linked to main.js");
// function moreCrap (){
// 	console.log("hi");
// }

// let Something = (function(oldSomething){
// 	oldSomething.niceFunction = function(){
// 		console.log("I'm a nice function");
// 	}

// 	return oldSomething;

// })(Something || {});

var SolarSystem = (function(oldSolarSystem){
	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "netune"];

	oldSolarSystem.getPlanets = function(){
		return planets;
	};

	oldSolarSystem.setPlanets = function(newPlanet){
		planets.push(newPlanet);
	}

	const spacecraft = ["space shuttle", "rocket", "millennium falcon", "tie fighter", "x-wing starfighter", "star destroyer"];

	oldSolarSystem.getSpacecraft = function(){
		return spacecraft;
	};

	oldSolarSystem.setSpacecraft = function(newSpacecraft){
		spacecraft.push(newSpacecraft);
	}

	return oldSolarSystem;
})(SolarSystem || {});

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);
let mySpacecrafts = SolarSystem.getSpacecraft();
console.log("mySpacecrafts", mySpacecrafts);
