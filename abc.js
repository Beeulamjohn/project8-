function  validateForm()
{
    var name=document.myform.name.value;
    var email=document.myform.email.value;
    var username=document.myform.username.value;
    var password=document.myform.password.value;
    var repeatpassword=document.myform.repeatpassword.value;
    if(name==null||name=="")
{
alert("name can't be blank");
return false;
}
elseif(password.length<6)

{
alert("password must be at least 6 characters long.");
return false;
}


{
return true;
}
}
