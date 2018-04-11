var eatsPlants = true;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals) ? "omnivores" : (eatsAnimals) ? "canivore" : (eatsPlants) ? "Herbivore" : undefined;
console.log(category);

//OR

/* 
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? "omnivore" :
               eatsPlants ? "herbivore" :
               eatsAnimals ? "carnivore" : undefined;


*/
