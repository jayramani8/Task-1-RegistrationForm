document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();  
    myform();
});

    function myform() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;
    var ragister = document.getElementById("ragister");
   
    
    letters = /^[a-zA-Z ]*$/;
    emailLetters = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    phoneletters = /^[0-9]*$/;
    range = /^\d{10}$/;
    passwordLatters =/(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})/;

    
    
    if(username == ""){
        document.getElementById("uName").innerHTML="Username is required";
    }else if(!username.match(letters)){
        document.getElementById("uName").innerHTML="Only alphabate is required";
    }else{
        document.getElementById("uName").innerHTML="";
    }

    if(email == ""){
        document.getElementById("eMail").innerHTML="email is required";
    }else if(!email.match(emailLetters)){
        document.getElementById("eMail").innerHTML="enter valid email";
    }else{
        document.getElementById("eMail").innerHTML="";
    }

    if(phoneNumber == ""){
        document.getElementById("phNumber").innerHTML="phone Number is required";
    }else if(!phoneNumber.match(phoneletters)){
        document.getElementById("phNumber").innerHTML="only number is required";
    }else if(!phoneNumber.match(range)){
        document.getElementById("phNumber").innerHTML="only 10 digit allow";
    }else{
        document.getElementById("phNumber").innerHTML="";
    }

    if(password == ""){
        document.getElementById("pass").innerHTML="password is required";
    }else if(!password.match(passwordLatters)){
        document.getElementById("pass").innerHTML="create strong password";
    }else{
        document.getElementById("pass").innerHTML="";  
    }
    var span = document.querySelectorAll("span");
    
   for(let i=0;i<=span.length-1;i++){
       var spanDetails = span[i];
       
    }
    if(spanDetails.textContent===""){
        alert("your data is submitted");
        location.reload();
   }
}