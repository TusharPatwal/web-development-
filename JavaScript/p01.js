// strings vs. numbers in javaScript
// let name = 98
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)


// let points = 4 
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(typeof(totalPoints))
// console.log(totalPoints)

// console.log(4+5)
// console.log("2"+"4")
// console.log("5"+1)
// console.log(100+"100")


let firstName = "Tushar"
let lastName = "Patwal"
let fullName = firstName + " " + lastName
console.log(fullName)

function greet(){
    let name = "Linda"
    let greeting = "Hi there"
    console.log(greeting + ", " + name + "!") 
}
greet()

let mypoints = 3

function add3Points(){
    mypoints += 3
}

function remove1Point(){
    mypoints -= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(mypoints)