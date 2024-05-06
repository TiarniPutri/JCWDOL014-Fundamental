let number = 1234567 // 1.234.567
let numString = number.toString() //"1234567"
let result = ""
let counter = 0

for (let i = numString.length - 1; i>=0; i--)
{
    if(counter % 3 == 0 && counter > 0) //apakah counter ini habis dibagi 3?
    {result = "." + result} // result di tambah titik di depannya

result = numString.charAt(i) + result
counter++ 
}

console.log(`Rp. ${result},00`)