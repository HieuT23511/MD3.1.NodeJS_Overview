let array = [2, 5, 6, 456, 2, 76, 1000, 1234, 888];
// console.log(Math.max(...array))
let max = array[0];
array.forEach(elements => {
    if (elements >max){
        max = elements
    }
})
console.log(max);