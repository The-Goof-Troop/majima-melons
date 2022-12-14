function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ( username == "user" && password == "password"){
        alert ("Login successfully");
        location.assign("../index.html")
    }
    else if ( username == "manager" && password == "manager_password"){
        alert ("Login successfully");
        location.assign("../pages/manager.html")
    }
    else{
        alert ("wrong credentials");
    }
}
