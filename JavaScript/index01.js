let countEL = document.getElementById("count-el")
console.log(countEL)
let count = 0

let saveEL = document.getElementById("save-el")

function increment() {
    count += 1
    countEL.innerText = count
}
function save() {
    let var1 = " " + count + " - "
    saveEL.innerText += var1
    console.log(count)
}
