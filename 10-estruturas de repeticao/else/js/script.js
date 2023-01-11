 
 

let x = 10;

while(x > 0) {
   console.log("O x é" + x);
   x = x - 1;
}

let y = 0;

while(y <= 10) {
   console.log(y);
   y = y + 1;
}

for (let i = 0; i < 100; i = i + 3) {
    console.log(`A soma de i com 2 é: ${i + 2}`);
}

let numero = 5;

while(numero < 50) {
   console.log(numero);
   numero += 10;
}

for(let i = 0; i < 10; i ++) {
   console.log(" O i é " + 1);
}

for(let i = 0; i > 0; i --) {
   console.log(" O i é " + 1);
}


let nome = "Astro";

switch(nome) {
   case"Astro":
   console.log("O seu nome é Astro");
   break;

   case "Marcos":
      console.log(" O seu nome é Marcos");
      break;

      default:
         console.log(" O seu nome não é Astro nem Marcos");
         break;
   
}

let s = "";
let a = 3;

while (a != 1) {
   s += toString(a);
   if(a % 2 ==0);
   a = a / 2;
   console.log(" O a é ") ;
}