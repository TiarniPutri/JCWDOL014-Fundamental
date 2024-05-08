//closure function
function greeting(name)
{
const defaultMessage = "Hello"
return function()
{
    return defaultMessage + name
}    
}

//console.log(greeting("John")())


//currying
function multiplier(factor)
{
    return function (number)
    {
        return factor * number
    }
}

const mul3 = multiplier(3)
const mul5 = multiplier(5)

//console.log(mul3(5))
//console.log(mul3(10))
//console.log(mul5(2))

//recursive

function countDown(fromNumber)
{
    console.log(fromNumber)

    let nextNumber = fromNumber - 1
    if (nextNumber > 0)
        {
            countDown(nextNumber)
        }
}

//countDown(3)

// arrow function
const square = (number) => number * number

console.log(square(10))

let number = "123" // Number ()

console.log(number) // string
console.log(parseInt(number)) // number. nanti lihat output beda warna