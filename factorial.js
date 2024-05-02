//Write a code to ﬁnd factorial of a number
//Example: 4! → 4 x 3 x 2 x 1 = 24
//Example: 6! → 6 x 4 x 3 x 2 x 1 = 720

let n = 6
let result = 1

for(let i=n; i > 0; i--)
{
    result *= i
}

console.log(result)
