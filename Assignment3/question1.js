var grandfather = {
    surname :"Bajaj",
    hometown :"latur",
}



var father = Object.create(grandfather)
var myself = Object.create(father)

console.log(myself)

