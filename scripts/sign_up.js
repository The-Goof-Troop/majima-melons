function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function signUp(){
    //get all the data from the form
    email = document.getElementById("email").value
    username = document.getElementById("username").value
    if(document.getElementById("password1").value === document.getElementById("password2").value)
        password = document.getElementById("password1").value    
    else
        return
    
    if(!validateEmail(email))
        return

    console.log(`${email}\n${username}\n${password}`)
}

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}