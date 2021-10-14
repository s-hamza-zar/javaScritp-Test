var website= document.querySelector("#Website");
var userName = document.querySelector("#UserName");
var email = document.querySelector("#Email");
var phone = document.querySelector("#Phone");


function request(){
  

  fetch("https://jsonplaceholder.typicode.com/users")
    .then (function (res) {
      return res.json()})

    .then(function(response) {
      console.log(response); 

        website.innerHTML = "Name : " + response[0].website;
        userName.innerHTML = "User Name : " + response[0].username;
        email.innerHTML = "Email : " + response[0].email;
        phone.innerHTML = "Phone : " + response[0].phone;

    })
}