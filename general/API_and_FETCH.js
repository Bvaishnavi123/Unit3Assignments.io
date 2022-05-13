/*

Stack :
Javscript follows the stack datatype to store data that is last in first out 


Declaration:
var x;


Resassignment:

var name = "pablo";
console.log(name) --> It will give me pablo but
name ="raju";

console.log(name) --> Now it willtake value of name as raju


Mutability:


All primitive data-types are Immutable i.e. we can not change the values of that thing
for example :
var name ="pablo"
name[0]="k"
console.log(name);

All non-primitive data-types are mutable  i.e. we can change values of that thing

for example:
var arr =[1,2,3,4];
arr[0]=999;
console.log(arr)



*/

// PROMISES EXAMPLE OF HOSPITAL

// let queue = ["Pablo", "Raju", "Shyam", "Babu bhaiyaa"];

// function Register() {
//   let name = document.getElementById("name").value;

//   queue.push(name);

//   let message = `${name} your registration is successfull, cheers!`;

//   alert(message);

//   let promise = new Promise(function (resolve, reject) {
//     let x = setInterval(function () {
//       if (queue[0] === name) {
//         resolve(`${name} its your turn now`);
//         clearInterval(x);
//       }
//     }, 1000);
//   });

//   promise.then(function (res) {
//     console.log("res:", res);
//   });
// }

// function Vaccination_InProgress() {
//   if (queue.length === 0) {
//     clearInterval(id);
//   }
//   queue.shift();
//   console.log("queue:", queue);
// }

// let id = setInterval(Vaccination_InProgress, 2000);


// APT and fetch using .then and .catch


// let data = fetch("https://fakestoreapi.com/products");
// data.then(function(res){
//     return res.json()
// })
// .then(function(responce){
//     console.log(responce)
// })
// .catch(function(error)
// {
//     console.log(error)
// })





// APT and fetch using async and await
async function myfunction() {

    try {
        let data = fetch("https://fakestoreapi.com/products");

        let badli = await (await data).json()
        console.log(badli)
    } catch (error) {
        console.log(error)
    }
 
}
myfunction()



