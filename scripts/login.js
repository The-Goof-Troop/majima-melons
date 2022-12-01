function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "user" && password == "password"){
alert ("Login successfully");
location.assign("https://the-goof-troop.github.io/majima-melons/index.html")
}
if (username != "user" && password != "password"){
    alert ("wrong credentials");
}
}