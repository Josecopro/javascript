const fnAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(() => resolve("Async!!"),2000)
        :reject(new Error("Error :c"));
    })
}

const funcion = async () =>{
    const algo = await fnAsync();
    console.log(algo);
    console.log("ola");
}
console.log("antes")
funcion();
console.log("Despues")