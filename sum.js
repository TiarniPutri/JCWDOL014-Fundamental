//Write a code to ﬁnd the sum of the numbers 1 to N
//Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
//Example: 3 → 1 + 2 + 3 = 7

let n = 5
let result = 0

for (let i = 1; i <= n; i++)
{
    result += i
}

console.log(result)