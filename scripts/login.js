function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
if ( username == "user" && password == "password"){
alert ("Login successfully");
location.assign("https://the-goof-troop.github.io/majima-melons/index.html")
}
if ( username == "manager" && password == "manager_password"){
    alert ("Login successfully");
    location.assign("http://127.0.0.1:5500/pages/manager.html")
    }
    else{
        alert ("wrong credentials");
    }
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ( username == "user" && password == "password"){
        alert ("Login successfully");
        window.location.assign("../index.html")
    }
    if (username != "user" && password != "password"){
        alert ("wrong credentials");
    }
}