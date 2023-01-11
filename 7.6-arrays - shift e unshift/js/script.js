let carros = ["BMW", "AUDI", "VW", "FIAT"];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift("VOLVO");
console.log(carros);
//Caso eu queira acessar o segundo elemento do array:
console.log(carros[1]);