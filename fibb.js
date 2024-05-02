//Write a code to print the ﬁrst N ﬁbonacci numbers
//Example: 15 → 610

let n = 15 // 610
let a = 0
let b = 1
let nextNumber = 0

for (let i=1; i < n; i++)
{
    nextNumber = a + b
    a = b
    b = nextNumber
    console.log(b)
}

//fahrenheit = (celcius*9/5) + 32
