document.querySelector("form").addEventListener("submit", myfunction);
var sigupdata = JSON.parse(localStorage.getItem("alldata"));
console.log(sigupdata);
function myfunction(event) {
  event.preventDefault();

  var email_data = document.querySelector("#email").value;
  var password_data = document.querySelector("#password").value;
  var flag = false;
  for (var i = 0; i < sigupdata.length; i++) {
    if (
      sigupdata[i].email == email_data &&
      sigupdata[i].password == password_data
    ) {
    //   alert("Log In Successfully");
       flag=true

      
     
    } 
}
if(flag==true)
{
    alert("Login Successfully")
    window.location.href = "index.html";
}
else{
    alert("You Have to SignUp First")
    window.location.href = "signup.html";

}
 
  // console.log(email,password)
}
