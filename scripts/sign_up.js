
function validate(){
    let email = document.getElementById("email").value
    let username = document.getElementById("username").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email=="")
		{
			alert("Please enter your user email");
		}
    else if (!filter.test(email))
		{
			alert("Invalid email");
        }
    else if ( username == "")
    {
        alert("Please Enter a Username")
}
    else if (password1 == "")
    {
        alert("Please enter password")
    }
     else if(password2 == "")
     {
        alert("Please confirm password")
    }
     else if(document.getElementById("password1").value.length > 0 && document.getElementById("password1").value.length < 8)
     {
        alert("Password must be more then 8 characters")
    }
     else if(document.getElementById("password1").value.length > 24)
     {
        alert("Password must be less then 24 characters")
    }
     else if(document.getElementById("password2").value != document.getElementById("password1").value)
    {
        alert("Passwords do not match")
    }
    else
    {
        alert("You Have Made An Account")
    }
    ;
}
