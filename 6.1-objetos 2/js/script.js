let carro = {
    portas: 2,
    portamalas: "200l",
    motor: 2.0,
}
let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}
console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);

//Também podemos verificar quais as chaves cada objeto possui, Veja o exemplo abaixo:

let obj = {
 "chave1": 1,
 "chave2": 2,
 "chave3": 3,
}
console.log(obj);
console.log(Object.keys(obj));

//Mutação: Um objeto pode herdar todas as características do outro, viraqndo uma referência ao mesmo. Veja o exemplo abaixo:

let pessoa = {
    nome: "Astro"
}
let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Astro"
}
console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2 ="Pedro";
console.log(pessoa.nome);
pessoa.nome = "Maria";
console.log(pessoa2.nome);