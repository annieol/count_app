// function increment() {
    // console.log("The button was clicked")
// }

/* let lapsCompleted = 0 

function lapIncrement() {
    lapsCompleted = lapsCompleted +1
}

lapIncrement()

console.log(lapsCompleted) */

let countEl = document.getElementById("dog-count")
console.log(countEl)

let dogCount = 0

function increment() {
    dogCount = dogCount +1
    countEl.innerText = dogCount
    console.log(dogCount)
}

