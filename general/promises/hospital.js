// .........................Create a promise syntax and working............................
// A)We have to handle resolve with then
// B)We have to handle reject with catch

// let pass = true

// let mypromise = new Promise(function(resolve,reject)
// {
//     if(pass == true)
//     {
//         resolve("You get laptop")
//     }
//     else{
//         reject("You get chappal")
//     }

// });

// mypromise.then(function(response)
// {
//     console.log(response)
// })

// mypromise.catch(function(error){
//   console.log(error)
// })

// ............................///////////////////////........................................
let queue = ["pablo", "raju", "babubhaiya", "shaym"];
function Register() {
  let name = document.querySelector("#name").value;
  queue.push(name);
  let meassage = `${name} Your Registration is Successfull`;
  alert(meassage);

  let token_promise = new Promise(function (resolve, reject) {

    let y = setInterval(function()
    {
        if (queue[0] == name) {
            resolve(`${name} its your turn now`);
            clearInterval(y)
          }
    })
    
       
    
    
  });

  token_promise.then(function(responce) {
    alert(responce)
});

}

function vaccination_in_progress() {
    if(queue.length==0)
    {
        clearInterval(x)
    }
  
   console.log(queue)
   queue.shift();
  
}

// vaccination_in_progress()
var x = setInterval(vaccination_in_progress,2000)
