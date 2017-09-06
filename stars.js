var SolarSystem = (function(oldSolarSystem){
	const stars = ["sirius", "vega", "polaris", "altair", "sun"];
	const constellations = ["orion", "taurus", "ursa major", "ursa minor", "scorpius"]

	oldSolarSystem.getStars = function(){
		return stars;
	};

	oldSolarSystem.addStars = function(newStar){
		stars.push(newStar);
	};

	oldSolarSystem.zapStars = function(deadStar){
		stars.pop(deadStar);
	};

	oldSolarSystem.getConstellations = function(){
		return constellations;
	};

	oldSolarSystem.addConstellation = function(newConstellation){
		constellations.push(newConstellation);
	};

		return oldSolarSystem;
})(SolarSystem || {});