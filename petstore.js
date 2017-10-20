
/**
 * This function should calculate the total amount of 
 pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food 
 (in kilograms) eaten by the animals each week
 * 				
 * @return the total amount of pet food that should be 
 ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
   var foodNextWeek = numAnimals * avgFood;
   if ( numAnimals < 0 || avgFood < 0 
        || (isNaN(numAnimals) || (isNaN(avgFood)) ) )
   {
    return console.log(-1);
   }
   else
   {
    return console.log("In next week we should order: " 
        + foodNextWeek + ' kilos of food');
}
}

calculateFoodOrder(10, -2);

/**
 mostPopularDays: This function determines which day 
 of the week had the most number of people visiting 
 the pet store. If two or more days are tied for the 
 highest amount of traffic, an array containing the 
 days (in any order) should be returned. If the input 
 is null or an empty array, the function should return 
 null. The input is an array of Weekday objects, which 
 are created using the prototype function defined 
 toward the bottom of petstore.js. This function should 
 return a string containing the name of the most popular 
 day of the week if there is only one most popular day, 
 and an array containing the names (as strings) of the 
 most popular days if there are more than one that are 
 most popular.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */


function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    if (week === null || week.length === 0 ) {
        return null
    }

    var result = week[0].traffic, 
        biggestTraffic = [];

    for (var i = 0; i < week.length; i++) {
        if (week[i].traffic == result) {
            result = week[i].traffic;
            biggestTraffic.push(week[i].name);
        }
        else if (week[i].traffic > result) {
            result = week[i].traffic;
            biggestTraffic = [];
            biggestTraffic.push(week[i].name)
        }

    }
     return "Biggest traffic was on " + biggestTraffic;
}



/**
 createAnimalObjects: Given three arrays of equal 
 length containing information about a list of 
 animals – where names[i], types[i], and breeds[i] 
 all relate to the same, single animal – this 
 function should return an array of Animal objects 
 constructed from the information provided in the 
 arrays. The parameter names represents the array of 
 the animals’ names; types represents the array of 
 the animals’ types (e.g. "Dog", "Cat", "Bird"); and 
 breeds represents the array of the animals’ breeds. 
 This function should return an array of Animal objects 
 (which you can create using the prototype function at 
 the bottom of petstore.js), each of which contains the 
 animal’s information, or an empty array if the arrays’ 
 lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
    for (var i = 0; i < names.length; i++) {
        if (i === 0) {
            var obj0 = new Animal(names[0],types[0], breeds[0]);
        }
        if (i === 1) {
            var obj1 = new Animal(names[1],types[1], breeds[1]);
        }
        if (i === 2) {
            var obj2 = new Animal(names[2],types[2], breeds[2]);
        }
    }
    return [obj0, obj1, obj2];
}

console.log(createAnimalObjects(
    ['Merry', 'John', 'Jilly' ], 
    ['dog', 'cat', 'cat' ], 
    ['vucjak', 'sijamska', 'obicna'] ) );




/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;    
}

//Weekday.prototype.ArrayOfObjects = [];


var monday = new Weekday('Monday', 250);
var tuesday = new Weekday('Tuesday', 160);
var wednesday = new Weekday('Wednesday', 190);
var thursday = new Weekday('Thursday', 120);
var friday = new Weekday('Friday', 190);

var wholeWeek = [monday, tuesday, wednesday, thursday, friday];

console.log( mostPopularDays(wholeWeek) );







/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */




function Animal (name, type, breed) {
    this.name = name;
    this.type = type;
    this.breed = breed;

}










//animal1.addObjectsToList();
//animal2.addObjectsToList();
//animal3.addObjectsToList();
//console.log(animal2.readAnimalList());


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

