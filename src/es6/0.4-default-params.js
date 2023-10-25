function NewUser(nombre, edad, pais){
    var nombre = nombre || "queso";
    var edad = edad || 11;
    var pais = pais || "Colombia";
    console.log(nombre, edad, pais);
}
NewUser();
NewUser("Juan","17","CO")