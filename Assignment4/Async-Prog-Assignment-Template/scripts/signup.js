document.querySelector("form").addEventListener("submit", myfunction);
var data = JSON.parse(localStorage.getItem("alldata"))||[];

// console.log(data)
function makeobj(n, num, e, p) {
  this.name = n;
  this.number = num;
  this.email = e;
  this.password = p;
}
function myfunction(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var number = document.querySelector("#number").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  if (name == "") {
    alert("Enter your Name");
  } else if (number == "") {
    alert("Enter your Number");
  } else if (email == "") {
    alert("Enter your Email");
  } else if (password == "") {
    alert("Enter your Password");
  } else {
    var object = new makeobj(name, number, email, password);
    //    console.log(object)
    data.push(object);
    // console.log(data)
    localStorage.setItem("alldata", JSON.stringify(data));

    window.location.href = "login.html";
  }
}
