var obj = {
    nome: "Astro",
    idade: 48,
    profissão: "Programador",
    estaTrabalhando: true,
};
console.log(obj);
console.log(typeof obj);
//Também podemos acessar cada propridade de um objeto, colocando ponto e a propriedade como no exemplo abaixo:

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissão);
console.log(obj.estaTrabalhando);

//Ele também pode funcionar como uma variável funciona, pegando as propriedades e transformando em textos e tbm concatenalas:

console.log("O meu nome é " + obj.nome);

//Também podemos mudar o valor das propriedades ou criar uma nova propriedade dentro do objeto:

obj.nome = "Pedro";
console.log(obj.nome);

console.log(obj);
obj.graduação = true;
console.log(obj);


let cachorro = {
    patas:4,
    nome:"Shark"
};
console.log(cachorro.patas);
console.log(cachorro.nome);


//[] == array
//{} == objeto

let pessoa = {
nome: "Astro",
idade: 48,
profissão: "Programador",
}
console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);
pessoa.casado = true;
console.log(pessoa.casado);