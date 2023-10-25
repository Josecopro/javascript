var Apellido="Becerra";
console.log(Apellido);
let fruta = "manzana";
fruta = "Kiwi";
console.log(fruta);
const animal = "Perro";
animal = "Gato"
console.log(animal);
const frutas = () => {
    if(true){
        var fruta1= "manzana"
        let fruta2= "Kiwi" //Solo se puede ingresar en el scope local
        const fruta3= "Banano" // Solo se puede ingresar en el scope local
    }
    console.log(fruta1)
    console.log(fruta2)
    console.log(fruta3)
}