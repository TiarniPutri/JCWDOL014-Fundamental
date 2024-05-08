//create a function that can create a triangle pattern according
//to the height we provide like the following:
//01
//02 03
//04 05 06
//07 08 09 10

function triangle(height)
{
    let count = 0
    for(let i=1; i<=height; i++)
        {let res = ""
        for (let j = 1; j<= i; j++)
            {
            count++
            res += count < 10 ? `0${count}` : `${count}`
            }
            console.log(res)
        }
}

triangle(4)

/*
function triangle(height) {
    let count = 0;
    for (let i = 1; i <= height; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            count++;
            res += count < 10 ? `0${count}` : `${count}`;
        }
        console.log(res);
    }
}

triangle(10);
*/

