


class Cachorro {
    constructor(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    }
    
}

let labrador =  new Cachorro("Labrador", 4, "Preta");

console.log(labrador);
// Também podemos acrescentar metodos e propriedades numa class, somente via prototype como no exemplo abaixo:

class Cao {
    constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
    }
    latir() {
        console.log("Au au");
    }
    
}
 Cao.prototype.patas = 4
let pincher =  new Cao("Pincher", "Preta");

console.log(pincher.patas);

pincher.latir();