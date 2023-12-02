function* iterate(array){
    for (let value  of array){
        yield value;
    }
}
const it = iterate(["Juan","Ana","Val","Abi"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
