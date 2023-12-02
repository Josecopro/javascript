const funcion = () =>{
    return new Promise ((resolve, reject)=>{
        if (1<0){
            resolve('Hello world!');
        }else{
            reject('Hoy estoy triste');
        }
    })
} 
funcion()
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>{console.log("Ya acabo")});