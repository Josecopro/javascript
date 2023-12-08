const regex = /\b(Apple)+\b/g;
const fruit =  "Apple, Banana, Dragonfruit, nosedefrutas, Apple"
for (const match of fruit.matchAll(regex)){
    console.log(match);
}