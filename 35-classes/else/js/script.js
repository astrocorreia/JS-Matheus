let cachorro = {
    raca: "SRD,"
}
let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao.raca);


let cao = {
    patas: 4,
    raca: "SRD",
    latir: function() {
        console.log("Au au");
    }
}

let labrador = Object.create(cao);

labrador.latir();

labrador.raca = "Labrador";

console.log(labrador.raca);
console.log(cao.raca);

let pastor = Object.create(cao);
pastor.raca = "Pastor Alemão";

console.log(pastor.raca);
