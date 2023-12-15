
class user{
    
    // metodos
    saludo(){
        return'Hola :)';
    };
    nombre(cosita){
        this.cosita = cosita

    };
    //Constructor 
    constructor(name){
        this.name= name;
    }
    #speak(){
        return 'hola';
    }
    agradecimientos(){
        return `${this.speak()} ${this.name}`
    }
    //setters & Getters
    //constructor
    datos(name,age){
        this.name = name;
        this.age = age;

    }
    //metodos
    get #uAge (){
        return this.age;
        
    }
    set #uAge (N){
        this.age = N;
    }
        
    
};
const quesito = new user('Juan', 17);
console.log(quesito.uage);
console.log(quesito.uage = 20);
const Jose = new user('Juan');
console.log(Jose.agradecimientos());
const queso = new user();
console.log(queso);
//const newuser = new user(); 