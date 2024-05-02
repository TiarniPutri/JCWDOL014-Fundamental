//Write a code to check whether the number is prime number or not
//Example: 7 → 7 is a prime number○ Example: 6 → 6 is not a prime number
// 2, 3, 5, 7, 11, 11, 13 .... 2 pembagi habis

let number = 5
let pembagi = 0 // 2

for(let i = 1; i<= number; i++)
{ // 1, 2, 3, 4, 5, 6, 7
    if (number % i === 0){
    pembagi++}
}

console.log(pembagi)
console.log(pembagi == 2 ? "Prime number" : "Not Prime number")