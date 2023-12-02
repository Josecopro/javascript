const user = {username: "Josecopro", edad: 17, pais: "Colombia" };
const{ username, ...values} = user;
console.log(username);
console.log(values);
