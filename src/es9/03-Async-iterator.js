async function* Generador(){
    yield await Promise.resolve(10);
    yield await Promise.resolve(7);
    yield await Promise.resolve(77);
}
const other = Generador();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log("ola");

async function arraysofnames(array){
    for await(let value of array){
        console.log(value);
    }
}
const names = arraysofnames(["Ana","Abi","Val"]);
console.log("after")