/*let age = 30

if (age >= 17) {
    console.log('You can now create an ID Card') //kalau tipe data string, mau kutip satu atau kutip dua sama saja, yang penting konsisten
}
else
{
    console.log('You are not old enough to create an ID Card')
}

let grade = "B"

if(grade === "A")
{
    console.log("Excellent Result!")
}
else if (grade === "B")
{
    console.log("Great Result!")
}
else if (grade === "C")
{
    console.log("Average Result!")
}
else
{
    console.log("Invalid Grade!")
}
*/

let now = new Date(); // This creates a new Date object representing the current date and time
let day = now.getDay(); // This gets the day of the week as a number (0-6, where 0 is Sunday)

switch(day){
case 0: //untuk Java Script, semua berawal dari 0 baik untuk bulan dan hari. 0=Minggu, 0=Januari
    console.log("Minggu")
    break
case 1:
    console.log("Senin")
    break
case 2:
    console.log("Selasa")
    break
case 3:
    console.log("Rabu")
    break
case 4:
    console.log("Kamis")
    break
case 5:
    console.log("Jumat")
    break
case 6:
    console.log("Sabtu")
    break
}


// == ngecek nilai
// === ngecek nilai dan data (lebih strict)

let a = {}

if (a)
{
    console.log(true)
}
else
{
    console.log(false)
}

let str = ""

console.log(str.length)

let kata = "Javascript"

console.log(kata === 'Javascript' ? 'Javascript': 'not Javascript' )