const logForm = document.getElementById("loginForm");
logForm.addEventListener("submit", myFunction);
function myFunction(){  
 // document
 // .getElementById("loginForm")
//.addEventListener("submit", function (event) {
   event.preventDefault();
   const username = document.getElementById("lusername").value;
   const password = document.getElementById("lpassword").value;

   const user = localStorage.getItem(username);

   if (user) {
     const parsedUser = JSON.parse(user);
     if (parsedUser.password === password) {
       //localStorage.setItem("user", JSON.stringify(parsedUser));
       window.location.href = "index.html";
     } else {
       alert("Incorrect password");
     }
   } else {
     alert("User not found");
   }
 };
