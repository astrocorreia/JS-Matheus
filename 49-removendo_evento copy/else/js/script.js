 let btn1 = document.querySelector("button");
 let btn2 = document.querySelector("button");

 function msg() {
   console.log("Clicou em mim!");
 }

 btn1.addEventListener("click", msg); 
    
 btn2.addEventListener("click", function() {
   btn1.removeEventListener("click", msg);
});



