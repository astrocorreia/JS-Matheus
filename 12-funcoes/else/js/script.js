function imprimirNoConsole() {
   console.log("Olá Mundo!");
}
imprimirNoConsole( );

//Função com Parâmetro

function imprimirNumero(num) {
   console.log("O número é:" + num);
}
imprimirNumero(2);
//obs=Podemos chamar ou invocar várias vezes numa mesma função
imprimirNumero(4);
imprimirNumero(6);
imprimirNumero(8);
imprimirNumero(10);
imprimirNumero(12);

const numeroAleatorio = function() {
   console.log(Math.random());
}
numeroAleatorio ();
numeroAleatorio ();

const soma = function(a, b) {
   return a + b;
}
console.log(soma (3, 5));

const saudacao = function(nome) {
   if(nome == "Astro") {
      return "Olá Astro!";
   }
}
console.log(saudacao("Astro"));

function multiplicarTresNumeros (x, y, z) {
   return x*y*z;
}
console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,8);
console.log("O valor de mult é " + mult);

function podeDirigir(idade, cnh) {
   if(idade >= 18 && cnh == true) {
      console.log("Pode dirigir");
   }else {
      console.log("Não pode dirigir");
   }

}
console.log(podeDirigir(19, true));
console.log(podeDirigir(25, true));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19, 1));
console.log(podeDirigir(17, false));


let n = 10;


const numero = function() {
   let n = 25;

   console.log(n);
}
console.log(n);

let y = 10;

function imprimir() {
   let y = 150;

   console.log(y);
}
imprimir();
console.log(y);

let x = 10;

if(x > 5) {
   let x = 20;
   x++;
   console.log(x);
}
console.log(x);

let a = 10;

function multiplicar(x,y) {
   let a = x * y;
   

   if(a > 10) {
      let a = 0;
      a++;
      console.log(a);
   }
   console.log(a);
}
console.log(a);
multiplicar(3,7);



let b = 25;

function dividir (z,q) {
   let b = z / q;

   if(b > 10) {
      let b = 0;
      b++;
      console.log(b);
   }
   console.log(b);
}
console.log(b);

dividir(15,5);


