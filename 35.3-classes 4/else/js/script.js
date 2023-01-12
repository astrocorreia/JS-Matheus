function Cachorro(raca, patas, cor) {

    
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    }
    Cachorro.prototype.latir = function() {
        console.log("Au au");
}
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu");
}


let husky =  new Cachorro("Husky", 4, "Preta");

husky.latir();
husky.uivar();