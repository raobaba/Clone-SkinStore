document.querySelector("form").addEventListener("submit", registration)
var userDATA = JSON.parse(localStorage.getItem("userInfo")) || [];
function registration(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value
  var email = document.querySelector("#email").value
  var confirm_email = document.querySelector("#cemail").value
  var password = document.querySelector("#password").value
  var confirm_password1 = document.querySelector("#psw-repeat").value
  var phone_num1 = document.querySelector("#number").value
  var userInfo = {
    name: name,
    email: email,
    confirm_email: confirm_email,
    password: password,
    confirm_password: confirm_password1,
    phone_num: phone_num1,
  }
  userDATA.push(userInfo);
  localStorage.setItem("userInfo", JSON.stringify(userDATA))
  alert("Registration Successfully Done")
  window.location.href = "login.html"
}

