let frutas = ['guayaba','manzana','banano'];
let [a,c] = frutas;
console.log(a,c) ;
//objetos
let user = {usuario: 'Josecopro', commits: 75};
let { usuario, commits} = user;
console.log(usuario, user.commitscommits);
// Spread operator
let persona = {name: 'Juan', vivo:true};
let pais ='CO';
let datos = {id:1,...persona, pais};
console.log(datos)
//Rest
function suma(num,...values){
    console.log(values);
    console.log(num+values[0]);
    return num+values[0];
}
suma(1, 2, 3 ,4 ,5,6,7);