let countEL = document.getElementById("count-el")
console.log(countEL)
let count = 0

let saveEL = document.getElementById("save-el")

function increment() {
    count += 1
    countEL.textContent = count
}
function save() {
    let var1 = " " + count + " - "
    saveEL.textContent += var1
    countEL.textContent = 0
    count = 0
}
