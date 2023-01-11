function soma(a,b) {
   if(a === undefined || b === undefined) {
      console.log("Esta função precisa ter dois argumentos");
   }else {
      return a + b;
   }
}
console.log(soma(1));
console.log(soma(1,2));

function saudacao(nome, idade) {
   if(idade === undefined) {
      console.log("Olá " + nome);
   }else {
      console.log("Olá " + nome + " você tem " + idade + " anos");
   }
}
saudacao("Astro");
saudacao("Pedro", 26);

//Argumentos com valor Default

function potencia (base, exp = 2) {
   return Math.pow(base, exp);
}
console.log(potencia(2));
console.log(potencia(2, 2));
console.log(potencia(2, 3));