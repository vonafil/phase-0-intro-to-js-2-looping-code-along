// Code your solutions in this file
function writeCards(arr, event) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return res
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num += -1
    }
}