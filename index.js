"use strict"

function closure() {
    let total = 0;  

    return function sum(num) {
        total += num
        return total;
    }
}

const sum = closure();

console.log(sum(3)) // 3 
console.log(sum(5)) // 8 
console.log(sum(20)) // 28