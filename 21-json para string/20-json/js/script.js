let pessoa = {
   "nome": "Astro",
   "idade": 48,
   "profissao": "Programador",
   "hobbies": ["Video Game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);