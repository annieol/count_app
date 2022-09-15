// function increment() {
    // console.log("The button was clicked")
// }

/* let lapsCompleted = 0 

function lapIncrement() {
    lapsCompleted = lapsCompleted +1
}

lapIncrement()

console.log(lapsCompleted) */

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("dog-count")
console.log(countEl)

let dogCount = 0

function increment() {
    dogCount += +1
    countEl.textContent = dogCount
    console.log(dogCount)
}

function save() {
    let previousEntries = dogCount + " - "
    saveEl.textContent += previousEntries
    countEl.textContent = 0
    dogCount = 0
}

