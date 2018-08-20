//Array one will be a cooking method
var cooking= [
"steamed",
"fried",
"raw",
"stir fried",
"deep fried",
"smoked"
];

//Array two will be a type of food
var type= [
"spaghetti",
"seafood",
"steak",
"hamburger",
"curry",
"hot dog",
"chicken",
"rice",
"human",
"pork",
"bread",
"potato"
];

//Make the computer choose a food and a way it is cooked

var randomOne= Math.floor(Math.random()*cooking.length);
var randomTwo= Math.floor(Math.random()*type.length);
window.alert(cooking[randomOne]+ " "+ type[randomTwo]);