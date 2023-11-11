// Enahced object literals
function newUser(User,Age,Country){
    User: User;
    Age: Age;
    Country: Country;
}
function newUser(User,Age,Country, uId){
    return{
        User,
        Age,
        Country,
        id: uId
    }
}
console.log(newUser('Josecopro',17,'CO',1))