//console.log("Linked to main.js");
// var SolarSystem = (function(oldSolarSystem){
// 	const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "netune"];

// 	oldSolarSystem.getPlanets = function(){
// 		return planets;
// 	};

// 	oldSolarSystem.setPlanets = function(newPlanet){
// 		planets.push(newPlanet);
// 	}

// 	const spacecraft = ["space shuttle", "rocket", "millennium falcon", "tie fighter", "x-wing starfighter", "star destroyer"];

// 	oldSolarSystem.getSpacecraft = function(){
// 		return spacecraft;
// 	};

// 	oldSolarSystem.setSpacecraft = function(newSpacecraft){
// 		spacecraft.push(newSpacecraft);
// 	}

// 	return oldSolarSystem;
// })(SolarSystem || {});

SolarSystem.setPlanets("Planet X")

let myPlanets = SolarSystem.getPlanets();
console.log("myPlanets", myPlanets);

let mySpacecrafts = SolarSystem.getSpacecraft();
console.log("mySpacecrafts", mySpacecrafts);

let myStars = SolarSystem.getStars();
console.log("myStars", myStars);

let myConstellations = SolarSystem.getConstellations();
console.log("myConstellations", myConstellations);
