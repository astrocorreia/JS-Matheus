function  cumprimento() {
   console.log("Hello World!");
}
cumprimento();

function imprimirIdade(idade) {
   console.log(`Você tem ${idade} anos`);
}
imprimirIdade(39);
imprimirIdade(49);
imprimirIdade(59);

function dataNascimento (data) {
   console.log(`Você nasceu em ${data} de Novembro`);

}
dataNascimento(28);
dataNascimento(29);
dataNascimento(30);

function soma(a, b) {
   return (a + b);
}
console.log(soma(25, 35));
console.log(soma(45, 55));
console.log(soma(65, 75));

function numeroAleatorio(num) {
   return Math.floor(Math.random()* num) + 1;
}
console.log(numeroAleatorio(10));
console.log(numeroAleatorio(80));
console.log(numeroAleatorio(100));

function idade(num) {
   if(num >= 18){
   console.log("Já pode dirigir");
}else {
   console.log("Não pode dirigir");
}
}
idade(19);
idade(17);


function verificaTipoDeDado(dado) {
   if(typeof dado ==="string") {
   console.log("Este dado é uma String");

}else if (typeof dado === "number") {
   console.log("Este dado é um number");
}else if(typeof dado ==="boolean") {
   console.log("Este dado é um boolean");
}

}
verificaTipoDeDado(true);
verificaTipoDeDado(23);
verificaTipoDeDado("teste")

function numeroPos(numNegativo) {
   return Math.abs(numNegativo);
}
console.log(numeroPos(-13));
console.log(numeroPos(5));
console.log(numeroPos(-34.4));

function checarTamanhoTexto (texto) {
   if(texto.length > 10) {
      console.log("Texto muito longo");

   }else {
      console.log("Texto dentro do limite");
}
      console.log(texto.length);
}
checarTamanhoTexto ("teste");
checarTamanhoTexto ("Vamos testar se funciona");
checarTamanhoTexto ("+10");


//Podemos fazer essa função das duas meneiras abaixo:
function potencia(a, b) {
   return Math.pow(a, b);
}
console.log(potencia(2,2));
console.log(potencia(3,2));
console.log(potencia(4,4));
console.log(potencia(5,2));

function potencia(a, b) {
   return (a** b);
}
console.log(potencia(5,2));
console.log(potencia(6,2));
console.log(potencia(2,4));
console.log(potencia(3,2));

 function imprimePar(num) {
   for(let i = num; i >=0; i--) {
      if(i % 2 == 0) {
         console.log(i);
      }
   }
 }
 imprimePar(15);
 imprimePar(80);
 imprimePar(45);