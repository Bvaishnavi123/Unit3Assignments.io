var data = [
  {
    name: "Pizza",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzT0FdZtqz_3Pppt6_LQSic6Rg-mKrYwmGw&usqp=CAU",
  },
  {
    name: "Burger",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVoQzl8R5o8Um80-bqXBTYFgLLUljwMa8VA&usqp=CAU",
  },
  {
    name: "Juice",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5N4KfEdodlRodmW_YNpUETECnCMxi6FDVQ&usqp=CAU",
  },
  {
    name: "french fries",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2d8L-sa7jyojzYVNKshglvB55WW5YkQkCg&usqp=CAU",
  },
  {
    name: "ice cream",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS8Z3IHaa6yHWgzGPD-jCfpk4i-o-l71keg&usqp=CAU",
  },
];

// function changefood()
// {
//     let food_item = document.getElementById("food").value;
//     let id = Math.round(Math.random()*5)
//     data.map(function(el)
//     {
//         if(el.name==food_item)
//         {
//             var image = document.createElement("img")
//             image.src = el.url
//             var identity = document.createElement("h5")
//             identity.textContent=id
//             document.getElementById("container").append(image,identity)

//         }
//     })
// }

function empty() {
  document.getElementById("container").style.backgroundImage = "none";
  document.getElementById("container").textContent = "";
}

function food() {
  let status = "open";
  let food_item = document.getElementById("food").value;

  // let screen = document.getElementById("container")

  alert("Your Order Is Added Successfully!!!!");
  // let time = Math.round(Math.random()*5)
  // console.log(time)
  let food_promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (status == "open") {
        let food_item = document.getElementById("food").value;
        let id = Math.round(Math.random() * 5);
        data.map(function (el) {
          if (el.name == food_item) {
            var image = document.createElement("img");
            image.src = el.url;
            image.setAttribute("id", "img");
            var identity = document.createElement("h3");
            identity.textContent = "Order id:" + id;

            document.getElementById("container").append(identity, image);
            resolve("Your Order Is Ready");
          }
        });
      } else {
        reject("Sorry Shop is Closed");
      }
    }, 5000);
  });

  food_promise.then(function (responce) {
    alert(responce);
  });
  food_promise.catch(function (error) {
    console.log(error);
  });
}

// function food()
// {
//     let status = "open"
//     let food_item = document.getElementById("food").value;
//     // let screen = document.getElementById("container")
//     // let id = Math.round(Math.random()*5)
//     alert("Your Order Is Added Successfully!!!!")
//     let time = Math.round(Math.random()*5)
//     // console.log(time)
//     let food_promise = new Promise(function(resolve,reject){
//       setTimeout(function()
//       {
//         if(status=="open")
//         {
//             resolve(food_item)
//         }
//         else{
//             reject("Sorry Shop is Closed")
//         }

//       },time*1000)

//     })

//     food_promise.then(function(responce){
//         console.log(responce)
//     });
//     food_promise.catch(function(error){
//         console.log(error)
//     })

// }
