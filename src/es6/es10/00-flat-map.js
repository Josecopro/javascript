//flat
const array = [1,2,3,4,5,6,7,[1,2,3,4,5,[1,2,3,4,5,6]]];
console.log(array.flat(3));
//flat map
const array2 = [1,2,3,4,5,[1,2,3,4,5,[1,2,3,4,5]]];
const array3 = [1,2,3,4,5]
console.log(array3.flatMap(v => [v,v * 2]));