window.addEventListener("Keydown", function(e) {
  if(e.key == "q") {
    console.log("Apertou a letra q");
  }else if(e.key == "Enter") {
    console.log("Apertou enter");
  }
});
window.addEventListener("Keyup", function(e) {
  if(e.key =="Enter") {
    console.log("Soltou o enter");
  }
});
