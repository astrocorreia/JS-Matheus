

/*var nome = "Astro";
console.log(nome);
console.log(typeof nome);

var numero = 25;
console.log(numero);
console.log(typeof numero);

var verdadeiro = true;
console.log(verdadeiro);
console.log(typeof verdadeiro);

let idade = 18

if(idade >= 18) {
   console.log("Pode entrar" )
}*/
const nome = "Astro";

 if(nome === "Astro") {
   console.log(`Olá ${nome}, tudo bem?`)
 }

const num = 18;

console.log(Math.pow(2,2));
console.log(Math.pow(3,2));
console.log(Math.pow(num,2));

let vel = 90;

if ( vel <= 80) {
   console.log(" Pode passar!");

}else {
   console.log("Multado!")
}


let idade = 19;
let cnh = false;


if(idade >=18 && cnh == true) {
   console.log("Pode dirigir, possui cnh cnh!")
}
else if(idade >=18 && cnh == false) {
   console.log(" Não pode dirigir, mas pode tirar a cnh")
   
}else {
   console.log("Não dirige")
}

let i = 0;

while(i <= 10) {
   console.log(i);
   i++;
}

for(let i = 100; i  >=50; i--) {
   console.log(i);
}

for(let i = 0; i <= 50; i++) {
   if(i % 2 == 0) {
      console.log(`O número ${i} é par`);

   }else {
      console.log(`O número ${i} é impar`);
   }
}