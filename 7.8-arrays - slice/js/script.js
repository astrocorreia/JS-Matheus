//Para pegar um determinado elemento, tenho que colocar sempre um número a mais ou o número sequente, pois, a busca para no número posterior exemplo, se eu quero o 4 tenho que colocar 4 e 5 e se eu quero 4 e 5 tenho que colocar 4 e 6, ele sempre irá parar no número da frente ao que eu quero.

let nums = [0,1,2,3,4,5,6,7,8,9];
console.log(nums.slice(4,5));
console.log(nums.slice(4,6));

//Obs- Se eu não determino um índice final, ele irá até o fim do Arrays, ou seja, partindo do número que coloquei no caso o 2 irá até o último que é o 9.

console.log(nums.slice(2));

//Tbm posso buscar os dois últimos números do Array por exemplo, a busca irá ocorrer pelo final, basta eu colocar o número negativo:

console.log(nums.slice(-2));

//Tbm posso por exemplo, começar do índice 3 e tirar os dois últimos números por ex:
console.log(nums.slice(3,-2));